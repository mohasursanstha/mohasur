
// import React, { useState, useRef, useEffect } from 'react';
// import { Language, Message } from '../types';
// import { getAIClient, CHAT_MODEL } from '../services/geminiService';
// import { Icons } from '../constants';

// const ContactView: React.FC<{ lang: Language }> = ({ lang }) => {
//   const [messages, setMessages] = useState<Message[]>([]);
//   const [input, setInput] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const scrollRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' });
//   }, [messages]);

//   const handleSend = async () => {
//     if (!input.trim() || isLoading) return;

//     const userMessage: Message = {
//       id: Date.now().toString(),
//       role: 'user',
//       text: input,
//       timestamp: Date.now(),
//     };

//     setMessages(prev => [...prev, userMessage]);
//     setInput('');
//     setIsLoading(true);

//     try {
//       const ai = getAIClient();
//       const response = await ai.models.generateContent({
//         model: CHAT_MODEL,
//         contents: [
//           ...messages.map(m => ({
//             role: m.role === 'user' ? 'user' : 'model',
//             parts: [{ text: m.text }]
//           })),
//           { role: 'user', parts: [{ text: input }] }
//         ],
//         config: {
//           systemInstruction: `You are the AI Assistant for Mohasur Vyasanmukti Trust, a social NGO in Maharashtra. 
//           The trust works on:
//           1. De-addiction (Drug & Alcohol)
//           2. Environment awareness
//           3. Road safety
//           4. Social welfare
//           5. Healthcare
//           6. Women empowerment
//           Answer inquiries helpfully. If you don't know specific details, refer them to the contact info below. 
//           Speak in ${lang === 'en' ? 'English' : 'Marathi'}.`,
//           tools: [{ googleSearch: {} }],
//         }
//       });

//       const assistantMessage: Message = {
//         id: (Date.now() + 1).toString(),
//         role: 'assistant',
//         text: response.text || "I'm sorry, I couldn't generate a response.",
//         timestamp: Date.now(),
//       };

//       setMessages(prev => [...prev, assistantMessage]);
//     } catch (error) {
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="p-8 md:p-16 animate-in fade-in duration-500">
//       <div className="max-w-3xl mx-auto">
//         <div>
//           <h2 className="text-4xl font-black text-slate-900 mb-8">
//             {lang === 'en' ? 'Contact Us' : 'संपर्क साधा'}
//           </h2>
          
//           <div className="space-y-8 mb-12">
//             <div className="flex items-start gap-4">
//               <div className="p-3 bg-indigo-100 text-indigo-800 rounded-2xl">
//                 <Icons.Phone />
//               </div>
//               <div>
//                 <h4 className="font-bold text-slate-900">{lang === 'en' ? 'Call Us' : 'फोन करा'}</h4>
//                 <p className="text-slate-500">+91 8108572741</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-4">
//               <div className="p-3 bg-emerald-100 text-emerald-800 rounded-2xl">
//                 <Icons.Globe />
//               </div>
//               <div>
//                 <h4 className="font-bold text-slate-900">{lang === 'en' ? 'Email' : 'ईमेल'}</h4>
//                 <p className="text-slate-500">info@mohasurtrust.org</p>
//               </div>
//             </div>
//             <div className="flex items-start gap-4">
//               <div className="p-3 bg-amber-100 text-amber-800 rounded-2xl">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
//               </div>
//               <div>
//                 <h4 className="font-bold text-slate-900">{lang === 'en' ? 'Location' : 'पत्ता'}</h4>
//                 <p className="text-slate-500">Thane, Maharashtra, India</p>
//               </div>
//             </div>
//           </div>

//           <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
//             <h4 className="text-lg font-bold text-slate-900 mb-4">{lang === 'en' ? 'Quick Inquiry Form' : 'त्वरित चौकशी अर्ज'}</h4>
//             <div className="space-y-4">
//               <input type="text" placeholder="Name" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-100 outline-none" />
//               <input type="email" placeholder="Email" className="w-full p-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-indigo-100 outline-none" />
//               <textarea placeholder="Message" className="w-full p-3 rounded-xl border border-slate-200 h-32 focus:ring-2 focus:ring-indigo-100 outline-none resize-none"></textarea>
//               <button className="w-full py-4 bg-indigo-800 text-white font-bold rounded-xl shadow-lg">Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactView;


//2

import React, { useState } from 'react';
import { Language } from '../types';
import { Icons } from '../constants';

