import { useState, useEffect } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

const navItems = [
  { id: 'home', label: '~/home', icon: '▸' },
  { id: 'education', label: '~/education', icon: '▸' },
  { id: 'experience', label: '~/experience', icon: '▸' },
  { id: 'research', label: '~/research', icon: '▸' },
  { id: 'projects', label: '~/projects', icon: '▸' },
  { id: 'skills', label: '~/skills', icon: '▸' },
  { id: 'certifications', label: '~/certs', icon: '▸' },
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
    <aside className="fixed left-0 top-0 h-screen w-16 lg:w-56 bg-sidebar border-r border-sidebar-border z-50 flex flex-col">
      {/* Logo */}
      <div className="p-4 lg:p-5 border-b border-sidebar-border">
        <div className="text-center lg:text-left">
          <span className="text-xl lg:text-2xl font-medium text-primary">AP</span>
        </div>
        <p className="hidden lg:block mt-2 text-xs text-muted-foreground">
          cs + finance
        </p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 py-4 overflow-y-auto">
        <ul className="space-y-0">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            
            return (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`w-full flex items-center gap-2 px-4 py-2 text-left transition-all duration-200 border-l-2 ${
                    isActive 
                      ? 'border-primary text-foreground bg-muted' 
                      : 'border-transparent text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  <span className={`text-xs ${isActive ? 'text-primary' : ''}`}>{item.icon}</span>
                  <span className="hidden lg:block text-sm">{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Social Links */}
      <div className="p-4 border-t border-sidebar-border">
        <div className="flex justify-center lg:justify-start gap-4">
          <a 
            href="mailto:andrewcphotinakis@gmail.com" 
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Email"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a 
            href="https://github.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a 
            href="https://linkedin.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
        </div>
      </div>
    </aside>
  );
}