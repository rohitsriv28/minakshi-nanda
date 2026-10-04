export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink text-[rgba(245,240,232,0.7)] px-6 py-12 md:px-16">
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8">
        <div>
          <p className="font-serif text-[1.4rem] font-light text-cream tracking-[0.02em]">
            Minakshi <span className="italic text-terra-lt">Nanda</span>
          </p>
          <p className="mt-2 text-[0.82rem] text-[rgba(245,240,232,0.5)] max-w-[320px] leading-relaxed">
            Designer &amp; Business Strategist — clarity of thought, clarity of
            expression.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="grid grid-cols-2 gap-x-12 gap-y-2 text-[0.78rem] tracking-[0.06em] uppercase">
            {[
              ["About", "#about"],
              ["Skills", "#skills"],
              ["Experience", "#experience"],
              ["Projects", "#projects"],
              ["Education", "#education"],
              ["Contact", "#contact"],
            ].map(([label, href]) => (
              <li key={href}>
                <a
                  href={href}
                  className="text-[rgba(245,240,232,0.6)] transition-colors duration-200 hover:text-cream"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="text-[0.78rem] text-[rgba(245,240,232,0.5)] md:text-right leading-relaxed">
          <p>Birgunj, Nepal</p>
          <p className="mt-1">
            <a
              href="https://linkedin.com/in/minakshi-nanda"
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-white/20 underline-offset-4 transition-colors duration-200 hover:text-cream"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
      <div className="mt-10 pt-6 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-3 text-[0.75rem] text-[rgba(245,240,232,0.35)] tracking-[0.04em]">
        <p>© {currentYear} Minakshi Nanda · Designed with intent</p>
        <p>Warm editorial system · Cream / Terracotta / Brown</p>
      </div>
    </footer>
  );
}
