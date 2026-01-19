import { Award, BookOpen, ExternalLink } from 'lucide-react';

const certifications = [
  {
    title: 'AWS Solutions Architect',
    issuer: 'Amazon Web Services',
    type: 'certification',
  },
  {
    title: 'Azure Fundamentals',
    issuer: 'Microsoft',
    type: 'certification',
  },
  {
    title: 'Machine Learning Specialization',
    issuer: 'Stanford Online',
    type: 'course',
  },
  {
    title: 'Financial Engineering',
    issuer: 'Columbia University',
    type: 'course',
  },
  {
    title: 'Blockchain Fundamentals',
    issuer: 'UC Berkeley',
    type: 'course',
  },
  {
    title: 'Algorithmic Trading Strategies',
    issuer: 'QuantInsti',
    type: 'course',
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative">
      <div className="absolute inset-0 geometric-bg opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Award className="w-6 h-6 text-primary" />
            </div>
            <h2 className="section-heading text-4xl md:text-5xl">CERTIFICATIONS & COURSES</h2>
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certifications.map((cert) => (
              <div 
                key={cert.title} 
                className="glass-card rounded-xl p-6 group hover:border-primary/30 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                    cert.type === 'certification' 
                      ? 'bg-accent/10 border border-accent/30' 
                      : 'bg-primary/10 border border-primary/30'
                  }`}>
                    {cert.type === 'certification' ? (
                      <Award className="w-5 h-5 text-accent" />
                    ) : (
                      <BookOpen className="w-5 h-5 text-primary" />
                    )}
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <h3 className="font-display text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.title}
                </h3>
                <p className="font-mono text-sm text-muted-foreground">{cert.issuer}</p>
                
                <div className="mt-4">
                  <span className={`text-xs font-mono uppercase tracking-wider ${
                    cert.type === 'certification' ? 'text-accent' : 'text-primary'
                  }`}>
                    {cert.type}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Future roadmap teaser */}
          <div className="mt-16 text-center">
            <p className="font-mono text-sm text-muted-foreground mb-4">FUTURE ROADMAP</p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Interactive Quant Strategy Builder',
                'AI-Powered Sentiment Analysis',
                '"Behind the Code" Blog Series',
              ].map((item) => (
                <span key={item} className="px-4 py-2 rounded-lg bg-muted/50 border border-dashed border-muted-foreground/30 text-muted-foreground text-sm font-mono">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
