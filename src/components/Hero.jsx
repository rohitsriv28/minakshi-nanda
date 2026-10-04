import { ArrowRight, ArrowDown, MapPin } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      aria-label="Introduction"
      className="relative pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 md:pb-12 lg:pb-16 px-4 sm:px-6 md:px-10 lg:px-12 max-w-[1360px] mx-auto overflow-hidden lg:overflow-visible w-full"
    >
      {/* ══════════════════════════════════════════════════════════
          1. DESKTOP VIEW (>= 1024px)
          ══════════════════════════════════════════════════════════ */}
      <div className="hidden lg:grid lg:grid-cols-[1.1fr_0.9fr] gap-10 xl:gap-14 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-start z-10">
          <div className="flex items-center gap-1.5 font-mono text-[0.7rem] xl:text-[0.74rem] tracking-[0.18em] uppercase text-terracotta/90 font-medium mb-3">
            <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0" />
            <span>Birgunj, Nepal</span>
          </div>

          <h1 className="font-serif text-[4.8rem] xl:text-[5.4rem] font-light leading-[0.98] text-brown tracking-[-0.015em] mb-4">
            Minakshi
            <br />
            <em className="italic text-terracotta font-normal">Nanda</em>
          </h1>

          <p className="font-serif text-[1.6rem] xl:text-[1.8rem] text-brown font-normal leading-[1.25] mb-4">
            Technology Professional &amp;
            <br />
            Business Leader
          </p>

          <p className="text-[0.92rem] text-muted max-w-[490px] leading-[1.75] font-light mb-6">
            Bridging technology, operations and business to build better
            products, processes and opportunities for people and communities.
          </p>

          {/* 1 Line Categories */}
          <div className="text-[0.78rem] text-muted/90 font-light leading-relaxed mb-8">
            BSc CSIT &nbsp;|&nbsp; MBA (Ongoing) &nbsp;|&nbsp; Operations &amp;
            Business Development
          </div>

          {/* Action buttons side by side */}
          <div className="flex items-center gap-4">
            <a
              href="#journey"
              className="btn-terracotta !py-3 !px-6 text-[0.88rem]"
            >
              Explore My Journey <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <a
              href="#contact"
              className="btn-outline-terracotta !py-3 !px-6 text-[0.88rem]"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        {/* Right Column: Organic Backdrop, Portrait & Floating Elements */}
        <div className="relative flex justify-end items-center pr-6 xl:pr-10">
          {/* Organic Sandy Backdrop Shape behind portrait */}
          <div
            aria-hidden="true"
            className="absolute -top-10 -right-6 w-[480px] xl:w-[540px] h-[520px] xl:h-[580px] rounded-[52%_48%_46%_54%/42%_44%_56%_58%] bg-[#EAE0D3]/75 -z-10 pointer-events-none"
          />

          {/* Portrait Container */}
          <div className="relative z-10 w-full max-w-[340px] xl:max-w-[390px]">
            {/* Organic Teardrop / Arch Silhouette */}
            <div className="w-full aspect-[3.6/4.8] rounded-t-[230px] rounded-br-[28px] rounded-bl-[160px] overflow-hidden bg-warm shadow-[0_20px_50px_rgba(60,40,31,0.14)] border-[3px] border-white relative">
              <img
                src="/minakshi-nanda.png"
                alt="Minakshi Nanda"
                className="w-full h-full object-cover object-top"
                fetchPriority="high"
              />
            </div>

            {/* Handwritten Quote Top-Right */}
            <div
              aria-hidden="true"
              className="absolute -top-3 -right-8 xl:-right-10 text-right font-script text-[1.65rem] xl:text-[1.85rem] text-[#9E4B29] leading-[1.12] rotate-[-2deg] select-none pointer-events-none drop-shadow-sm"
            >
              Technology
              <br />
              Business
              <br />
              People
              <br />
              Opportunities
            </div>
          </div>

          {/* Vertical Scroll prompt on far right edge (Desktop only) */}
          <a
            href="#about"
            aria-label="Scroll to next section"
            className="hidden xl:flex flex-col items-center gap-2 absolute -right-14 top-1/2 -translate-y-1/2 text-[0.66rem] tracking-[0.22em] uppercase text-muted hover:text-terracotta transition-colors no-underline group cursor-pointer"
          >
            <span className="[writing-mode:vertical-rl]">SCROLL</span>
            <div className="w-6 h-6 rounded-full border border-muted/50 group-hover:border-terracotta flex items-center justify-center transition-colors">
              <ArrowDown className="w-3.5 h-3.5 text-muted group-hover:text-terracotta animate-bounce transition-colors" />
            </div>
          </a>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          2. TABLET VIEW (768px – 1023px)
          ══════════════════════════════════════════════════════════ */}
      <div className="hidden md:grid lg:hidden md:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
        {/* Left Column */}
        <div className="flex flex-col items-start z-10">
          <div className="flex items-center gap-1.5 font-mono text-[0.68rem] tracking-[0.16em] uppercase text-terracotta/90 font-medium mb-2.5">
            <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0" />
            <span>Birgunj, Nepal</span>
          </div>

          <h1 className="font-serif text-[3.6rem] font-light leading-[0.98] text-brown tracking-[-0.015em] mb-3">
            Minakshi
            <br />
            <em className="italic text-terracotta font-normal">Nanda</em>
          </h1>

          <p className="font-serif text-[1.35rem] text-brown font-normal leading-[1.25] mb-3.5">
            Technology Professional &amp;
            <br />
            Business Leader
          </p>

          <p className="text-[0.86rem] text-muted max-w-[420px] leading-[1.7] font-light mb-5">
            Bridging technology, operations and business to build better
            products, processes and opportunities for people and communities.
          </p>

          {/* 2-line categories */}
          <div className="text-[0.74rem] text-muted/90 font-light leading-relaxed mb-7">
            <span>BSc CSIT &nbsp;|&nbsp; MBA (Ongoing)</span>
            <br />
            <span>Operations &amp; Business Development</span>
          </div>

          {/* Action buttons stacked vertically */}
          <div className="w-full max-w-[260px] flex flex-col gap-3">
            <a
              href="#journey"
              className="btn-terracotta justify-center text-center py-2.5 text-[0.84rem]"
            >
              Explore My Journey <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <a
              href="#contact"
              className="btn-outline-terracotta justify-center text-center py-2.5 text-[0.84rem]"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>

        {/* Right Column: Arch Portrait & Script */}
        <div className="relative flex flex-col items-center justify-center">
          {/* Arched Portrait Container */}
          <div className="relative z-10 w-full max-w-[280px]">
            <div className="w-full aspect-[3.7/4.9] rounded-t-[190px] rounded-br-[24px] rounded-bl-[130px] overflow-hidden bg-warm shadow-[0_16px_40px_rgba(60,40,31,0.12)] border-[3px] border-white relative">
              <img
                src="/minakshi-nanda.png"
                alt="Minakshi Nanda"
                className="w-full h-full object-cover object-top"
                fetchPriority="high"
              />
            </div>
          </div>

          {/* Handwritten Quote centered directly below portrait */}
          <div
            aria-hidden="true"
            className="relative text-center mt-5 font-script text-[1.45rem] text-[#9E4B29] leading-[1.12] select-none pointer-events-none"
          >
            Technology
            <br />
            Business
            <br />
            People
            <br />
            Opportunities
            {/* Small Terracotta Dot to bottom right of script */}
            <span className="w-2.5 h-2.5 rounded-full bg-[#C96B3F] inline-block ml-2 align-middle" />
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════════════════════════
          3. MOBILE VIEW (< 768px) EXACTLY matching Screenshot 2
          ══════════════════════════════════════════════════════════ */}
      <div className="md:hidden flex flex-col items-start w-full pt-1">
        {/* Top: Portrait Area with Organic Shape, Script on Left, Dot on Right */}
        <div className="relative w-full max-w-[420px] mx-auto pt-2 pb-4 flex justify-center items-center">
          {/* Handwritten Script to the LEFT of the photo */}
          <div
            aria-hidden="true"
            className="absolute left-1 sm:left-4 top-6 text-left font-script text-[1.28rem] sm:text-[1.4rem] text-[#9E4B29] leading-[1.12] -rotate-6 select-none pointer-events-none drop-shadow-sm z-20"
          >
            Technology
            <br />
            Business
            <br />
            People
            <br />
            Opportunities
            {/* Underline Squiggle under Opportunities */}
            <svg
              viewBox="0 0 60 12"
              className="w-12 h-auto text-[#9E4B29] mt-0.5 ml-1"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
            >
              <path d="M 2 4 C 18 10 42 2 58 6" />
            </svg>
          </div>

          {/* Floating Terracotta Dot to top-right of portrait */}
          <div
            aria-hidden="true"
            className="w-3.5 h-3.5 rounded-full bg-[#C96B3F] absolute top-10 right-3 sm:right-6 z-20 pointer-events-none"
          />

          {/* Soft Organic Backdrop Blob behind photo */}
          <div
            aria-hidden="true"
            className="absolute top-0 w-[270px] sm:w-[310px] h-[300px] sm:h-[330px] rounded-[52%_48%_46%_54%/42%_44%_56%_58%] bg-[#EAE0D3]/85 -z-10 pointer-events-none"
          />

          {/* Organic Arch Portrait Container with soft bottom fade */}
          <div className="relative z-10 w-[250px] sm:w-[280px] aspect-[3.7/4.8] rounded-t-[140px] rounded-br-[28px] rounded-bl-[100px] overflow-hidden">
            <img
              src="/minakshi-nanda.png"
              alt="Minakshi Nanda"
              className="w-full h-full object-cover object-top"
              style={{
                maskImage:
                  "linear-gradient(to bottom, black 65%, transparent 100%)",
                WebkitMaskImage:
                  "linear-gradient(to bottom, black 65%, transparent 100%)",
              }}
              fetchPriority="high"
            />
          </div>
        </div>

        {/* Content Below Photo - full screen width */}
        <div className="w-full flex flex-col items-start mt-2">
          {/* Location pin + BIRGUNJ, NEPAL */}
          <div className="flex items-center gap-1.5 font-mono text-[0.72rem] tracking-[0.16em] uppercase text-terracotta font-medium mb-2.5">
            <MapPin className="w-3.5 h-3.5 text-terracotta shrink-0" />
            <span>Birgunj, Nepal</span>
          </div>

          {/* Headline row with '———— 01' on the right */}
          <div className="w-full flex items-start justify-between gap-4 mb-2.5">
            <h1 className="font-serif text-[3.4rem] font-light leading-[0.98] text-brown tracking-[-0.015em]">
              Minakshi
              <br />
              <em className="italic text-terracotta font-normal">Nanda</em>
            </h1>
            <div className="flex items-center gap-2 mt-4 text-muted/70 shrink-0">
              <span className="w-12 h-[1px] bg-[#D4C5B5]" />
              <span className="font-mono text-[0.78rem] text-muted">01</span>
            </div>
          </div>

          {/* Subheading */}
          <p className="font-serif text-[1.38rem] text-brown font-normal leading-[1.25] mb-3.5">
            Technology Professional &amp;
            <br />
            Business Leader
          </p>

          {/* Bio */}
          <p className="text-[0.88rem] text-muted leading-[1.7] font-light mb-4 w-full">
            Bridging technology, operations and business to build better
            products, processes and opportunities for people and communities.
          </p>

          {/* 1-line / wrapped category list */}
          <div className="text-[0.76rem] text-muted font-light leading-relaxed mb-6 w-full">
            BSc CSIT &nbsp;|&nbsp; MBA (Ongoing) &nbsp;|&nbsp; Operations &amp;
            Business Development
          </div>

          {/* Full-width action buttons stacked */}
          <div className="w-full flex flex-col gap-3">
            <a
              href="#journey"
              className="btn-terracotta w-full justify-center text-center py-3 text-[0.88rem] rounded-[8px]"
            >
              Explore My Journey <ArrowRight className="w-4 h-4 ml-1" />
            </a>
            <a
              href="#contact"
              className="w-full justify-center text-center py-3 text-[0.88rem] rounded-[8px] border border-terracotta text-brown font-medium bg-[#FAF6F0] hover:bg-terracotta/5 transition-colors no-underline"
            >
              Let&apos;s Connect
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
