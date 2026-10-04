import { ArrowRight, Code, ShieldCheck, Briefcase, Mic } from "lucide-react";

const PILLARS = [
  {
    icon: <Code className="w-5 h-5 text-terracotta" />,
    title: "Technology",
    desc: "CSIT background with hands-on development and QA experience.",
  },
  {
    icon: <ShieldCheck className="w-5 h-5 text-terracotta" />,
    title: "Product & Quality",
    desc: "Built products, tested systems and improved release quality.",
  },
  {
    icon: <Briefcase className="w-5 h-5 text-terracotta" />,
    title: "Operations & Business",
    desc: "Leading operations and business development initiatives.",
  },
  {
    icon: <Mic className="w-5 h-5 text-terracotta" />,
    title: "Leadership & Events",
    desc: "Organising events, public speaking and working with diverse people.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="py-24 px-6 md:px-12 max-w-[1360px] mx-auto"
    >
      <span className="section-num-tag">01. About Me</span>

      <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.85fr_1.05fr] gap-12 lg:gap-10 items-center">
        {/* Left Column Text */}
        <div className="flex flex-col items-start">
          <h2 id="about-heading" className="section-h2 mb-6">
            Technology-trained.
            <br />
            Business-minded.
            <br />
            <em className="italic text-terracotta font-normal">People-focused.</em>
          </h2>

          <p className="text-[0.92rem] text-muted leading-[1.8] font-light mb-4">
            I am a technology professional with experience spanning Android
            development, quality assurance, business operations and organisational
            growth. Currently, I serve as Head of Operations &amp; Business
            Development at Surya Business Development Center Pvt. Ltd., while
            pursuing an MBA at Purvanchal University.
          </p>

          <p className="text-[0.92rem] text-muted leading-[1.8] font-light mb-8">
            I enjoy working at the intersection of technology, business and people
            — creating solutions, building partnerships, organising events and
            contributing to meaningful opportunities.
          </p>

          <a href="#journey" className="btn-outline-terracotta">
            More About Me <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Center Column Portrait Photo */}
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

        {/* Right Column 4 Feature Cards */}
        <div className="flex flex-col gap-4">
          {PILLARS.map((pillar) => (
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
    </section>
  );
}
