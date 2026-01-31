export default function Skills() {
  const skillCategories = [
    {
      name: 'Analytics Tools',
      skills: ['Power BI', 'Tableau', 'MODE Analytics', 'Excel', 'Power Query']
    },
    {
      name: 'Languages',
      skills: ['SQL', 'Python', 'DAX']
    },
    {
      name: 'Python Libraries',
      skills: ['pandas', 'matplotlib', 'seaborn', 'NumPy']
    },
    {
      name: 'Business Intelligence',
      skills: ['KPI Tracking', 'Data Modelling', 'Dashboard Design', 'Data Transformation']
    },
    {
      name: 'Machine Learning',
      skills: ['Clustering', 'Regression', 'Predictive Modelling']
    },
    {
      name: 'Other',
      skills: ['Git', 'Data Cleaning', 'Visualisation Storytelling']
    }
  ]

  return (
    <section className="">
      <h2 className="text-2xl font-bold tracking-tight mb-12">Technical Skills</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map(category => (
          <div
            key={category.name}
            className="p-6 rounded-lg border border-border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/50"
          >
            <h3 className="font-semibold text-foreground mb-4 text-lg">{category.name}</h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map(skill => (
                <span
                  key={skill}
                  className="px-3 py-1.5 bg-secondary text-foreground rounded-full text-xs font-medium hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
