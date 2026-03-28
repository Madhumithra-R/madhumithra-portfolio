import useReveal from "@/hooks/useReveal";

const AboutSection = () => {
  const ref = useReveal();
  return (
    <section id="about" className="relative z-[1] min-h-screen px-5 md:px-16 lg:px-20 py-20 md:py-24 bg-dark">
      <div className="text-center mb-14">
        <span className="sec-tag">Get to know me</span>
        <h2 className="sec-title">About Me</h2>
        <div className="sec-line" />
      </div>
      <div ref={ref} className="reveal grid md:grid-cols-2 gap-12 md:gap-16 items-center max-w-[1000px] mx-auto">
        <div className="flex justify-center">
          <div className="w-52 h-52 md:w-64 md:h-64 rounded-full p-1" style={{ background: "linear-gradient(135deg, hsl(180,100%,42%), hsl(180,100%,19%))", boxShadow: "0 0 60px hsla(180,100%,42%,0.25)" }}>
            {/* ✅ Real photo from public folder */}
            <div className="w-full h-full rounded-full overflow-hidden">
              <img
                src="/L-img.jpeg"
                alt="Madhumithra R"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>
        </div>
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-4 font-heading">Madhumithra R</h3>
          <p className="text-sm md:text-base text-muted-foreground leading-[1.85] mb-3">
            I'm a passionate developer and researcher with a strong interest in Web Technologies and ERP solutions. I love solving complex problems and building innovative digital experiences.
          </p>
          <p className="text-sm md:text-base text-muted-foreground leading-[1.85] mb-5">
            Currently focused on applied research that bridges the gap between cutting-edge web technologies and enterprise ERP systems like SAP.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Web Development", "SAP / ERP", "Research", "UI/UX", "Problem Solver"].map((t) => (
              <span key={t} className="about-tag">{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;