const ContactView: React.FC<{ lang: Language }> = ({ lang }) => {
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isOpening, setIsOpening] = useState(false);

  const trustEmail = 'mohasursanstha07@gmail.com';

  const handleOpenEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name.trim()) {
      alert(lang === 'en' ? 'Please enter your name.' : 'कृपया तुमचे नाव टाका.');
      return;
    }
    if (!message.trim()) {
      alert(lang === 'en' ? 'Please write your message.' : 'कृपया तुमचा संदेश लिहा.');
      return;
    }

    setIsOpening(true);

    const subject = lang === 'en'
      ? `New Message from ${name} - Mohasur Trust Website`
      : `${name} कडून नवीन संदेश - मोहासुर ट्रस्ट वेबसाइट`;

    const body = lang === 'en'
      ? `Hello Mohasur Trust Team,\n\nMy name is ${name}.\n\n${message}\n\nThank you,\n${name}`
      : `नमस्कार मोहासुर ट्रस्ट टीम,\n\nमाझे नाव ${name} आहे.\n\n${message}\n\nधन्यवाद,\n${name}`;

    const mailtoUrl = `mailto:${trustEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Create a hidden anchor and trigger click (most reliable method)
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Reset form after opening email client
    setTimeout(() => {
      setName('');
      setMessage('');
      setIsOpening(false);
    }, 800);
  };

  return (
    <div className="p-8 md:p-16 animate-in fade-in duration-500">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-4xl font-black text-slate-900 mb-12 text-center md:text-left">
          {lang === 'en' ? 'Contact Us' : 'संपर्क साधा'}
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Information Section */}
          <div className="space-y-8">
            <div className="flex items-start gap-5">
              <div className="p-4 bg-indigo-100 text-indigo-800 rounded-2xl flex-shrink-0">
                <Icons.Phone />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">
                  {lang === 'en' ? 'Call Us' : 'फोन करा'}
                </h4>
                <p className="text-slate-600 mt-1">+91 98690 24982</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="p-4 bg-emerald-100 text-emerald-800 rounded-2xl flex-shrink-0">
                <Icons.Globe />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">
                  {lang === 'en' ? 'Email Us' : 'ईमेल करा'}
                </h4>
                <p className="text-slate-600 mt-1">mohasursanstha07@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-5">
              <div className="p-4 bg-amber-100 text-amber-800 rounded-2xl flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <h4 className="font-bold text-slate-900 text-lg">
                  {lang === 'en' ? 'Visit Us' : 'भेट द्या'}
                </h4>
                <p className="text-slate-600 mt-1">
                  Thane, Maharashtra,<br />
                  India - 400601
                </p>
              </div>
            </div>
          </div>

          {/* Email Form Section */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-lg">
            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              {lang === 'en' ? 'Send us a Message' : 'आम्हाला संदेश पाठवा'}
            </h3>

            <p className="text-slate-600 mb-8 text-sm">
              {lang === 'en'
                ? 'Fill in your details below. We\'ll open your email app with a ready-to-send message.'
                : 'खाली तुमची माहिती भरा. आम्ही तुमचे ईमेल अॅप तयार संदेशासह उघडू.'}
            </p>

            <form onSubmit={handleOpenEmail} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {lang === 'en' ? 'Your Name *' : 'तुमचे नाव *'}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={lang === 'en' ? 'Enter your name' : 'तुमचे नाव लिहा'}
                  className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition"
                  required
                  disabled={isOpening}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">
                  {lang === 'en' ? 'Your Message *' : 'तुमचा संदेश *'}
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder={lang === 'en' ? 'Write your message here...' : 'तुमचा संदेश येथे लिहा...'}
                  rows={5}
                  className="w-full p-4 rounded-xl border border-slate-300 focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none transition"
                  required
                  disabled={isOpening}
                />
              </div>

              <button
                type="submit"
                disabled={isOpening}
                className="w-full py-4 bg-indigo-800 hover:bg-indigo-900 disabled:bg-indigo-400 text-white font-bold rounded-xl shadow-lg transition-all duration-300 transform hover:-translate-y-1 disabled:cursor-not-allowed flex items-center justify-center gap-3"
              >
                {isOpening ? (
                  <>
                    <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                    </svg>
                    {lang === 'en' ? 'Opening Email App...' : 'ईमेल अॅप उघडत आहे...'}
                  </>
                ) : (
                  <>
                    <Icons.Send />
                    {lang === 'en' ? 'Open Email App & Send' : 'ईमेल अॅप उघडा आणि पाठवा'}
                  </>
                )}
              </button>
            </form>

            <p className="text-sm text-slate-500 mt-8 text-center">
              {lang === 'en' ? 'Your message will be sent to:' : 'तुमचा संदेश येथे पाठवला जाईल:'}
              <br />
              <a href={`mailto:${trustEmail}`} className="font-semibold text-indigo-700 hover:underline">
                {trustEmail}
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactView;

