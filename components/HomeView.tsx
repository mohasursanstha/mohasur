
// import React from 'react';
// import { Language } from '../types';
// import { UI_STRINGS, Icons } from '../constants';

// const HomeView: React.FC<{ lang: Language, onExplore: () => void }> = ({ lang, onExplore }) => {
//   return (
//     <div className="animate-in fade-in duration-500">
//       <section className="relative h-[500px] flex items-center px-8 md:px-16 overflow-hidden">
//         {/* Decorative Background */}
//         <div className="absolute top-0 right-0 w-2/3 h-full bg-indigo-900/5 -skew-x-12 transform translate-x-20"></div>
//         <div className="absolute bottom-10 left-10 w-32 h-32 bg-emerald-500/10 rounded-full blur-3xl"></div>

//         <div className="relative z-10 max-w-2xl">
//           {/* <span className="inline-block px-4 py-1.5 bg-indigo-100 text-indigo-800 text-xs font-black uppercase tracking-[0.2em] rounded-full mb-6">
//             Official Trust Website
//           </span> */}
//           <p className="text-sm font-extrabold tracking-widest text-indigo-700 uppercase mb-4">
//             {lang === 'en' ? 'Mohasur Trust' : 'मोहासुर संस्था'}
//           </p>
//           <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-[1.2] mb-6">
//             {UI_STRINGS.homeHero.title[lang]}
//           </h2>
//           <p className="text-lg text-slate-600 mb-8 leading-relaxed">
//             {UI_STRINGS.homeHero.desc[lang]}
//           </p>
//           <div className="flex gap-4">
//             <button 
//               onClick={onExplore}
//               className="px-8 py-4 bg-indigo-800 text-white font-bold rounded-2xl shadow-xl shadow-indigo-200 hover:bg-indigo-700 transition-all flex items-center gap-2 group"
//             >
//               {lang === 'en' ? 'Our Impact' : 'आमचे कार्य'}
//               <span className="group-hover:translate-x-1 transition-transform"><Icons.ArrowRight /></span>
//             </button>
//             <button className="px-8 py-4 bg-white text-indigo-800 font-bold rounded-2xl border border-indigo-100 hover:bg-indigo-50 transition-all">
//               {lang === 'en' ? 'Get Involved' : 'सहभागी व्हा'}
//             </button>
//           </div>
//         </div>
//       </section>

//       <section className="px-8 md:px-16 py-20 bg-white grid md:grid-cols-3 gap-12">
//         <div className="space-y-4">
//           <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-800">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
//           </div>
//           <h4 className="text-xl font-bold text-slate-900">{lang === 'en' ? 'Prevention' : 'प्रतिबंध'}</h4>
//           <p className="text-sm text-slate-500 leading-relaxed">Early intervention programs aimed at youth and students to prevent addiction before it starts.</p>
//         </div>
//         <div className="space-y-4">
//           <div className="w-12 h-12 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-800">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
//           </div>
//           <h4 className="text-xl font-bold text-slate-900">{lang === 'en' ? 'Support' : 'आधार'}</h4>
//           <p className="text-sm text-slate-500 leading-relaxed">Dedicated counseling centers providing emotional and psychological support for recovery.</p>
//         </div>
//         <div className="space-y-4">
//           <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center text-amber-800">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
//           </div>
//           <h4 className="text-xl font-bold text-slate-900">{lang === 'en' ? 'Community' : 'समुदाय'}</h4>
//           <p className="text-sm text-slate-500 leading-relaxed">Building local networks to foster social integration and welfare awareness.</p>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomeView;

//2


// import React from 'react';
// import { Language } from '../types';
// import { UI_STRINGS, Icons } from '../constants';

// const HomeView: React.FC<{ lang: Language, onExplore: () => void }> = ({ lang, onExplore }) => {
//   return (
//     <div className="animate-in fade-in duration-700">
//       {/* Tightened Hero Section */}
//       <section className="relative pt-16 pb-12 flex flex-col items-center justify-center px-6 md:px-16 overflow-hidden bg-white">
//         {/* Subtle Background Accents */}
//         <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
//           <div className="absolute top-[-10%] left-[-5%] w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-60"></div>
//           <div className="absolute bottom-[-10%] right-[-5%] w-96 h-96 bg-emerald-50 rounded-full blur-3xl opacity-60"></div>
//         </div>
        
//         <div className="relative z-10 max-w-4xl flex flex-col items-center text-center">
//           {/* HUGE Trust Name */}
//           <h1 className="text-5xl md:text-7xl font-black text-indigo-950 tracking-tight leading-none mb-4">
//             {lang === 'en' ? 'Mohasur Trust' : 'मोहासुर संस्था'}
//           </h1>

//           {/* Smaller, Refined Tagline */}
//           <h2 className="text-xl md:text-2xl font-bold text-slate-600 tracking-normal mb-6 max-w-2xl">
//             {UI_STRINGS.homeHero.title[lang]}
//           </h2>

