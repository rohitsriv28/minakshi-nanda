import { useEffect, useRef, useState } from "react";
import useReveal from "../hooks/useReveal";
import projectsData from "../data/projects.jsonc";
import {
  Pill,
  Trophy,
  HousePlus,
  ArrowUpRight,
  X,
} from "lucide-react";

const CATEGORY = {
  p1: "Product",
  p2: "Strategy",
  p3: "IoT",
};

const FILTERS = ["All", "Product", "Strategy", "IoT"];

const COVER = {
  p1: {
    icon: Pill,
    title: "MedCart",
    sub: "Medicine ordering · elderly-first UX",
    gradient:
      "linear-gradient(135deg, #5c3d2e 0%, #b4532a 55%, #e8896a 100%)",
  },
  p2: {
    icon: Trophy,
    title: "1st / 12",
    sub: "Ideathon · concept → prototype → pitch",
    gradient:
      "linear-gradient(135deg, #1a1410 0%, #5c3d2e 55%, #b4532a 100%)",
  },
  p3: {
    icon: HousePlus,
    title: "Smart Home",
    sub: "Arduino · sensors · live demo",
    gradient:
      "linear-gradient(135deg, #8a6d2f 0%, #b4532a 60%, #5c3d2e 100%)",
  },
};

const CASE = {
  p1: {
    role: "End-to-end · research → full-stack build",
    outcome: "Accessible ordering flow for elderly & mobility-limited users",
    stack: ["UX research", "UI design", "Full-stack build"],
  },
  p2: {
    role: "Team lead · concept, prototype & pitch (team of 5)",
    outcome: "1st place against 11 teams — problem framing + delivery",
    stack: ["Problem framing", "Prototyping", "Pitch"],
  },
  p3: {
    role: "Builder · hardware + interaction prototype",
    outcome: "Working automation demo combining design thinking + hardware",
    stack: ["Arduino", "IoT sensors", "Prototyping"],
  },
};

