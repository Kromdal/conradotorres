"use client"

import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import Image from "next/image"
import { Menu } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { useSmoothScroll } from "@/hooks/use-smooth-scroll"

const navLinks = [
  { href: "about", label: "About" },
  { href: "projects", label: "Projects" },
  { href: "toolkit", label: "Toolkit" },
  { href: "contact", label: "Contact" },
]

export default function Header() {
  const [isSheetOpen, setSheetOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()
  const { scrollToSection } = useSmoothScroll()

  return (
    <header className="sticky top-0 z-50 w-full glass border-b border-border/50">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Link 
            href="/"
            className="mr-6 flex items-center space-x-2"
            onClick={e => {
              if (pathname === "/") {
                e.preventDefault()
                scrollToSection("hero")
              }
            }}
          >
            <Image 
              src="/images/logo.png" 
              alt="Conrado Torres Logo" 
              width={24} 
              height={24}
              className="h-6 w-6"
            />
            <span className="hidden font-bold sm:inline-block text-foreground">
              Conrado Torres
            </span>
          </Link>
          <nav className="flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={`/${link.href === 'about' ? '#about' : '#' + link.href}`}
                className="relative transition-colors hover:text-primary text-foreground/70 group"
                onClick={e => {
                  if (pathname === "/") {
                    e.preventDefault()
                    scrollToSection(link.href)
                  }
                }}
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full" />
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          {/* Mobile Nav */}
          <div className="md:hidden">
            <Sheet open={isSheetOpen} onOpenChange={setSheetOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <Link 
                  href="/"
                  className="flex items-center"
                  onClick={e => {
                    if (pathname === "/") {
                      e.preventDefault()
                      scrollToSection("hero")
                    }
                    setSheetOpen(false)
                  }}
                >
                  <Image 
                    src="/images/logo.png" 
                    alt="Conrado Torres Logo" 
                    width={24} 
                    height={24}
                    className="h-6 w-6"
                  />
                  <span className="ml-2 font-bold text-foreground">Conrado Torres</span>
                </Link>
                <div className="grid gap-4 py-6">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={`/${link.href === 'about' ? '#about' : '#' + link.href}`}
                      className="flex w-full items-center py-2 text-lg font-semibold"
                      onClick={e => {
                        if (pathname === "/") {
                          e.preventDefault()
                          scrollToSection(link.href)
                        }
                        setSheetOpen(false)
                      }}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <nav className="flex items-center">
            <Button asChild size="default" className="cta-primary font-medium px-6">
              <a href="mailto:hello@subeleven.es">
                Contact Me
              </a>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
}
