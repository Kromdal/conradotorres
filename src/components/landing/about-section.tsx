"use client";

import { PlaceHolderImages } from '@/lib/placeholder-images'
import { ScrollFadeIn } from "@/components/animations"
import Image from 'next/image'

const AboutSection = () => {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'conrado-torres-photo')

  return (
    <section id="about" className="w-full py-16 md:py-24 lg:py-32 bg-muted/30">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          <ScrollFadeIn direction="right" className="order-2 lg:order-1 space-y-6">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl font-headline">
              From Design to Deployment
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              My background in Graphic Design and Photography gives me a unique perspective. I don&apos;t just build what&apos;s specified; I focus on the &apos;why&apos; behind every design decision, ensuring a flawless user experience.
            </p>
          </ScrollFadeIn>
          
          <ScrollFadeIn direction="left" className="order-1 lg:order-2">
            <div className="relative">
              {aboutImage && (
                <Image
                  src={aboutImage.imageUrl}
                  alt={aboutImage.description}
                  width={600}
                  height={800}
                  className="mx-auto aspect-[3/4] overflow-hidden rounded-2xl object-cover object-center shadow-2xl"
                />
              )}
            </div>
          </ScrollFadeIn>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
