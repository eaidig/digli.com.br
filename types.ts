export interface PortfolioItem {
  id: number;
  imageUrl: string;
  title: string;
  category: string;
  story: string;
}

export interface ServiceItem {
  id: number;
  title: string;
  description: string;
  iconName: 'heart' | 'briefcase' | 'frame';
  imageUrl: string;
}

export interface ExperienceStep {
  step: number;
  title: string;
  description: string;
}