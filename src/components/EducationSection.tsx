import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

export function EducationSection() {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="flex items-center gap-4 mb-12">
            <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
              <GraduationCap className="w-6 h-6 text-primary" />
            </div>
            <h2 className="section-heading text-4xl md:text-5xl">EDUCATION & HONORS</h2>
          </div>

          {/* Main education card */}
          <div className="glass-card rounded-2xl p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
              <div>
                <h3 className="font-display text-3xl md:text-4xl text-foreground mb-2">
                  Bachelor of Science
                </h3>
                <p className="text-xl text-primary font-medium mb-3">
                  Computer Science & Finance
                </p>
                <div className="flex flex-wrap gap-4 text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    <span className="font-mono text-sm">University</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span className="font-mono text-sm">Expected 2025</span>
                  </div>
                </div>
              </div>
              
              {/* Presidential Scholar badge */}
              <div className="flex-shrink-0">
                <div className="glass-card px-6 py-4 rounded-xl border border-accent/30 bg-accent/5">
                  <div className="flex items-center gap-3">
                    <Award className="w-8 h-8 text-accent" />
                    <div>
                      <p className="font-display text-lg text-accent">Presidential Scholar</p>
                      <p className="font-mono text-xs text-muted-foreground">Highest Academic Honor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Coursework grid */}
            <div className="border-t border-border pt-8">
              <h4 className="font-display text-xl text-foreground mb-4">RELEVANT COURSEWORK</h4>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {[
                  'Data Structures & Algorithms',
                  'Distributed Systems',
                  'Machine Learning',
                  'Quantitative Finance',
                  'Database Systems',
                  'Computer Networks',
                  'Financial Modeling',
                  'Cryptography',
                ].map((course) => (
                  <div key={course} className="skill-tag text-center text-xs">
                    {course}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
