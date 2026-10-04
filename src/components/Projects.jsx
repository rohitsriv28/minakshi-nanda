import { ArrowRight, ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="py-16 md:py-24 px-5 md:px-12 max-w-[1360px] mx-auto border-t border-[#E8DED1]"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-14">
        <div>
          <span className="section-num-tag">03. Selected Work</span>
          <h2 id="projects-heading" className="section-h2 mb-2.5">
            Projects that create real{" "}
            <em className="italic text-terracotta font-normal">impact.</em>
          </h2>
          <p className="text-[0.88rem] md:text-[0.95rem] text-muted font-light">
            A mix of technology, problem solving and innovation.
          </p>
        </div>

        <a
          href="#contact"
          className="hidden md:inline-flex btn-outline-dark self-start md:self-auto"
        >
          View All Projects <ArrowRight className="w-4 h-4" />
        </a>
      </div>

      {/* Grid: 2 columns on desktop, clean vertical stack matching Screen 5 on mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-6 md:gap-8">
        {/* Featured Project Card */}
        <div className="bg-white rounded-[8px] border border-[#E6DCCF] overflow-hidden shadow-[0_10px_30px_rgba(60,40,31,0.06)] flex flex-col justify-between transition-all duration-300 hover:shadow-[0_16px_40px_rgba(60,40,31,0.12)] group">
          {/* Top / Image */}
          <div className="relative aspect-[16/9.5] w-full overflow-hidden bg-warm">
            <span className="absolute top-3.5 left-3.5 z-10 text-[0.68rem] font-medium tracking-[0.08em] uppercase bg-terracotta text-white px-3 py-1 rounded-[3px] shadow-sm">
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
          <div className="p-5 sm:p-7 md:p-8 flex flex-col justify-between flex-1">
            <div>
              <h3 className="font-serif text-[1.25rem] md:text-[1.45rem] font-semibold text-brown mb-1">
                Medicine E-Commerce Platform
              </h3>
              <div className="text-[0.72rem] md:text-[0.76rem] font-mono text-terracotta uppercase font-medium mb-3">
                Final Year Project | 2023 – 2024
              </div>
              <p className="text-[0.82rem] md:text-[0.88rem] text-muted leading-[1.75] font-light mb-5">
                An online medicine ordering platform to help elderly and
                mobility-limited residents in Birgunj access medicines easily.
              </p>
            </div>

            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                {["Research", "System Design", "Full-stack Development"].map(
                  (t) => (
                    <span
                      key={t}
                      className="text-[0.72rem] text-muted bg-[#F5EFE6] px-2.5 py-1 rounded-[3px]"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>

              {/* Mobile button matching Screen 5 */}
              <div className="pt-3 border-t border-[#F0E6D8] flex items-center justify-between">
                <a
                  href="#contact"
                  className="w-full lg:w-auto inline-flex items-center justify-center gap-1.5 py-2 px-4 rounded-[4px] border border-terracotta/30 text-terracotta text-[0.78rem] font-medium hover:bg-terracotta hover:text-white transition-colors"
                >
                  View Details <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Stacked Cards */}
        <div className="flex flex-col gap-5">
          {/* Top Stacked Card: Ideathon 1st Place */}
          <div className="bg-white rounded-[8px] border border-[#E6DCCF] p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 transition-all duration-300 hover:shadow-md group">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-[6px] overflow-hidden bg-warm shrink-0 border border-[#EAE0D3]">
              <img
                src="/project-trophy.jpg"
                alt="1st Place Ideathon Trophy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-[1.12rem] sm:text-[1.2rem] font-semibold text-brown mb-1 leading-snug">
                1st Place — Ideathon
              </h3>
              <div className="text-[0.7rem] font-mono text-terracotta uppercase font-medium mb-1.5">
                National Infotech College | Mar 2024
              </div>
              <p className="text-[0.78rem] sm:text-[0.82rem] text-muted leading-[1.65] font-light mb-3">
                Led a team of 5 and secured 1st position against 11 competing
                teams.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-[0.74rem] font-medium text-terracotta hover:underline"
              >
                View Details <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Bottom Stacked Card: Smart Home IoT */}
          <div className="bg-white rounded-[8px] border border-[#E6DCCF] p-4 sm:p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-5 transition-all duration-300 hover:shadow-md group">
            <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-[6px] overflow-hidden bg-warm shrink-0 border border-[#EAE0D3]">
              <img
                src="/project-iot.jpg"
                alt="Smart Home IoT Prototype"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
              />
            </div>
            <div className="flex-1">
              <h3 className="font-serif text-[1.12rem] sm:text-[1.2rem] font-semibold text-brown mb-1 leading-snug">
                Smart Home IoT Prototype
              </h3>
              <div className="text-[0.7rem] font-mono text-terracotta uppercase font-medium mb-1.5">
                IoT Workshop | 2022
              </div>
              <p className="text-[0.78rem] sm:text-[0.82rem] text-muted leading-[1.65] font-light mb-3">
                Designed and built a smart home automation prototype using
                Arduino and IoT sensors.
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1 text-[0.74rem] font-medium text-terracotta hover:underline"
              >
                View Details <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
