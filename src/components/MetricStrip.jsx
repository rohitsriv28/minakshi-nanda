import { GraduationCap, BookOpen, TrendingDown, Users } from "lucide-react";

const METRICS = [
  {
    icon: <GraduationCap className="w-6 h-6 text-gold shrink-0" />,
    title: "BSc CSIT",
    sub1: "Tribhuvan University",
    sub2: "2019 – 2024",
  },
  {
    icon: <BookOpen className="w-6 h-6 text-gold shrink-0" />,
    title: "MBA (Ongoing)",
    sub1: "Purvanchal University",
    sub2: "2025 – Present",
  },
  {
    icon: <TrendingDown className="w-6 h-6 text-gold shrink-0" />,
    title: "~20%",
    sub1: "Open bug backlog reduction",
    sub2: "at Lennobyte",
  },
  {
    icon: <Users className="w-6 h-6 text-gold shrink-0" />,
    title: "7+",
    sub1: "Events as MC / Organiser",
    sub2: "(100–200 audience)",
  },
];

export default function MetricStrip() {
  return (
    <section
      aria-label="Key Qualifications"
      className="bg-[#181513] text-white py-8 px-6 md:px-12 border-y border-white/10"
      style={{ padding: "2rem 1.5rem" }}
    >
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {METRICS.map((metric) => (
          <div key={metric.title} className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
              {metric.icon}
            </div>
            <div>
              <div className="font-serif text-[1.2rem] font-medium text-white leading-tight">
                {metric.title}
              </div>
              <div className="text-[0.74rem] text-white/60 leading-snug mt-0.5">
                {metric.sub1}
              </div>
              <div className="text-[0.72rem] text-white/40 leading-snug">
                {metric.sub2}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
