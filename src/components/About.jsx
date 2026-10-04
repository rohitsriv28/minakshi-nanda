import {
  ArrowRight,
  Laptop,
  Briefcase,
  Users,
  ShieldCheck,
  ExternalLink,
} from "lucide-react";

const PILLARS_DESKTOP = [
  {
    icon: <Briefcase className="w-5 h-5 text-terracotta" />,
    title: "Operations & Business",
    desc: "Leading operations and business development initiatives.",
  },
  {
    icon: <Users className="w-5 h-5 text-terracotta" />,
    title: "Leadership & Events",
    desc: "Organising events, public speaking and working with diverse people.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-terracotta" />,
    title: "Product & Quality",
    desc: "Built products, tested systems and improved release quality.",
  },
  {
    icon: <Laptop className="w-5 h-5 text-terracotta" />,
    title: "Technology",
    desc: "CSIT background with hands-on development and QA experience.",
  },
];

const PILLARS_MOBILE = [
  {
    icon: <Briefcase className="w-5 h-5 text-terracotta" />,
    title: "Business & Operations",
    desc: "Leading operations and business development initiatives.",
  },
  {
    icon: <Users className="w-5 h-5 text-terracotta" />,
    title: "People & Leadership",
    desc: "Organising events, public speaking and working with diverse people.",
  },
  {
    icon: <Laptop className="w-5 h-5 text-terracotta" />,
    title: "Technology",
    desc: "CSIT background with hands-on development and QA experience.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-16 md:py-24 px-5 md:px-12 max-w-[1360px] mx-auto"
    >
      <span className="section-num-tag">01. About Me</span>

      {/* Desktop 3-column Layout */}
      <div className="hidden lg:grid grid-cols-[1.1fr_0.85fr_1.05fr] gap-10 items-center">
        {/* Left Column Text */}
        <div className="flex flex-col items-start">
          {/* #2: Live Executive Status Pill */}
          <a
            href="https://www.suryabdc.com.np/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#EFE5D7]/85 hover:bg-[#EAE0D0] border border-[#DFCFC0] text-[0.74rem] text-brown transition-all duration-200 mb-5 no-underline shadow-xs cursor-pointer"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
            </span>
            <span>
              Currently leading Operations &amp; Growth at{" "}
              <strong className="font-semibold text-terracotta group-hover:underline">
                Surya BDC
              </strong>
            </span>
            <ExternalLink className="w-3 h-3 text-terracotta group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </a>

          <h2 id="about-heading" className="section-h2 mb-6">
            Technology-trained.
            <br />
            Business-minded.
            <br />
            <em className="italic text-terracotta font-normal">
              People-focused.
            </em>
          </h2>

          <p className="text-[0.92rem] text-muted leading-[1.8] font-light mb-4">
            I am a technology professional with experience spanning Android
            development, quality assurance, business operations and
            organisational growth. Currently, I serve as Head of Operations
            &amp; Business Development at{" "}
            <a
              href="https://www.suryabdc.com.np/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-terracotta font-medium underline underline-offset-4 decoration-terracotta/40 hover:decoration-terracotta transition-colors"
            >
              Surya Business Development Center Pvt. Ltd.
            </a>
            , while pursuing an MBA at Purvanchal University.
          </p>

          <p className="text-[0.92rem] text-muted leading-[1.8] font-light mb-8">
            I enjoy working at the intersection of technology, business and
            people — creating solutions, building partnerships, organising
            events and contributing to meaningful opportunities.
          </p>

          <a href="#journey" className="btn-outline-terracotta">
            More About Me <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Center Column Portrait */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-[320px] aspect-[3.2/4] rounded-[10px] overflow-hidden shadow-[0_16px_40px_rgba(60,40,31,0.12)] border-[3px] border-white bg-warm">
            <img
              src="/about-portrait.jpg"
              alt="Minakshi Nanda smiling"
              className="w-full h-full object-cover object-top"
              loading="lazy"
            />
          </div>
          <p className="font-script text-[1.45rem] text-muted text-center mt-4 leading-snug">
            &ldquo;Curious learner, problem solver and people person.&rdquo;
          </p>
        </div>

        {/* Right Column 4 Cards */}
        <div className="flex flex-col gap-4">
          {PILLARS_DESKTOP.map((pillar) => (
            <div
              key={pillar.title}
              className="flex items-start gap-4 p-4 rounded-[6px] bg-[#FAF5EE] border border-[#EBE1D3] transition-all duration-200 hover:border-terracotta/40 hover:bg-white hover:shadow-sm"
            >
              <div className="w-10 h-10 rounded-[6px] bg-terracotta/10 border border-terracotta/20 flex items-center justify-center shrink-0 mt-0.5">
                {pillar.icon}
              </div>
              <div>
                <h3 className="font-serif text-[1.05rem] font-medium text-brown mb-0.5">
                  {pillar.title}
                </h3>
                <p className="text-[0.8rem] text-muted leading-[1.6] font-light">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Layout Matching Screen 3 Exactly */}
      <div className="lg:hidden flex flex-col items-start text-left">
        {/* #2: Live Executive Status Pill on Mobile */}
        <a
          href="https://www.suryabdc.com.np/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#EFE5D7]/85 border border-[#DFCFC0] text-[0.72rem] text-brown transition-all duration-200 mb-4 no-underline"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-600"></span>
          </span>
          <span>
            Leading Operations at{" "}
            <strong className="font-semibold text-terracotta">Surya BDC</strong>
          </span>
          <ExternalLink className="w-3 h-3 text-terracotta shrink-0" />
        </a>

        <h2 className="section-h2 mb-4">
          Technology-trained.
          <br />
          Business-minded.
          <br />
          <em className="italic text-terracotta font-normal">
            People-focused.
          </em>
        </h2>

        <p className="text-[0.88rem] text-muted leading-[1.75] font-light mb-8">
          I am a technology professional with experience spanning Android
          development, quality assurance, business operations and organisational
          growth. Currently, I serve as Head of Operations &amp; Business
          Development at{" "}
          <a
            href="https://www.suryabdc.com.np/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-terracotta font-medium underline underline-offset-4 decoration-terracotta/40"
          >
            Surya Business Development Center Pvt. Ltd.
          </a>
          , while pursuing an MBA.
        </p>

        {/* 3 Mobile Cards matching Screen 3 */}
        <div className="w-full flex flex-col gap-3.5 mb-8">
          {PILLARS_MOBILE.map((pillar) => (
            <div
              key={pillar.title}
              className="flex items-start gap-3.5 p-4 rounded-[6px] bg-[#FAF5EE] border border-[#EBE1D3]"
            >
              <div className="w-9 h-9 rounded-[6px] bg-terracotta/10 border border-terracotta/20 flex items-center justify-center shrink-0 mt-0.5">
                {pillar.icon}
              </div>
              <div>
                <h3 className="font-serif text-[1rem] font-semibold text-brown mb-0.5">
                  {pillar.title}
                </h3>
                <p className="text-[0.78rem] text-muted leading-[1.55] font-light">
                  {pillar.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Full-width bottom button */}
        <a
          href="#journey"
          className="btn-outline-terracotta w-full justify-center text-center"
        >
          More About Me <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </section>
  );
}
