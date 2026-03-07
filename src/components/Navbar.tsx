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
    <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-6 md:px-[60px] py-5 bg-background/85 backdrop-blur-[14px] border-b border-border">
      <span className="font-display text-3xl tracking-widest text-foreground">MM</span>
      <div className="hidden md:flex gap-1.5">
        {sections.map((s) => (
          <a
            key={s}
            href={`#${s}`}
            className={`text-xs font-medium tracking-[1.5px] uppercase px-3.5 py-1.5 rounded transition-colors ${
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
