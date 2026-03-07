import useReveal from "@/hooks/useReveal";

const items = [
  {
    icon: "🎓",
    year: "2022 – 2026",
    title: "B.E. Computer Science & Engineering",
    sub: "K S Rangasamy College of Technology, Tiruchengode",
    score: "CGPA: 8.7",
    summary: "Specializing in Web Technologies & ERP — consistently maintaining strong academic performance.",
  },
  {
    icon: "📚",
    year: "2022",
    title: "Higher Secondary Certificate (HSC)",
    sub: "Adharsh Vidhyalaya Matric Higher Secondary School",
    score: "87%",
    summary: "Strong foundation in Science & Mathematics — demonstrated disciplined academic focus.",
  },
  {
    icon: "🏫",
    year: "2020",
    title: "Secondary School Certificate (SSLC)",
    sub: "Adharsh Vidhyalaya Matric Higher Secondary School",
    score: "98%",
    summary: "Achieved near-perfect marks — ranked among top performers in the school.",
  },
];

const EducationSection = () => {
  const ref = useReveal();
  return (
    <section id="education" className="relative z-[1] min-h-screen px-5 md:px-16 lg:px-20 py-20 md:py-24">
      <div className="text-center mb-14">
        <span className="sec-tag">My Academic Path</span>
        <h2 className="sec-title">Education</h2>
        <div className="sec-line" />
      </div>

      <div ref={ref} className="reveal max-w-[760px] mx-auto relative">
        <div className="absolute left-5 md:left-7 top-0 bottom-0 w-0.5 bg-border" />

        {items.map((item, i) => (
          <div key={i} className="flex gap-4 md:gap-7 mb-8 md:mb-11 relative">
            {/* Timeline Dot */}
            <div className="w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-full border-2 border-primary bg-card flex items-center justify-center text-base md:text-xl text-primary relative z-[1]">
              {item.icon}
            </div>

            {/* Card */}
            <div className="card-dark p-5 md:p-6 flex-1 hover:border-primary transition-colors duration-300">
              {/* Year */}
              <p className="text-xs tracking-widest uppercase text-primary mb-1.5">{item.year}</p>

              {/* Title + Score badge */}
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <h4 className="text-sm md:text-base font-bold font-heading">{item.title}</h4>
                <span className="text-xs px-2.5 py-0.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-semibold">
                  {item.score}
                </span>
              </div>

              {/* School / College */}
              <p className="text-xs md:text-sm text-muted-foreground mb-2">{item.sub}</p>

              {/* One-line standout summary */}
              <p className="text-xs text-muted-foreground/70 italic border-l-2 border-primary/40 pl-2">
                {item.summary}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;