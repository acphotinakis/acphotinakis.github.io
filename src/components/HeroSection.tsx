import { ArrowDown } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1 border border-border mb-8 animate-fade-in">
          <span className="w-2 h-2 bg-primary" />
          <span className="text-xs text-muted-foreground">open to opportunities</span>
        </div>

        {/* Main heading */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium mb-6 animate-slide-up tracking-tight">
          ANDREW C.
          <br />
          <span className="text-primary">PHOTINAKIS</span>
        </h1>

        {/* Tagline */}
        <p className="text-lg md:text-xl text-muted-foreground mb-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          Computer Science & Finance
        </p>

        <p className="text-sm text-muted-foreground mb-8 max-w-xl mx-auto animate-fade-in leading-relaxed" style={{ animationDelay: '0.4s' }}>
          Focused on <span className="text-foreground">quantitative finance</span>, <span className="text-foreground">AI-driven systems</span>, and building <span className="text-foreground">high-performance</span> algorithmic trading platforms.
        </p>

        {/* Travel narrative */}
        <div className="inline-flex items-center gap-2 px-4 py-2 border border-border mb-12 animate-fade-in text-sm" style={{ animationDelay: '0.6s' }}>
          <span className="text-primary">📍</span>
          <span className="text-muted-foreground">currently exploring Europe & the Mediterranean</span>
        </div>

        {/* CTA */}
        <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
          <a
            href="#experience"
            className="inline-flex items-center gap-2 px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-background transition-all text-sm group"
          >
            explore my work
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
        <div className="w-5 h-8 border border-border flex justify-center pt-2">
          <div className="w-0.5 h-2 bg-muted-foreground animate-pulse" />
        </div>
      </div>
    </section>
  );
}