export default function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useReveal();
  const { ref: gridRef, isVisible: gridVisible } = useReveal();
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState(null);
  const closeRef = useRef(null);

  const visible = projectsData.filter(
    (p) => filter === "All" || CATEGORY[p.id] === filter,
  );

  // Modal: Escape to close + scroll lock + initial focus
  useEffect(() => {
    if (!active) return;
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [active]);

  const activeProject = projectsData.find((p) => p.id === active);

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-white px-6 py-20 md:px-16 md:py-28"
    >
      <div
        ref={headerRef}
        className={`flex flex-col gap-8 md:flex-row md:items-end md:justify-between transition-all duration-[800ms] ease-out ${headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
      >
        <div className="max-w-[600px]">
          <p className="inline-flex items-center gap-2.5 font-mono text-[0.7rem] tracking-[0.16em] text-terracotta uppercase mb-4 before:content-[''] before:w-5 before:h-[1px] before:bg-terracotta">
            Projects &amp; Achievements
          </p>
          <h2
            id="projects-heading"
            className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-light text-brown leading-[1.15] tracking-[-0.01em]"
          >
            Things I&apos;ve{" "}
            <em className="italic text-terracotta">built &amp; won</em>
          </h2>
        </div>
        <div
          className="flex flex-wrap gap-2"
          role="group"
          aria-label="Filter projects"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              type="button"
              onClick={() => setFilter(f)}
              aria-pressed={filter === f}
              className={`px-4 py-2 rounded-full text-[0.72rem] tracking-[0.08em] uppercase font-medium border transition-all duration-200 ${
                filter === f
                  ? "bg-brown text-white border-brown"
                  : "border-[rgba(92,61,46,0.25)] text-brown hover:border-terracotta hover:text-terracotta"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div
        ref={gridRef}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-14"
      >
        {visible.map((project, index) => {
          const cover = COVER[project.id];
          const Icon = cover.icon;
          return (
            <article
              key={project.id}
              className={`group border border-warm rounded-[2px] overflow-hidden bg-white transition-all duration-200 hover:border-terracotta hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(180,83,42,0.14)] ${gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
              style={{
                transitionDelay: gridVisible ? `${index * 110}ms` : "0ms",
              }}
            >
              {/* Visual cover — CSS-art, no external asset needed */}
              <div
                className="relative h-44 overflow-hidden"
                style={{ background: cover.gradient }}
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "radial-gradient(rgba(255,255,255,0.9) 1px, transparent 1px)",
                    backgroundSize: "18px 18px",
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-between p-5 text-white">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center justify-center w-10 h-10 rounded-[2px] bg-white/15 backdrop-blur-sm">
                      <Icon className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <span className="font-serif italic text-lg opacity-90">
                      {project.number}
                    </span>
                  </div>
                  <div>
                    <p className="font-serif text-[1.6rem] leading-none font-semibold">
                      {cover.title}
                    </p>
                    <p className="mt-1 text-[0.72rem] tracking-[0.06em] uppercase opacity-80">
                      {cover.sub}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8">
                <p className="font-mono text-[0.68rem] tracking-[0.1em] text-terracotta uppercase mb-[0.8rem]">
                  {project.year} · {CATEGORY[project.id]}
                </p>
                <h3 className="font-serif text-[1.2rem] font-semibold text-brown mb-2 leading-[1.3]">
                  {project.title}
                </h3>
                <p className="text-[0.82rem] text-muted leading-[1.75] font-light line-clamp-3">
                  {project.description}
                </p>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <span className="inline-flex items-center gap-1.5 px-[0.8rem] py-[0.3rem] bg-[rgba(180,83,42,0.1)] text-terracotta text-[0.7rem] tracking-[0.08em] uppercase rounded-full font-medium">
                    {project.id === "p2" && (
                      <Trophy className="w-3.5 h-3.5" aria-hidden="true" />
                    )}
                    {project.badge}
                  </span>
                  <button
                    type="button"
                    onClick={() => setActive(project.id)}
                    aria-haspopup="dialog"
                    className="inline-flex items-center gap-1 text-[0.72rem] tracking-[0.08em] uppercase font-medium text-brown transition-colors duration-200 hover:text-terracotta"
                  >
                    Case study
                    <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      {/* Case-study modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-title"
        >
          <button
            type="button"
            aria-label="Close case study"
            onClick={() => setActive(null)}
            className="absolute inset-0 bg-[rgba(26,20,16,0.55)] backdrop-blur-[2px]"
          />
          <div className="relative w-full max-w-lg bg-white rounded-[4px] border border-warm shadow-[0_24px_80px_rgba(26,20,16,0.35)] p-8 max-h-[85vh] overflow-y-auto">
            <button
              ref={closeRef}
              type="button"
              onClick={() => setActive(null)}
              aria-label="Close"
              className="absolute top-4 right-4 inline-flex items-center justify-center w-10 h-10 rounded-full border border-[rgba(92,61,46,0.2)] text-brown transition-colors duration-200 hover:bg-warm"
            >
              <X className="w-4 h-4" aria-hidden="true" />
            </button>
            <p className="font-mono text-[0.68rem] tracking-[0.1em] text-terracotta uppercase mb-2">
              {activeProject.year} · {CATEGORY[activeProject.id]}
            </p>
            <h3
              id="case-title"
              className="font-serif text-[1.8rem] font-semibold text-brown leading-tight pr-10"
            >
              {activeProject.title}
            </h3>
            <p className="mt-4 text-[0.88rem] text-muted leading-[1.8] font-light">
              {activeProject.description}
            </p>
            <dl className="mt-6 flex flex-col gap-4 border-t border-warm pt-6">
              <div>
                <dt className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-muted mb-1">
                  My role
                </dt>
                <dd className="text-[0.88rem] text-brown font-medium">
                  {CASE[activeProject.id].role}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-muted mb-1">
                  Outcome
                </dt>
                <dd className="text-[0.88rem] text-brown">
                  {CASE[activeProject.id].outcome}
                </dd>
              </div>
              <div>
                <dt className="font-mono text-[0.65rem] tracking-[0.12em] uppercase text-muted mb-2">
                  Toolkit
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {CASE[activeProject.id].stack.map((s) => (
                    <span
                      key={s}
                      className="px-3 py-1 rounded-full bg-cream border border-warm text-[0.72rem] text-brown"
                    >
                      {s}
                    </span>
                  ))}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      )}
    </section>
  );
}
