export interface Topic {
  title: string;
  period: string;
  description: string;
  images?: string[];
  image?: string;
  credit?: string;
}

export type SectionKey = 
  | 'overview'
  | 'timeline'
  | 'places'
  | 'people'
  | 'labor'
  | 'treasure'
  | 'leaders'
  | 'schools';

export type FontSize = 'normal' | 'large' | 'xlarge';

export interface AppState {
  section: SectionKey;
  fontSize: FontSize;
  highContrast: boolean;
  searchQuery: string;
}