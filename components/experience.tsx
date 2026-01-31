export default function Experience() {
  const experiences = [
    {
      company: 'Analytical Instruments (PVT) LTD',
      title: 'Associate Business Analyst',
      period: 'Jan 2026 – Present',
      location: 'Borella, Sri Lanka',
      logo: '/analytical-instruments-logo.png',
      highlights: [
        'Worked on automating Excel processes using Power BI, which helped save time and improve accuracy'
      ]
    },
    {
      company: 'Private Client – Education Sector',
      title: 'Freelance Power BI Analyst',
      period: 'Apr 2025 – Present',
      location: 'Bandar Seri Begawan, Brunei',
      logo: 'gradient', // Special identifier for gradient logo
      highlights: [
        'Designed and delivered interactive Power BI dashboards visualising financial, student, and operational metrics, enabling leadership to make faster, data-backed decisions',
        'Automated manual Excel reports, cutting weekly reporting effort by an estimated 60% and improving data accuracy',
        'Conducted Power BI training for non-technical staff, increasing internal data self-sufficiency and dashboard adoption across departments'
      ]
    },
    {
      company: 'PickMe Digital Mobility Solutions',
      title: 'Business Intelligence Intern',
      period: 'Jun 2023 – Jul 2024',
      location: 'Nugegoda, Sri Lanka',
      logo: '/pickme-logo.jpg',
      highlights: [
        'Conducted customer behaviour analyses using SQL and Python on 1M+ PickMe user records, identifying actionable segments for marketing and retention',
        'Developed geospatial dashboards to detect fraudulent driver activity and competitor presence, helping prevent potential revenue leakage',
        'Built KPI-driven dashboards for Account Manager performance, introducing data transparency in sales evaluation and target-setting',
        'Completed 50+ BI tickets and ad-hoc analyses, delivering timely solutions to business-critical questions from operations, finance, and marketing teams',
        'Represented the BI team in JumJum war rooms — PickMe\'s expansion project in Nepal — providing real-time data insights to guide strategic and operational decisions',
        'Built and deployed 20+ interactive Power BI dashboards to monitor delivery performance, customer behaviour, and operational KPIs for both PickMe and JumJum'
      ]
    }
  ]

  const education = [
    {
      institution: 'University of Westminster (IIT)',
      degree: 'Bachelor of Science (Honours) in Business Data Analytics',
      grade: 'First Class Honours',
      period: 'Colombo, Sri Lanka',
      logo: '/iit-logo.jpg',
      note: 'Industrial Placement at PickMe Digital Mobility Solutions'
    },
    {
      institution: 'Holy Cross College',
      degree: 'G.C.E. Advanced Level – Biology Stream',
      period: 'Kalutara, Sri Lanka',
      year: 'May 2021',
      logo: '/holy-cross-logo.png'
    }
  ]

  return (
    <section className="">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* Work Experience */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-12">Work Experience</h2>
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div key={idx} className="group">
                <div className="flex gap-4 mb-4">
                  <div className="w-16 h-16 rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden border border-border">
                    {exp.logo === 'gradient' ? (
                      <div className="w-full h-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center">
                        <span className="text-white font-bold text-lg">PBI</span>
                      </div>
                    ) : (
                      <img
                        src={exp.logo}
                        alt={`${exp.company} logo`}
                        className="w-full h-full object-contain p-2 bg-background"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{exp.company}</h3>
                    <p className="text-sm text-foreground mt-1">{exp.title}</p>
                    <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                    {exp.location && (
                      <p className="text-xs text-muted-foreground mt-1">📍 {exp.location}</p>
                    )}
                  </div>
                </div>
                <ul className="ml-20 space-y-2">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="text-xs text-muted-foreground flex gap-2">
                      <span className="text-primary font-bold mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight mb-12">Education</h2>
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <div key={idx} className="pb-8 border-b border-border last:border-b-0">
                <div className="flex gap-4">
                  <div className="w-16 h-16 bg-background rounded-lg flex-shrink-0 flex items-center justify-center overflow-hidden border border-border">
                    <img
                      src={edu.logo}
                      alt={`${edu.institution} logo`}
                      className="w-full h-full object-contain p-2"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">{edu.institution}</h3>
                    <p className="text-sm text-foreground mt-1">{edu.degree}</p>
                    {edu.grade && (
                      <p className="text-sm text-primary font-medium mt-1">{edu.grade}</p>
                    )}
                    <p className="text-xs text-muted-foreground mt-2">
                      {edu.period}
                      {edu.year && ` | ${edu.year}`}
                    </p>
                    {edu.note && (
                      <p className="text-xs text-muted-foreground mt-2 italic">
                        • {edu.note}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
