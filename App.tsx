
// import React, { useState } from 'react';
// import { AppView, Language } from './types';
// import { Icons, COLORS, UI_STRINGS, SECTIONS } from './constants';
// import HomeView from './components/HomeView';
// import GalleryView from './components/GalleryView';
// import AboutView from './components/AboutView';
// import ContactView from './components/ContactView';
// import SectionDetailView from './components/SectionDetailView';

// const App: React.FC = () => {
//   const [activeView, setActiveView] = useState<AppView>(AppView.HOME);
//   const [lang, setLang] = useState<Language>('en');
//   const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);

//   const toggleLang = () => setLang(prev => prev === 'en' ? 'mr' : 'en');

//   const navigateToSection = (id: string) => {
//     setSelectedSectionId(id);
//     setActiveView(AppView.SECTION_DETAIL);
//   };

//   const NavItem = ({ view, icon: Icon, label }: { view: AppView, icon: React.FC, label: string }) => (
//     <button
//       onClick={() => {
//         setActiveView(view);
//         setSelectedSectionId(null);
//       }}
//       className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
//         activeView === view && selectedSectionId === null
//           ? 'bg-indigo-800 text-white shadow-lg' 
//           : 'text-slate-600 hover:bg-slate-100'
//       }`}
//     >
//       <Icon />
//       <span className="font-medium whitespace-nowrap">{label}</span>
//     </button>
//   );

//   return (
//     <div className="flex flex-col md:flex-row h-screen bg-slate-50 text-slate-800 overflow-hidden">
//       {/* Sidebar / Mobile Nav */}
//       <aside className="w-full md:w-72 border-r border-slate-200 flex flex-col p-4 bg-white z-20 shadow-xl md:shadow-none">
//         <div className="flex items-center justify-between md:flex-col md:items-start gap-4 mb-8 px-2 pt-2">
//           <div className="flex items-center gap-3">
//             <div className="w-12 h-12 rounded-2xl bg-indigo-800 flex items-center justify-center shadow-lg transform rotate-3">
//               <span className="text-2xl font-bold text-white">M</span>
//             </div>
//             <div>
//               <h1 className="text-lg font-extrabold tracking-tight text-indigo-950 leading-none">Mohasur</h1>
//               <span className="text-[10px] uppercase tracking-widest text-emerald-600 font-black">Trust NGO</span>
//             </div>
//           </div>

//           <button 
//             onClick={toggleLang}
//             className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-indigo-100 rounded-full text-xs font-bold text-indigo-800 transition-colors border border-slate-200"
//           >
//             <Icons.Globe />
//             {lang === 'en' ? 'मराठी' : 'English'}
//           </button>
//         </div>

//         <nav className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 no-scrollbar">
//           <NavItem view={AppView.HOME} icon={Icons.Home} label={UI_STRINGS.nav.home[lang]} />
//           <NavItem view={AppView.ABOUT} icon={Icons.Info} label={UI_STRINGS.nav.about[lang]} />
//           <NavItem view={AppView.ACTIVITIES} icon={Icons.Image} label={UI_STRINGS.nav.activities[lang]} />
//           <NavItem view={AppView.CONTACT} icon={Icons.Phone} label={UI_STRINGS.nav.contact[lang]} />
//         </nav>

//         <div className="hidden md:block mt-auto p-4 rounded-2xl bg-indigo-50 border border-indigo-100">
//           <div className="text-[10px] text-indigo-400 font-bold uppercase mb-2 tracking-widest">Connect With Us</div>
//           <div className="text-xs text-indigo-900 font-medium space-y-2">
//             <p>📍 Thane/ Maharashtra</p>
//             <p>📞 +91 98690 24982</p>
//           </div>
//         </div>
//       </aside>

//       {/* Main Content Area */}
//       <main className="flex-1 relative overflow-y-auto bg-slate-50">
//         <div className="max-w-7xl mx-auto min-h-full">
//           {activeView === AppView.HOME && <HomeView lang={lang} onExplore={() => setActiveView(AppView.ACTIVITIES)} />}
//           {activeView === AppView.ABOUT && <AboutView lang={lang} />}
//           {activeView === AppView.ACTIVITIES && <GalleryView lang={lang} onSelectSection={navigateToSection} />}
//           {activeView === AppView.CONTACT && <ContactView lang={lang} />}
//           {activeView === AppView.SECTION_DETAIL && selectedSectionId && (
//             <SectionDetailView 
//               lang={lang} 
//               section={SECTIONS.find(s => s.id === selectedSectionId)!} 
//               onBack={() => setActiveView(AppView.ACTIVITIES)}
//             />
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default App;


import React, { useState, useEffect } from 'react';
import { AppView, Language } from './types';
import { Icons, COLORS, UI_STRINGS, SECTIONS } from './constants';
import HomeView from './components/HomeView';
import GalleryView from './components/GalleryView';
import AboutView from './components/AboutView';
import ContactView from './components/ContactView';
import SectionDetailView from './components/SectionDetailView';

