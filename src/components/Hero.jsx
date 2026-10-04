import events from "../data/events.jsonc";
import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const currentYear = new Date().getFullYear();
  const eventCount = events.length;

  return (
    <section
      id="hero"
      aria-labelledby="hero-heading"
      className="relative overflow-hidden bg-cream"
    >
      {/* Ghost folio watermark — Devanagari year, decorative only */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-8 top-16 font-serif text-[11rem] md:text-[22rem] leading-none text-brown/[0.04]"
      >
        २०२६
      </span>

      <div className="grid grid-cols-1 md:grid-cols-[1.05fr_0.95fr] md:items-center gap-10 md:gap-4 px-6 md:pl-16 md:pr-12 pt-28 md:pt-32 pb-14 md:pb-20 max-w-[1400px] mx-auto">
        {/* Portrait — first on mobile, left column on desktop */}
        <div className="order-first w-full max-w-[420px] justify-self-center md:justify-self-center relative z-0 motion-safe:animate-hero-rise">
          <figure>
            <div className="relative">
              {/* Terracotta arch echo behind the mat */}
              <div
                aria-hidden="true"
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-t-[999px] rounded-b-[4px] border border-terracotta/50"
              />
              <div className="relative bg-white p-2.5 rounded-t-[999px] rounded-b-[4px] border border-warm shadow-[0_24px_64px_rgba(92,61,46,0.18)]">
                <div className="overflow-hidden rounded-t-[999px] rounded-b-[2px] aspect-[4/5]">
                  <img
                    src="/minakshi-nanda.png"
                    alt="Portrait of Minakshi Nanda, designer and business strategist"
                    className="w-full h-full object-cover object-top motion-safe:animate-portrait-settle"
                    fetchPriority="high"
                    decoding="async"
                  />
                </div>
              </div>
            </div>
            {/* <figcaption className="mt-4 flex items-center justify-center gap-2.5 font-mono text-[0.65rem] tracking-[0.14em] uppercase text-muted">
              <span>Fig. 01 — Birgunj, Nepal</span>
              <span
                aria-hidden="true"
                className="w-1.5 h-1.5 rounded-full bg-terracotta"
              />
              <span className="text-terracotta">Open to roles</span>
            </figcaption> */}
          </figure>
        </div>

        {/* Copy */}
        <div className="relative z-10 motion-safe:animate-hero-rise [animation-delay:120ms]">
          <p className="inline-flex items-center gap-2.5 font-mono text-[0.72rem] tracking-[0.14em] text-terracotta uppercase mb-5 before:content-[''] before:w-6 before:h-[1px] before:bg-terracotta">
            Portfolio {currentYear} · {eventCount}+ stages hosted
          </p>
          <h1
            id="hero-heading"
            className="relative z-20 font-serif text-[clamp(3.2rem,11vw,4.5rem)] md:text-[clamp(3.2rem,6vw,5.5rem)] font-light leading-[0.95] text-brown tracking-[-0.01em] md:-ml-28"
          >
            Minakshi
            <br />
            <em className="italic font-light text-terracotta [text-shadow:0_2px_24px_#f5f0e8,0_0_8px_#f5f0e8]">
              Nanda
            </em>
          </h1>
          <p className="mt-4 text-[0.95rem] font-medium tracking-[0.02em] text-brown">
            Designer &amp; Business Strategist
          </p>
          <blockquote className="mt-5 border-l-2 border-gold pl-5 max-w-[46ch]">
            <p className="font-serif italic text-[1.1rem] text-brown leading-[1.6]">
              Clarity of thought, clarity of expression.
            </p>
            <p className="mt-2 text-[0.92rem] text-ink/80 leading-[1.75] font-light">
              Where design thinking meets business acumen. I craft user
              experiences that speak clearly, and strategies that move people.
            </p>
          </blockquote>
          <ul className="mt-7 flex flex-wrap gap-x-8 gap-y-2 border-y border-brown/10 py-3 max-w-[480px] font-mono text-[0.65rem] tracking-[0.14em] uppercase text-muted">
            <li>Based in NPT</li>
            <li>Replies via LinkedIn</li>
            <li className="text-terracotta">Open to roles</li>
          </ul>
          <div className="mt-7 flex flex-wrap items-center gap-x-7 gap-y-4">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 min-h-[48px] px-[2.2rem] py-[0.85rem] bg-brown text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[2px] transition-all duration-200 hover:bg-terracotta hover:-translate-y-0.5"
            >
              View selected work
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-1.5 min-h-[48px] text-[0.78rem] font-medium tracking-[0.1em] uppercase text-terracotta underline decoration-terracotta/40 underline-offset-8 transition-colors duration-200 hover:text-brown"
            >
              Let&apos;s connect
              <ArrowUpRight
                className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
