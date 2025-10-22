import { Project } from "@/lib/types/project";
import { PlaceHolderImages } from "@/lib/placeholder-images";

export const projectsData: Project[] = [
  {
    slug: "financial-analytics-platform",
    title: "Real-Time Financial Analytics Platform (SaaS)",
    shortDescription: "Complex dashboard for visualizing millions of daily banking transactions with high performance under heavy data loads.",
    fullDescription: "As the sole frontend developer, I built a comprehensive real-time financial analytics platform that processes and visualizes millions of banking transactions daily. The project required high performance under heavy data loads, implementing advanced optimization techniques and virtualization to maintain a fluid and responsive interface.",
    category: "Enterprise SaaS",
    technologies: ["React", "TypeScript", "D3.js", "WebSocket", "Redis", "Docker", "Microservices"],
    featuredImage: PlaceHolderImages.find(p => p.id === 'project-saas')?.imageUrl || "/images/placeholder.jpg",
    gallery: [
      {
        url: PlaceHolderImages.find(p => p.id === 'dashboard-1')?.imageUrl || "/images/placeholder.jpg",
        alt: "Main dashboard with real-time metrics"
      },
      {
        url: PlaceHolderImages.find(p => p.id === 'analytics-1')?.imageUrl || "/images/placeholder.jpg", 
        alt: "Advanced analytics panel"
      },
      {
        url: PlaceHolderImages.find(p => p.id === 'charts-1')?.imageUrl || "/images/placeholder.jpg",
        alt: "Complex data visualizations"
      }
    ],
    year: "2024",
    duration: "8 months",
    teamSize: "1 Frontend Developer",
    featured: true,
    challenges: "The main challenge was handling smooth visualization of millions of real-time records without compromising performance. I implemented component virtualization, intelligent lazy loading, and an optimized cache system that reduced loading times by 70%.",
    results: "The platform successfully processes over 5 million transactions daily with latency under 200ms. The client reported a 40% increase in operational efficiency and a 60% reduction in data analysis time.",
  },
  {
    slug: "subeleven-agency", 
    title: "Subeleven (Founder)",
    shortDescription: "Web development agency specialized in complete digital solutions for business growth.",
    fullDescription: "Subeleven is my personal agency where I manage the complete project lifecycle for clients, from UX/UI design to implementation and SEO optimization. We specialize in creating web experiences that drive business growth, combining strategic design with high-quality technical development.",
    category: "Digital Agency",
    technologies: ["React", "Next.js", "TypeScript", "Figma", "SEO", "Analytics"],
    featuredImage: PlaceHolderImages.find(p => p.id === 'project-agency')?.imageUrl || "/images/placeholder.jpg",
    gallery: [
      {
        url: PlaceHolderImages.find(p => p.id === 'website-1')?.imageUrl || "/images/placeholder.jpg",
        alt: "Subeleven website"
      },
      {
        url: PlaceHolderImages.find(p => p.id === 'process-1')?.imageUrl || "/images/placeholder.jpg",
        alt: "Agency workflow process"
      }
    ],
    year: "2024",
    duration: "Ongoing",
    teamSize: "Founder",
    liveUrl: "https://subeleven.es",
    featured: true,
    challenges: "Creating a solid brand identity and scalable processes to handle multiple simultaneous projects. I developed a custom project management system and methodologies that enable consistent delivery of high-quality results.",
    results: "The agency has successfully completed over 15 web projects, with clients reporting average increases of 150% in conversions and significant improvements in SEO rankings.",
  },
  {
    slug: "personal-portfolio",
    title: "My Personal Portfolio (Open Source)", 
    shortDescription: "This very website, optimized for maximum performance and user experience.",
    fullDescription: "This portfolio represents the culmination of my experience in modern frontend development. Built with Next.js 15, TypeScript and Tailwind CSS, it's optimized to achieve a perfect 100 score on Lighthouse. The code is clean, well-documented and publicly available on GitHub as a reference for other developers.",
    category: "Personal Portfolio",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    featuredImage: PlaceHolderImages.find(p => p.id === 'project-portfolio')?.imageUrl || "/images/placeholder.jpg",
    gallery: [
      {
        url: PlaceHolderImages.find(p => p.id === 'lighthouse-1')?.imageUrl || "/images/placeholder.jpg",
        alt: "Perfect Lighthouse 100 score"
      },
      {
        url: PlaceHolderImages.find(p => p.id === 'mobile-1')?.imageUrl || "/images/placeholder.jpg",
        alt: "Responsive design on mobile devices"
      }
    ],
    year: "2024",
    duration: "2 months",
    teamSize: "1 Developer",
    liveUrl: "https://conradotorres.dev",
    githubUrl: "https://github.com/kromdal/conradotorres",
    featured: false,
    challenges: "Achieving perfect performance scores while maintaining smooth animations and visually appealing design. I implemented advanced optimization techniques including lazy loading, code splitting and image optimization.",
    results: "Perfect 100/100 score across all Lighthouse metrics (Performance, Accessibility, Best Practices, SEO). Initial load time under 1 second and smooth 60fps animations.",
  }
];

export function getAllProjects(): Project[] {
  return projectsData;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectsData.find(project => project.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projectsData.filter(project => project.featured);
}