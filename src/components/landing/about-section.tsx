import Image from 'next/image'
import { PlaceHolderImages } from '@/lib/placeholder-images'

const AboutSection = () => {
  const aboutImage = PlaceHolderImages.find(p => p.id === 'conrado-torres-photo')

  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container px-4 md:px-6 animate-in fade-in duration-500">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-headline">
              From Design to Deployment
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              My background in Graphic Design and Photography gives me a unique perspective. I don&apos;t just build what&apos;s specified; I focus on the &apos;why&apos; behind every design decision, ensuring a flawless user experience.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            {aboutImage && (
              <Image
                src={aboutImage.imageUrl}
                alt={aboutImage.description}
                data-ai-hint={aboutImage.imageHint}
                width={600}
                height={800}
                className="mx-auto aspect-[3/4] overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
