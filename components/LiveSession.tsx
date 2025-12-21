
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { getAIClient, LIVE_MODEL, decodePCM, encodePCM, decodeAudioData } from '../services/geminiService';
import { Icons } from '../constants';
import { Modality, LiveServerMessage } from '@google/genai';

const LiveSession: React.FC = () => {
  const [isActive, setIsActive] = useState(false);
  const [transcriptionHistory, setTranscriptionHistory] = useState<{role: string, text: string}[]>([]);
  const [currentTranscription, setCurrentTranscription] = useState('');
  
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const sessionRef = useRef<any>(null);
  const audioContextRef = useRef<AudioContext | null>(null);
  const nextStartTimeRef = useRef<number>(0);
  const sourcesRef = useRef<Set<AudioBufferSourceNode>>(new Set());
  const streamRef = useRef<MediaStream | null>(null);

  const cleanup = useCallback(() => {
    if (sessionRef.current) {
      sessionRef.current.close();
      sessionRef.current = null;
    }
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => track.stop());
      streamRef.current = null;
    }
    sourcesRef.current.forEach(source => source.stop());
    sourcesRef.current.clear();
    setIsActive(false);
  }, []);

  const startSession = async () => {
    if (isActive) {
      cleanup();
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: true, 
        video: true 
      });
      streamRef.current = stream;
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
      }

      const ai = getAIClient();
      const inputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 16000 });
      const outputCtx = new (window.AudioContext || (window as any).webkitAudioContext)({ sampleRate: 24000 });
      audioContextRef.current = outputCtx;

      const sessionPromise = ai.live.connect({
        model: LIVE_MODEL,
        callbacks: {
          onopen: () => {
            setIsActive(true);
            const source = inputCtx.createMediaStreamSource(stream);
            const scriptProcessor = inputCtx.createScriptProcessor(4096, 1, 1);
            
            scriptProcessor.onaudioprocess = (e) => {
              const inputData = e.inputBuffer.getChannelData(0);
              const int16 = new Int16Array(inputData.length);
              for (let i = 0; i < inputData.length; i++) {
                int16[i] = inputData[i] * 32768;
              }
              
              const pcmBlob = {
                data: encodePCM(new Uint8Array(int16.buffer)),
                mimeType: 'audio/pcm;rate=16000'
              };

              sessionPromise.then(session => {
                session.sendRealtimeInput({ media: pcmBlob });
              });
            };

            source.connect(scriptProcessor);
            scriptProcessor.connect(inputCtx.destination);

            // Frame streaming (Video)
            const interval = setInterval(() => {
              if (canvasRef.current && videoRef.current && sessionRef.current) {
                const ctx = canvasRef.current.getContext('2d');
                if (ctx) {
                  canvasRef.current.width = 320;
                  canvasRef.current.height = 240;
                  ctx.drawImage(videoRef.current, 0, 0, 320, 240);
                  canvasRef.current.toBlob((blob) => {
                    if (blob) {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        const base64 = (reader.result as string).split(',')[1];
                        sessionPromise.then(s => s.sendRealtimeInput({
                           media: { data: base64, mimeType: 'image/jpeg' }
                        }));
                      };
                      reader.readAsDataURL(blob);
                    }
                  }, 'image/jpeg', 0.6);
                }
              }
            }, 1000);
            
            (sessionRef.current as any)._frameInterval = interval;
          },
          onmessage: async (msg: LiveServerMessage) => {
            // Audio Output
            const audioData = msg.serverContent?.modelTurn?.parts?.[0]?.inlineData?.data;
            if (audioData && audioContextRef.current) {
              const bytes = decodePCM(audioData);
              const buffer = await decodeAudioData(bytes, audioContextRef.current, 24000, 1);
              
              nextStartTimeRef.current = Math.max(nextStartTimeRef.current, audioContextRef.current.currentTime);
              const source = audioContextRef.current.createBufferSource();
              source.buffer = buffer;
              source.connect(audioContextRef.current.destination);
              source.start(nextStartTimeRef.current);
              nextStartTimeRef.current += buffer.duration;
              sourcesRef.current.add(source);
            }

            // Transcription
            if (msg.serverContent?.outputTranscription) {
              setCurrentTranscription(prev => prev + msg.serverContent!.outputTranscription!.text);
            }

            if (msg.serverContent?.turnComplete) {
              setCurrentTranscription(prev => {
                if (prev) {
                  setTranscriptionHistory(hist => [...hist, {role: 'model', text: prev}]);
                }
                return '';
              });
            }

            if (msg.serverContent?.interrupted) {
              sourcesRef.current.forEach(s => s.stop());
              sourcesRef.current.clear();
              nextStartTimeRef.current = 0;
            }
          },
          onerror: (e) => {
            console.error('Session error:', e);
            cleanup();
          },
          onclose: () => {
            console.log('Session closed');
            cleanup();
          }
        },
        config: {
          responseModalities: [Modality.AUDIO],
          outputAudioTranscription: {},
          speechConfig: {
            voiceConfig: { prebuiltVoiceConfig: { voiceName: 'Zephyr' } }
          },
          systemInstruction: 'You are Aether, a friendly multimodal AI companion. You can see through the camera and hear through the mic.'
        }
      });

      sessionRef.current = await sessionPromise;
    } catch (err) {
      console.error('Mic/Camera access denied:', err);
      alert('Camera and Microphone access are required for Live Companion.');
    }
  };

  useEffect(() => {
    return cleanup;
  }, [cleanup]);

  return (
    <div className="flex flex-col h-full bg-slate-950">
      <header className="p-6 border-b border-slate-800 flex justify-between items-center bg-slate-900/50">
        <div>
          <h2 className="text-xl font-bold text-white">Live Companion</h2>
          <p className="text-xs text-slate-400 mt-1 flex items-center gap-1.5 uppercase tracking-wider font-bold">
            <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-700'}`}></span>
            {isActive ? 'Live Stream Active' : 'Disconnected'}
          </p>
        </div>
      </header>

      <div className="flex-1 flex flex-col lg:flex-row p-6 gap-6 overflow-hidden">
        {/* Visual Feed */}
        <div className="flex-1 flex flex-col gap-6">
          <div className="flex-1 rounded-3xl bg-slate-900 border border-slate-800 overflow-hidden relative shadow-inner">
            <video
              ref={videoRef}
              autoPlay
              muted
              playsInline
              className={`w-full h-full object-cover transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}
            />
            {!isActive && (
              <div className="absolute inset-0 flex flex-col items-center justify-center text-slate-500 gap-4">
                <div className="w-16 h-16 rounded-full border-2 border-dashed border-slate-700 flex items-center justify-center">
                  <Icons.Camera />
                </div>
                <p>Camera feed inactive</p>
              </div>
            )}
            <canvas ref={canvasRef} className="hidden" />
            
            {isActive && (
              <div className="absolute bottom-6 left-6 flex items-center gap-3 px-4 py-2 bg-slate-900/80 backdrop-blur-md rounded-full border border-slate-700 text-xs text-indigo-400 font-bold uppercase tracking-wider">
                <span className="w-2 h-2 bg-indigo-500 rounded-full animate-ping"></span>
                Processing Vision
              </div>
            )}
          </div>

          <div className="flex justify-center">
             <button
                onClick={startSession}
                className={`flex items-center gap-4 px-10 py-5 rounded-3xl font-bold text-lg transition-all shadow-2xl ${
                  isActive 
                    ? 'bg-rose-600 hover:bg-rose-500 text-white shadow-rose-500/20' 
                    : 'bg-indigo-600 hover:bg-indigo-500 text-white shadow-indigo-500/20'
                }`}
              >
                {isActive ? <Icons.Stop /> : <Icons.Mic />}
                {isActive ? 'Terminate Session' : 'Start Live Session'}
              </button>
          </div>
        </div>

        {/* Real-time Insights / Transcription */}
        <div className="w-full lg:w-96 flex flex-col bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden backdrop-blur-sm">
          <div className="p-4 border-b border-slate-800 bg-slate-800/30">
             <h3 className="text-xs font-bold uppercase tracking-widest text-slate-500">Real-time Transcription</h3>
          </div>
          <div className="flex-1 p-6 overflow-y-auto space-y-4">
            {transcriptionHistory.map((t, i) => (
              <div key={i} className={`p-3 rounded-2xl text-sm ${t.role === 'model' ? 'bg-indigo-500/10 text-indigo-200 border border-indigo-500/20' : 'bg-slate-800 text-slate-300'}`}>
                {t.text}
              </div>
            ))}
            {currentTranscription && (
               <div className="p-3 rounded-2xl text-sm bg-indigo-500/20 text-indigo-100 border border-indigo-500/40 animate-pulse">
                {currentTranscription}
              </div>
            )}
            {!isActive && transcriptionHistory.length === 0 && (
              <p className="text-center text-slate-600 text-xs italic mt-20">No active interaction</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LiveSession;
