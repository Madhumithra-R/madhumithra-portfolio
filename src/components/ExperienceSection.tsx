import useReveal from "@/hooks/useReveal";

const items = [
  {
    icon: "🤖",
    company: "AICTE",
    role: "Virtual Internship — AI & ML",
    period: "April 2025 – June 2025 · Remote (Online)",
    desc: "Completed a virtual internship focused on AI/ML concepts including model training and data analysis. Gained hands-on experience using Google Colab and Weka.",
    tags: ["AI/ML", "Google Colab", "Weka", "Data Analysis"],
    color: "#00d4d4",
  },
  {
    icon: "🏢",
    company: "Infosys Springboard",
    role: "Pragati — Internship",
    period: "Oct 2024 – Present · 1 yr 6 mos · Hybrid",
    desc: "Engaged in technical workshops, public speaking sessions, and industry-led training modules through the Infosys Springboard Pragati (Cohort 3) program.",
    tags: ["Public Speaking", "Technical Training", "Industry Mentorship"],
    color: "#0066cc",
  },
    
  {
    icon: "💻",
    company: "STACK-QUEUE",
    role: "Full Stack Development Intern",
    period: "Jul 2024 – Jul 2024 · 1 mo · Salem, Tamil Nadu",
    desc: "Bridging the gap between front-end flair and back-end functionality during a 15-day full stack development journey, enhancing skills in building interactive web applications.",
    tags: ["HTML", "CSS", "JavaScript", "Full Stack", "Web Apps"],
    color: "#a855f7",
  },
];

const ExperienceSection = () => {
  const ref = useReveal();
  return (
    <section
      id="experience"
      className="relative z-[1] min-h-screen px-5 md:px-16 lg:px-20 py-20 md:py-24"
    >
      <div className="text-center mb-14">
        <span className="sec-tag">Where I've Worked</span>
        <h2 className="sec-title">Experience</h2>
        <div className="sec-line" />
      </div>

      <div ref={ref} className="reveal max-w-[800px] mx-auto flex flex-col gap-5">
        {items.map((item, i) => (
          <div
            key={i}
            className="card-dark p-5 md:p-7 flex gap-4 md:gap-6 hover:border-primary transition-all duration-300 group"
          >
            {/* Left dot */}
            <div
              className="w-3 h-3 rounded-full shrink-0 mt-2 shadow-lg"
              style={{
                backgroundColor: item.color,
                boxShadow: `0 0 10px ${item.color}88`,
              }}
            />

            <div className="flex-1 min-w-0">
              {/* Company + Role */}
              <h4 className="text-sm md:text-base font-bold font-heading mb-0.5">
                {item.role}
              </h4>
              <p
                className="text-xs md:text-sm font-semibold mb-1"
                style={{ color: item.color }}
              >
                {item.company}
              </p>

              {/* Period */}
              <p className="text-xs text-muted-foreground mb-3">{item.period}</p>

              {/* Description */}
              <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
                {item.desc}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, j) => (
                  <span
                    key={j}
                    className="text-xs px-2.5 py-0.5 rounded-full border border-primary/20 bg-primary/8 text-primary"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;