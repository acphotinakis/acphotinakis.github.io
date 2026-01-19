const projects = [
  {
    title: 'SBMPI Blockchain Simulator',
    tagline: 'Parallel Consensus Engine',
    description: 'Engineered a parallel blockchain simulator using C++17, MPI, and OpenMP with PBFT consensus to achieve horizontal scalability across distributed nodes.',
    icon: '🔗',
    metrics: ['C++17', 'MPI/OpenMP', 'PBFT'],
    highlights: [
      'Horizontal scalability across clusters',
      'Byzantine fault tolerance implementation',
      'Parallel transaction processing',
    ],
  },
  {
    title: 'TradeSync',
    tagline: 'AI-Powered Trading Simulator',
    description: 'Architected a real-time trading simulator achieving sub-5ms order execution and processing 1,000 ticks/second using Python FastAPI and WebSockets.',
    icon: '📈',
    metrics: ['<5ms', '1K tps', 'AI'],
    highlights: [
      'WebSocket streaming architecture',
      'Machine learning price prediction',
      'FastAPI high-performance backend',
    ],
  },
  {
    title: 'RDT Email Service',
    tagline: 'Custom Reliable Transport',
    description: 'Implemented a custom RDT 3.0 protocol over UDP with non-blocking packet ingestion and atomic filesystem persistence for reliable email delivery.',
    icon: '📧',
    metrics: ['RDT 3.0', 'UDP', 'Non-blocking'],
    highlights: [
      'Custom reliable data transfer protocol',
      'Atomic filesystem operations',
      'Packet loss recovery mechanisms',
    ],
  },
  {
    title: 'Aegis-Nexus',
    tagline: 'Secure Gaming Platform',
    description: 'Developed a secure multiplayer game platform utilizing Attribute-Based Encryption (ABE) and field-level encryption with AES-256-GCM for data protection.',
    icon: '🎮',
    metrics: ['ABE', 'AES-256', 'Zero-Trust'],
    highlights: [
      'Attribute-based access control',
      'End-to-end field encryption',
      'Real-time secure multiplayer',
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative border-t border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="section-heading">PROJECTS</h2>
        </div>

        {/* Projects grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <div 
              key={project.title} 
              className="terminal-card p-6 hover:border-primary transition-colors duration-200"
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{project.icon}</span>
                  <div>
                    <h3 className="text-lg font-medium text-foreground">
                      {project.title}
                    </h3>
                    <p className="text-xs text-primary">{project.tagline}</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  {project.metrics.map((metric) => (
                    <span key={metric} className="metric-badge">
                      {metric}
                    </span>
                  ))}
                </div>
              </div>

              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technical highlights */}
              <div className="space-y-1">
                {project.highlights.map((highlight) => (
                  <div key={highlight} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <span className="text-primary">▸</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}