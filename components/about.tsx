'use client'

import { useState } from 'react'

export default function About() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="">
      {/* Professional Summary */}
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="space-y-4 text-base md:text-lg text-muted-foreground leading-relaxed">
          <p className="animate-fade-in">
            I'm a <span className="text-foreground font-semibold">Data Analyst</span> with hands-on experience delivering insightful dashboards and data models for business decision-making. Currently working as an <span className="text-foreground font-semibold">Associate Business Analyst at Analytical Instruments (PVT) LTD</span>, I specialize in transforming large datasets into actionable intelligence that improves efficiency and strategic clarity.
          </p>
          <p className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
            My journey includes a rewarding stint as a <span className="text-foreground font-semibold">Business Intelligence Intern at PickMe Digital Mobility Solutions</span>, where I conducted customer behaviour analyses on 1M+ user records, developed geospatial dashboards to detect fraudulent activity, and built 20+ interactive Power BI dashboards for operational KPIs. I also contributed to strategic expansion projects, providing real-time data insights for decision-making.
          </p>
          <p className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
            I hold a <span className="text-foreground font-semibold">First Class Honours degree in Business Data Analytics</span> from the University of Westminster (IIT), where I completed my final year research on comparative need state analysis for ride-hailing platforms using K-Modes clustering and interactive Power BI dashboards.
          </p>
          <p className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
            I'm passionate about <span className="text-foreground font-semibold">data storytelling, automation, and driving measurable impact</span> through analytics. Whether it's automating Excel processes, designing executive dashboards, or training teams on BI tools, I thrive on making data accessible and actionable for everyone.
          </p>
        </div>
      </div>
    </section>
  )
}
