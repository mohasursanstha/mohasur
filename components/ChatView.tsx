
import React, { useState, useRef, useEffect } from 'react';
import { getAIClient, CHAT_MODEL } from '../services/geminiService';
import { Message } from '../types';
import { Icons } from '../constants';

const ChatView: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      text: input,
      timestamp: Date.now(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = getAIClient();
      const response = await ai.models.generateContent({
        model: CHAT_MODEL,
        contents: [
          ...messages.map(m => ({
            role: m.role === 'user' ? 'user' : 'model',
            parts: [{ text: m.text }]
          })),
          { role: 'user', parts: [{ text: input }] }
        ],
        config: {
          tools: [{ googleSearch: {} }],
        }
      });

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: response.text || "I'm sorry, I couldn't generate a response.",
        timestamp: Date.now(),
        groundingSources: response.candidates?.[0]?.groundingMetadata?.groundingChunks?.map(chunk => ({
          title: chunk.web?.title || 'Source',
          uri: chunk.web?.uri || '',
        })).filter(s => s.uri) || []
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error(error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        text: "Error: Failed to connect to Gemini API. Please check your network or key.",
        timestamp: Date.now(),
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-full bg-slate-900/30">
      {/* Header */}
      <header className="p-6 border-b border-slate-800 bg-slate-900/50 flex justify-between items-center backdrop-blur-md">
        <div>
          <h2 className="text-xl font-bold text-white">Visionary Chat</h2>
          <p className="text-xs text-slate-400 flex items-center gap-1.5 mt-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
            Real-time Search Grounding Active
          </p>
        </div>
      </header>

      {/* Messages */}
      <div 
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-6 space-y-6"
      >
        {messages.length === 0 && (
          <div className="h-full flex flex-col items-center justify-center text-center max-w-md mx-auto space-y-4">
            <div className="p-4 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
              <Icons.Chat />
            </div>
            <h3 className="text-lg font-semibold text-slate-200">Start a Grounded Conversation</h3>
            <p className="text-slate-400 text-sm">
              Ask about current events, technical topics, or creative ideas. Search grounding ensures up-to-date responses.
            </p>
          </div>
        )}

        {messages.map(msg => (
          <div 
            key={msg.id} 
            className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`max-w-[85%] rounded-2xl p-4 shadow-sm ${
              msg.role === 'user' 
                ? 'bg-indigo-600 text-white' 
                : 'bg-slate-800 text-slate-200 border border-slate-700'
            }`}>
              <div className="text-sm leading-relaxed whitespace-pre-wrap">{msg.text}</div>
              
              {msg.groundingSources && msg.groundingSources.length > 0 && (
                <div className="mt-4 pt-3 border-t border-slate-700/50">
                  <div className="text-[10px] uppercase tracking-wider text-slate-500 font-bold mb-2 flex items-center gap-1">
                    <Icons.Globe /> Sources Found
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {msg.groundingSources.map((source, i) => (
                      <a 
                        key={i} 
                        href={source.uri} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-[10px] px-2 py-1 bg-slate-700/50 hover:bg-slate-700 rounded-lg text-indigo-300 transition-colors inline-block max-w-[120px] truncate"
                      >
                        {source.title}
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}

        {isLoading && (
          <div className="flex justify-start">
            <div className="bg-slate-800 rounded-2xl p-4 border border-slate-700 flex gap-2">
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce"></span>
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce delay-75"></span>
              <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full animate-bounce delay-150"></span>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-6 bg-slate-900/50 backdrop-blur-xl border-t border-slate-800">
        <div className="max-w-4xl mx-auto relative">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend();
              }
            }}
            placeholder="Send a message..."
            className="w-full bg-slate-800 border border-slate-700 rounded-2xl px-5 py-4 pr-16 text-slate-200 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all resize-none min-h-[60px] max-h-[200px]"
            rows={1}
          />
          <button 
            onClick={handleSend}
            disabled={isLoading || !input.trim()}
            className="absolute right-3 bottom-3 p-3 bg-indigo-600 hover:bg-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed rounded-xl text-white transition-all shadow-lg shadow-indigo-500/20"
          >
            <Icons.Send />
          </button>
        </div>
        <p className="text-[10px] text-center text-slate-500 mt-3">
          Grounded by Google Search • Gemini 3 Flash
        </p>
      </div>
    </div>
  );
};

export default ChatView;
