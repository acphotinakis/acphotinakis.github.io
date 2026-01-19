const skillCategories = [
  {
    title: 'Languages',
    icon: '💻',
    skills: ['C++17', 'Python', 'Java', 'TypeScript', 'SQL', 'Rust', 'Go'],
  },
  {
    title: 'Frameworks',
    icon: '🛠️',
    skills: ['FastAPI', 'React', 'Avalonia UI', 'MPI/OpenMP', 'TensorFlow', 'Selenium'],
  },
  {
    title: 'Cloud',
    icon: '☁️',
    skills: ['Azure', 'AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform'],
  },
  {
    title: 'Data',
    icon: '🗄️',
    skills: ['PostgreSQL', 'MongoDB', 'Redis', 'Kafka', 'Data Pipelines', 'ETL'],
  },
  {
    title: 'AI/ML',
    icon: '🧠',
    skills: ['Neural Networks', 'NLP', 'Computer Vision', 'Reinforcement Learning', 'MLOps'],
  },
  {
    title: 'Finance',
    icon: '📊',
    skills: ['Algo Trading', 'Quant Analysis', 'Risk Modeling', 'Market Data', 'Backtesting'],
  },
];

export function SkillsSection() {
  return (
    <section id="skills" className="py-24 relative border-t border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="section-heading">SKILLS MATRIX</h2>
        </div>

        {/* Skills grid */}
        <div className="space-y-6">
          {skillCategories.map((category) => (
            <div key={category.title} className="terminal-card p-5 hover:border-primary transition-colors duration-200">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-lg">{category.icon}</span>
                <h3 className="text-sm font-medium text-foreground uppercase tracking-wider">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span key={skill} className="skill-tag">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Concepts section */}
        <div className="mt-8 terminal-card p-6">
          <h3 className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">core concepts</h3>
          <div className="flex flex-wrap gap-2">
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
              <span key={concept} className="px-3 py-1 border border-primary text-primary text-xs hover:bg-primary hover:text-background transition-colors cursor-default">
                {concept}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}