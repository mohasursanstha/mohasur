
import React, { useState } from 'react';
import { getAIClient, IMAGE_MODEL } from '../services/geminiService';
import { Icons } from '../constants';

const ArtisanCanvas: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [aspectRatio, setAspectRatio] = useState('1:1');

  const handleGenerate = async () => {
    if (!prompt.trim() || isGenerating) return;

    setIsGenerating(true);
    setImageUrl(null);

    try {
      const ai = getAIClient();
      const response = await ai.models.generateContent({
        model: IMAGE_MODEL,
        contents: {
          parts: [{ text: prompt }]
        },
        config: {
          imageConfig: {
            aspectRatio: aspectRatio as any
          }
        }
      });

      for (const part of response.candidates?.[0]?.content?.parts || []) {
        if (part.inlineData) {
          const b64 = part.inlineData.data;
          setImageUrl(`data:image/png;base64,${b64}`);
          break;
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-900/30">
      <header className="p-6 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center">
        <div>
          <h2 className="text-xl font-bold text-white">Artisan Canvas</h2>
          <p className="text-xs text-slate-400 mt-1 uppercase tracking-widest font-semibold">AI Imagery</p>
        </div>
      </header>

      <div className="flex-1 overflow-y-auto p-8 flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-80 space-y-6">
          <div className="p-6 bg-slate-800/50 rounded-2xl border border-slate-700 space-y-6">
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Prompt</label>
              <textarea
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="What do you want to create?"
                className="w-full bg-slate-900 border border-slate-700 rounded-xl p-4 text-sm text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 h-32 resize-none"
              />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-slate-500">Aspect Ratio</label>
              <div className="grid grid-cols-2 gap-2">
                {['1:1', '3:4', '4:3', '16:9', '9:16'].map(ratio => (
                  <button
                    key={ratio}
                    onClick={() => setAspectRatio(ratio)}
                    className={`px-3 py-2 rounded-lg text-xs font-medium transition-all ${
                      aspectRatio === ratio 
                        ? 'bg-indigo-600 text-white shadow-lg' 
                        : 'bg-slate-900 text-slate-400 hover:bg-slate-700'
                    }`}
                  >
                    {ratio}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={isGenerating || !prompt.trim()}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 rounded-xl text-white font-bold flex items-center justify-center gap-2 transition-all shadow-xl shadow-indigo-500/20"
            >
              {isGenerating ? <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div> : <Icons.Image />}
              {isGenerating ? 'Drawing...' : 'Generate Image'}
            </button>
          </div>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center bg-slate-800/20 rounded-3xl border border-slate-800 overflow-hidden relative">
          {isGenerating && (
            <div className="absolute inset-0 z-10 bg-slate-900/60 backdrop-blur-sm flex flex-col items-center justify-center p-12 text-center animate-in fade-in duration-300">
               <div className="w-12 h-12 border-4 border-indigo-500/20 border-t-indigo-500 rounded-full animate-spin mb-4"></div>
               <p className="text-indigo-300 font-medium">Brewing pixels...</p>
            </div>
          )}

          {imageUrl ? (
            <div className="p-4 w-full h-full flex flex-col items-center justify-center gap-4">
              <div className="relative group overflow-hidden rounded-2xl border border-slate-700 shadow-2xl bg-black/40">
                <img 
                  src={imageUrl} 
                  alt="Generated" 
                  className="max-h-[70vh] w-auto object-contain transition-transform duration-500 group-hover:scale-105" 
                />
              </div>
              <div className="flex gap-3">
                <a 
                  href={imageUrl} 
                  download="aether-art.png"
                  className="px-6 py-2 bg-slate-700 hover:bg-slate-600 rounded-xl text-sm font-semibold text-white flex items-center gap-2 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
                  Download
                </a>
              </div>
            </div>
          ) : !isGenerating && (
            <div className="text-center space-y-4 max-w-sm px-6">
              <div className="w-16 h-16 bg-slate-800 rounded-2xl flex items-center justify-center text-slate-600 mx-auto">
                <Icons.Image />
              </div>
              <h3 className="text-lg font-semibold text-slate-400">Ready to Visualize</h3>
              <p className="text-sm text-slate-500 leading-relaxed">
                Describe your masterpiece and select an aspect ratio to begin.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ArtisanCanvas;
