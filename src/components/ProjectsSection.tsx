import useReveal from "@/hooks/useReveal";

const projects = [
  { icon: "🌐", title: "ERP Dashboard Portal", desc: "A web-based ERP dashboard built with React and Node.js that streamlines inventory, HR, and finance modules in one unified interface.", tags: ["React", "Node.js", "MongoDB", "ERP"] },
  { icon: "🤖", title: "AI-Powered Resume Analyzer", desc: "Python-based tool that parses resumes and scores them against job descriptions using NLP techniques to help recruiters shortlist faster.", tags: ["Python", "NLP", "Flask"] },
  { icon: "📦", title: "Smart Inventory System", desc: "Real-time inventory tracker with barcode scanning, low-stock alerts, and supplier management. Integrated with SAP MM concepts.", tags: ["Express", "MySQL", "SAP MM"] },
];

const ProjectsSection = () => {
  const ref = useReveal();
  return (
    <section id="projects" className="relative z-[1] min-h-screen px-6 md:px-20 py-24 bg-dark">
      <div className="text-center mb-16">
        <span className="sec-tag">What I've Built</span>
        <h2 className="sec-title">Projects</h2>
        <div className="sec-line" />
      </div>
      <div ref={ref} className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1100px] mx-auto">
        {projects.map((p) => (
          <div key={p.title} className="card-dark overflow-hidden">
            <div className="h-40 flex items-center justify-center text-4xl border-b border-border" style={{ background: "linear-gradient(135deg, hsl(195,50%,12%), hsl(200,40%,9%))" }}>
              {p.icon}
            </div>
            <div className="p-6">
              <h4 className="text-base font-bold mb-2">{p.title}</h4>
              <p className="text-sm text-muted-foreground leading-[1.65] mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5">
                {p.tags.map((t) => <span key={t} className="proj-tag">{t}</span>)}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;
