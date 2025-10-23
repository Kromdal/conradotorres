"use client";

import { ScrollFadeIn, ScrollStagger, ScrollStaggerItem } from "@/components/animations"
import { Badge } from "@/components/ui/badge"
import { SkillTooltip } from "@/components/ui/skill-tooltip"
import { 
  Code2, 
  Palette, 
  Zap, 
  Sparkles
} from "lucide-react"
import toolkitData from "@/lib/toolkit-data.json"

// Map icon names to components
const iconMap = {
  Code2,
  Palette, 
  Zap,
  Sparkles
} as const;

type IconName = keyof typeof iconMap;

interface ToolkitItem {
  name: string;
  level: number;
  startDate: string; // Format: "YYYY-MM-DD"
  description: string;
}

interface ToolkitCategory {
  category: string;
  icon: IconName;
  items: ToolkitItem[];
}

// Function to generate proficiency based on level
const getProficiency = (level: number): string => {
  if (level >= 85) return "Expert";
  if (level >= 70) return "Advanced";
  return "Intermediate";
};

// Function to calculate experience based on start date
const calculateExperience = (startDate: string): string => {
  const start = new Date(startDate);
  const now = new Date();
  const diffMs = now.getTime() - start.getTime();
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  
  if (diffDays < 7) {
    return diffDays === 1 ? "1 day" : `${diffDays} days`;
  } else if (diffDays < 30) {
    const weeks = Math.floor(diffDays / 7);
    return weeks === 1 ? "1 week" : `${weeks} weeks`;
  } else if (diffDays < 365) {
    const months = Math.floor(diffDays / 30);
    return months === 1 ? "1 month" : `${months} months`;
  } else {
    const years = Math.floor(diffDays / 365);
    return years === 1 ? "1 year" : `${years}+ years`;
  }
};

const toolkit = toolkitData.toolkit as ToolkitCategory[];

const ToolkitSection = () => {
  return (
  <section id="toolkit" className="w-full pt-5 md:pt-7 lg:pt-10 mt-15 md:mt-20 lg:mt-28 pb-0 relative overflow-hidden">
      {/* Background decoration - mantener sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <ScrollFadeIn className="text-center mb-16">
          <div className="space-y-6 max-w-6xl mx-auto">
            <div className="inline-block">
              <span className="px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                Tech Stack
              </span>
            </div>
            <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
              <span className="text-gradient from-foreground to-primary">
                My Toolkit
              </span>
            </h2>
            <p className="text-foreground/70 text-lg leading-relaxed">
              The technologies and tools I leverage to create exceptional digital experiences, 
              from concept to deployment.
            </p>
          </div>
        </ScrollFadeIn>
        
  <ScrollStagger className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3" staggerDelay={0.1}>
          {toolkit.map((category, index) => {
            const IconComponent = iconMap[category.icon];
            return (
              <ScrollStaggerItem key={category.category}>
                <div className="group h-full">
                  <div className="h-full space-y-6 p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-medium card-uniform transition-all duration-300 hover:border-primary/20">
                    <div className="text-center space-y-4">
                      {/* Icono más bonito */}
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-105">
                        <IconComponent className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold font-headline text-foreground group-hover:text-primary transition-colors">
                          {category.category}
                        </h3>
                        <div className="w-8 h-0.5 bg-primary mx-auto mt-3 rounded-full group-hover:w-12 transition-all duration-300" />
                      </div>
                    </div>
                    
                    {/* Lista de skills con tooltips */}
                    <div className="space-y-4">
                      {category.items.map((item, itemIndex) => (
                        <SkillTooltip
                          key={item.name}
                          name={item.name}
                          proficiency={getProficiency(item.level)}
                          experience={calculateExperience(item.startDate)}
                          description={item.description}
                          level={item.level}
                        >
                          <div className="space-y-2 cursor-help p-3 rounded-lg hover:bg-primary/5 transition-all duration-200">
                            <div className="flex items-center justify-between">
                              <span className="text-foreground/90 font-medium text-sm">
                                {item.name}
                              </span>
                            </div>
                            <div className="w-full bg-border/40 rounded-full h-2.5 overflow-hidden shadow-inner">
                              <div 
                                className="h-full bg-primary rounded-full transition-all duration-1000 ease-out group-hover:bg-primary/90 shadow-sm"
                                style={{ 
                                  width: `${item.level}%`,
                                  transitionDelay: `${itemIndex * 100}ms`
                                }}
                              />
                            </div>
                          </div>
                        </SkillTooltip>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollStaggerItem>
            );
          })}
        </ScrollStagger>
        
        {/* Stats sencillas al final */}
        <ScrollFadeIn className="mt-16 text-center">
          <div className="inline-block p-6 rounded-2xl bg-card border border-border/50 shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 divide-y md:divide-y-0 md:divide-x divide-border/30">
              <div className="space-y-1 py-2 md:py-0">
                <div className="text-2xl font-bold text-primary">25+</div>
                <div className="text-sm text-foreground/70">Technologies</div>
              </div>
              <div className="space-y-1 py-2 md:py-0">
                <div className="text-2xl font-bold text-primary">5+</div>
                <div className="text-sm text-foreground/70">Years Experience</div>
              </div>
              <div className="space-y-1 py-2 md:py-0">
                <div className="text-2xl font-bold text-primary">100+</div>
                <div className="text-sm text-foreground/70">Projects Completed</div>
              </div>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </section>
  );
};

export default ToolkitSection;
