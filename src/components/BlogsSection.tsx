import useReveal from "@/hooks/useReveal";

const items = [
  {
    emoji: "📦",
    tag: "SAP · ERP",
    date: "Medium · 2025",
    title: "O2C Process in SAP: Simple Steps to Master Order to Cash",
    desc: "A beginner-friendly breakdown of the Order-to-Cash (O2C) process in SAP — covering every step from sales order creation to final payment, with clear explanations for real-world understanding.",
    link: "https://medium.com/@Madhumithra-R/o2c-process-in-sap-simple-steps-to-master-order-to-cash-c68b5e6862a5",
    readTime: "5 min read",
  },
];

const BlogsSection = () => {
  const ref = useReveal();
  return (
    <section
      id="blogs"
      className="relative z-[1] min-h-screen px-5 md:px-16 lg:px-20 py-20 md:py-24"
    >
      <div className="text-center mb-14">
        <span className="sec-tag">My Thoughts</span>
        <h2 className="sec-title">Blogs</h2>
        <div className="sec-line" />
      </div>

      <div
        ref={ref}
        className="reveal max-w-[760px] mx-auto flex flex-col gap-6"
      >
        {items.map((item, i) => (
          <a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="card-dark p-6 md:p-8 flex flex-col gap-4 hover:border-primary transition-all duration-300 group no-underline"
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-4">
              <span className="text-3xl">{item.emoji}</span>
              {/* Read time badge */}
              <span className="text-xs px-3 py-1 rounded-full border border-primary/25 bg-primary/8 text-primary shrink-0">
                {item.readTime}
              </span>
            </div>

            {/* Tag + Date */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-primary font-semibold tracking-wide uppercase">
                {item.tag}
              </span>
              <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
              <span className="text-xs text-muted-foreground">{item.date}</span>
            </div>

            {/* Title */}
            <h4 className="text-base md:text-lg font-bold font-heading leading-snug group-hover:text-primary transition-colors">
              {item.title}
            </h4>

            {/* Description */}
            <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
              {item.desc}
            </p>

            {/* CTA */}
            <div className="flex items-center gap-2 text-primary text-sm font-semibold mt-1">
              Read on Medium
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                className="group-hover:translate-x-1 transition-transform"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        ))}

        {/* More blogs CTA */}
        <div className="text-center mt-4">
          <a
            href="https://medium.com/@Madhumithra-R"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-primary/30 text-primary text-sm font-semibold hover:bg-primary/10 transition-all duration-200"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
            </svg>
            View All on Medium
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogsSection;