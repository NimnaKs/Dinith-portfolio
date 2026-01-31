'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
  const [isHovering, setIsHovering] = useState(false)

  const handleDownloadResume = () => {
    // Create a link to download resume
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Dinith_Perera_Resume.pdf'
    link.click()
  }

  return (
    <section className="pt-2 pb-6 sm:pt-4 sm:pb-8 md:pt-6 md:pb-12">
      <div className="flex flex-col items-center gap-4 sm:gap-6">
        {/* Profile Image - Centered and Smaller */}
        <div
          className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 transition-transform duration-500 hover:scale-105"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <div className={`absolute inset-0 rounded-full transition-all duration-500 ${isHovering ? 'shadow-2xl shadow-primary/30' : 'shadow-lg'}`}>
            <Image
              src="/profile.jpg"
              alt="Dinith Perera - Data Analytics Professional"
              fill
              className="rounded-full object-cover border-4 border-border"
              priority
            />
          </div>
        </div>

        {/* Text Content - Centered */}
        <div className="text-center max-w-2xl px-4 sm:px-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 sm:mb-3 md:mb-4 animate-fade-in">
            Hi, I'm Dinith Perera
          </h1>

          <p className="text-base sm:text-lg md:text-xl text-primary font-semibold mb-2 sm:mb-3">
            Data Analytics Professional
          </p>

          <p className="text-sm sm:text-base md:text-lg text-muted-foreground mb-6 sm:mb-8 leading-relaxed">
            Transforming complex data into clear, actionable insights. Specializing in SQL, Python, dashboards, and data narratives that drive informed decision-making.
          </p>

          <div className="flex flex-row gap-2 sm:gap-4 justify-center w-full">
            <button
              onClick={() => {
                const element = document.getElementById('contact')
                element?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-all hover:shadow-lg hover:scale-105 duration-300"
            >
              Get In Touch
            </button>

            <button
              onClick={handleDownloadResume}
              className="px-4 sm:px-6 py-2 sm:py-2.5 text-xs sm:text-sm border-2 border-primary text-primary font-medium rounded-md hover:bg-primary hover:text-primary-foreground transition-all hover:shadow-lg hover:scale-105 duration-300 flex items-center justify-center gap-2"
            >
              <svg className="w-3 sm:w-4 h-3 sm:h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19v-7m0 0V5m0 7H5m7 0h7" />
              </svg>
              Download Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
