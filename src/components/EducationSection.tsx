export function EducationSection() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="section-heading">EDUCATION & HONORS</h2>
        </div>

        {/* Main education card */}
        <div className="terminal-card p-6 md:p-8 mb-8">
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
            <div>
              <h3 className="text-xl md:text-2xl font-medium text-foreground mb-2">
                Bachelor of Science
              </h3>
              <p className="text-primary mb-3">
                Computer Science & Finance
              </p>
              <div className="flex flex-wrap gap-4 text-muted-foreground text-sm">
                <span>📍 University</span>
                <span>📅 Expected 2025</span>
              </div>
            </div>
            
            {/* Presidential Scholar badge */}
            <div className="flex-shrink-0">
              <div className="px-4 py-3 border border-primary">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🏆</span>
                  <div>
                    <p className="text-primary font-medium">Presidential Scholar</p>
                    <p className="text-xs text-muted-foreground">highest academic honor</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Coursework grid */}
          <div className="border-t border-border pt-6">
            <h4 className="text-sm text-muted-foreground mb-4 uppercase tracking-wider">relevant coursework</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {[
                'Data Structures',
                'Distributed Systems',
                'Machine Learning',
                'Quantitative Finance',
                'Database Systems',
                'Computer Networks',
                'Financial Modeling',
                'Cryptography',
              ].map((course) => (
                <div key={course} className="skill-tag text-center">
                  {course}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}