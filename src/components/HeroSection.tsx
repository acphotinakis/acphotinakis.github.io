import { ArrowDown, Linkedin, Github, Smartphone, Mail, MapPin, Globe } from 'lucide-react';
import ResumePdfFile from '../../public/Photinakis_Andrew_SWE.pdf';

export function HeroSection() {
  const personalContacts = {
    linkedin: 'andrew-photinakis',
    dev: 'acphotinakis',
    github: 'acphotinakis',
    stackoverflow: '17283877/acp-8103',
    phone: '(301)-569-0221',
    email: 'andrewcphotinakis@gmail.com',
    location: 'Washington, D.C.',
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-border mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-primary" />
          <span className="text-xs text-muted-foreground">open to opportunities</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-4 animate-slide-up tracking-tight">
          ANDREW C.
          <br />
          <span className="text-primary">PHOTINAKIS</span>
        </h1>

        {/* Download Resume button under name */}
        <div className="mb-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <a
            href={ResumePdfFile}
            target="_blank"
            download
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-background transition-all text-sm group"
          >
            Download Resume (.pdf)
          </a>
        </div>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.4s' }}>
          Computer Science & Finance
        </p>

        <p className="text-sm text-muted-foreground mb-8 max-w-xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.6s' }}>
          Focused on <span className="text-foreground">quantitative finance</span>, <span className="text-foreground">AI-driven systems</span>, and building <span className="text-foreground">high-performance</span> algorithmic trading platforms.
        </p>

        {/* Travel narrative */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-border mb-12 animate-fade-in text-sm" style={{ animationDelay: '0.8s' }}>
          <span className="text-primary">📍</span>
          <span className="text-muted-foreground">
            currently exploring opportunities in Washington D.C. but open to other locations in the United States of America
          </span>
        </div>

        {/* CTA */}
        <div className="animate-fade-in mb-8" style={{ animationDelay: '1s' }}>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-background transition-all text-sm group"
          >
            explore my work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Personal contacts section */}
        <div className="mt-8 flex flex-col items-center gap-3 text-xs text-muted-foreground animate-fade-in" style={{ animationDelay: '1.2s' }}>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-primary" /> {personalContacts.location}
          </div>
          <div className="flex items-center gap-2">
            <Smartphone className="w-4 h-4 text-primary" /> {personalContacts.phone}
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-4 h-4 text-primary" /> 
            <a href={`mailto:${personalContacts.email}`} className="hover:underline">{personalContacts.email}</a>
          </div>
          <div className="flex gap-4 mt-1">
            <a href={`https://linkedin.com/in/${personalContacts.linkedin}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <Linkedin className="w-4 h-4 text-primary" /> LinkedIn
            </a>
            <a href={`https://dev.to/${personalContacts.dev}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <Github className="w-4 h-4 text-primary" /> Dev
            </a>
            <a href={`https://github.com/${personalContacts.github}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <Github className="w-4 h-4 text-primary" /> GitHub
            </a>
            <a href={`https://stackoverflow.com/users/${personalContacts.stackoverflow}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline">
              <Globe className="w-4 h-4 text-primary" /> StackOverflow
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
