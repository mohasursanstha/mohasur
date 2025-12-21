
import React from 'react';
import { Language } from '../types';
import { SECTIONS, Icons } from '../constants';

const GalleryView: React.FC<{ lang: Language, onSelectSection: (id: string) => void }> = ({ lang, onSelectSection }) => {
  return (
    <div className="p-8 md:p-16 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <header className="mb-12">
        <h2 className="text-4xl font-black text-slate-900 mb-4">
          {lang === 'en' ? 'Our Impact Activities' : 'आमचे कार्य अहवाल'}
        </h2>
        <p className="text-slate-500 max-w-2xl text-lg">
          Explore the various sectors where Mohasur Trust is creating meaningful change through dedicated social work.
        </p>
      </header>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SECTIONS.map((section) => (
          <button
            key={section.id}
            onClick={() => onSelectSection(section.id)}
            className="group relative bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all text-left"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img 
                src={section.images[0].url} 
                alt={section.title[lang]} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
              />
            </div>
            <div className="p-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-800 transition-colors">
                  {section.title[lang]}
                </h3>
                <div className="p-2 bg-indigo-50 text-indigo-800 rounded-lg">
                  <Icons.ArrowRight />
                </div>
              </div>
              <p className="text-sm text-slate-500 line-clamp-2">
                {section.description[lang]}
              </p>
              <div className="mt-4 pt-4 border-t border-slate-100 flex items-center gap-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                <Icons.Image /> {section.images.length} Photos in Gallery
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default GalleryView;


