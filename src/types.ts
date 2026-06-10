export type Category =
  | 'Data Engineering'
  | 'Machine Learning & AI'
  | 'Cyber Security'
  | 'Software Engineering'
  | 'Cloud & DevOps'
  | 'Other Tech';

export const CATEGORIES: Category[] = [
  'Data Engineering',
  'Machine Learning & AI',
  'Cyber Security',
  'Software Engineering',
  'Cloud & DevOps',
  'Other Tech',
];

export interface Role {
  id: string;
  company: string;
  title: string;
  location: string;
  url: string;
  category: Category;
  adelaide: boolean;
  remote: boolean;
  firstSeen: string;
}

export interface Snapshot {
  timestamp: string;
  total: number;
  byCategory: Record<Category, number>;
  companies: number;
  adelaide: number;
  remote: number;
}
