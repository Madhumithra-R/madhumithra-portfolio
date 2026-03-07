import { useEffect, useState } from "react";

const sections = ["home","about","education","skills","experience","projects","certifications","blogs","contact"];

const Navbar = () => {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-8 md:px-16 py-4 bg-background/90 backdrop-blur-xl border-b border-border">
      <span className="font-display text-3xl tracking-[3px] text-primary shrink-0 mr-12">MM</span>
      <div className="hidden md:flex items-center gap-1">
        {sections.map((s) => (
          <a
            key={s}
            href={`#${s}`}
            className={`font-body text-[0.7rem] font-semibold tracking-[2px] uppercase px-4 py-2 rounded transition-colors whitespace-nowrap ${
              active === s ? "text-primary border-b-2 border-primary" : "text-muted-foreground hover:text-primary"
            }`}
          >
            {s}
          </a>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
