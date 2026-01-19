export const experiencesData = [
  {
    companyInfo: {
      company: 'PricewaterhouseCoopers (PwC)',
      role: 'Software Engineer & Cyber Risk Consulting Intern',
      period: 'June 2025 - August 2025',
      location: 'Washington, D.C.',
    },
    description: [
      'Accelerated AI-driven document processing pipeline by 2x through consolidating Python and .NET workflows into a unified C# (.NET Core) system, improving reliability and maintainability for LLM orchestration and YAML validation.',
      'Boosted dashboard refresh speed and accuracy by designing a modular Angular frontend integrated with Node.js and BigQuery, enabling real-time metric visualizations in Google Cloud Console for faster business insights.',
      'Reduced manual setup time by 90% with a cross-platform Avalonia UI automation tool and cut Vertex AI YAML hallucinations by 80% by implementing robust prompt-safe schema constraints, enhancing overall system stability and user trust.',
    ],
    keywords: ['AI-driven', 'Python', '.NET', 'C#', 'LLM orchestration', 'Angular', 'Node.js', 'BigQuery', 'Google Cloud', 'Avalonia UI', 'Vertex AI'],
    metrics: [
      { value: '2x', label: 'pipeline acceleration' }, 
      { value: '90%', label: 'manual setup time reduction' }, 
      { value: '80%', label: 'reduction in Vertex AI YAML hallucinations' },
    ],
    technologies: ['C# (.NET Core)', 'Python', 'Angular', 'Node.js', 'BigQuery', 'Avalonia UI', 'Vertex AI', 'Google Cloud Platform'],
  },
  {
    companyInfo: {
      company: 'TechSource, Inc.',
      role: 'Software Engineering Co-op',
      period: 'January 2024 - December 2025',
      location: 'Germantown, Maryland',
    },
    description: [
      'Led development of a fully automated Java data pipeline on Azure Function Apps, slashing execution time by 98%, improving data accuracy and flexibility, reducing operational costs, and automating daily execution reports sent to business stakeholders, enhancing transparency and operational oversight.',
      'Integrated Swagger and SOAP APIs with modular Java libraries to achieve 99% data transfer accuracy and streamline complex data extraction and transformation workflows, enabling more reliable downstream analytics.',
      'Created reusable, responsive UI components with TypeScript, TailwindCSS, and Next.js for the U.S. Department of Energy\'s GPT-4-powered AI platform, enhancing user experience and boosting frontend performance.',
    ],
    keywords: ['Java', 'Azure Function Apps', 'Swagger', 'SOAP APIs', 'TypeScript', 'TailwindCSS', 'Next.js', 'GPT-4'],
    metrics: [
      { value: '98%', label: 'execution time reduction' },
      { value: '99%', label: 'data transfer accuracy' },
    ],
    technologies: ['Java', 'Azure Function Apps', 'Swagger', 'SOAP APIs', 'TypeScript', 'TailwindCSS', 'Next.js'],
  },
  {
    companyInfo: {
      company: 'Herrick Technology Laboratories',
      role: 'Software Engineering Co-op',
      period: 'May 2023 - August 2023',
      location: 'Germantown, Maryland',
    },
    description: [
      'Developed a dynamic linking library using Boost C++ and DLL interfaces to integrate HTL radios with third-party software, improving Vita49 stream generation and data capture reliability by 50%, enabling more robust real-time radio communications.',
      'Optimized cross-system data flow and reduced integration errors by refining radio-software interface protocols and collaborating with industry partners, resulting in smoother data transmission and enhanced system stability.',
      'Automated functional and regression UI testing using Selenium and PyTest, increasing testing efficiency by 80% and ensuring consistent service reliability across integrated HTL applications.',
    ],
    keywords: ['Boost C++', 'DLL', 'Vita49', 'Selenium', 'PyTest', 'radio-software interface'],
    metrics: [
      { value: '50%', label: 'data capture reliability improvement' },
      { value: '80%', label: 'testing efficiency increase' },
    ],
    technologies: ['C++', 'Boost C++', 'Vita49', 'Selenium', 'PyTest'],
  },
];

export function ExperienceSection() {
  const escapeRegExp = (string: string) => string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

  const highlightKeywords = (text: string, keywords: string[]) => {
    let parts: (string | JSX.Element)[] = [text];
    keywords.forEach((keyword) => {
      const safeKeyword = escapeRegExp(keyword); // <-- escape special chars
      const regex = new RegExp(`(${safeKeyword})`, 'gi');
      parts = parts.flatMap((part) => {
        if (typeof part !== 'string') return [part];
        return part.split(regex).map((chunk, i) =>
          regex.test(chunk) ? <strong key={i} className="font-semibold text-white">{chunk}</strong> : chunk
        );
      });
    });
    return parts;
  };

  return (
    <section id="experience" className="py-24 relative border-t border-border">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="mb-12">
          <h2 className="section-heading">WORK EXPERIENCE</h2>
        </div>

        <div className="space-y-8">
          {experiencesData.map((exp, idx) => (
            <div 
              key={exp.companyInfo.company + idx} 
              className="terminal-card p-6 hover:border-primary transition-colors duration-200"
            >
              {/* Company & Role */}
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-lg md:text-xl font-medium text-foreground mb-1">
                    {exp.companyInfo.company}
                  </h3>
                  <p className="text-primary text-sm mb-1">{exp.companyInfo.role}</p>
                  <p className="text-xs text-muted-foreground">
                    {exp.companyInfo.period} | {exp.companyInfo.location}
                  </p>
                </div>

                {/* Metrics */}
                <div className="flex flex-col gap-3 text-right">
                  {exp.metrics.map((metric) => (
                    <div key={metric.label}>
                      <div className="metric-badge mb-1">
                        ⚡ {metric.value}
                      </div>
                      <p className="text-xs text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Description */}
              <ul className="list-disc list-inside text-muted-foreground text-sm mb-4 leading-relaxed gap-y-4 mt-4">
                {exp.description.map((desc, i) => (
                  <li key={i} className="mb-6">{highlightKeywords(desc, exp.keywords)}</li>
                ))}
              </ul>

              {/* Technologies */}
              <div className="flex flex-wrap gap-y-4">
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
