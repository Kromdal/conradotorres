export interface ProjectImage {
  url: string;
  alt: string;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: string;
  technologies: string[];
  featuredImage: string;
  gallery?: ProjectImage[];
  year: string;
  duration: string;
  teamSize: string;
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  challenges?: string;
  results?: string;
}

export interface ProjectPreview {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  image?: {
    id: string;
    imageUrl: string;
    description: string;
  };
  link?: {
    href: string;
    label: string;
  };
}