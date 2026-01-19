import { FlaskConical, Cloud, Shield, Cpu, Database } from 'lucide-react';

const research = [
  {
    title: 'Cloud Resilience Architecture',
    subtitle: 'MRS, Dandelion & Elas Wave Analysis',
    icon: Cloud,
    description: 'Synthesized research advocating for "elastic-native" designs that eliminate POSIX-legacy latency in modern cloud infrastructure.',
    highlights: [
      'Geometric-interval discretization patterns',
      'I/O interference mitigation strategies',
      'Latency optimization frameworks',
    ],
    tags: ['Distributed Systems', 'Cloud Architecture', 'Performance'],
  },
  {
    title: 'SecureAuditX',
    subtitle: 'Privacy-Preserving Data Integrity',
    icon: Shield,
    description: 'Evaluated privacy-preserving data integrity auditing mechanisms across cloud and IoT environments using cutting-edge cryptographic methods.',
    highlights: [
      'Homomorphic verification protocols',
      'Hardware roots of trust (TEEs)',
      'Cross-platform audit trails',
    ],
    tags: ['Cryptography', 'IoT Security', 'Privacy'],
  },
];

export function ResearchSection() {
  return (
    <section id="research" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
              <FlaskConical className="w-6 h-6 text-primary" />
            </div>
            <h2 className="section-heading text-4xl md:text-5xl">RESEARCH & SYNTHESIS</h2>
          </div>

          {/* Research cards */}
          <div className="grid md:grid-cols-2 gap-8">
            {research.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="glass-card rounded-2xl p-8 group hover:border-primary/30 transition-all duration-500">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl text-foreground group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                      <p className="font-mono text-sm text-accent">{item.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-card-foreground mb-6 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {item.highlights.map((highlight) => (
                      <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="skill-tag text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Research motif decoration */}
          <div className="mt-12 flex justify-center gap-4">
            <Cpu className="w-8 h-8 text-primary/30 animate-float" />
            <Database className="w-8 h-8 text-accent/30 animate-float" style={{ animationDelay: '-2s' }} />
            <Cloud className="w-8 h-8 text-primary/30 animate-float" style={{ animationDelay: '-4s' }} />
          </div>
        </div>
      </div>
    </section>
  );
}
