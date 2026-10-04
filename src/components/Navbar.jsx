import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        id="navbar"
        aria-label="Main Navigation"
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between transition-all duration-400 ${
          scrolled
            ? "bg-[rgba(245,240,232,0.92)] backdrop-blur-[12px] py-4 px-6 md:px-16 border-b border-[rgba(92,61,46,0.1)]"
            : "bg-transparent py-6 px-6 md:px-16"
        }`}
      >
        <a
          href="#"
          className="font-serif text-[1.25rem] font-semibold text-brown tracking-[0.02em] no-underline"
        >
          Minakshi <span className="text-terracotta">Nanda</span>
        </a>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-10 list-none m-0 p-0">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-[0.8rem] font-medium tracking-[0.1em] uppercase text-muted no-underline transition-colors duration-300 relative hover:text-terracotta after:content-[''] after:absolute after:-bottom-[3px] after:left-0 after:right-0 after:h-[1px] after:bg-terracotta after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="text-[0.75rem] font-medium tracking-[0.08em] uppercase text-white bg-terracotta px-6 py-[0.6rem] rounded-[2px] no-underline transition-all duration-300 hover:bg-brown hover:-translate-y-[1px]"
          >
            Get in Touch
          </a>

          {/* Mobile hamburger button */}
          <button
            type="button"
            className="md:hidden flex items-center justify-center w-9 h-9 text-brown hover:text-terracotta transition-colors"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[72px] z-40 bg-[rgba(245,240,232,0.98)] backdrop-blur-md border-b border-[rgba(92,61,46,0.1)] px-6 py-6 shadow-lg">
          <ul className="flex flex-col gap-4 list-none m-0 p-0">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-[0.85rem] font-medium tracking-[0.1em] uppercase text-brown hover:text-terracotta py-2 no-underline"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  );
}
