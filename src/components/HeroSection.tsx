import { ArrowDown, MapPin, Sparkles } from 'lucide-react';

export function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Geometric background pattern */}
      <div className="absolute inset-0 geometric-bg opacity-50" />
      
      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '-3s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-8 animate-fade-in">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-sm text-primary">Open to Opportunities</span>
          </div>

          {/* Main heading */}
          <h1 className="section-heading text-6xl md:text-8xl lg:text-9xl mb-6 animate-slide-up">
            ANDREW C.
            <br />
            <span className="text-gradient">PHOTINAKIS</span>
          </h1>

          {/* Tagline */}
          <p className="text-xl md:text-2xl text-card-foreground mb-4 animate-fade-in font-light" style={{ animationDelay: '0.2s' }}>
            Computer Science & Finance Specialist
          </p>

          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in font-light" style={{ animationDelay: '0.4s' }}>
            Passionate about <span className="text-primary font-medium">quantitative finance</span>, <span className="text-primary font-medium">AI-driven systems</span>, and building <span className="text-primary font-medium">high-performance</span> algorithmic trading platforms.
          </p>

          {/* Travel narrative */}
          <div className="glass-card inline-flex items-center gap-3 px-6 py-3 rounded-xl mb-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <MapPin className="w-5 h-5 text-accent" />
            <span className="text-card-foreground">Currently exploring <span className="text-primary font-medium">Europe & the Mediterranean</span></span>
            <Sparkles className="w-4 h-4 text-primary" />
          </div>

          {/* CTA */}
          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a
              href="#experience"
              className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold hover:bg-primary/90 transition-all hover:shadow-[0_0_30px_hsl(var(--primary)/0.4)] group"
            >
              Explore My Work
              <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-primary/30 flex justify-center pt-2">
          <div className="w-1 h-2 rounded-full bg-primary animate-pulse" />
        </div>
      </div>
    </section>
  );
}