const App: React.FC = () => {
  const [activeView, setActiveView] = useState<AppView>(AppView.HOME);
  const [lang, setLang] = useState<Language>('en');
  const [selectedSectionId, setSelectedSectionId] = useState<string | null>(null);

  const toggleLang = () => setLang(prev => prev === 'en' ? 'mr' : 'en');

  // --- NEW: BACK BUTTON HANDLER FOR LAPTOP & MOBILE ---
  useEffect(() => {
    // 1. Listen for when the browser history changes (e.g., user hits back button)
    const handlePopState = (event: PopStateEvent) => {
      if (event.state) {
        // Restore the view and section ID from the historical state bundle
        setActiveView(event.state.activeView);
        setSelectedSectionId(event.state.selectedSectionId);
      } else {
        // Fallback to home if there's no state history left
        setActiveView(AppView.HOME);
        setSelectedSectionId(null);
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Helper function to safely update view states and log it in history tracking
  const navigateTo = (view: AppView, sectionId: string | null = null) => {
    setActiveView(view);
    setSelectedSectionId(sectionId);
    
    // 2. This creates a checkpoint in the browser's navigation history stack
    window.history.pushState(
      { activeView: view, selectedSectionId: sectionId }, 
      '', 
      `?view=${view}${sectionId ? `&section=${sectionId}` : ''}`
    );
  };
  // -----------------------------------------------------

  const navigateToSection = (id: string) => {
    navigateTo(AppView.SECTION_DETAIL, id);
  };

  const NavItem = ({ view, icon: Icon, label }: { view: AppView, icon: React.FC, label: string }) => (
    <button
      onClick={() => {
        navigateTo(view, null);
      }}
      className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
        activeView === view && selectedSectionId === null
          ? 'bg-indigo-800 text-white shadow-lg' 
          : 'text-slate-600 hover:bg-slate-100'
      }`}
    >
      <Icon />
      <span className="font-medium whitespace-nowrap">{label}</span>
    </button>
  );

  return (
    <div className="flex flex-col md:flex-row h-screen bg-slate-50 text-slate-800 overflow-hidden">
      {/* Sidebar / Mobile Nav */}
      <aside className="w-full md:w-72 border-r border-slate-200 flex flex-col p-4 bg-white z-20 shadow-xl md:shadow-none">
        <div className="flex items-center justify-between md:flex-col md:items-start gap-4 mb-8 px-2 pt-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-indigo-800 flex items-center justify-center shadow-lg transform rotate-3">
              <span className="text-2xl font-bold text-white">M</span>
            </div>
            <div>
              <h1 className="text-lg font-extrabold tracking-tight text-indigo-950 leading-none">Mohasur</h1>
              <span className="text-[10px] uppercase tracking-widest text-emerald-600 font-black">Trust NGO</span>
            </div>
          </div>

          <button 
            onClick={toggleLang}
            className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 hover:bg-indigo-100 rounded-full text-xs font-bold text-indigo-800 transition-colors border border-slate-200"
          >
            <Icons.Globe />
            {lang === 'en' ? 'मराठी' : 'English'}
          </button>
        </div>

        <nav className="flex md:flex-col gap-2 overflow-x-auto md:overflow-x-visible pb-2 md:pb-0 no-scrollbar">
          <NavItem view={AppView.HOME} icon={Icons.Home} label={UI_STRINGS.nav.home[lang]} />
          <NavItem view={AppView.ABOUT} icon={Icons.Info} label={UI_STRINGS.nav.about[lang]} />
          <NavItem view={AppView.ACTIVITIES} icon={Icons.Image} label={UI_STRINGS.nav.activities[lang]} />
          <NavItem view={AppView.CONTACT} icon={Icons.Phone} label={UI_STRINGS.nav.contact[lang]} />
        </nav>

        <div className="hidden md:block mt-auto p-4 rounded-2xl bg-indigo-50 border border-indigo-100">
          <div className="text-[10px] text-indigo-400 font-bold uppercase mb-2 tracking-widest">Connect With Us</div>
          <div className="text-xs text-indigo-900 font-medium space-y-2">
            <p>📍 Thane/ Maharashtra</p>
            <p>📞 +91 98690 24982</p>
          </div>
        </div>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 relative overflow-y-auto bg-slate-50">
        <div className="max-w-7xl mx-auto min-h-full">
          {activeView === AppView.HOME && (
            <HomeView lang={lang} onExplore={() => navigateTo(AppView.ACTIVITIES)} />
          )}
          {activeView === AppView.ABOUT && <AboutView lang={lang} />}
          {activeView === AppView.ACTIVITIES && (
            <GalleryView lang={lang} onSelectSection={navigateToSection} />
          )}
          {activeView === AppView.CONTACT && <ContactView lang={lang} />}
          {activeView === AppView.SECTION_DETAIL && selectedSectionId && (
            <SectionDetailView 
              lang={lang} 
              section={SECTIONS.find(s => s.id === selectedSectionId)!} 
              // Changed onBack to trigger the native browser history pop instead of resetting state hard!
              onBack={() => window.history.back()}
            />
          )}
        </div>
      </main>
    </div>
  );
};

export default App;