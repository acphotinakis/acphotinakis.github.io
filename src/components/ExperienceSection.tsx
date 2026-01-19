import { Briefcase, ArrowUpRight, Zap } from 'lucide-react';

const experiences = [
  {
    company: 'PricewaterhouseCoopers (PwC)',
    role: 'Technology Consulting Intern',
    period: '2024',
    description: 'Accelerated AI-driven document processing pipelines and built cross-platform automation tools using Avalonia UI.',
    metrics: [
      { value: '2x', label: 'AI Pipeline Acceleration' },
      { value: '90%', label: 'Setup Time Reduction' },
    ],
    technologies: ['Avalonia UI', 'AI/ML', 'Cross-Platform', 'Document Processing'],
  },
  {
    company: 'TechSource, Inc.',
    role: 'Software Engineering Intern',
    period: '2023',
    description: 'Optimized Java data pipelines on Azure infrastructure, achieving dramatic performance improvements in data transfer operations.',
    metrics: [
      { value: '98%', label: 'Execution Time Reduction' },
      { value: '99%', label: 'Data Transfer Accuracy' },
    ],
    technologies: ['Java', 'Azure', 'Data Pipelines', 'Cloud Infrastructure'],
  },
  {
    company: 'Herrick Technology Labs',
    role: 'Software Engineering Intern',
    period: '2022',
    description: 'Enhanced Vita49 stream reliability and automated testing workflows using Selenium for improved quality assurance.',
    metrics: [
      { value: '50%', label: 'Stream Reliability Improvement' },
      { value: '80%', label: 'Testing Efficiency Gain' },
    ],
    technologies: ['Vita49', 'Selenium', 'QA Automation', 'Stream Processing'],
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-24 relative">
      <div className="absolute inset-0 geometric-bg opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Briefcase className="w-6 h-6 text-primary" />
            </div>
            <h2 className="section-heading text-4xl md:text-5xl">WORK EXPERIENCE</h2>
          </div>

          {/* Experience cards */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div 
                key={exp.company} 
                className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6 mb-6">
                  <div className="flex-1">
                    <div className="flex items-start gap-3 mb-2">
                      <h3 className="font-display text-2xl md:text-3xl text-foreground group-hover:text-primary transition-colors">
                        {exp.company}
                      </h3>
                      <ArrowUpRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <p className="text-primary font-medium mb-1">{exp.role}</p>
                    <p className="font-mono text-sm text-muted-foreground">{exp.period}</p>
                  </div>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-3">
                    {exp.metrics.map((metric) => (
                      <div key={metric.label} className="text-center">
                        <div className="metric-badge mb-1">
                          <Zap className="w-3 h-3 mr-1" />
                          {metric.value}
                        </div>
                        <p className="font-mono text-xs text-muted-foreground">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <p className="text-card-foreground mb-6 leading-relaxed">
                  {exp.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span key={tech} className="skill-tag text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
