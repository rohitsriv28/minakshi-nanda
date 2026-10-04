import { ArrowRight, ChevronDown } from "lucide-react";

const TAGS = ["BSc CSIT", "MBA", "Operations", "Business Development"];

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative min-h-[92vh] pt-32 pb-20 md:pt-36 md:pb-24 px-6 md:px-12 max-w-[1360px] mx-auto flex flex-col justify-center"
    >
      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-8 items-center">
        {/* Left Column Content */}
        <div className="flex flex-col items-start z-10">
          <span className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-muted font-medium mb-3">
            Birgunj, Nepal
          </span>

          <h1 className="font-serif text-[clamp(3.5rem,7.5vw,6rem)] font-light leading-[0.98] text-brown tracking-[-0.015em] mb-4">
            Minakshi
            <br />
            <em className="italic text-terracotta font-normal">Nanda</em>
          </h1>

          <p className="font-serif text-[clamp(1.35rem,2.2vw,1.75rem)] text-brown font-normal leading-[1.3] mb-4">
            Technology Professional &amp; Business Leader
          </p>

          <p className="text-[0.95rem] text-muted max-w-[500px] leading-[1.75] font-light mb-8">
            Bridging technology, operations and business to build better products,
            processes and opportunities for people and communities.
          </p>

          {/* Tags row */}
          <div className="flex flex-wrap items-center gap-2 mb-9">
            {TAGS.map((tag, idx) => (
              <span
                key={tag}
                className="inline-flex items-center text-[0.74rem] font-medium text-muted bg-[#F0E6D8] px-3.5 py-1.5 rounded-[3px] border border-[#E4D7C5]"
              >
                {tag}
                {idx < TAGS.length - 1 && <span className="ml-2 opacity-0">|</span>}
              </span>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <a href="#journey" className="btn-terracotta">
              Explore My Journey <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#contact" className="btn-outline-dark">
              Let&apos;s Connect
            </a>
          </div>
        </div>

        {/* Right Column Portrait & Overlays */}
        <div className="relative flex justify-center items-center lg:justify-end">
          {/* Subtle circular mandala / ornamental aura behind */}
          <div
            aria-hidden="true"
            className="absolute -top-10 left-1/2 -translate-x-1/2 lg:left-auto lg:right-6 w-[380px] h-[380px] rounded-full border border-terracotta/20 opacity-40 pointer-events-none"
            style={{
              backgroundImage:
                "radial-gradient(circle, rgba(166,75,42,0.12) 0%, transparent 70%)",
            }}
          />

          {/* Arch Container */}
          <div className="relative w-full max-w-[360px] md:max-w-[400px]">
            <div className="w-full aspect-[3.8/5] rounded-t-[999px] rounded-b-[8px] overflow-hidden bg-warm shadow-[0_20px_50px_rgba(60,40,31,0.15)] border-[3px] border-white">
              <img
                src="/minakshi-nanda.png"
                alt="Minakshi Nanda"
                className="w-full h-full object-cover object-top"
                fetchPriority="high"
              />
            </div>

            {/* Handwritten Floating Quote Top-Right */}
            <div
              aria-hidden="true"
              className="absolute -top-6 -right-6 md:-right-10 text-right font-script text-[1.45rem] md:text-[1.65rem] text-terracotta leading-[1.1] rotate-[-3deg] select-none pointer-events-none drop-shadow-sm"
            >
              &ldquo;Technology
              <br />
              Business
              <br />
              People
              <br />
              Opportunities&rdquo;
            </div>

            {/* Floating Quote Card Bottom-Right */}
            <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white/95 backdrop-blur-sm p-4 md:p-5 rounded-[4px] shadow-[0_12px_36px_rgba(60,40,31,0.12)] border border-[#EDE2D4] max-w-[210px]">
              <p className="font-serif text-[0.92rem] text-brown leading-snug font-medium">
                Turning ideas into real-world impact.
              </p>
              <span className="block font-script text-[1.4rem] text-terracotta mt-1 text-right leading-none">
                Minakshi
              </span>
            </div>
          </div>

          {/* Vertical Scroll prompt on right edge */}
          <div
            aria-hidden="true"
            className="hidden xl:flex flex-col items-center gap-2 absolute -right-16 top-1/2 -translate-y-1/2 text-[0.68rem] tracking-[0.2em] uppercase text-muted select-none"
          >
            <span className="[writing-mode:vertical-rl]">Scroll</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce text-terracotta" />
          </div>
        </div>
      </div>
    </section>
  );
}
