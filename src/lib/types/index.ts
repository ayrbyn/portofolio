export interface WorkItem {
  id: number;
  slug: string;
  title: string;
  category: string;
  type: string;
  description: string;
  imageUrl: string;
  index: string;
  total: string;
  link?: string;
}

export interface GalleryItem {
  id: number;
  title: string;
  imageUrl: string;
  designer: string | null;
  folder: string | null;
}

export interface SkillCategory {
  label: string;
  skills: string[];
}
