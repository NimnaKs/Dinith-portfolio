export default function Projects() {
  const project = {
    title: 'Comparative Need State Analysis for Ride-Hailing Platforms: PickMe vs. Uber',
    subtitle: 'Final Year Research Project',
    description: 'A comprehensive research study analyzing customer behavior and preferences in the competitive ride-hailing market, utilizing advanced clustering techniques and interactive data visualization.',
    image: '/project-dashboard.jpg',
    tags: ['Power BI', 'K-Modes Clustering', 'Python', 'Survey Analysis', 'Data Analytics', 'Customer Segmentation'],
    highlights: [
      'Collected and analysed survey data from 400+ respondents to identify four distinct customer segments using K-Modes clustering',
      'Built an interactive Power BI dashboard visualising customer profiles and behavioural insights to support targeted marketing and retention strategies',
      'Demonstrated how data-driven personalisation could improve user frequency and loyalty within competitive ride-hailing markets'
    ],
    github: 'https://github.com/DinithMPerera/Comparative-Need-State-Analysis-for-Ride-Hailing-Platforms--A-Case-Study-on-PickMe-and-Uber'
  }

  return (
    <section className="">
      <div>
        <h2 className="text-2xl font-bold tracking-tight mb-4">Featured Project</h2>
        <p className="text-muted-foreground mb-12">
          My final year research project demonstrating advanced analytics and data-driven decision making.
        </p>

        {/* Project Card */}
        <div className="border border-border rounded-lg overflow-hidden hover:border-primary transition-all hover:shadow-xl">
          {/* Project Image */}
          <div className="h-64 md:h-80 bg-secondary overflow-hidden relative">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Project Info */}
          <div className="p-6 md:p-8">
            <div className="mb-2">
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                {project.subtitle}
              </span>
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4">
              {project.title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-6 leading-relaxed">
              {project.description}
            </p>

            {/* Highlights */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold text-foreground mb-3">Key Achievements:</h4>
              <ul className="space-y-2">
                {project.highlights.map((highlight, i) => (
                  <li key={i} className="text-sm text-muted-foreground flex gap-2">
                    <span className="text-primary font-bold mt-0.5">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tags */}
            <div className="flex gap-2 flex-wrap mb-6">
              {project.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1 text-xs rounded-full bg-secondary text-foreground font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* GitHub Link */}
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-all hover:shadow-lg font-medium"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>

          </div>
        </div>
      </div>
    </section>
  )
}
