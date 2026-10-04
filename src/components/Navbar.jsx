import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const panelRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close on Escape + return focus to toggle; lock body scroll while open
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    panelRef.current?.querySelector("a")?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open ]);

  const navClass = `fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-200 ${
    scrolled || open
      ? "bg-[rgba(245,240,232,0.94)] backdrop-blur-[12px] py-[0.9rem] px-[1.5rem] md:py-4 md:px-16 border-b border-[rgba(92,61,46,0.1)]"
      : "bg-transparent py-[1.2rem] px-[1.5rem] md:py-6 md:px-16"
  }`;

  const linkClass =
    "text-[0.8rem] font-medium tracking-[0.1em] uppercase text-muted transition-colors duration-200 relative hover:text-terracotta after:content-[''] after:absolute after:-bottom-[3px] after:left-0 after:right-0 after:h-[1px] after:bg-terracotta after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-200";

  return (
    <>
      <nav id="navbar" className={navClass} aria-label="Primary">
        <a
          href="#main"
          className="font-serif text-[1.25rem] font-semibold text-brown no-underline tracking-[0.02em]"
        >
          Minakshi <span className="text-terracotta">Nanda</span>
        </a>
        <ul className="hidden md:flex gap-10 list-none">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href} className={linkClass}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="inline-block text-[0.7rem] md:text-[0.75rem] font-medium tracking-[0.08em] uppercase text-white bg-terracotta border-none px-4 py-[0.6rem] md:px-6 rounded-[2px] no-underline transition-all duration-200 hover:bg-brown hover:-translate-y-[1px]"
          >
            Get in Touch
          </a>
          <button
            ref={buttonRef}
            type="button"
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-[2px] border border-[rgba(92,61,46,0.25)] text-brown transition-colors duration-200 hover:bg-warm"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        id="mobile-menu"
        ref={panelRef}
        hidden={!open}
        className="md:hidden fixed inset-x-0 top-0 z-40 bg-cream/95 backdrop-blur-[12px] border-b border-[rgba(92,61,46,0.12)] px-6 pt-24 pb-8 shadow-[0_16px_48px_rgba(92,61,46,0.12)]"
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
      >
        <ul className="flex flex-col gap-1 list-none">
          {LINKS.map((l, i) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 py-3 border-b border-dashed border-[rgba(92,61,46,0.15)] font-serif text-2xl text-brown transition-colors duration-200 hover:text-terracotta"
              >
                <span className="font-mono text-[0.7rem] text-terracotta">
                  0{i + 1}
                </span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="mt-6 block text-center px-6 py-3 bg-terracotta text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[2px] transition-colors duration-200 hover:bg-brown"
        >
          Get in Touch
        </a>
      </div>
    </>
  );
}
