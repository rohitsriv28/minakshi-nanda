import useReveal from "../hooks/useReveal";
import educationData from "../data/education.jsonc";

export default function Education() {
  const { ref: leftRef, isVisible: leftVisible } = useReveal();
  const { ref: rightRef, isVisible: rightVisible } = useReveal();

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="bg-cream grid grid-cols-1 md:grid-cols-[1fr_1.8fr] gap-12 md:gap-24 items-start px-6 py-20 md:px-16 md:py-28"
    >
      <div
        ref={leftRef}
        className={`md:sticky md:top-32 self-start transition-all duration-[800ms] ease-out ${leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-7"}`}
      >
        <div className="inline-flex items-center gap-2.5 font-mono text-[0.7rem] tracking-[0.16em] text-terracotta uppercase mb-4 before:content-[''] before:w-5 before:h-[1px] before:bg-terracotta">
          Education
        </div>
        <h2 id="education-heading" className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-light text-brown leading-[1.15] tracking-[-0.01em]">
          The <em className="italic text-terracotta">foundation</em>
        </h2>
        <p className="text-[0.88rem] text-muted mt-[1.2rem] font-light leading-[1.8]">
          A foundation built on computer science, business strategy, and the
          conviction that technology is best understood through a human lens.
        </p>
        <div className="flex gap-6 mt-12 flex-wrap">
          <span className="flex items-center gap-2 px-[1.2rem] py-2 border border-[rgba(92,61,46,0.2)] rounded-full text-[0.8rem] text-brown font-normal">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
            English — Professional
          </span>
          <span className="flex items-center gap-2 px-[1.2rem] py-2 border border-[rgba(92,61,46,0.2)] rounded-full text-[0.8rem] text-brown font-normal">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
            Hindi — Native
          </span>
          <span className="flex items-center gap-2 px-[1.2rem] py-2 border border-[rgba(92,61,46,0.2)] rounded-full text-[0.8rem] text-brown font-normal">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta"></span>
            Nepali — Fluent
          </span>
        </div>
      </div>

      <div
        ref={rightRef}
        className={`flex flex-col gap-0 transition-all duration-[800ms] ease-out ${rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
      >
        {educationData.map((edu, index) => (
          <div
            key={edu.id}
            className={`grid grid-cols-[80px_1fr] gap-6 py-8 border-b border-[rgba(92,61,46,0.1)] relative ${index === educationData.length - 1 ? "border-b-0" : ""}`}
          >
            <div className="font-mono text-[0.7rem] tracking-[0.08em] text-terracotta text-right pt-[0.2rem] font-normal">
              {edu.startYear}
              <br />
              {edu.endYear}
            </div>
            <div>
              <div className="font-serif text-[1.3rem] font-semibold text-brown mb-1">
                {edu.degree}
              </div>
              <div className="text-[0.82rem] text-terracotta font-medium mb-[0.6rem] tracking-[0.03em]">
                {edu.institution} · {edu.university}
              </div>
              <div className="text-[0.8rem] text-muted leading-[1.7] font-light">
                {edu.detail}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
