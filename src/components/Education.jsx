import useReveal from "../hooks/useReveal";

const EDUCATION_ITEMS = [
  {
    startYear: "2025",
    endYear: "Present",
    degree: "Master of Business Administration",
    school: "Birgunj Public College · Purvanchal University",
    detail:
      "Focus: Business Management, Organisational Behaviour, Strategic Management, Marketing. Active contributor as Master of Ceremony and key organising member for college events.",
  },
  {
    startYear: "2019",
    endYear: "2024",
    degree: "BSc in Computer Science & IT",
    school: "National Infotech College · Tribhuvan University",
    detail:
      "4-year program covering Data Structures, AI, Advanced Databases, Web Technology, Cloud Computing, and Project Management. Built a medicine e-commerce platform as final-year project. Won college Ideathon. Served as MC for 7 events (audiences 100–200).",
  },
];

const LANGUAGES = [
  "English — Professional",
  "Hindi — Native",
  "Nepali — Fluent",
];

export default function Education() {
  const { ref: leftRef, isVisible: leftVisible } = useReveal();
  const { ref: rightRef, isVisible: rightVisible } = useReveal();

  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="bg-cream grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-24 items-start px-6 py-20 lg:px-16 lg:py-28"
    >
      {/* Left column (sticky on desktop) */}
      <div
        ref={leftRef}
        className={`lg:sticky lg:top-32 self-start transition-all duration-800 ease-out ${
          leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-7"
        }`}
      >
        <div className="section-label">Education</div>
        <h2 id="education-heading" className="section-title">
          The <em>foundation</em>
        </h2>
        <p className="text-[0.88rem] text-muted mt-5 font-light leading-[1.8]">
          A foundation built on computer science, business strategy, and the
          conviction that technology is best understood through a human lens.
        </p>

        {/* Language pills */}
        <div className="flex flex-wrap gap-4 mt-10">
          {LANGUAGES.map((lang) => (
            <span
              key={lang}
              className="inline-flex items-center gap-2 px-5 py-2 border border-[rgba(92,61,46,0.2)] rounded-full text-[0.8rem] text-brown font-normal"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta inline-block" />
              {lang}
            </span>
          ))}
        </div>
      </div>

      {/* Right column timeline */}
      <div
        ref={rightRef}
        className={`flex flex-col transition-all duration-800 ease-out ${
          rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
        }`}
      >
        {EDUCATION_ITEMS.map((item, idx) => (
          <div
            key={item.degree}
            className={`grid grid-cols-[80px_1fr] gap-6 py-8 border-b border-[rgba(92,61,46,0.1)] relative ${
              idx === EDUCATION_ITEMS.length - 1 ? "border-b-0" : ""
            }`}
          >
            <div className="font-mono text-[0.7rem] tracking-[0.08em] text-terracotta text-right pt-[0.2rem] font-normal leading-tight">
              {item.startYear}
              <br />
              {item.endYear}
            </div>
            <div>
              <h3 className="font-serif text-[1.3rem] font-semibold text-brown mb-1 leading-snug">
                {item.degree}
              </h3>
              <div className="text-[0.82rem] text-terracotta font-medium mb-2.5 tracking-[0.03em]">
                {item.school}
              </div>
              <p className="text-[0.8rem] text-muted leading-[1.7] font-light">
                {item.detail}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
