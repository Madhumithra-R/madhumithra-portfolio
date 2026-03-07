import useReveal from "@/hooks/useReveal";

const categories = [
  { icon: "🌐", title: "Frontend", skills: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"] },
  { icon: "⚙️", title: "Backend", skills: ["Node.js", "Express.js", "Python", "REST APIs"] },
  { icon: "🏢", title: "ERP / SAP", skills: ["SAP ABAP", "SAP Fiori", "ERP Concepts", "SAP MM"] },
  { icon: "🗄️", title: "Database", skills: ["MySQL", "MongoDB", "PostgreSQL", "Firebase"] },
  { icon: "🛠️", title: "Tools", skills: ["Git & GitHub", "VS Code", "Figma", "Postman"] },
  { icon: "☁️", title: "Cloud & Others", skills: ["AWS Basics", "Docker", "Linux", "Agile"] },
];

const SkillsSection = () => {
  const ref = useReveal();
  return (
    <section id="skills" className="relative z-[1] min-h-screen px-6 md:px-20 py-24 bg-dark">
      <div className="text-center mb-16">
        <span className="sec-tag">What I Work With</span>
        <h2 className="sec-title">Skills</h2>
        <div className="sec-line" />
      </div>
      <div ref={ref} className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
        {categories.map((cat) => (
          <div key={cat.title} className="card-dark p-7">
            <h4 className="text-xs tracking-[3px] uppercase text-primary mb-4">{cat.icon} {cat.title}</h4>
            <div className="flex flex-wrap gap-2">
              {cat.skills.map((s) => <span key={s} className="skill-pill">{s}</span>)}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
