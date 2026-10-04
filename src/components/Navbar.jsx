import { useState, useEffect } from "react";
import {
  ArrowRight,
  Menu,
  X,
  Mail,
  Linkedin,
  MapPin,
  Instagram,
  Youtube,
} from "lucide-react";

const NAV_LINKS = [
  { href: "#hero", label: "Home" },
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
  const [activeLink, setActiveLink] = useState("#hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF6F0]/95 backdrop-blur-md py-3 border-b border-[#E8DED1] shadow-sm"
            : "bg-transparent py-4 md:py-5"
        }`}
      >
        <div className="max-w-[1360px] mx-auto px-5 md:px-10 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center no-underline group">
            <span className="font-serif text-[1.4rem] md:text-[1.55rem] font-medium tracking-tight text-brown leading-tight">
              Minakshi{" "}
              <em className="italic font-normal text-terracotta">Nanda</em>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {NAV_LINKS.filter((l) => l.href !== "#hero").map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.82rem] font-medium text-muted hover:text-terracotta transition-colors no-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action & Mobile/Tablet Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="hidden lg:inline-flex btn-terracotta !py-2.5 !px-5 !text-[0.8rem]"
            >
              Let&apos;s Connect <ArrowRight className="w-3.5 h-3.5 ml-1" />
            </a>

            <button
              type="button"
              className="lg:hidden p-1.5 text-brown hover:text-terracotta transition-colors cursor-pointer"
              onClick={() => setOpen(true)}
              aria-label="Open mobile navigation menu"
            >
              <Menu className="w-6 h-6 stroke-[1.8]" />
            </button>
          </div>
        </div>
      </header>

      {/* Full-Screen Mobile Drawer matching Screenshot 2 */}
      {open && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-[#1C1613] text-white flex flex-col justify-between p-6 overflow-y-auto animate-in fade-in duration-200">
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <span className="font-serif text-[1.35rem] font-medium text-white tracking-tight">
              Minakshi{" "}
              <em className="italic font-normal text-terracotta">Nanda</em>
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-1.5 text-white/80 hover:text-white transition-colors cursor-pointer"
              aria-label="Close mobile menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Links List */}
          <nav className="flex flex-col gap-4 py-8">
            {NAV_LINKS.map((link) => {
              const isActive = activeLink === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(link.href);
                    setOpen(false);
                  }}
                  className={`text-[1.2rem] font-serif tracking-wide no-underline flex items-center gap-2.5 transition-colors ${
                    isActive
                      ? "text-white font-medium"
                      : "text-white/60 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-terracotta inline-block" />
                  )}
                  <span className={isActive ? "text-terracotta" : ""}>
                    {link.label}
                  </span>
                </a>
              );
            })}
          </nav>

          {/* Bottom Info & Socials */}
          <div className="pt-6 border-t border-white/10 flex flex-col gap-4">
            <div className="flex flex-col gap-2.5 text-[0.82rem] text-white/70">
              <a
                href="mailto:minakshinanda.com.np"
                className="flex items-center gap-3 text-inherit no-underline hover:text-white"
              >
                <Mail className="w-4 h-4 text-terracotta shrink-0" />
                <span>minakshinanda.com.np</span>
              </a>
              <a
                href="https://linkedin.com/in/minakshi-nanda"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-inherit no-underline hover:text-white"
              >
                <Linkedin className="w-4 h-4 text-terracotta shrink-0" />
                <span>Connect on LinkedIn</span>
              </a>
              <div className="flex items-center gap-3 text-inherit">
                <MapPin className="w-4 h-4 text-terracotta shrink-0" />
                <span>Birgunj, Nepal</span>
              </div>
            </div>

            {/* Social Circle Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com/in/minakshi-nanda"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-colors"
              >
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
