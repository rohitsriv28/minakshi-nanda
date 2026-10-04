import useReveal from "../hooks/useReveal";

const STATS = [
  { num: "4+", label: "Projects Designed" },
  { num: "10+", label: "Events as MC" },
  { num: "20%", label: "Bug Reduction at Lennobyte" },
  { num: "1st", label: "Ideathon Winner" },
];

const TRAITS = [
  "UI/UX Design",
  "Public Speaking",
  "Figma",
  "Android QA",
  "Event Management",
  "Business Strategy",
  "Prototyping",
  "Cross-functional",
];

export default function About() {
  const { ref: leftRef, isVisible: leftVisible } = useReveal();
  const { ref: rightRef, isVisible: rightVisible } = useReveal();

  return (
    <section
      id="about"
      aria-labelledby="about-heading"
      className="bg-white grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-12 lg:gap-24 items-center px-6 py-20 lg:px-16 lg:py-28"
    >
      {/* Left bio column */}
      <div
        ref={leftRef}
        className={`transition-all duration-800 ease-out ${
          leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-7"
        }`}
      >
        <div className="section-label">About Me</div>
        <h2 id="about-heading" className="section-title">
          Design, <em>data</em> &amp;
          <br />
          the human side
        </h2>

        <blockquote className="font-serif text-[1.15rem] italic text-muted my-6 pl-6 border-l-2 border-gold leading-[1.7]">
          &ldquo;I believe good design is a conversation — and I&apos;ve spent
          years learning how to lead it.&rdquo;
        </blockquote>

        <p className="text-[0.9rem] text-muted leading-[1.85] font-light mb-5">
          BSc CSIT graduate with hands-on experience in UI/UX design and Android
          QA, now pursuing an MBA at Purvanchal University. I sit at the
          intersection of technology, creativity, and people-facing
          communication.
        </p>

        <p className="text-[0.9rem] text-muted leading-[1.85] font-light">
          From shipping design systems at Qualhon Informatics to reducing bug
          backlogs at Lennobyte Solutions — and hosting audiences of 200 from a
          stage — I thrive where clarity of thought meets clarity of expression.
        </p>
      </div>

      {/* Right stats and traits column */}
      <div
        ref={rightRef}
        className={`flex flex-col gap-6 transition-all duration-800 ease-out ${
          rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
        }`}
      >
        {/* 2x2 Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1px] bg-warm border border-warm rounded-[2px] overflow-hidden">
          {STATS.map((stat) => (
            <div
              key={stat.label}
              className="bg-white p-7 transition-colors duration-300 hover:bg-cream"
            >
              <div className="font-serif text-[2.8rem] font-light text-terracotta leading-none mb-1">
                {stat.num}
              </div>
              <div className="text-[0.75rem] tracking-[0.08em] uppercase text-muted font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Traits Pills */}
        <div className="flex flex-wrap gap-2.5">
          {TRAITS.map((trait) => (
            <span
              key={trait}
              className="px-4 py-1.5 border border-gold rounded-full text-[0.75rem] tracking-[0.05em] text-brown font-medium bg-[rgba(200,169,110,0.08)] transition-all duration-300 hover:bg-gold hover:text-white cursor-default"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
