import useReveal from "@/hooks/useReveal";

const AboutSection = () => {
  const ref = useReveal();
  return (
    <section id="about" className="relative z-[1] min-h-screen px-6 md:px-20 py-24 bg-dark">
      <div className="text-center mb-16">
        <span className="sec-tag">Get to know me</span>
        <h2 className="sec-title">About Me</h2>
        <div className="sec-line" />
      </div>
      <div ref={ref} className="reveal grid md:grid-cols-2 gap-16 items-center max-w-[1000px] mx-auto">
        <div className="flex justify-center">
          <div className="w-[280px] h-[280px] rounded-full p-1" style={{ background: "linear-gradient(135deg, hsl(180,100%,42%), hsl(180,100%,19%))", boxShadow: "0 0 60px hsla(180,100%,42%,0.25)" }}>
            <div className="w-full h-full rounded-full bg-card flex items-end justify-center overflow-hidden">
              <svg viewBox="0 0 200 200" className="w-[72%]" fill="hsl(195,40%,20%)">
                <circle cx="100" cy="70" r="40" />
                <ellipse cx="100" cy="170" rx="65" ry="50" />
              </svg>
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-3xl font-bold mb-5 font-heading">Madhumithra R</h3>
          <p className="text-base text-muted-foreground leading-[1.85] mb-4">
            I'm a passionate developer and researcher with a strong interest in Web Technologies and ERP solutions. I love solving complex problems and building innovative digital experiences.
          </p>
          <p className="text-base text-muted-foreground leading-[1.85] mb-6">
            Currently focused on applied research that bridges the gap between cutting-edge web technologies and enterprise ERP systems like SAP.
          </p>
          <div className="flex flex-wrap gap-3">
            {["Web Development", "SAP / ERP", "Research", "UI/UX", "Problem Solver"].map((t) => (
              <span key={t} className="about-tag text-sm">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
