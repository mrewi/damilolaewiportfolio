import type { LucideIcon } from 'lucide-react';

export interface Skill {
  name: string;
  icon: LucideIcon | ((props: React.SVGProps<SVGSVGElement>) => JSX.Element); // Allow LucideIcon or custom SVG component
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  imageHint: string;
  techStack: Skill[];
  liveLink?: string;
  repoLink?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  imageUrl: string;
  imageHint: string;
  category: string;
  content: string; // Markdown or HTML string
  tags: string[];
}
