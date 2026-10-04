import useReveal from "../hooks/useReveal";
import { Trophy } from "lucide-react";

const PROJECTS = [
  {
    num: "01",
    year: "2023 – 2024",
    title: "Medicine E-Commerce Platform",
    desc: "Final year project: an online medicine ordering platform designed to address a real accessibility gap for elderly and mobility-limited residents in Birgunj. Independently conceptualised and built end-to-end — from problem research to full-stack implementation.",
    badge: "Final Year Project",
    badgeIcon: null,
  },
  {
    num: "02",
    year: "Mar 2024",
    title: "Ideathon — 1st Place",
    desc: "Led concept, prototype, and pitch for a technology-driven solution. Secured 1st position against 11 competing teams at National Infotech College through strong problem framing, teamwork, and presentation delivery. Team of 5.",
    badge: "Winner",
    badgeIcon: <Trophy className="w-3.5 h-3.5 text-terracotta" />,
  },
  {
    num: "03",
    year: "2022",
    title: "Smart Home Demo",
    desc: "Designed and built a smart home automation prototype using Arduino and IoT sensors as part of a competitive team workshop during BSc CSIT. Combined hardware design thinking with functional prototyping.",
    badge: "IoT Workshop",
    badgeIcon: null,
  },
];

export default function Projects() {
  const { ref: headerRef, isVisible: headerVisible } = useReveal();
  const { ref: gridRef, isVisible: gridVisible } = useReveal();

  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="bg-white px-6 py-20 lg:px-16 lg:py-28"
    >
      <div
        ref={headerRef}
        className={`transition-all duration-800 ease-out ${
          headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
        }`}
      >
        <div className="section-label">Projects &amp; Achievements</div>
        <h2 id="projects-heading" className="section-title">
          Things I&apos;ve <em>built &amp; won</em>
        </h2>
      </div>

      <div
        ref={gridRef}
        className={`grid grid-cols-1 md:grid-cols-3 gap-6 mt-14 transition-all duration-800 ease-out ${
          gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
        }`}
      >
        {PROJECTS.map((proj) => (
          <div
            key={proj.num}
            className="border border-warm p-8 rounded-[2px] transition-all duration-350 relative overflow-hidden cursor-default hover:border-terracotta hover:-translate-y-1 hover:shadow-[0_16px_48px_rgba(201,107,63,0.12)] group before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-br before:from-[rgba(201,107,63,0.06)] before:to-transparent before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-400"
          >
            <div className="font-serif text-[3.5rem] font-light text-warm leading-none mb-2 select-none transition-colors duration-300 group-hover:text-[rgba(201,107,63,0.2)]">
              {proj.num}
            </div>
            <div className="font-mono text-[0.68rem] tracking-[0.1em] text-terracotta uppercase mb-3">
              {proj.year}
            </div>
            <h3 className="font-serif text-[1.2rem] font-semibold text-brown mb-2 leading-[1.3]">
              {proj.title}
            </h3>
            <p className="text-[0.82rem] text-muted leading-[1.75] font-light mb-4">
              {proj.desc}
            </p>
            <span className="inline-flex items-center gap-1.5 mt-2 py-1 px-3 bg-[rgba(201,107,63,0.1)] text-terracotta text-[0.7rem] tracking-[0.08em] uppercase rounded-full font-medium">
              {proj.badgeIcon}
              <span>{proj.badge}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
