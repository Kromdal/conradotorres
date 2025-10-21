"use client";

import { ScrollFadeIn, ScrollStagger, ScrollStaggerItem, HoverScale, Pulse } from "@/components/animations"

const toolkit = [
  {
    category: "Languages & Frameworks",
    items: ["TypeScript", "JavaScript", "React", "HTML5", "CSS3"],
  },
  {
    category: "Tools & Platforms",
    items: ["Vite", "Git", "Figma", "Firebase", "Vercel", "Tailwind CSS"],
  },
  {
    category: "AI & Prototyping",
    items: ["Lovable", "Cursor", "Framer Motion"],
  },
  {
    category: "Design & Creative",
    items: ["Adobe Photoshop", "Illustrator", "Photography"],
  },
];

const ToolkitSection = () => {
  return (
    <section id="toolkit" className="w-full py-20 md:py-28 lg:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/10 to-background" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <ScrollFadeIn className="text-center mb-16">
          <div className="space-y-6 max-w-3xl mx-auto">
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
        
        <ScrollStagger className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-4" staggerDelay={0.1}>
          {toolkit.map((category, index) => (
            <ScrollStaggerItem key={category.category}>
              <div className="group h-full">
                <div className="h-full space-y-6 p-8 rounded-2xl bg-card border border-border/50 shadow-soft hover:shadow-medium card-uniform">
                  <div className="text-center">
                    <h3 className="text-xl font-bold font-headline text-foreground group-hover:text-primary transition-colors">
                      {category.category}
                    </h3>
                    <div className="w-8 h-0.5 bg-primary mx-auto mt-3 rounded-full" />
                  </div>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <li 
                        key={item} 
                        className="text-foreground/80 text-center py-2 px-4 rounded-lg hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default font-medium"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </div>
    </section>
  );
};

export default ToolkitSection;
