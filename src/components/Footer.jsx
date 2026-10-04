import { Linkedin, Instagram, ArrowUp } from "lucide-react";

const FOOTER_LINKS = [
  { href: "#about", label: "About" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#leadership", label: "Leadership" },
  { href: "#skills", label: "Skills" },
  { href: "#education", label: "Education" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#181513] text-white py-14 px-6 md:px-12 border-t border-white/10">
      <div className="max-w-[1360px] mx-auto">
        {/* Top Tier */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Logo & Tagline */}
          <div className="flex flex-col">
            <span className="font-serif text-[1.45rem] font-medium tracking-tight text-white leading-tight">
              Minakshi <em className="italic font-normal text-terracotta">Nanda</em>
            </span>
            <span className="text-[0.72rem] text-white/50 tracking-[0.05em] mt-0.5">
              Technology Professional &amp; Business Leader
            </span>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[0.82rem] text-white/70 hover:text-white transition-colors no-underline"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://linkedin.com/in/minakshi-nanda"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors"
            >
              <Instagram className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Back to Top"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/15 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-[0.76rem] text-white/45">
          <p className="m-0">
            © {currentYear} Minakshi Nanda. All rights reserved.
          </p>
          <p className="m-0">Birgunj, Nepal</p>
        </div>
      </div>
    </footer>
  );
}
