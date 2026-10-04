import useReveal from "../hooks/useReveal";

export default function About() {
  const { ref: leftRef, isVisible: leftVisible } = useReveal();
  const { ref: rightRef, isVisible: rightVisible } = useReveal();

  const sectionClass =
    "bg-white grid grid-cols-1 md:grid-cols-[1fr_1.3fr] gap-12 md:gap-24 items-center px-6 py-20 md:px-16 md:py-28";

  return (
    <section id="about" aria-labelledby="about-heading" className={sectionClass}>
      <div
        ref={leftRef}
        className={`transition-all duration-[800ms] ease-out ${leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-7"}`}
      >
        <div className="inline-flex items-center gap-2.5 font-mono text-[0.7rem] tracking-[0.16em] text-terracotta uppercase mb-4 before:content-[''] before:w-5 before:h-[1px] before:bg-terracotta">
          About Me
        </div>
        <h2 id="about-heading" className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-light text-brown leading-[1.15] tracking-[-0.01em]">
          Design, <em className="italic text-terracotta">data</em> &amp;
          <br />
          the human side
        </h2>
        <blockquote className="font-serif text-[1.15rem] italic text-muted my-6 pl-6 border-l-2 border-gold leading-[1.7]">
          "I believe good design is a conversation — and I've spent years
          learning how to lead it."
        </blockquote>
        <p className="text-[0.9rem] text-muted leading-[1.85] font-light mb-[1.2rem]">
          BSc CSIT graduate with hands-on experience in UI/UX design and Android
          QA, now pursuing an MBA at Purvanchal University. I sit at the
          intersection of technology, creativity, and people-facing
          communication.
        </p>
        <p className="text-[0.9rem] text-muted leading-[1.85] font-light mb-[1.2rem]">
          From shipping design systems at Qualhon Informatics to reducing bug
          backlogs at Lennobyte Solutions — and hosting audiences of 200 from a
          stage — I thrive where clarity of thought meets clarity of expression.
        </p>
      </div>

      <div
        ref={rightRef}
        className={`flex flex-col gap-6 transition-all duration-[800ms] ease-out ${rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
      >
        <div className="border border-warm rounded-[2px] overflow-hidden">
          {[
            ["Studying", "MBA @ Purvanchal University"],
            ["Open to", "UI/UX · Business Ops · Management"],
            ["Based in", "Birgunj, Nepal"],
          ].map(([k, v], i, arr) => (
            <div
              key={k}
              className={`flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-6 px-6 py-4 bg-white transition-colors duration-200 hover:bg-cream ${i !== arr.length - 1 ? "border-b border-warm" : ""}`}
            >
              <span className="font-mono text-[0.65rem] tracking-[0.14em] uppercase text-terracotta shrink-0 sm:w-24">
                {k}
              </span>
              <span className="font-serif text-[1.15rem] text-brown font-normal">
                {v}
              </span>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-[0.6rem]">
          {[
            "UI/UX Design",
            "Public Speaking",
            "Figma",
            "Android QA",
            "Event Management",
            "Business Strategy",
            "Prototyping",
            "Cross-functional",
          ].map((trait) => (
            <span
              key={trait}
              className="px-4 py-1.5 border border-gold rounded-full text-[0.75rem] tracking-[0.05em] text-brown font-medium bg-[rgba(200,169,110,0.08)] transition-all duration-300 hover:bg-gold hover:text-white"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
