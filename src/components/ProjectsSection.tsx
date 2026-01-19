import { Code2, GitBranch, Zap, Lock, Server, Activity } from 'lucide-react';

const projects = [
  {
    title: 'SBMPI Blockchain Simulator',
    tagline: 'Parallel Consensus Engine',
    description: 'Engineered a parallel blockchain simulator using C++17, MPI, and OpenMP with PBFT consensus to achieve horizontal scalability across distributed nodes.',
    icon: GitBranch,
    metrics: ['C++17', 'MPI/OpenMP', 'PBFT Consensus'],
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
    icon: Activity,
    metrics: ['<5ms Latency', '1K ticks/sec', 'Real-time AI'],
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
    icon: Server,
    metrics: ['RDT 3.0', 'UDP Transport', 'Non-blocking I/O'],
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
    icon: Lock,
    metrics: ['ABE', 'AES-256-GCM', 'Zero-Trust'],
    highlights: [
      'Attribute-based access control',
      'End-to-end field encryption',
      'Real-time secure multiplayer',
    ],
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 relative">
      <div className="absolute inset-0 geometric-bg opacity-30" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <h2 className="section-heading text-4xl md:text-5xl">PROJECTS</h2>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => {
              const Icon = project.icon;
              return (
                <div 
                  key={project.title} 
                  className="glass-card rounded-2xl p-8 group hover:border-primary/30 transition-all duration-500 relative overflow-hidden"
                >
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="relative z-10">
                    <div className="flex items-start justify-between mb-6">
                      <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Icon className="w-7 h-7 text-primary" />
                      </div>
                      <div className="flex gap-2">
                        {project.metrics.map((metric) => (
                          <span key={metric} className="metric-badge text-xs">
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl text-foreground mb-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="font-mono text-sm text-accent mb-4">{project.tagline}</p>

                    <p className="text-card-foreground mb-6 leading-relaxed text-sm">
                      {project.description}
                    </p>

                    {/* Technical highlights */}
                    <div className="space-y-2">
                      {project.highlights.map((highlight) => (
                        <div key={highlight} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Zap className="w-3 h-3 text-primary" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
