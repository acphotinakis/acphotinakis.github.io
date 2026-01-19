import { Layers, Code, Database, Cloud, Brain, Terminal } from 'lucide-react';

const skillCategories = [
  {
    title: 'Languages',
    icon: Code,
    skills: ['C++17', 'Python', 'Java', 'TypeScript', 'SQL', 'Rust', 'Go'],
  },
  {
    title: 'Frameworks & Libraries',
    icon: Terminal,
    skills: ['FastAPI', 'React', 'Avalonia UI', 'MPI/OpenMP', 'TensorFlow', 'Selenium'],
  },
  {
    title: 'Cloud & Infrastructure',
    icon: Cloud,
    skills: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
  },
  {
    title: 'Data & Databases',
    icon: Database,
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Data Pipelines', 'ETL'],
  },
  {
    title: 'AI & Machine Learning',
    icon: Brain,
    skills: ['Neural Networks', 'NLP', 'Computer Vision', 'Reinforcement Learning', 'MLOps'],
  },
  {
    title: 'Finance & Trading',
    icon: Layers,
    skills: ['Algorithmic Trading', 'Quantitative Analysis', 'Risk Modeling', 'Market Data', 'Backtesting'],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
              <Layers className="w-6 h-6 text-primary" />
            </div>
            <h2 className="section-heading text-4xl md:text-5xl">SKILLS MATRIX</h2>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => {
              const Icon = category.icon;
              return (
                <div key={category.title} className="glass-card rounded-2xl p-6 group hover:border-primary/30 transition-all duration-500">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display text-xl text-foreground">{category.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <span key={skill} className="skill-tag text-xs">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Concepts section */}
          <div className="mt-12 glass-card rounded-2xl p-8">
            <h3 className="font-display text-2xl text-foreground mb-6">CORE CONCEPTS</h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Distributed Systems',
                'Blockchain & Consensus',
                'PBFT',
                'Cryptographic Protocols',
                'High-Frequency Trading',
                'Real-Time Systems',
                'Parallel Computing',
                'Network Programming',
                'Security Architecture',
                'System Design',
                'Performance Optimization',
                'Financial Engineering',
              ].map((concept) => (
                <span key={concept} className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent font-mono text-sm hover:bg-accent/20 transition-colors cursor-default">
                  {concept}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
