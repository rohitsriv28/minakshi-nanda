import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#leadership", label: "Leadership" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF6F0]/95 backdrop-blur-md py-3.5 border-b border-[#E8DED1] shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex flex-col no-underline group">
            <span className="font-serif text-[1.4rem] font-medium tracking-tight text-brown leading-tight">
              Minakshi <em className="italic font-normal text-terracotta">Nanda</em>
            </span>
            <span className="hidden sm:inline-block text-[0.68rem] tracking-[0.06em] text-muted -mt-0.5">
              Technology Professional &amp; Business Leader
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.82rem] font-medium text-muted hover:text-terracotta transition-colors no-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="btn-terracotta !py-2 !px-4 !text-[0.78rem]"
            >
              Let&apos;s Connect <ArrowRight className="w-3.5 h-3.5" />
            </a>

            <button
              type="button"
              className="lg:hidden p-2 text-brown hover:text-terracotta transition-colors"
              onClick={() => setOpen(!open)}
              aria-label="Toggle navigation menu"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Panel */}
      {open && (
        <div className="lg:hidden fixed inset-x-0 top-[68px] z-40 bg-[#FAF6F0] border-b border-[#E8DED1] px-6 py-6 shadow-xl">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[0.95rem] font-medium text-brown hover:text-terracotta py-1.5 no-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  );
}
