const certs = [
      {
      name: 'Artificial Intelligence Foundations: Machine Learning',
      body: 'Click to view cert',
      year: 'Jan 2024',
      link: 'https://www.linkedin.com/learning/certificates/091a882d535e7bf34f85df5ee4b2a6698b8f1684f676427afd0879aafe2c96f7',
    type: 'course',
    icon: '📚',
    },
    {
      name: 'Azure DevOps for Beginners',
      body: 'Click to view cert',
      year: 'Jan 2024',
      link: 'https://www.linkedin.com/learning/certificates/ef4a6007df206c381d328472141910cdbcce3d9ed95fc21cb991f9d7b16faf1d',
    type: 'course',
    icon: '📚',
    },
    {
      name: 'Introduction to Artificial Intelligence',
      body: 'Click to view cert',
      year: 'Jan 2024',
      link: 'https://www.linkedin.com/learning/certificates/bf1ee2c0ffba9fb5c1328eafe5ab6b2a7639f875882b092d9d0404eb38f69455',
          type: 'course',
    icon: '📚',
    },
    {
      name: 'Algorithmic Trading and Stocks Essential Training',
      body: 'Click to view cert',
      year: 'May 2023',
      link: 'https://www.linkedin.com/learning/certificates/8ea527d66e459c3a37098783dda311ba7cf2a3ffd614b024fa751c18902300bb',
          type: 'course',
    icon: '📚',
    },
    {
      name: 'Bloomberg Market Concepts Certification',
      body: 'Click to view cert',
      year: 'Nov 2021',
      link: 'https://portal.bloombergforeducation.com/certificates/RH7mhPhh634KXUMhnf7zwvwk',
          type: 'course',
    icon: '📚',
    },
]


export function CertificationsSection() {
  return (
    <section id="certifications" className="py-24 relative border-t border-border">
      <div className="container mx-auto px-6 max-w-3xl">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="section-heading">CERTIFICATIONS & COURSES</h2>
        </div>

        {/* Grid */}
        <div className="space-y-4">
          {certs.map((cert) => (
            <div
              key={cert.name}
              className="terminal-card p-4 hover:border-primary transition-colors duration-200 flex items-start justify-between gap-4"
            >
              <div className="flex items-start gap-3">
                <span className="text-lg">{cert.icon}</span>
                <div>
                  <h3 className="text-sm font-medium text-foreground">
                    <a
                      href={cert.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {cert.name}
                    </a>
                  </h3>
                  <p className="text-xs text-muted-foreground">{cert.year}</p>
                </div>
              </div>

              <span
                className={`text-xs uppercase tracking-wider ${
                  cert.type === 'certification' ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                {cert.type}
              </span>
            </div>
          ))}
        </div>

        {/* Future roadmap teaser */}
        <div className="mt-12 text-center">
          <p className="text-xs text-muted-foreground mb-4 uppercase tracking-wider">
            future roadmap
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              'Interactive Quant Strategy Builder',
              'AI-Powered Sentiment Analysis',
              '"Behind the Code" Blog Series',
            ].map((item) => (
              <span
                key={item}
                className="px-3 py-2 border border-dashed border-border text-muted-foreground text-xs"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