//           {/* Focused Description */}
//           <p className="text-base md:text-lg text-slate-500 mb-8 leading-relaxed max-w-xl">
//             {UI_STRINGS.homeHero.desc[lang]}
//           </p>

//           {/* Primary Actions */}
//           <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-12">
//             <button 
//               onClick={onExplore}
//               className="px-10 py-4 bg-indigo-800 text-white font-bold rounded-2xl shadow-xl shadow-indigo-100 hover:bg-indigo-700 hover:-translate-y-1 transition-all flex items-center justify-center gap-2 group"
//             >
//               {lang === 'en' ? 'Our Impact' : 'आमचे कार्य'}
//               <span className="group-hover:translate-x-1 transition-transform">
//                 <Icons.ArrowRight />
//               </span>
//             </button>
//             <button className="px-10 py-4 bg-white text-indigo-900 font-bold rounded-2xl border border-indigo-100 hover:bg-indigo-50 hover:-translate-y-1 transition-all">
//               {lang === 'en' ? 'Get Involved' : 'सहभागी व्हा'}
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Tightened Features Section (Reduced Padding) */}
//       <section className="px-8 md:px-16 py-12 bg-slate-50 border-y border-slate-100 grid md:grid-cols-3 gap-8">
//         <div className="group p-6 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
//           <div className="w-12 h-12 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-800 mb-4 group-hover:scale-110 transition-transform">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/></svg>
//           </div>
//           <h4 className="text-lg font-bold text-slate-900 mb-2">{lang === 'en' ? 'Prevention' : 'प्रतिबंध'}</h4>
//           <p className="text-sm text-slate-500 leading-relaxed">
//             {lang === 'en' 
//               ? 'Early intervention programs aimed at youth and students to prevent addiction before it starts.' 
//               : 'तरुण आणि विद्यार्थ्यांसाठी व्यसनाधीनता सुरू होण्यापूर्वीच रोखण्यासाठी सुरुवातीचे हस्तक्षेप कार्यक्रम.'}
//           </p>
//         </div>

//         <div className="group p-6 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
//           <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-800 mb-4 group-hover:scale-110 transition-transform">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
//           </div>
//           <h4 className="text-lg font-bold text-slate-900 mb-2">{lang === 'en' ? 'Support' : 'आधार'}</h4>
//           <p className="text-sm text-slate-500 leading-relaxed">
//             {lang === 'en'
//               ? 'Dedicated counseling centers providing emotional and psychological support for recovery.'
//               : 'पुनर्प्राप्तीसाठी भावनिक आणि मानसिक आधार देणारी समर्पित समुपदेशन केंद्रे.'}
//           </p>
//         </div>

//         <div className="group p-6 bg-white rounded-3xl border border-slate-200 shadow-sm hover:shadow-lg transition-all">
//           <div className="w-12 h-12 bg-amber-100 rounded-2xl flex items-center justify-center text-amber-800 mb-4 group-hover:scale-110 transition-transform">
//             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
//           </div>
//           <h4 className="text-lg font-bold text-slate-900 mb-2">{lang === 'en' ? 'Community' : 'समुदाय'}</h4>
//           <p className="text-sm text-slate-500 leading-relaxed">
//             {lang === 'en'
//               ? 'Building local networks to foster social integration and welfare awareness.'
//               : 'सामाजिक एकात्मता आणि कल्याण जनजागृती वाढवण्यासाठी स्थानिक नेटवर्क तयार करणे.'}
//           </p>
//         </div>
//       </section>

//       {/* Reduced Height Stats Section */}
//       <section className="py-12 px-8 flex justify-center bg-white">
//         <div className="flex flex-wrap justify-center gap-12 text-center">
//           <div>
//             <div className="text-3xl font-black text-indigo-900 mb-0.5">10k+</div>
//             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{lang === 'en' ? 'Lives Impacted' : 'प्रभावित जीवन'}</div>
//           </div>
//           <div className="w-px h-10 bg-slate-100 hidden sm:block"></div>
//           <div>
//             <div className="text-3xl font-black text-indigo-900 mb-0.5">15+</div>
//             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{lang === 'en' ? 'Years of Service' : 'वर्षांची सेवा'}</div>
//           </div>
//           <div className="w-px h-10 bg-slate-100 hidden sm:block"></div>
//           <div>
//             <div className="text-3xl font-black text-indigo-900 mb-0.5">50+</div>
//             <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">{lang === 'en' ? 'Campaigns Conducted' : 'राबवलेले उपक्रम'}</div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default HomeView;



//3
import React from 'react';
import { Language } from '../types';
import { UI_STRINGS, Icons } from '../constants';

