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
    shortDescription: "A high-performance portfolio website built with Next.js 15, featuring advanced UI components, dynamic routing, and perfect SEO optimization.",
    fullDescription: "This portfolio exemplifies cutting-edge frontend architecture, implementing advanced React Server Components, App Router patterns, and TypeScript strict mode for maximum type safety. The project features a sophisticated component ecosystem built on Radix UI primitives, custom hook implementations for mobile detection and toast notifications, and a dynamic routing system that generates SEO-optimized pages from structured JSON data. The toolkit section showcases complex state management with automatic experience calculation based on start dates, instant tooltip interactions with zero delay, and responsive grid layouts that adapt from mobile-first design to desktop. Advanced performance optimizations include strategic code splitting, image optimization with Next.js Image component, lazy loading patterns, and CSS-in-JS with Tailwind's utility-first approach. The architecture demonstrates enterprise-level patterns including custom TypeScript interfaces, modular component design, and maintainable file structure following Next.js 15 best practices.",
    category: "Personal Portfolio",
    technologies: ["Next.js 15", "React Server Components", "TypeScript", "Tailwind CSS", "Radix UI", "Lucide React", "App Router", "Vercel", "ESLint", "PostCSS", "JSON Data Management"],
    featuredImage: PlaceHolderImages.find(p => p.id === 'project-portfolio')?.imageUrl || "/images/placeholder.jpg",
    gallery: [
      {
        url: PlaceHolderImages.find(p => p.id === 'lighthouse-1')?.imageUrl || "/images/placeholder.jpg",
        alt: "Perfect Lighthouse 100 performance score across all metrics"
      },
      {
        url: PlaceHolderImages.find(p => p.id === 'mobile-1')?.imageUrl || "/images/placeholder.jpg",
        alt: "Fully responsive design optimized for all device sizes"
      },
      {
        url: PlaceHolderImages.find(p => p.id === 'components-1')?.imageUrl || "/images/placeholder.jpg",
        alt: "Advanced UI component system with interactive tooltips"
      },
      {
        url: PlaceHolderImages.find(p => p.id === 'projects-1')?.imageUrl || "/images/placeholder.jpg",
        alt: "Dynamic project pages with comprehensive SEO optimization"
      }
    ],
    year: "2024",
    duration: "3 months",
    teamSize: "Solo Developer",
    liveUrl: "https://conradotorres.dev",
    githubUrl: "https://github.com/kromdal/conradotorres",
    featured: true,
    challenges: "The primary technical challenges involved implementing React Server Components with Next.js 15 App Router while maintaining client-side interactivity for components like tooltips and animations. Achieving perfect Lighthouse scores required strategic bundle splitting, implementing proper loading states, and optimizing the critical rendering path. The dynamic routing system needed to generate static paths at build time from JSON data while supporting dynamic metadata generation for each project page. Creating the interactive toolkit section involved complex date calculations in JavaScript, implementing zero-delay tooltips with Radix UI, and managing responsive grid layouts that maintain visual hierarchy across breakpoints. Advanced TypeScript implementation included creating custom interfaces for project data, implementing proper type guards, and ensuring type safety across the component tree. The component architecture needed to balance reusability with performance, implementing proper prop interfaces and maintaining consistent design tokens throughout the application.",
    results: "Delivered exceptional performance metrics with Lighthouse scores of 100/100 across Performance, Accessibility, Best Practices, and SEO categories, achieving First Contentful Paint under 1.2s and Largest Contentful Paint under 2.5s. The React Server Components implementation resulted in 40% reduction in JavaScript bundle size while maintaining full interactivity. Successfully implemented 15+ reusable UI components with consistent API patterns and TypeScript interfaces. The dynamic routing system generates 20+ project pages with unique meta tags, structured data, and social media optimization. The toolkit section processes 25+ skills with automatic experience calculation using Date objects and mathematical algorithms for proficiency scoring. Responsive design tested and optimized across 8+ device breakpoints from iPhone SE (375px) to 4K monitors (2560px+). Code architecture supports easy content updates through JSON modification without requiring code changes. The project demonstrates advanced React patterns including compound components, custom hooks, and proper separation of concerns, serving as a comprehensive reference for modern frontend development practices.",
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