export default function Hero() {
  const currentYear = new Date().getFullYear();

  return (
    <section
      id="main"
      aria-label="Hero"
      className="min-h-screen grid grid-cols-1 lg:grid-cols-2 relative overflow-hidden bg-cream p-0"
      style={{ padding: 0 }}
    >
      {/* Hero Left Column */}
      <div className="flex flex-col justify-end pt-32 lg:pt-36 pb-16 lg:pb-24 px-6 md:px-16 relative z-10">
        <div className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] tracking-[0.14em] text-terracotta uppercase mb-6 before:content-[''] before:w-6 before:h-[1px] before:bg-terracotta">
          Portfolio <span>{currentYear}</span>
        </div>

        <h1 className="font-serif text-[clamp(3.5rem,7vw,6.5rem)] font-light leading-none text-brown tracking-[-0.01em] mb-1">
          Minakshi
          <br />
          <em className="italic font-light text-terracotta">Nanda</em>
        </h1>

        <p className="font-serif text-[clamp(1rem,2vw,1.35rem)] font-light italic text-muted mb-10 tracking-[0.01em]">
          Designer &amp; Business Strategist
        </p>

        <p className="text-[0.9rem] text-muted max-w-[420px] leading-[1.8] mb-12 font-light">
          Where design thinking meets business acumen. I craft user experiences
          that speak clearly, and strategies that move people.
        </p>

        <div className="flex flex-col sm:flex-row gap-5 items-start sm:items-center">
          <a href="#experience" className="btn-primary">
            View My Work
          </a>
          <a href="#contact" className="btn-ghost">
            Let&apos;s Connect
          </a>
        </div>
      </div>

      {/* Hero Right Column */}
      <div className="relative overflow-hidden w-full h-[380px] lg:h-auto min-h-[380px] lg:min-h-full">
        <div className="absolute inset-0 bg-warm">
          <div className="w-full h-full bg-gradient-to-br from-warm via-[#d4b896] to-[#c8a882] flex items-center justify-center relative overflow-hidden">
            {/* Ambient radial glow */}
            <div
              aria-hidden="true"
              className="absolute w-[300px] h-[300px] rounded-full bg-[radial-gradient(circle,rgba(201,107,63,0.25)_0%,transparent_70%)] top-[20%] left-1/2 -translate-x-1/2 pointer-events-none"
            />

            {/* Monogram backdrop watermark */}
            <span
              aria-hidden="true"
              className="font-serif text-[12rem] font-light text-[rgba(92,61,46,0.15)] tracking-[-0.05em] select-none leading-none absolute"
            >
              MN
            </span>

            {/* Portrait Image */}
            <img
              src="/minakshi-nanda.png"
              alt="Portrait of Minakshi Nanda"
              className="w-full h-full object-cover object-top relative z-[2] mix-blend-multiply opacity-95 transition-transform duration-700 hover:scale-[1.02]"
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Floating Highlight Badge */}
        <div className="absolute bottom-6 left-6 lg:bottom-12 lg:-left-6 bg-terracotta text-white py-[1.2rem] px-[1.5rem] text-[0.7rem] font-medium tracking-[0.08em] uppercase rounded-[2px] shadow-[0_8px_32px_rgba(201,107,63,0.3)] leading-[1.6] z-20">
          <strong className="block font-serif text-[1.8rem] font-light normal-case tracking-normal leading-none mb-1">
            10+
          </strong>
          Events Hosted as MC
        </div>
      </div>

      {/* Scroll indicator (desktop only) */}
      <div className="hidden lg:flex absolute bottom-8 left-16 items-center gap-3 text-[0.7rem] tracking-[0.12em] uppercase text-muted z-10 pointer-events-none">
        <span className="w-10 h-[1px] bg-muted animate-scroll-line inline-block" />
        Scroll to explore
      </div>
    </section>
  );
}
