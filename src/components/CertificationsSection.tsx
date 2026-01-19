const certifications = [
  {
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    type: 'certification',
    icon: '🏅',
  },
  {
    title: 'Azure Fundamentals',
    issuer: 'Microsoft',
    type: 'certification',
    icon: '🏅',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Stanford Online',
    type: 'course',
    icon: '📚',
  },
  {
    title: 'Financial Engineering',
    issuer: 'Columbia University',
    type: 'course',
    icon: '📚',
  },
  {
    title: 'Blockchain Fundamentals',
    issuer: 'UC Berkeley',
    type: 'course',
    icon: '📚',
  },
  {
    title: 'Algorithmic Trading Strategies',
    issuer: 'QuantInsti',
    type: 'course',
    icon: '📚',
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative border-t border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="section-heading">CERTIFICATIONS & COURSES</h2>
        </div>

        {/* Grid */}
        <div className="space-y-4">
          {certifications.map((cert) => (
            <div 
              key={cert.title} 
              className="terminal-card p-4 hover:border-primary transition-colors duration-200 flex items-start justify-between gap-4"
            >
              <div className="flex items-start gap-3">
                <span className="text-lg">{cert.icon}</span>
                <div>
                  <h3 className="text-sm font-medium text-foreground">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-muted-foreground">{cert.issuer}</p>
                </div>
              </div>
              
              <span className={`text-xs uppercase tracking-wider ${
                cert.type === 'certification' ? 'text-primary' : 'text-muted-foreground'
              }`}>
                {cert.type}
              </span>
            </div>
          ))}
        </div>

        {/* Future roadmap teaser */}
        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">future roadmap</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Interactive Quant Strategy Builder',
              'AI-Powered Sentiment Analysis',
              '"Behind the Code" Blog Series',
            ].map((item) => (
              <span key={item} className="px-3 py-2 border border-dashed border-border text-muted-foreground text-xs">
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}