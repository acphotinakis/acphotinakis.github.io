import { useState, useEffect } from 'react';
import { Home, GraduationCap, Briefcase, FlaskConical, Code2, Layers, Award, Mail, Github, Linkedin } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home', icon: Home },
  { id: 'education', label: 'Education', icon: GraduationCap },
  { id: 'experience', label: 'Experience', icon: Briefcase },
  { id: 'research', label: 'Research', icon: FlaskConical },
  { id: 'projects', label: 'Projects', icon: Code2 },
  { id: 'skills', label: 'Skills', icon: Layers },
  { id: 'certifications', label: 'Certifications', icon: Award },
];

export function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <aside className="fixed left-0 top-0 h-screen w-20 lg:w-64 bg-sidebar border-r border-sidebar-border z-50 flex flex-col">
      {/* Logo */}
      <div className="p-4 lg:p-6 border-b border-sidebar-border">
        <div className="w-12 h-12 lg:w-14 lg:h-14 mx-auto lg:mx-0 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center">
          <span className="font-display text-2xl lg:text-3xl glow-text">AP</span>
        </div>
        <p className="hidden lg:block mt-3 font-mono text-xs text-muted-foreground">
          CS + Finance
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-6 overflow-y-auto">
        <ul className="space-y-1 px-3">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-3 px-3 py-3 rounded-lg transition-all duration-300 group ${
                    isActive 
                      ? 'bg-primary/10 text-primary' 
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <div className="relative">
                    <Icon className={`w-5 h-5 transition-all ${isActive ? 'text-primary' : ''}`} />
                    {isActive && (
                      <div className="absolute -left-5 top-1/2 -translate-y-1/2 w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_10px_hsl(var(--accent))]" />
                    )}
                  </div>
                  <span className="hidden lg:block font-medium text-sm">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex justify-center lg:justify-start gap-3">
          <a 
            href="mailto:andrewcphotinakis@gmail.com" 
            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5" />
          </a>
        </div>
      </div>
    </aside>
  );
}
