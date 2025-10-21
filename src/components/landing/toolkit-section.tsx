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
    <section id="toolkit" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl font-headline">My Toolkit</h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              The tools and technologies I use to bring ideas to life.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl justify-center gap-8 sm:grid-cols-2 md:grid-cols-4 mt-8 animate-in fade-in-0 slide-in-from-bottom-10 duration-500">
          {toolkit.map((category) => (
            <div key={category.category} className="space-y-2">
              <h3 className="text-lg font-semibold">{category.category}</h3>
              <ul className="space-y-1">
                {category.items.map((item) => (
                  <li key={item} className="text-muted-foreground">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolkitSection;
