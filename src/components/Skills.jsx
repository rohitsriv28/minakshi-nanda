import useReveal from "../hooks/useReveal";
import { Palette, Settings, Compass } from "lucide-react";

export default function Skills() {
  const { ref: headerRef, isVisible: headerVisible } = useReveal();
  const { ref: gridRef, isVisible: gridVisible } = useReveal();

  const skills = [
    {
      icon: <Palette className="w-5 h-5" aria-hidden="true" />,
      index: "01",
      title: "Design & UX",
      items: [
        "UI/UX Design",
        "Figma (Wireframes, Prototypes)",
        "User Flows & Navigation Design",
        "Visual Consistency & Systems",
        "Design-to-Dev Handoff",
      ],
    },
    {
      icon: <Settings className="w-5 h-5" aria-hidden="true" />,
      index: "02",
      title: "Technical",
      items: [
        "Android Development (Kotlin)",
        "Manual QA & Bug Tracking",
        "Web Technologies (HTML/CSS)",
        "Database Management",
        "Cloud Computing Fundamentals",
        "IoT — Arduino",
        "Git & Version Control",
      ],
    },
    {
      icon: <Compass className="w-5 h-5" aria-hidden="true" />,
      index: "03",
      title: "Business & People",
      items: [
        "Strategic Management",
        "Organisational Behaviour",
        "Marketing Fundamentals",
        "Public Speaking & MC",
        "Event Organisation & Leadership",
        "Cross-cultural Communication",
        "MS Office Suite",
      ],
    },
  ];

  return (
    <section id="skills" aria-labelledby="skills-heading" className="bg-cream px-6 py-20 md:px-16 md:py-28">
      <div
        ref={headerRef}
        className={`max-w-[600px] mb-14 transition-all duration-[800ms] ease-out ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
      >
        <div className="inline-flex items-center gap-2.5 font-mono text-[0.7rem] tracking-[0.16em] text-terracotta uppercase mb-4 before:content-[''] before:w-5 before:h-[1px] before:bg-terracotta">
          What I Bring
        </div>
        <h2 id="skills-heading" className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-light text-brown leading-[1.15] tracking-[-0.01em]">
          Skills &amp; <em className="italic text-terracotta">expertise</em>
        </h2>
        <p className="mt-4 text-[0.9rem] text-ink/70 leading-[1.75] font-light">
          Three disciplines, one lens — design, build, lead.
        </p>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[rgba(92,61,46,0.2)] border border-[rgba(92,61,46,0.2)]"
      >
        {skills.map((group, index) => (
          <div
            key={group.title}
            className={`bg-cream p-[2.5rem_2rem] transition-all duration-200 hover:bg-warm hover:-translate-y-1 ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
            style={{
              transitionDelay: gridVisible ? `${index * 110}ms` : "0ms",
            }}
          >
            <div className="flex items-center justify-between mb-5">
              <span className="inline-flex items-center justify-center w-11 h-11 rounded-[2px] bg-terracotta/10 text-terracotta">
                {group.icon}
              </span>
              <span className="font-mono text-[0.7rem] tracking-[0.16em] text-terracotta/70">
                {group.index}
              </span>
            </div>
            <div className="font-serif text-[1.15rem] font-semibold text-brown mb-4">
              {group.title}
            </div>
            <ul className="list-none">
              {group.items.map((item, i) => (
                <li
                  key={i}
                  className={`text-[0.88rem] text-ink/80 py-[0.4rem] flex items-center gap-2.5 ${i !== group.items.length - 1 ? "border-b border-[rgba(92,61,46,0.2)]" : ""} before:content-['›'] before:text-terracotta before:text-[0.85rem] before:font-medium`}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
