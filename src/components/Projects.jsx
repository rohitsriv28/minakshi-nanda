import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-24 px-6 md:px-12 max-w-[1360px] mx-auto border-t border-[#E8DED1]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
        <div>
          <span className="section-num-tag">03. Selected Work</span>
          <h2 id="projects-heading" className="section-h2 mb-3">
            Projects that create real <em className="italic text-terracotta font-normal">impact.</em>
          </h2>
          <p className="text-[0.95rem] text-muted font-light">
            A mix of technology, problem solving and innovation.
          </p>
        </div>

        <a href="#contact" className="btn-outline-dark self-start md:self-auto">
          View All Projects <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Asymmetric Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-8">
        {/* Left Featured Project Card */}
        <div className="bg-white rounded-[8px] border border-[#E6DCCF] overflow-hidden shadow-[0_10px_30px_rgba(60,40,31,0.06)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_40px_rgba(60,40,31,0.12)] hover:-translate-y-1 group">
          {/* Card Top / Image */}
          <div className="relative aspect-[16/9.5] w-full overflow-hidden bg-warm">
            <span className="absolute top-4 left-4 z-10 text-[0.7rem] font-medium tracking-[0.08em] uppercase bg-terracotta text-white px-3 py-1 rounded-[3px] shadow-sm">
              Featured Project
            </span>
            <img
              src="/project-medicine.jpg"
              alt="Medicine E-Commerce Platform"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              loading="lazy"
            />
          </div>

          {/* Card Body */}
          <div className="p-7 md:p-8 flex flex-col justify-between flex-1">
            <div>
              <div className="text-[0.76rem] font-mono text-terracotta uppercase font-medium mb-1.5">
                Final Year Project | 2023 – 2024
              </div>
              <h3 className="font-serif text-[1.45rem] font-semibold text-brown mb-3">
                Medicine E-Commerce Platform
              </h3>
              <p className="text-[0.88rem] text-muted leading-[1.75] font-light mb-6">
                An online medicine ordering platform to help elderly and
                mobility-limited residents in Birgunj access medicines easily.
              </p>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-[#F0E6D8]">
              <div className="flex flex-wrap gap-2">
                {["Research", "System Design", "Full-stack Development"].map((t) => (
                  <span
                    key={t}
                    className="text-[0.72rem] text-muted bg-[#F5EFE6] px-2.5 py-1 rounded-[3px]"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="w-9 h-9 rounded-full border border-terracotta text-terracotta flex items-center justify-center transition-colors group-hover:bg-terracotta group-hover:text-white">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>

        {/* Right Stacked Cards */}
        <div className="flex flex-col gap-6">
          {/* Top Stacked Card: Ideathon 1st Place */}
          <div className="bg-white rounded-[8px] border border-[#E6DCCF] p-5 md:p-6 shadow-sm flex items-center gap-5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-[6px] overflow-hidden bg-warm shrink-0 border border-[#EAE0D3]">
              <img
                src="/project-trophy.jpg"
                alt="1st Place Ideathon Trophy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <div className="text-[0.72rem] font-mono text-terracotta uppercase font-medium mb-1">
                National Infotech College | Mar 2024
              </div>
              <h3 className="font-serif text-[1.2rem] font-semibold text-brown mb-2 leading-snug">
                1st Place — Ideathon
              </h3>
              <p className="text-[0.82rem] text-muted leading-[1.65] font-light">
                Led a team of 5 and secured 1st position against 11 competing
                teams through strong problem framing.
              </p>
            </div>
            <div className="w-8 h-8 rounded-full border border-terracotta text-terracotta flex items-center justify-center shrink-0 transition-colors group-hover:bg-terracotta group-hover:text-white">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          {/* Bottom Stacked Card: Smart Home IoT */}
          <div className="bg-white rounded-[8px] border border-[#E6DCCF] p-5 md:p-6 shadow-sm flex items-center gap-5 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5 group">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-[6px] overflow-hidden bg-warm shrink-0 border border-[#EAE0D3]">
              <img
                src="/project-iot.jpg"
                alt="Smart Home IoT Prototype"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <div className="text-[0.72rem] font-mono text-terracotta uppercase font-medium mb-1">
                IoT Workshop | 2022
              </div>
              <h3 className="font-serif text-[1.2rem] font-semibold text-brown mb-2 leading-snug">
                Smart Home IoT Prototype
              </h3>
              <p className="text-[0.82rem] text-muted leading-[1.65] font-light">
                Designed and built a smart home automation prototype using Arduino
                and IoT sensors in a competitive workshop.
              </p>
            </div>
            <div className="w-8 h-8 rounded-full border border-terracotta text-terracotta flex items-center justify-center shrink-0 transition-colors group-hover:bg-terracotta group-hover:text-white">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
