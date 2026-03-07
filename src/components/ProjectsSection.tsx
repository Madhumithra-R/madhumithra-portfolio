import useReveal from "@/hooks/useReveal";

const items = [
  {
    emoji: "🌤️",
    title: "Weather-Prediction",
    desc: "A web app that shows 5-day weather forecasts using the OpenWeatherMap API, displaying temperature, humidity, and conditions in a clean UI.",
    tags: ["JavaScript", "HTML", "CSS", "OpenWeatherMap API"],
    lang: "JavaScript",
    langColor: "#f1e05a",
    github: "https://github.com/Madhumithra-R/Weather-Prediction",
  },
  {
    emoji: "🔐",
    title: "secure-db-credentials-python",
    desc: "A Python project focused on securely managing and storing database credentials, implementing best practices for credential protection.",
    tags: ["Python", "Security", "Database"],
    lang: "Python",
    langColor: "#3572A5",
    github: "https://github.com/Madhumithra-R/secure-db-credentials-python",
  },
  {
    emoji: "🤗",
    title: "hf-tokenizer-demo",
    desc: "A demonstration of HuggingFace tokenizers showcasing how modern NLP models process and tokenize text data for machine learning tasks.",
    tags: ["Python", "NLP", "HuggingFace", "AI/ML"],
    lang: "Python",
    langColor: "#3572A5",
    github: "https://github.com/Madhumithra-R/hf-tokenizer-demo",
  },
  {
    emoji: "🏠",
    title: "SmartHome-Interactive-Demo",
    desc: "An interactive Smart Home simulation built with Python, demonstrating IoT concepts and home automation through an intuitive demo interface.",
    tags: ["Python", "IoT", "Simulation", "Smart Home"],
    lang: "Python",
    langColor: "#3572A5",
    github: "https://github.com/Madhumithra-R/SmartHome-Interactive-Demo",
  },
];

const ProjectsSection = () => {
  const ref = useReveal();
  return (
    <section
      id="projects"
      className="relative z-[1] min-h-screen px-5 md:px-16 lg:px-20 py-20 md:py-24"
    >
      <div className="text-center mb-14">
        <span className="sec-tag">What I've Built</span>
        <h2 className="sec-title">Projects</h2>
        <div className="sec-line" />
      </div>

      <div
        ref={ref}
        className="reveal max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {items.map((item, i) => (
          <div
            key={i}
            className="card-dark p-6 flex flex-col gap-4 hover:border-primary transition-all duration-300 group"
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.emoji}</span>
                <h4 className="text-sm md:text-base font-bold font-heading leading-snug">
                  {item.title}
                </h4>
              </div>
              {/* GitHub link */}
              <a
                href={item.github}
                target="_blank"
                rel="noopener noreferrer"
                className="shrink-0 text-muted-foreground hover:text-primary transition-colors"
                title="View on GitHub"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                </svg>
              </a>
            </div>

            {/* Description */}
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed flex-1">
              {item.desc}
            </p>

            {/* Bottom row — lang dot + tags */}
            <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-border">
              {/* Language dot */}
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground mr-2">
                <span
                  className="w-2.5 h-2.5 rounded-full"
                  style={{ backgroundColor: item.langColor }}
                />
                {item.lang}
              </span>
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
        ))}
      </div>

      {/* View all on GitHub */}
      <div className="text-center mt-10">
        <a
          href="https://github.com/Madhumithra-R"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-primary/30 text-primary text-sm font-semibold hover:bg-primary/10 transition-all duration-200"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
          </svg>
          View All on GitHub
        </a>
      </div>
    </section>
  );
};

export default ProjectsSection;