const HomeView: React.FC<{ lang: Language; onExplore: () => void }> = ({ lang, onExplore }) => {
  const isMarathi = lang === 'mr';

  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section – Clean, Modern & Trustworthy */}
      <section className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden bg-gradient-to-br from-indigo-50/50 via-white to-emerald-50/30">
        {/* Subtle Decorative Blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/4" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-300/20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-16 flex flex-col items-center text-center">
          {/* Trust Name – Bold & Authoritative */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-indigo-900 tracking-tight leading-none mb-8">
            {isMarathi ? 'मोहासुर संस्था' : 'Mohasur Trust'}
          </h1>

          {/* Tagline – Warm & Hopeful */}
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-indigo-800 mb-8 max-w-3xl leading-snug">
            {UI_STRINGS.homeHero.title[lang]}
          </h2>

          {/* Description – Reassuring */}
          <p className="text-lg md:text-xl text-slate-700 mb-12 max-w-2xl leading-relaxed">
            {UI_STRINGS.homeHero.desc[lang]}
          </p>

          {/* CTAs – Strong Primary Action */}
          <div className="flex flex-col sm:flex-row gap-6">
            <button
              onClick={onExplore}
              className="px-10 py-5 bg-indigo-800 text-white font-bold text-lg rounded-full shadow-lg shadow-indigo-200/50 hover:bg-indigo-700 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-3 group"
            >
              {isMarathi ? 'आमचे कार्य' : 'Our Impact'}
              <span className="group-hover:translate-x-2 transition-transform">
                <Icons.ArrowRight />
              </span>
            </button>
            <button className="px-10 py-5 bg-white text-indigo-800 font-bold text-lg rounded-full border-2 border-indigo-200 hover:bg-indigo-50 hover:border-indigo-300 hover:-translate-y-1 transition-all duration-300">
              {isMarathi ? 'सहभागी व्हा' : 'Get Involved'}
            </button>
          </div>
        </div>
      </section>

      {/* Pillars Section – Elegant Cards with New Color Accents */}
      <section className="px-6 md:px-16 py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-10">
          {[
            {
              color: 'indigo',
              title: isMarathi ? 'प्रतिबंध' : 'Prevention',
              desc: isMarathi
                ? 'तरुण आणि विद्यार्थ्यांसाठी व्यसनाधीनता सुरू होण्यापूर्वीच रोखण्यासाठी सुरुवातीचे हस्तक्षेप कार्यक्रम.'
                : 'Early intervention programs aimed at youth and students to prevent addiction before it starts.',
            },
            {
              color: 'emerald',
              title: isMarathi ? 'आधार' : 'Support',
              desc: isMarathi
                ? 'पुनर्प्राप्तीसाठी भावनिक आणि मानसिक आधार देणारी समर्पित समुपदेशन केंद्रे.'
                : 'Dedicated counseling centers providing emotional and psychological support for recovery.',
            },
            {
              color: 'amber',
              title: isMarathi ? 'समुदाय' : 'Community',
              desc: isMarathi
                ? 'सामाजिक एकात्मता आणि कल्याण जनजागृती वाढवण्यासाठी स्थानिक नेटवर्क तयार करणे.'
                : 'Building local networks to foster social integration and welfare awareness.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="group bg-white rounded-3xl p-10 border border-slate-100 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className={`w-16 h-16 ${
                  item.color === 'indigo'
                    ? 'bg-indigo-100 text-indigo-700'
                    : item.color === 'emerald'
                    ? 'bg-emerald-100 text-emerald-700'
                    : 'bg-amber-100 text-amber-700'
                } rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {idx === 0 ? <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" /> :
                   idx === 1 ? <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /> :
                   <><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></>}
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">{item.title}</h3>
              <p className="text-base text-slate-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section – Impactful with Primary & Secondary Colors */}
      <section className="py-20 px-6 bg-gradient-to-r from-indigo-50 to-emerald-50">
        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-16 text-center">
          <div>
            <div className="text-5xl md:text-6xl font-black text-indigo-800">10k+</div>
            <div className="mt-3 text-sm font-bold text-indigo-600 uppercase tracking-widest">
              {isMarathi ? 'प्रभावित जीवन' : 'Lives Impacted'}
            </div>
          </div>
          <div className="hidden md:block w-px h-20 bg-indigo-200" />
          <div>
            <div className="text-5xl md:text-6xl font-black text-indigo-800">15+</div>
            <div className="mt-3 text-sm font-bold text-indigo-600 uppercase tracking-widest">
              {isMarathi ? 'वर्षांची सेवा' : 'Years of Service'}
            </div>
          </div>
          <div className="hidden md:block w-px h-20 bg-indigo-200" />
          <div>
            <div className="text-5xl md:text-6xl font-black text-indigo-800">500+</div>
            <div className="mt-3 text-sm font-bold text-indigo-600 uppercase tracking-widest">
              {isMarathi ? 'उपक्रम राबवले' : 'Campaigns Conducted'}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeView;