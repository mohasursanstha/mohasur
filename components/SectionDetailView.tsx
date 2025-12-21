
import React from 'react';
import { Language, SectionContent } from '../types';
import { Icons } from '../constants';

const SectionDetailView: React.FC<{ lang: Language, section: SectionContent, onBack: () => void }> = ({ lang, section, onBack }) => {
  return (
    <div className="p-8 md:p-16 animate-in slide-in-from-right-4 duration-500">
      <button 
        onClick={onBack}
        className="flex items-center gap-2 text-indigo-800 font-bold mb-8 hover:translate-x-[-4px] transition-transform"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="rotate-180"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        {lang === 'en' ? 'Back to Gallery' : 'मागे जा'}
      </button>

      <header className="mb-16">
        <h2 className="text-5xl font-black text-slate-900 mb-6">{section.title[lang]}</h2>
        <div className="max-w-4xl p-6 bg-indigo-50 border-l-4 border-indigo-800 rounded-r-2xl">
          <p className="text-lg text-indigo-950 font-medium italic">
            {section.description[lang]}
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {section.images.map((img, idx) => (
          <div key={idx} className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm flex flex-col">
            <div className="aspect-square overflow-hidden bg-slate-100">
              <img 
                src={img.url} 
                alt={img.caption?.[lang] || 'Gallery Image'} 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
              />
            </div>
            {img.caption && (
              <div className="p-5 border-t border-slate-50 flex-1 flex flex-col justify-center">
                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {img.caption[lang]}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <footer className="mt-20 pt-10 border-t border-slate-200 text-center">
        <p className="text-slate-400 text-sm italic">
          Total {section.images.length} images for this activity. To see more, visit our office.
        </p>
      </footer>
    </div>
  );
};

export default SectionDetailView;
