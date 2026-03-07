import useReveal from "@/hooks/useReveal";

const items = [
  {
    emoji: "☁️",
    title: "Oracle Cloud Infrastructure DevOps Professional",
    issuer: "Oracle University",
    date: "Oct 2025 · Valid until Oct 2027",
    category: "Cloud & DevOps",
    color: "#f97316",
    badge: "🏅 Oracle Certified Professional",
  },
  {
    emoji: "🔗",
    title: "Supply Chain Management Fundamentals",
    issuer: "Blue Ocean Corporation, UK",
    date: "Nov 17 – 21, 2025",
    category: "Management",
    color: "#3b82f6",
    badge: "📜 Certificate of Recognition",
  },
  {
    emoji: "🔐",
    title: "Google Cybersecurity Specialization",
    issuer: "Google · Coursera",
    date: "2024",
    category: "Cybersecurity",
    color: "#00d4d4",
    badge: "🎓 8 Courses Completed",
  },
  {
    emoji: "🤖",
    title: "AI Foundations for Everyone (AI Honor Certificate)",
    issuer: "IBM · Coursera",
    date: "2024",
    category: "Artificial Intelligence",
    color: "#8b5cf6",
    badge: "⭐ AI Honor Certificate",
  },
  {
    emoji: "🥇",
    title: "Acquiring Data — Gold Category",
    issuer: "FutureSkills Prime · NASSCOM · Govt. of India",
    date: "Mar 31, 2023",
    category: "Data Skills",
    color: "#eab308",
    badge: "🥇 GOLD — 73% Score",
  },
];

const CertificationsSection = () => {
  const ref = useReveal();
  return (
    <section
      id="certifications"
      className="relative z-[1] min-h-screen px-5 md:px-16 lg:px-20 py-20 md:py-24"
    >
      <div className="text-center mb-14">
        <span className="sec-tag">Credentials</span>
        <h2 className="sec-title">Certifications</h2>
        <div className="sec-line" />
      </div>

      <div
        ref={ref}
        className="reveal max-w-[1000px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="card-dark p-6 flex flex-col gap-3 hover:border-primary transition-all duration-300 group relative overflow-hidden"
          >
            {/* Glow top bar */}
            <div
              className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl opacity-60 group-hover:opacity-100 transition-opacity"
              style={{ background: item.color }}
            />

            {/* Emoji + Category */}
            <div className="flex items-center justify-between">
              <span className="text-3xl">{item.emoji}</span>
              <span
                className="text-xs px-2.5 py-0.5 rounded-full font-semibold"
                style={{
                  background: `${item.color}18`,
                  border: `1px solid ${item.color}40`,
                  color: item.color,
                }}
              >
                {item.category}
              </span>
            </div>

            {/* Title */}
            <h4 className="text-sm font-bold font-heading leading-snug">
              {item.title}
            </h4>

            {/* Issuer */}
            <p className="text-xs text-muted-foreground">{item.issuer}</p>

            {/* Date */}
            <p className="text-xs text-muted-foreground/60">{item.date}</p>

            {/* Badge */}
            <div
              className="mt-auto pt-3 border-t text-xs font-semibold"
              style={{ borderColor: `${item.color}25`, color: item.color }}
            >
              {item.badge}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;