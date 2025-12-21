
// import React from 'react';
// import { Language } from '../types';
// import { UI_STRINGS } from '../constants';

// const AboutView: React.FC<{ lang: Language }> = ({ lang }) => {
//   return (
//     <div className="p-8 md:p-16 max-w-4xl animate-in fade-in duration-500">
//       <h2 className="text-4xl font-black text-slate-900 mb-12">
//         {lang === 'en' ? 'About Our Trust' : 'आमच्या संस्थेबद्दल'}
//       </h2>
      
//       <div className="prose prose-slate lg:prose-xl">
//         <p className="text-xl text-slate-700 leading-relaxed mb-8 font-medium">
//           {UI_STRINGS.aboutContent[lang]}
//         </p>

//         <div className="grid md:grid-cols-2 gap-8 my-16">
//           <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
//             <h4 className="text-xl font-bold text-indigo-800 mb-4">{lang === 'en' ? 'Our Mission' : 'आमचे ध्येय'}</h4>
//             <p className="text-slate-500 leading-relaxed">
//               To create an addiction-free society where every individual has the opportunity to lead a healthy, productive, and meaningful life.
//             </p>
//           </div>
//           <div className="p-8 bg-white rounded-3xl border border-slate-200 shadow-sm">
//             <h4 className="text-xl font-bold text-emerald-800 mb-4">{lang === 'en' ? 'Our Vision' : 'आमची दृष्टी'}</h4>
//             <p className="text-slate-500 leading-relaxed">
//               A holistic environment of social security, healthcare equality, and sustainable living for the underprivileged sections of Maharashtra.
//             </p>
//           </div>
//         </div>

//         <h3 className="text-2xl font-black text-slate-900 mb-6">{lang === 'en' ? 'Our Values' : 'आमची मूल्ये'}</h3>
//         <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 list-none p-0">
//           {['Compassion', 'Integrity', 'Community First', 'Transparency'].map((v, i) => (
//             <li key={i} className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 font-bold text-slate-700">
//               <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
//               {v}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default AboutView;


import React from 'react';
import { Language } from '../types';
import { UI_STRINGS } from '../constants';

const AboutView: React.FC<{ lang: Language }> = ({ lang }) => {
  const isMarathi = lang === 'mr';

  const missionVision = [
    {
      title: isMarathi ? 'आमचे ध्येय' : 'Our Mission',
      color: 'indigo',
      content: isMarathi
        ? 'व्यसनमुक्त समाज निर्माण करणे जिथे प्रत्येक व्यक्तीला निरोगी, उत्पादक आणि अर्थपूर्ण जीवन जगण्याची संधी मिळेल.'
        : 'To create an addiction-free society where every individual has the opportunity to lead a healthy, productive, and meaningful life.',
    },
    {
      title: isMarathi ? 'आमची दृष्टी' : 'Our Vision',
      color: 'indigo',
      content: isMarathi
        ? 'महाराष्ट्रातील वंचित घटकांसाठी सामाजिक सुरक्षा, आरोग्य समानता आणि शाश्वत जीवनाचा समग्र वातावरण निर्माण करणे.'
        : 'A holistic environment of social security, healthcare equality, and sustainable living for the underprivileged sections of Maharashtra.',
    },
  ];

  const values = [
    isMarathi ? 'करुणा' : 'Compassion',
    isMarathi ? 'प्रामाणिकपणा' : 'Integrity',
    isMarathi ? 'समुदाय प्रथम' : 'Community First',
    isMarathi ? 'पारदर्शकता' : 'Transparency',
    isMarathi ? 'सशक्तीकरण' : 'Empowerment',
    isMarathi ? 'समावेशकता' : 'Inclusivity',
  ];

  return (
    <div className="py-16 md:py-24 px-6 md:px-16 max-w-5xl mx-auto animate-in fade-in duration-700">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-black text-indigo-900 tracking-tight mb-6">
          {isMarathi ? 'आमच्या संस्थेबद्दल' : 'About Our Trust'}
        </h2>
      </div>

      {/* Main About Content */}
      <div className="prose prose-lg lg:prose-xl max-w-none mb-20">
        <p className="text-xl text-slate-700 leading-relaxed text-center max-w-4xl mx-auto">
          {UI_STRINGS.aboutContent[lang]}
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid md:grid-cols-2 gap-10 mb-20">
        {missionVision.map((item, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-3xl p-10 shadow-lg border border-slate-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
          >
            <h3
              className={`text-2xl font-black mb-6 ${
                item.color === 'indigo' ? 'text-indigo-800' : 'text-emerald-800'
              }`}
            >
              {item.title}
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed">{item.content}</p>
          </div>
        ))}
      </div>

      {/* Our Values – Improved Grid Layout */}
      <div className="max-w-6xl mx-auto">
        <h3 className="text-3xl md:text-4xl font-black text-indigo-900 text-center mb-12">
          {isMarathi ? 'आमची मूल्ये' : 'Our Values'}
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="flex items-center gap-5 p-6 bg-gradient-to-r from-indigo-50 to-emerald-50/50 rounded-2xl border border-indigo-100 hover:border-indigo-300 hover:shadow-md transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center flex-shrink-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M20 6 9 17l-5-5" />
                </svg>
              </div>
              <span className="text-lg font-bold text-slate-800">{value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutView;