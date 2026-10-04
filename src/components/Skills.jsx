import useReveal from "../hooks/useReveal";
import { Palette, Code2, Compass } from "lucide-react";

const SKILL_GROUPS = [
  {
    title: "Design & UX",
    icon: <Palette className="w-6 h-6 text-terracotta" />,
    items: [
      "UI/UX Design",
      "Figma (Wireframes, Prototypes)",
      "User Flows & Navigation Design",
      "Visual Consistency & Systems",
      "Design-to-Dev Handoff",
    ],
  },
  {
    title: "Technical",
    icon: <Code2 className="w-6 h-6 text-terracotta" />,
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
    title: "Business & People",
    icon: <Compass className="w-6 h-6 text-terracotta" />,
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

export default function Skills() {
  const { ref: headerRef, isVisible: headerVisible } = useReveal();
  const { ref: gridRef, isVisible: gridVisible } = useReveal();

  return (
    <section
      id="skills"
      aria-labelledby="skills-heading"
      className="bg-cream px-6 py-20 lg:px-16 lg:py-28"
    >
      <div
        ref={headerRef}
        className={`max-w-[600px] mb-16 transition-all duration-800 ease-out ${
          headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
        }`}
      >
        <div className="section-label">What I Bring</div>
        <h2 id="skills-heading" className="section-title">
          Skills &amp; <em>expertise</em>
        </h2>
      </div>

      <div
        ref={gridRef}
        className={`grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[rgba(92,61,46,0.12)] border border-[rgba(92,61,46,0.12)] transition-all duration-800 ease-out ${
          gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
        }`}
      >
        {SKILL_GROUPS.map((group) => (
          <div
            key={group.title}
            className="bg-cream p-8 md:p-10 transition-colors duration-300 hover:bg-warm"
          >
            <div className="mb-4 inline-flex items-center justify-center">
              {group.icon}
            </div>
            <h3 className="font-serif text-[1.15rem] font-semibold text-brown mb-4">
              {group.title}
            </h3>
            <ul className="list-none m-0 p-0">
              {group.items.map((item, idx) => (
                <li
                  key={item}
                  className={`text-[0.83rem] text-muted py-[0.3rem] flex items-center gap-2 font-light ${
                    idx !== group.items.length - 1
                      ? "border-b border-dashed border-[rgba(92,61,46,0.1)]"
                      : ""
                  }`}
                >
                  <span className="text-terra-lt text-[0.7rem] select-none">
                    —
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
