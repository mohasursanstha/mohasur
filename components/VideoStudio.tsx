
import React, { useState, useEffect } from 'react';
import { getAIClient, VIDEO_MODEL } from '../services/geminiService';
import { Icons } from '../constants';

const VideoStudio: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [hasKey, setHasKey] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  useEffect(() => {
    checkKeyStatus();
  }, []);

  const checkKeyStatus = async () => {
    try {
      if (window.aistudio) {
        const selected = await window.aistudio.hasSelectedApiKey();
        setHasKey(selected);
      }
    } catch (e) {
      console.error("Key check failed", e);
    }
  };

  const handleSelectKey = async () => {
    try {
      await window.aistudio.openSelectKey();
      setHasKey(true);
    } catch (e) {
      console.error("Key selection failed", e);
    }
  };

  const handleGenerate = async () => {
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);
    setStatusMessage('Initiating cinematic generation...');
    setVideoUrl(null);

    try {
      const ai = getAIClient();
      let operation = await ai.models.generateVideos({
        model: VIDEO_MODEL,
        prompt: prompt,
        config: {
          numberOfVideos: 1,
          resolution: '720p',
          aspectRatio: '16:9'
        }
      });

      const messages = [
        'Analyzing scene geometry...',
        'Synthesizing textures and lighting...',
        'Rendering temporal consistency...',
        'Finalizing cinematic output...',
      ];
      let msgIdx = 0;

      while (!operation.done) {
        setStatusMessage(messages[msgIdx % messages.length]);
        msgIdx++;
        await new Promise(resolve => setTimeout(resolve, 10000));
        operation = await ai.operations.getVideosOperation({ operation: operation });
      }

      const downloadLink = operation.response?.generatedVideos?.[0]?.video?.uri;
      if (downloadLink) {
        const videoResponse = await fetch(`${downloadLink}&key=${process.env.API_KEY}`);
        const blob = await videoResponse.blob();
        setVideoUrl(URL.createObjectURL(blob));
      }
    } catch (error: any) {
      console.error(error);
      if (error?.message?.includes('Requested entity was not found')) {
        setHasKey(false);
        setStatusMessage('API Key expired or invalid. Please re-select.');
      } else {
        setStatusMessage('Error generating video. Try a simpler prompt.');
      }
    } finally {
      setIsGenerating(false);
    }
  };

  if (!hasKey) {
    return (
      <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-6">
        <div className="w-20 h-20 rounded-3xl bg-indigo-500/10 flex items-center justify-center text-indigo-500">
          <Icons.Video />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white mb-2">High-Fidelity Video Generation</h2>
          <p className="text-slate-400 max-w-md mx-auto">
            To use Studio Veo, you must select an API key from a paid Google Cloud Project.
          </p>
        </div>
        <div className="p-4 bg-slate-800 rounded-xl border border-slate-700 text-sm max-w-sm">
          <p className="text-slate-300">
            Learn more about <a href="https://ai.google.dev/gemini-api/docs/billing" target="_blank" className="text-indigo-400 hover:underline">Gemini API Billing</a>.
          </p>
        </div>
        <button
          onClick={handleSelectKey}
          className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-2xl shadow-xl shadow-indigo-500/25 transition-all"
        >
          Select Paid API Key
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <header className="p-6 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-white">Studio Veo</h2>
          <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-semibold">Generative Cinematics</p>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-8 flex flex-col items-center space-y-8">
        <div className="w-full max-w-4xl space-y-4">
          <div className="flex flex-col space-y-2">
            <label className="text-sm font-semibold text-slate-400 ml-1">Video Prompt</label>
            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Describe a cinematic scene (e.g., 'A neon hologram of a cybernetic cat walking through a rain-slicked Tokyo street, 8k resolution, cinematic lighting')"
              className="w-full bg-slate-800 border border-slate-700 rounded-2xl p-5 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 min-h-[120px]"
            />
          </div>
          <button
            onClick={handleGenerate}
            disabled={isGenerating || !prompt.trim()}
            className="w-full py-4 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl text-white font-bold text-lg shadow-xl shadow-indigo-500/20 flex items-center justify-center gap-3 transition-all"
          >
            {isGenerating ? (
              <span className="flex items-center gap-3">
                <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                Generating...
              </span>
            ) : (
              <>
                <Icons.Video />
                Generate Cinematic Video
              </>
            )}
          </button>
        </div>

        <div className="w-full max-w-4xl">
          {isGenerating && (
            <div className="aspect-video w-full rounded-2xl bg-slate-800 border border-slate-700 flex flex-col items-center justify-center p-12 text-center space-y-4">
              <div className="w-16 h-16 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin"></div>
              <p className="text-lg font-medium text-slate-300">{statusMessage}</p>
              <p className="text-sm text-slate-500">This typically takes 1-2 minutes. Stay tuned!</p>
            </div>
          )}

          {videoUrl && (
            <div className="space-y-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="rounded-2xl overflow-hidden border border-slate-700 shadow-2xl bg-black">
                <video
                  src={videoUrl}
                  controls
                  autoPlay
                  loop
                  className="w-full aspect-video object-contain"
                />
              </div>
              <div className="flex justify-between items-center p-4 rounded-xl bg-slate-800/50 border border-slate-700">
                <div className="text-sm font-medium text-slate-300">Generated Video • 720p • 16:9</div>
                <a 
                  href={videoUrl} 
                  download="veo-gen.mp4" 
                  className="text-indigo-400 hover:text-indigo-300 font-semibold text-sm flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Download MP4
                </a>
              </div>
            </div>
          )}

          {!isGenerating && !videoUrl && (
            <div className="aspect-video w-full rounded-3xl bg-slate-800/20 border-2 border-dashed border-slate-700 flex flex-col items-center justify-center text-slate-500">
              <div className="p-4 bg-slate-800 rounded-full mb-4">
                <Icons.Video />
              </div>
              <p>Your creation will appear here</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default VideoStudio;
