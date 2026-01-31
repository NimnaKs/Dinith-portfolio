'use client'

import { useEffect, useState } from 'react'
import { useTheme } from 'next-themes'
import Link from 'next/link'
import Hero from '@/components/hero'
import About from '@/components/about'
import Experience from '@/components/experience'
import Projects from '@/components/projects'
import Skills from '@/components/skills'
import ContactForm from '@/components/contact-form'
import Gallery from '@/components/gallery'

export default function Home() {
  const [activeSection, setActiveSection] = useState('about')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'experience', 'projects', 'gallery', 'contact']

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(sectionId)
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-40 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 h-16 flex items-center justify-between">
          <button
            onClick={() => scrollToSection('about')}
            className="text-base sm:text-lg font-semibold tracking-tight hover:opacity-70 transition-opacity"
          >
            Dinith Perera
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 items-center">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-md border border-border hover:bg-secondary transition-all duration-300 hover:scale-110"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
                  </svg>
                )}
              </button>
            )}
            <button
              onClick={() => scrollToSection('about')}
              className={`text-sm font-medium transition-colors ${activeSection === 'about'
                ? 'text-foreground border-b-2 border-foreground pb-1'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              About
            </button>

            <button
              onClick={() => scrollToSection('experience')}
              className={`text-sm font-medium transition-colors ${activeSection === 'experience'
                ? 'text-foreground border-b-2 border-foreground pb-1'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              Experience
            </button>

            <button
              onClick={() => scrollToSection('projects')}
              className={`text-sm font-medium transition-colors ${activeSection === 'projects'
                ? 'text-foreground border-b-2 border-foreground pb-1'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              Projects
            </button>

            <button
              onClick={() => scrollToSection('gallery')}
              className={`text-sm font-medium transition-colors ${activeSection === 'gallery'
                ? 'text-foreground border-b-2 border-foreground pb-1'
                : 'text-muted-foreground hover:text-foreground'
                }`}
            >
              Gallery
            </button>

            <button
              onClick={() => scrollToSection('contact')}
              className={`text-sm font-medium px-4 py-2 rounded-md transition-all ${activeSection === 'contact'
                ? 'bg-primary text-primary-foreground'
                : 'border border-border hover:bg-secondary'
                }`}
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="flex md:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="p-2 rounded-md border border-border hover:bg-secondary transition-all duration-300 hover:scale-110"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="5" />
                    <line x1="12" y1="1" x2="12" y2="3" />
                    <line x1="12" y1="21" x2="12" y2="23" />
                    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                    <line x1="1" y1="12" x2="3" y2="12" />
                    <line x1="21" y1="12" x2="23" y2="12" />
                    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                  </svg>
                ) : (
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
                  </svg>
                )}
              </button>
            )}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md border border-border hover:bg-secondary transition-colors"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="px-4 sm:px-6 py-4 space-y-2">
              <button
                onClick={() => {
                  scrollToSection('about')
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-2 rounded-md font-medium transition-colors ${activeSection === 'about'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
              >
                About
              </button>

              <button
                onClick={() => {
                  scrollToSection('experience')
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-2 rounded-md font-medium transition-colors ${activeSection === 'experience'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
              >
                Experience
              </button>

              <button
                onClick={() => {
                  scrollToSection('projects')
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-2 rounded-md font-medium transition-colors ${activeSection === 'projects'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
              >
                Projects
              </button>

              <button
                onClick={() => {
                  scrollToSection('gallery')
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-2 rounded-md font-medium transition-colors ${activeSection === 'gallery'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
              >
                Gallery
              </button>

              <button
                onClick={() => {
                  scrollToSection('contact')
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-2 rounded-md font-medium transition-colors ${activeSection === 'contact'
                  ? 'bg-primary text-primary-foreground'
                  : 'text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      <main className="max-w-6xl mx-auto px-6 md:px-12">
        {/* About Section */}
        <section id="about" className="pt-8 pb-12 md:pt-12 md:pb-20">
          <Hero />
          <div className="mt-12 md:mt-16">
            <About />
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-12 md:py-20 border-t border-border">
          <Experience />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-20 border-t border-border">
          <Projects />
          <div className="mt-12 md:mt-16">
            <Skills />
          </div>
        </section>

        {/* Gallery Section */}
        <section id="gallery" className="py-12 md:py-20 border-t border-border">
          <Gallery />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-12 md:py-16 border-t border-border">
          <div className="max-w-3xl mx-auto text-center px-4">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              Let's Connect
            </h2>
            <p className="text-lg text-muted-foreground mb-12 leading-relaxed">
              I'm currently open to new opportunities and collaborations. Whether you have a question,
              a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>

            {/* Contact Details - Minimal Row */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-16 text-sm text-muted-foreground">
              <a href="mailto:vdinithperera@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <div className="p-2 bg-secondary rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                </div>
                <span>vdinithperera@gmail.com</span>
              </a>
              <a href="tel:+94768895297" className="flex items-center gap-3 hover:text-primary transition-colors">
                <div className="p-2 bg-secondary rounded-full">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                </div>
                <span>+94 76 88 95 297</span>
              </a>
            </div>

            {/* Centered Form */}
            <div className="max-w-xl mx-auto mb-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border mt-0 pb-32">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center">
          <p className="text-sm font-medium text-muted-foreground tracking-wide">
            © 2024 Dinith Perera. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Floating Dock */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-2 p-2 rounded-2xl bg-background/80 backdrop-blur-md border border-border shadow-xl">
          <a
            href="/"
            className="p-3 rounded-xl hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            aria-label="Home"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
          </a>
          <div className="w-px h-6 bg-border mx-1" />
          <a
            href="tel:+94768895297"
            className="p-3 rounded-xl hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            aria-label="Phone"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
          </a>
          <a
            href="https://github.com/DinithMPerera"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            aria-label="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path></svg>
          </a>
          <a
            href="https://linkedin.com/in/dinithperera"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            aria-label="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 21.227.792 22 1.771 22h20.451C23.2 22 24 21.227 24 20.542V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg>
          </a>
          <a
            href="https://wa.me/94768895297"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-xl hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
            aria-label="WhatsApp"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.15-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"></path></svg>
          </a>
          <div className="w-px h-6 bg-border mx-1" />
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-3 rounded-xl hover:bg-secondary text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="5" />
                  <line x1="12" y1="1" x2="12" y2="3" />
                  <line x1="12" y1="21" x2="12" y2="23" />
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                  <line x1="1" y1="12" x2="3" y2="12" />
                  <line x1="21" y1="12" x2="23" y2="12" />
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
                </svg>
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}
