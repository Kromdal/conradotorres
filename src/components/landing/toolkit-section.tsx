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
    <section id="toolkit" className="w-full py-12 md:py-24 lg:py-32 bg-secondary/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-0 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-48 h-48 bg-accent/10 rounded-full blur-2xl" />
      </div>
      
      <div className="container px-4 md:px-6 relative z-10">
        <ScrollFadeIn className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Toolkit</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The tools and technologies I use to bring ideas to life.
            </p>
          </div>
        </ScrollFadeIn>
        
        <ScrollStagger className="mx-auto grid max-w-5xl justify-center gap-8 sm:grid-cols-2 md:grid-cols-4 mt-8" staggerDelay={0.1}>
          {toolkit.map((category, index) => (
            <ScrollStaggerItem key={category.category}>
              <HoverScale scale={1.02}>
                <div className="space-y-4 p-6 rounded-xl bg-card/60 backdrop-blur border shadow-sm hover:shadow-lg transition-all duration-300">
                  <Pulse scale={[1, 1.05]} duration={3 + index * 0.5}>
                    <h3 className="text-lg font-semibold text-center font-headline">{category.category}</h3>
                  </Pulse>
                  <ul className="space-y-3">
                    {category.items.map((item, itemIndex) => (
                      <HoverScale key={item} scale={1.05}>
                        <li className="text-muted-foreground text-center py-1 px-3 rounded-md hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default">
                          {item}
                        </li>
                      </HoverScale>
                    ))}
                  </ul>
                </div>
              </HoverScale>
            </ScrollStaggerItem>
          ))}
        </ScrollStagger>
      </div>
    </section>
  );
};

export default ToolkitSection;
