import { Smartphone, GraduationCap, BookOpen, TrendingUp } from "lucide-react";

const MILESTONES = [
  {
    period: "Mar 2024 – Dec 2024",
    icon: <Smartphone className="w-5 h-5 text-terracotta" />,
    role: "Android Developer & QA Intern",
    org: "Lennobyte Solutions",
    desc: "Android development, manual QA, ~20% bug backlog reduction.",
  },
  {
    period: "2019 – 2024",
    icon: <GraduationCap className="w-5 h-5 text-terracotta" />,
    role: "BSc CSIT",
    org: "Tribhuvan University",
    desc: "Built technical foundation in CS, web, databases, cloud and more.",
  },
  {
    period: "2025 – Present",
    icon: <BookOpen className="w-5 h-5 text-terracotta" />,
    role: "MBA (Ongoing)",
    org: "Purvanchal University",
    desc: "Business management, organisational behaviour, strategic management, marketing.",
  },
  {
    period: "Jul 2026 – Present",
    icon: <TrendingUp className="w-5 h-5 text-terracotta" />,
    role: "Head of Operations & Business Development",
    org: "Surya BDC Pvt. Ltd.",
    desc: "Operations, partnerships, stakeholder engagement and enterprise growth.",
  },
];

export default function Journey() {
  return (
    <section
      id="journey"
      aria-labelledby="journey-heading"
      className="py-24 px-6 md:px-12 max-w-[1360px] mx-auto border-t border-[#E8DED1]"
    >
      <div className="mb-16">
        <span className="section-num-tag">02. Professional Journey</span>
        <h2 id="journey-heading" className="section-h2 mb-3">
          From Technology to <em className="italic text-terracotta font-normal">Leadership</em>
        </h2>
        <p className="text-[0.95rem] text-muted font-light">
          A journey of continuous learning, building and contributing.
        </p>
      </div>

      {/* Horizontal timeline on desktop, stacked on mobile */}
      <div className="relative">
        {/* Subtle connecting line across desktop icons */}
        <div
          aria-hidden="true"
          className="hidden lg:block absolute top-[52px] left-[5%] right-[5%] h-[1.5px] bg-[#E0D3C1] z-0"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
          {MILESTONES.map((item) => (
            <div
              key={item.role}
              className="flex flex-col items-start lg:items-center text-left lg:text-center"
            >
              {/* Date pill */}
              <span className="font-mono text-[0.68rem] tracking-[0.1em] text-muted uppercase font-medium bg-[#EFE4D6] px-3 py-1 rounded-[3px] mb-4">
                {item.period}
              </span>

              {/* Icon circle */}
              <div className="w-12 h-12 rounded-full bg-cream border-2 border-terracotta/40 flex items-center justify-center mb-5 shadow-sm">
                {item.icon}
              </div>

              {/* Role & Org */}
              <h3 className="font-serif text-[1.12rem] font-semibold text-brown leading-snug mb-1">
                {item.role}
              </h3>
              <p className="text-[0.82rem] text-terracotta font-medium mb-3">
                {item.org}
              </p>

              {/* Description */}
              <p className="text-[0.82rem] text-muted leading-[1.65] font-light max-w-[260px]">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
