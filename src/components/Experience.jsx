import useReveal from "../hooks/useReveal";
import experienceData from "../data/experience.jsonc";

export default function Experience() {
  const { ref: headerRef, isVisible: headerVisible } = useReveal();
  const { ref: gridRef, isVisible: gridVisible } = useReveal();

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-brown text-cream px-6 py-20 md:px-16 md:py-28"
    >
      <div
        ref={headerRef}
        className={`transition-all duration-[800ms] ease-out ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
      >
        <div className="inline-flex items-center gap-2.5 font-mono text-[0.7rem] tracking-[0.16em] text-gold uppercase mb-4 before:content-[''] before:w-5 before:h-[1px] before:bg-gold">
          Work History
        </div>
        <h2 id="experience-heading" className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-light text-cream leading-[1.15] tracking-[-0.01em]">
          Where I've <em className="italic text-terra-lt">made an impact</em>
        </h2>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-14"
      >
        {experienceData.map((exp, index) => (
          <div
            key={exp.id}
            className={`bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] p-10 rounded-[2px] transition-all duration-200 hover:bg-[rgba(255,255,255,0.08)] hover:-translate-y-[3px] relative overflow-hidden before:content-[''] before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-terracotta before:scale-y-0 before:origin-bottom hover:before:scale-y-100 before:transition-transform before:duration-200 group md:min-h-[400px] ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{
              transitionDelay: gridVisible ? `${index * 110}ms` : "0ms",
            }}
          >
            <div className="font-mono text-[0.68rem] tracking-[0.1em] text-terra-lt uppercase mb-[0.8rem]">
              {exp.period}
            </div>
            <div className="font-serif text-[1.4rem] font-normal text-cream mb-[0.3rem] leading-[1.2]">
              {exp.role}
            </div>
            <div className="text-[0.82rem] text-gold mb-[1.2rem] font-medium tracking-[0.04em]">
              {exp.company} · {exp.location}
            </div>

            <ul className="list-none">
              {exp.phases &&
                exp.phases.map((phase, pIdx) => (
                  <li
                    key={pIdx}
                    className="text-[0.83rem] text-[rgba(245,240,232,0.65)] py-[0.35rem] pl-4 relative leading-[1.6] font-light before:content-['›'] before:absolute before:left-0 before:text-terra-lt"
                  >
                    <strong className="text-terra-lt font-medium">
                      {phase.label}
                    </strong>{" "}
                    {phase.points.join(" ")}
                  </li>
                ))}
              {exp.points &&
                exp.points.map((point, pIdx) => (
                  <li
                    key={pIdx}
                    className="text-[0.83rem] text-[rgba(245,240,232,0.65)] py-[0.35rem] pl-4 relative leading-[1.6] font-light before:content-['›'] before:absolute before:left-0 before:text-terra-lt"
                  >
                    {point}
                  </li>
                ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
