
export type Language = 'en' | 'mr';

export enum AppView {
  HOME = 'HOME',
  ABOUT = 'ABOUT',
  ACTIVITIES = 'ACTIVITIES',
  CONTACT = 'CONTACT',
  SECTION_DETAIL = 'SECTION_DETAIL'
}

export interface SectionContent {
  id: string;
  title: { en: string; mr: string };
  description: { en: string; mr: string };
  images: Array<{
    url: string;
    caption?: { en: string; mr: string };
  }>;
}

export interface Message {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  timestamp: number;
  groundingSources?: Array<{
    title: string;
    uri: string;
  }>;
}
