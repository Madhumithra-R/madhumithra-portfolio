import useReveal from "@/hooks/useReveal";

const items = [
  { icon: "🎓", year: "2021 – 2025", title: "B.E. Computer Science & Engineering", sub: "XYZ Institute of Technology, Chennai" },
  { icon: "📚", year: "2019 – 2021", title: "Higher Secondary Certificate (HSC)", sub: "ABC School — 92.5%" },
  { icon: "🏫", year: "2018 – 2019", title: "Secondary School Certificate (SSLC)", sub: "ABC School — 96%" },
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
            <div className="w-10 h-10 md:w-14 md:h-14 shrink-0 rounded-full border-2 border-primary bg-card flex items-center justify-center text-base md:text-xl text-primary relative z-[1]">
              {item.icon}
            </div>
            <div className="card-dark p-5 md:p-6 flex-1">
              <p className="text-xs tracking-widest uppercase text-primary mb-1.5">{item.year}</p>
              <h4 className="text-sm md:text-base font-bold mb-1 font-heading">{item.title}</h4>
              <p className="text-xs md:text-sm text-muted-foreground">{item.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
