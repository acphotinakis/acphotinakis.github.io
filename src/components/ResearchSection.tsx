const research = [
  {
    title: 'Cloud Resilience Architecture',
    subtitle: 'MRS, Dandelion & Elas Wave Analysis',
    icon: '☁️',
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
    icon: '🔐',
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
    <section id="research" className="py-24 relative border-t border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="section-heading">RESEARCH & SYNTHESIS</h2>
        </div>

        {/* Research cards */}
        <div className="space-y-8">
          {research.map((item) => (
            <div key={item.title} className="terminal-card p-6 hover:border-primary transition-colors duration-200">
              <div className="flex items-start gap-4 mb-4">
                <span className="text-2xl">{item.icon}</span>
                <div>
                  <h3 className="text-lg font-medium text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-xs text-primary">{item.subtitle}</p>
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {item.description}
              </p>

              {/* Highlights */}
              <div className="space-y-1 mb-4">
                {item.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="text-primary">▸</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span key={tag} className="skill-tag">
                    {tag}
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