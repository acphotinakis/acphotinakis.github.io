const experiences = [
  {
    company: 'PricewaterhouseCoopers (PwC)',
    role: 'Technology Consulting Intern',
    period: '2024',
    description: 'Accelerated AI-driven document processing pipelines and built cross-platform automation tools using Avalonia UI.',
    metrics: [
      { value: '2x', label: 'pipeline acceleration' },
      { value: '90%', label: 'setup time reduction' },
    ],
    technologies: ['Avalonia UI', 'AI/ML', 'Cross-Platform', 'Document Processing'],
  },
  {
    company: 'TechSource, Inc.',
    role: 'Software Engineering Intern',
    period: '2023',
    description: 'Optimized Java data pipelines on Azure infrastructure, achieving dramatic performance improvements in data transfer operations.',
    metrics: [
      { value: '98%', label: 'execution time reduction' },
      { value: '99%', label: 'data transfer accuracy' },
    ],
    technologies: ['Java', 'Azure', 'Data Pipelines', 'Cloud Infrastructure'],
  },
  {
    company: 'Herrick Technology Labs',
    role: 'Software Engineering Intern',
    period: '2022',
    description: 'Enhanced Vita49 stream reliability and automated testing workflows using Selenium for improved quality assurance.',
    metrics: [
      { value: '50%', label: 'reliability improvement' },
      { value: '80%', label: 'testing efficiency' },
    ],
    technologies: ['Vita49', 'Selenium', 'QA Automation', 'Stream Processing'],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative border-t border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="section-heading">WORK EXPERIENCE</h2>
        </div>

        {/* Experience cards */}
        <div className="space-y-8">
          {experiences.map((exp) => (
            <div 
              key={exp.company} 
              className="terminal-card p-6 hover:border-primary transition-colors duration-200"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-medium text-foreground mb-1">
                    {exp.company}
                  </h3>
                  <p className="text-primary text-sm mb-1">{exp.role}</p>
                  <p className="text-xs text-muted-foreground">{exp.period}</p>
                </div>

                {/* Metrics */}
                <div className="flex flex-wrap gap-3">
                  {exp.metrics.map((metric) => (
                    <div key={metric.label} className="text-right">
                      <div className="metric-badge mb-1">
                        ⚡ {metric.value}
                      </div>
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {exp.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech) => (
                  <span key={tech} className="skill-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}