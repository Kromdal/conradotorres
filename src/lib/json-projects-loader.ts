import { Project } from '@/lib/types/project';
import financialAnalyticsPlatform from '../data/projects/financial-analytics-platform.json';
import subelevenAgency from '../data/projects/subeleven-agency.json';
import personalPortfolio from '../data/projects/personal-portfolio.json';

const allProjects: Project[] = [
  financialAnalyticsPlatform,
  subelevenAgency,
  personalPortfolio,
];

export function getAllProjectsFromJson(): Project[] {
  return allProjects;
}

export function getProjectBySlugFromJson(slug: string): Project | undefined {
  return allProjects.find(p => p.slug === slug);
}

export function getFeaturedProjectsFromJson(): Project[] {
  return allProjects.filter(p => p.featured);
}
