import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const sections = ["home", "about", "education", "skills", "experience", "projects", "certifications", "blogs", "contact"];

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

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
    <>
      <nav className="fixed top-0 left-0 right-0 z-[200] flex items-center justify-between px-5 md:px-10 lg:px-14 py-4 bg-background/90 backdrop-blur-xl border-b border-border">
        <span className="font-display text-3xl tracking-[3px] text-primary shrink-0">MM</span>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {sections.map((s) => (
            <a
              key={s}
              href={`#${s}`}
              className={`font-heading text-[11px] font-semibold tracking-[1.5px] uppercase px-3 py-2 rounded transition-colors whitespace-nowrap ${
                active === s
                  ? "text-primary border-b-2 border-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {s}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-foreground p-2"
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-[199] bg-background/95 backdrop-blur-xl pt-20 px-6 lg:hidden">
          <div className="flex flex-col gap-2">
            {sections.map((s) => (
              <a
                key={s}
                href={`#${s}`}
                onClick={() => setMenuOpen(false)}
                className={`font-heading text-base font-semibold tracking-[2px] uppercase px-4 py-3 rounded-lg transition-colors ${
                  active === s
                    ? "text-primary bg-primary/10"
                    : "text-muted-foreground hover:text-primary"
                }`}
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
