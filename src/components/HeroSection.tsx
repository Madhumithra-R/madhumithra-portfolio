import useReveal from "@/hooks/useReveal";

const HeroSection = () => {
  const ref = useReveal();
  
  return (
    <section
      id="home"
      className="relative z-[1] min-h-screen px-5 md:px-16 lg:px-20 py-20 md:py-24 flex flex-col items-center justify-center text-center"
    >
      <div ref={ref} className="reveal flex flex-col items-center gap-5">

        {/* Welcome tag */}
        <p className="sec-tag tracking-[4px]">✦ Welcome to my Portfolio ✦</p>

        {/* Name */}
        <h1 className="sec-title text-5xl md:text-7xl lg:text-8xl leading-none">
          Hi, I'm Madhumithra R
        </h1>

        {/* Subtitle */}
        <p className="text-base md:text-lg text-muted-foreground tracking-wide">
          Web Technologies <span className="text-primary">|</span> SAP & ERP Enthusiast
        </p>

        {/* Description */}
        <p className="max-w-[520px] text-sm md:text-base text-muted-foreground/70 leading-relaxed">
          Currently focused on applied research and contributing to advancements
          in Web technologies and ERP solutions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 justify-center mt-2">

          {/* See my Journey */}
          <a href="#projects" className="btn-cyan">
            See my Journey
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M12 5v14M5 12l7 7 7-7"/>
            </svg>
          </a>

          {/* ✅ Download Resume — points to /Madhumithra_Resume.pdf in public folder */}
          <a
            href="/Madhumithra_Resume.pdf"
            download="Madhumithra_Resume.pdf"
            className="btn-ghost"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M7 10l5 5 5-5M12 15V3"/>
            </svg>
            Download Resume
          </a>

          {/* Contact Me */}
          <a href="#contact" className="btn-ghost">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
              <polyline points="22,6 12,13 2,6"/>
            </svg>
            Contact Me
          </a>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;