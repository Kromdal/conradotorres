"use client";

import { PlaceHolderImages } from '@/lib/placeholder-images'
import { ScrollFadeIn } from "@/components/animations"
import Image from 'next/image'


// Import JSON statically
// @ts-ignore
import aboutData from "@/data/sections/about.json";
const { title, description, stats } = aboutData as {
  title: string;
  description: string;
  stats: { label: string; value: string }[];
};

const AboutSection = () => {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'conrado-torres-photo');

  return (
    <section id="about" className="w-full pt-5 md:pt-7 lg:pt-10 mt-15 md:mt-20 lg:mt-28 pb-0 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-muted/20 to-background" />
      <div className="container px-4 md:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 items-center max-w-6xl mx-auto">
          <ScrollFadeIn direction="right" className="order-2 lg:order-1 space-y-8">
            <div className="space-y-4">
              <div className="inline-block">
                <span className="px-4 py-2 text-sm font-semibold text-primary bg-primary/10 rounded-full border border-primary/20">
                  {title}
                </span>
              </div>
              <h2 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl font-headline">
                <span className="text-gradient from-foreground to-primary">
                  {description}
                </span>
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 pt-6">
              {stats.map((stat: { label: string; value: string }, i: number) => (
                <div key={i} className="p-4 bg-card border border-border rounded-xl card-uniform">
                  <h4 className="font-semibold text-sm text-foreground mb-1">{stat.label}</h4>
                  <p className="text-xs text-muted-foreground">{stat.value}</p>
                </div>
              ))}
            </div>
          </ScrollFadeIn>
          <ScrollFadeIn direction="left" className="order-1 lg:order-2">
            <div className="relative">
              {aboutImage && (
                <div className="relative group">
                  <Image
                    src={aboutImage.imageUrl}
                    alt={aboutImage.description}
                    width={600}
                    height={800}
                    className="relative mx-auto aspect-[3/4] overflow-hidden rounded-2xl object-cover object-center shadow-medium border border-border/50"
                  />
                </div>
              )}
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  );
}

export default AboutSection
