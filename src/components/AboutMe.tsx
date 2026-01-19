const paragraphs = [
  'I’m a 5th-year Computer Science student at Rochester Institute of Technology with a minor in Finance. I’m passionate about using AI, machine learning, algorithmic trading, and cloud computing to develop innovative solutions that bridge technology and finance. My focus is on building quant strategies and tools that combine analytical rigor with practical applications.',
  'Beyond academics, I’m fueled by classic rock—bands like AC/DC, Journey, Def Leppard, Poison, Mötley Crüe, Scorpions, and Guns N’ Roses keep me energized and inspired.',
  'I tackle challenges with persistence, curiosity, and creativity. I enjoy experimenting, exploring new ideas, and finding practical solutions to complex problems.',
  'This year, I had the incredible opportunity to study abroad across Europe and the Mediterranean, visiting Hungary, Italy, Slovenia, Greece, Croatia, and Malta—including Budapest, Florence, Venice, Ljubljana, Athens, Paros, Zagreb, Split, and Mdina. These experiences broadened my perspective, strengthened my adaptability, and reinforced my passion for learning in diverse environments.',
];

const AboutMe = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative">
        
      <div className="container mx-auto px-6 max-w-3xl text-left">
        {/* Section header */}
        <div className="mb-12">
          <h2 className="section-heading">About Me</h2>
        </div>
        <div>
        {paragraphs.map((para, index) => (
          <p
            key={index}
            className="text-sm text-muted-foreground mb-6 max-w-xl mx-auto animate-fade-in leading-relaxed text-left"
            style={{ animationDelay: `${0.4 + index * 0.2}s` }}
          >
            {para}
          </p>
        ))}
        </div>

      </div>
    </section>
  );
}

export default AboutMe;
