
import React from 'react';
import { SectionContent } from './types';

export const COLORS = {
  primary: '#3730a3', // Indigo 800
  secondary: '#059669', // Emerald 600
  accent: '#f59e0b', // Amber 500
  bg: '#f8fafc',
  surface: '#ffffff',
  text: '#1e293b',
};

export const SECTIONS: SectionContent[] = [
  {
    id: 'deaddiction',
    title: { en: 'Drug & Alcohol Prohibition', mr: 'अंमली पदार्थ व मद्य प्रतिबंध' },
    description: { 
      en: 'Leading the fight against substance abuse through counseling and medical intervention.', 
      mr: 'समुपदेशन आणि वैद्यकीय मदतीद्वारे अंमली पदार्थ सेवनाविरुद्ध लढा.' 
    },
    images: [
      { url: 'images/deaddiction/row1/d_1.jpg', caption: { en: 'Community awareness drive.', mr: 'सामुदायिक जनजागृती मोहीम.' } },
      { url: 'images/deaddiction/row1/d_2.jpg' },
      { url: 'images/deaddiction/row2/d_4.jpg', caption: { en: 'Medical counseling session.', mr: 'वैद्यकीय समुपदेशन सत्र.' } },
    ]
  },
  {
    id: 'environment',
    title: { en: 'Environmental Awareness', mr: 'पर्यावरण जनजागृती' },
    description: { 
      en: 'Protecting our planet through local action and sustainable practices.', 
      mr: 'स्थानिक कृती आणि शाश्वत पद्धतींद्वारे आपल्या ग्रहाचे संरक्षण करणे.' 
    },
    images: [
      { url: 'images/environment/row_1/e_1.jpg', caption: { en: 'Tree plantation drive 2024.', mr: 'वृक्षारोपण मोहीम २०२४.' } },
      { url: 'images/environment/row_1/e_2.jpg' },
      { url: 'images/environment/row_1/e_3.jpg', caption: { en: 'Forest conservation program.', mr: 'वन संवर्धन कार्यक्रम.' } },
    ]
  },
  {
    id: 'roadsafety',
    title: { en: 'Road Safety Awareness', mr: 'रस्ता सुरक्षा जनजागृती' },
    description: { 
      en: 'Promoting safe driving habits and infrastructure awareness.', 
      mr: 'सुरक्षित ड्रायव्हिंग सवयी आणि रस्ता सुरक्षा जनजागृती वाढवणे.' 
    },
    images: [
      { url: 'images/road_safety/row1/road_s_1.jpg' },
      { url: 'images/road_safety/row1/r_s_2.jpg', caption: { en: 'Traffic rule education.', mr: 'रहदारी नियम शिक्षण.' } },
      { url: 'images/road_safety/row1/r_s_3.jpg' },

      { url: 'images/road_safety/row2/road_s_1.jpg' },
      { url: 'https://images.unsplash.com/photo-1449034446853-66c86144b0ad?auto=format&fit=crop&q=80&w=800', caption: { en: 'Traffic rule education.', mr: 'रहदारी नियम शिक्षण.' } },
      { url: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&q=80&w=800' },
    ]
  },
  {
    id: 'socialwelfare',
    title: { en: 'Social Welfare', mr: 'सामाजिक कल्याण' },
    description: { 
      en: 'Supporting marginalized communities through direct aid and advocacy.', 
      mr: 'थेट मदत आणि समर्थनाद्वारे वंचित समुदायांना आधार देणे.' 
    },
    images: [
      { url: 'images/social_w/row_1/s_w_1.jpg', caption: { en: 'Food distribution drive.', mr: 'अन्न वाटप मोहीम.' } },
      // { url: 'https://images.unsplash.com/photo-1509059852496-f3822ae057bf?auto=format&fit=crop&q=80&w=800' },
      // { url: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800' },
    ]
  },
  {
    id: 'healthcare',
    title: { en: 'Public Healthcare', mr: 'सार्वजनिक आरोग्यसेवा' },
    description: { 
      en: 'Ensuring access to quality medical services for all.', 
      mr: 'सर्वांसाठी दर्जेदार वैद्यकीय सेवांची उपलब्धता सुनिश्चित करणे.' 
    },
    images: [
      { url: 'images/healthcare/row_1/h_c_1.jpg', caption: { en: 'health camp.', mr: 'आरोग्य शिबीर.' } },
      { url: 'images/healthcare/row_1/h_c_2.jpeg', caption: { en: 'health camp.', mr: 'आरोग्य शिबीर.' } },
      // { url: 'https://images.unsplash.com/photo-1504439468489-c8920d796a29?auto=format&fit=crop&q=80&w=800' },
    ]
  },
  {
    id: 'womenempowerment',
    title: { en: 'Women Empowerment', mr: 'महिला सक्षमीकरण' },
    description: { 
      en: 'Fostering independence and leadership among women.', 
      mr: 'महिलांमध्ये स्वातंत्र्य आणि नेतृत्व विकसित करणे.' 
    },
    images: [
      { url: 'images/women_e/row_1/w_e_1.jpg', caption: { en: 'Skill development workshop.', mr: 'कौशल्य विकास कार्यशाळा.' } },
      // { url: 'https://images.unsplash.com/photo-1590650516494-0c8e4a4dd67e?auto=format&fit=crop&q=80&w=800' },
      // { url: 'https://images.unsplash.com/photo-1573166675921-076ea6b6212c?auto=format&fit=crop&q=80&w=800', caption: { en: 'Women entrepreneurship seminar.', mr: 'महिला उद्योजकता चर्चासत्र.' } },
    ]
  }
];

export const UI_STRINGS = {
  trustName: { en: 'Mohasur Vyasanmukti Trust', mr: 'मोहासुर व्यसनमुक्ती संस्था' },
  nav: {
    home: { en: 'Home', mr: 'मुख्यपृष्ठ' },
    about: { en: 'About Us', mr: 'आमच्याबद्दल' },
    activities: { en: 'Impact Gallery', mr: 'कार्य अहवाल' },
    contact: { en: 'Contact Us', mr: 'संपर्क' }
  },
  homeHero: {
    title: { en: 'Empowering Communities, Restoring Lives', mr: 'समुदायाचे सक्षमीकरण, जीवनाची पुनर्रचना' },
    desc: { 
      en: 'Mohasur Vyasanmukti Trust is committed to building a healthier, safer, and more inclusive society by working in the areas of drug and alcohol prohibition, environmental awareness, road safety, social welfare, public healthcare, and women empowerment, through active community engagement and public awareness initiatives.', 
      mr: 'मोहासुर व्यसनमुक्ती संस्था ही सक्रिय सामाजिक सहभाग आणि जनजागृतीच्या माध्यमातून अंमली पदार्थ व मद्य प्रतिबंध, पर्यावरण जनजागृती, रस्ता सुरक्षा, सामाजिक कल्याण, सार्वजनिक आरोग्यसेवा आणि महिला सक्षमीकरण या क्षेत्रांमध्ये कार्य करून निरोगी, सुरक्षित व समावेशक समाज घडविण्यास कटिबद्ध आहे.' 
    }
  },
  aboutContent: {
    en: 'Since our inception, we have been working at the grassroots level to eliminate the scourge of addiction and promote holistic social welfare. Our multidisciplinary team works tirelessly across health, environment, and education sectors.',
    mr: 'आमच्या स्थापनेपासून, आम्ही व्यसनाधीनता दूर करण्यासाठी आणि सर्वांगीण सामाजिक कल्याणास चालना देण्यासाठी तळागाळात काम करत आहोत. आमची टीम आरोग्य, पर्यावरण आणि शिक्षण क्षेत्रात अथक परिश्रम करते.'
  }
};

// Added missing icons for Chat, Video Studio, and Live API components
export const Icons = {
  Home: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>,
  Info: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>,
  Image: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>,
  Phone: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,
  ArrowRight: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>,
  Globe: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20"/><path d="M2 12h20"/></svg>,
  Search: () => <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>,
  Chat: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
  Send: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>,
  Video: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m22 8-6 4 6 4V8Z"/><rect width="14" height="12" x="2" y="6" rx="2" ry="2"/></svg>,
  Camera: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg>,
  Stop: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/></svg>,
  Mic: () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="22"/></svg>,
};
