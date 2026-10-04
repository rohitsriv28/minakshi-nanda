import {
  Briefcase,
  BookOpen,
  Smartphone,
  GraduationCap,
  ExternalLink,
} from "lucide-react";

const MILESTONES = [
  {
    period: "Jul 2026 – Present",
    icon: <Briefcase className="w-5 h-5 text-terracotta" />,
    role: "Head of Operations & Business Development",
    org: "Surya Business Development Center Pvt. Ltd.",
    link: "https://www.suryabdc.com.np/",
    pills: ["Operations", "Business Growth", "Stakeholder Engagement"],
    desc: "Operations, partnerships, stakeholder engagement and enterprise growth.",
  },
  {
    period: "May 2025 – Present",
    icon: <BookOpen className="w-5 h-5 text-terracotta" />,
    role: "MBA (Ongoing)",
    org: "Purvanchal University",
    pills: ["Business Management", "Strategic Management", "Marketing"],
    desc: "Business management, organisational behaviour, strategic management, marketing.",
  },
  {
    period: "Mar 2024 – Dec 2024",
    icon: <Smartphone className="w-5 h-5 text-terracotta" />,
    role: "Android Developer & QA Intern",
    org: "Lennobyte Solutions",
    pills: [
      "Android Development",
      "Manual QA & Testing",
      "~20% Bug Backlog Reduction",
    ],
    desc: "Android development, manual QA, ~20% bug backlog reduction.",
  },
  {
    period: "2019 – 2024",
    icon: <GraduationCap className="w-5 h-5 text-terracotta" />,
    role: "BSc CSIT",
    org: "Tribhuvan University",
    pills: ["Data Structures", "Web Technologies", "Cloud Computing"],
    desc: "Built technical foundation in CS, web, databases, cloud and more.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="py-16 md:py-24 px-5 md:px-12 max-w-[1360px] mx-auto border-t border-[#E8DED1]"
    >
      <div className="mb-12 md:mb-16">
        <span className="section-num-tag">02. Professional Journey</span>
        <h2 id="journey-heading" className="section-h2 mb-3">
          From Technology to{" "}
          <em className="italic text-terracotta font-normal">Leadership</em>
        </h2>
        <p className="text-[0.88rem] md:text-[0.95rem] text-muted font-light">
          A journey of continuous learning, building and contributing.
        </p>
      </div>

      {/* Desktop Horizontal Timeline */}
      <div className="hidden lg:block relative">
        {/* Connecting line strictly bounded between center of first and last icon */}
        <div
          aria-hidden="true"
          className="absolute top-[52px] left-[12.5%] right-[12.5%] h-[1.5px] bg-[#E0D3C1] z-0 pointer-events-none"
        />

        <div className="grid grid-cols-4 gap-8 relative z-10">
          {/* Chronological order on desktop: 2019 to Present */}
          {[...MILESTONES].reverse().map((item) => (
            <div
              key={item.role}
              className="flex flex-col items-center text-center"
            >
              <span className="font-mono text-[0.68rem] tracking-[0.1em] text-muted uppercase font-medium bg-[#EFE4D6] px-3 py-1 rounded-[3px] mb-4">
                {item.period}
              </span>

              <div className="w-12 h-12 rounded-full bg-[#FAF6F0] border-2 border-terracotta/40 flex items-center justify-center mb-5 shadow-sm relative z-10">
                {item.icon}
              </div>

              <h3 className="font-serif text-[1.12rem] font-semibold text-brown leading-snug mb-1">
                {item.role}
              </h3>

              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline text-[0.82rem] text-terracotta hover:text-terracotta-hover font-medium hover:underline underline-offset-4 decoration-terracotta/70 transition-colors mb-2"
                >
                  <span>{item.org}</span>{" "}
                  <ExternalLink className="inline-block w-3.5 h-3.5 -mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform align-middle" />
                </a>
              ) : (
                <p className="text-[0.82rem] text-terracotta font-medium mb-3">
                  {item.org}
                </p>
              )}

              <div className="flex flex-wrap justify-center gap-1.5 mb-3">
                {item.pills.map((pill) => (
                  <span
                    key={pill}
                    className="text-[0.7rem] bg-[#F2EAE0] text-muted px-2 py-0.5 rounded-[2px]"
                  >
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile Vertical Timeline matching Screen 4 */}
      <div className="lg:hidden relative pl-8 ml-4 flex flex-col gap-9">
        {/* Connecting track line bounded between top-4 and bottom-10 */}
        <div
          aria-hidden="true"
          className="absolute -left-[33px] top-4 bottom-10 w-[1.5px] bg-[#E0D3C1] z-0 pointer-events-none"
        />

        {MILESTONES.map((item) => (
          <div
            key={item.role}
            className="relative flex flex-col items-start text-left z-10"
          >
            {/* Timeline icon node pinned to track line */}
            <div className="absolute -left-[49px] top-0 w-8 h-8 rounded-full bg-[#FAF6F0] border-2 border-terracotta/50 flex items-center justify-center shadow-sm z-10">
              <span className="scale-75">{item.icon}</span>
            </div>

            {/* Date */}
            <span className="font-mono text-[0.68rem] text-terracotta uppercase font-medium tracking-[0.05em] mb-1">
              {item.period}
            </span>

            {/* Title & Org */}
            <h3 className="font-serif text-[1.08rem] font-semibold text-brown leading-snug mb-0.5">
              {item.role}
            </h3>

            {item.link ? (
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline text-[0.82rem] text-terracotta hover:text-terracotta-hover font-medium hover:underline underline-offset-4 decoration-terracotta/70 transition-colors mb-3"
              >
                <span>{item.org}</span>{" "}
                <ExternalLink className="inline-block w-3 h-3 -mt-0.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform align-middle" />
              </a>
            ) : (
              <p className="text-[0.82rem] text-muted mb-3 font-light">
                {item.org}
              </p>
            )}

            {/* Sub-pills */}
            <div className="flex flex-wrap gap-1.5 mb-2">
              {item.pills.map((pill) => (
                <span
                  key={pill}
                  className="text-[0.72rem] bg-[#EFE6D8] text-brown/90 px-2.5 py-1 rounded-[3px] font-light"
                >
                  {pill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
