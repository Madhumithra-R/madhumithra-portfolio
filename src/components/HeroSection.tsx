const HeroSection = () => (
  <section id="home" className="relative z-[1] min-h-screen flex flex-col items-center justify-center text-center px-5 md:px-10 py-24">
    <p className="animate-fade-up delay-1 text-xs md:text-sm tracking-[4px] uppercase text-primary mb-7 font-body font-medium">
      ✦ Welcome to my Portfolio ✦
    </p>
    <h1 className="animate-fade-up delay-2 font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl leading-[0.95] tracking-[3px] mb-6">
      Hi, I'm Madhumithra R
    </h1>
    <p className="animate-fade-up delay-3 text-base md:text-lg text-muted-foreground tracking-wide mb-5 font-body">
      Web Technologies | <span className="text-primary font-semibold">SAP & ERP Enthusiast</span>
    </p>
    <p className="animate-fade-up delay-4 max-w-[520px] text-sm md:text-base text-muted-foreground/60 leading-[1.8] mb-12 font-body">
      Currently focused on applied research and contributing to advancements in Web technologies and ERP solutions.
    </p>
    <div className="animate-fade-up delay-5 flex gap-3 md:gap-4 flex-wrap justify-center">
      <a href="#about" className="btn-cyan">See my Journey ↓</a>
      <a href="#" className="btn-ghost">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        Download Resume
      </a>
      <a href="#contact" className="btn-ghost">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        Contact Me
      </a>
    </div>
  </section>
);

export default HeroSection;
