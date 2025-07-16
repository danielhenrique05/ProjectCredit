export interface CreditProduct {
  id: string;
  name: string;
  description: string;
  minAmount: number;
  maxAmount: number;
  minTerm: number;
  maxTerm: number;
  gracePeriod: string;
  interestRate: string;
  requirements: string[];
  icon: string;
}

export interface TeamMember {
  name: string;
  position: string;
  image: string;
  bio: string;
}

export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  image: string;
  category: string;
}