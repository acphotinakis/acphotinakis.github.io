export function EducationSection() {
  const educationHonorsData = {
    educations: [
      {
        institution: 'Rochester Institute of Technology',
        degree: 'M.Sc. Computer Science',
        location: 'Rochester, NY',
        from: 'August 2025',
        to: 'December 2026',
        level: 'Master’s',
        description:
          'Specializing in advanced AI, machine learning, and algorithmic trading systems.',
        highlightColor: '#F87171',
        coursework: ['Artificial Intelligence', 'Distributed Systems', 'Machine Learning', 'Quantitative Finance'],
      },
      {
        institution: 'Rochester Institute of Technology',
        degree: 'B.Sc. Computer Science',
        location: 'Zagreb, Croatia',
        from: 'January 2024',
        to: 'May 2024',
        level: 'Bachelor’s',
        description: 'Study abroad',
        highlightColor: '#4ADE80',
        coursework: [],
      },
      {
        institution: 'Rochester Institute of Technology',
        degree: 'B.Sc. Computer Science',
        location: 'Rochester, NY',
        from: 'August 2021',
        to: 'May 2025',
        level: 'Bachelor’s',
        description:
          'Pursuing a strong foundation in software engineering, algorithms, and systems design.',
        highlightColor: '#4ADE80',
        coursework: ['Database Systems', 'Computer Networks', 'Financial Modeling', 'Cryptography'],
      },
      {
        institution: 'Rochester Institute of Technology',
        location: 'Rochester, NY',
        degree: 'Minor in Finance',
        from: 'August 2022',
        to: 'December 2024',
        level: 'Bachelor’s',
        description:
          'Exploring financial markets, investing, and the intersection of technology and finance.',
        highlightColor: '#4ADE80',
        coursework: [],
      },
    ],
    honors: [
      { honorName: 'RIT Presidential Scholar', from: '2021', to: '2026', icon: '🏆' },
      { honorName: "Dean's List Fall '25", from: '2025', to: '2025' },
      { honorName: "Dean's List Spring '25", from: '2025', to: '2025' },
      { honorName: "Dean's List Fall '24", from: '2024', to: '2024' },
      { honorName: "Dean's List Fall '23", from: '2023', to: '2023' },
      { honorName: "Dean's List Fall '22", from: '2022', to: '2022' },
      { honorName: "Dean's List Spring '22", from: '2022', to: '2022' },
    ],
  };

  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="mb-12">
          <h2 className="section-heading">EDUCATION</h2>
        </div>

        {/* Education Cards */}
        <div className="flex flex-col gap-8">
          {educationHonorsData.educations.map((edu, index) => (
            <div
              key={index}
              className="terminal-card p-6 md:p-8"
              style={{ borderLeft: `4px solid ${edu.highlightColor}` }}
            >
              <h3 className="text-xl md:text-2xl font-medium text-foreground mb-1">{edu.degree}</h3>
              <p className="text-primary mb-2">{edu.level}</p>
              <p className="text-muted-foreground mb-2">
                📍 {edu.institution}, {edu.location} | 📅 {edu.from} - {edu.to}
              </p>
              <p className="mb-4">{edu.description}</p>

              {edu.coursework && edu.coursework.length > 0 && (
                <div className="border-t border-border pt-4">
                  <h4 className="text-sm text-muted-foreground mb-3 uppercase tracking-wider">
                    Relevant Coursework
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
                    {edu.coursework.map((course) => (
                      <div key={course} className="skill-tag text-center">
                        {course}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mb-12 mt-12">
          <h2 className="section-heading">HONORS</h2>
        </div>
        {/* Honors Cards */}
        <div className="flex flex-col gap-4 mt-12">
          {educationHonorsData.honors.map((honor, index) => (
            <div key={index} className="terminal-card p-4 md:p-6 flex items-center gap-3">
              {honor.icon && <span className="text-2xl">{honor.icon}</span>}
              <div>
                <p className="text-primary font-medium">{honor.honorName}</p>
                <p className="text-xs text-muted-foreground">{honor.from} - {honor.to}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
