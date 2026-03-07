import useReveal from "@/hooks/useReveal";

const blogs = [
  { icon: "📝", date: "March 2025", title: "How SAP Fiori is Changing Enterprise UX", desc: "Exploring how SAP Fiori brings modern web design principles into the ERP world and why it matters for enterprise users." },
  { icon: "🌐", date: "January 2025", title: "React vs Traditional Web: Which for ERP Frontends?", desc: "A deep dive into why modern JavaScript frameworks are becoming the go-to for enterprise-grade frontend development." },
  { icon: "🤖", date: "November 2024", title: "AI in ERP: The Future of Business Automation", desc: "How machine learning and AI integrations are transforming legacy ERP systems into intelligent, predictive platforms." },
];

const BlogsSection = () => {
  const ref = useReveal();
  return (
    <section id="blogs" className="relative z-[1] min-h-screen px-6 md:px-20 py-24 bg-dark">
      <div className="text-center mb-16">
        <span className="sec-tag">My Thoughts</span>
        <h2 className="sec-title">Blogs</h2>
        <div className="sec-line" />
      </div>
      <div ref={ref} className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1000px] mx-auto">
        {blogs.map((b) => (
          <div key={b.title} className="card-dark overflow-hidden cursor-pointer">
            <div className="h-[130px] flex items-center justify-center text-4xl border-b border-border" style={{ background: "linear-gradient(135deg, hsl(200,60%,7%), hsl(200,40%,10%))" }}>
              {b.icon}
            </div>
            <div className="p-5">
              <p className="text-xs text-primary tracking-wide mb-2">{b.date}</p>
              <h4 className="text-sm font-bold mb-2 leading-snug">{b.title}</h4>
              <p className="text-xs text-muted-foreground leading-relaxed">{b.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogsSection;
