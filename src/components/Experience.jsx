import useReveal from "../hooks/useReveal";

export default function Experience() {
  const { ref: headerRef, isVisible: headerVisible } = useReveal();
  const { ref: gridRef, isVisible: gridVisible } = useReveal();

  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="bg-brown text-cream px-6 py-20 lg:px-16 lg:py-28"
    >
      <div
        ref={headerRef}
        className={`transition-all duration-800 ease-out ${
          headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
        }`}
      >
        <div className="inline-flex items-center gap-2.5 font-mono text-[0.7rem] tracking-[0.16em] text-gold uppercase mb-4 before:content-[''] before:w-5 before:h-[1px] before:bg-gold">
          Work History
        </div>
        <h2 id="experience-heading" className="section-title text-cream">
          Where I&apos;ve <em className="italic text-terra-lt">made an impact</em>
        </h2>
      </div>

      <div
        ref={gridRef}
        className={`grid grid-cols-1 md:grid-cols-2 gap-6 mt-14 transition-all duration-800 ease-out ${
          gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
        }`}
      >
        {/* Experience Card 1 */}
        <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] p-10 rounded-[2px] transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)] hover:-translate-y-[3px] relative overflow-hidden group before:content-[''] before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-terracotta before:scale-y-0 before:origin-bottom hover:before:scale-y-100 before:transition-transform before:duration-400">
          <div className="font-mono text-[0.68rem] tracking-[0.1em] text-terra-lt uppercase mb-[0.8rem]">
            Jan 2025 – Feb 2026
          </div>
          <h3 className="font-serif text-[1.4rem] font-normal text-cream mb-[0.3rem] leading-[1.2]">
            UI/UX Designer
          </h3>
          <div className="text-[0.82rem] text-gold mb-[1.2rem] font-medium tracking-[0.04em]">
            Qualhon Informatics Pvt. Ltd · Remote (India)
          </div>
          <ul className="list-none m-0 p-0">
            <li className="text-[0.83rem] text-[rgba(245,240,232,0.65)] py-[0.35rem] pl-4 relative leading-[1.6] font-light before:content-['›'] before:absolute before:left-0 before:text-terra-lt">
              Delivered UI screens and complete user flows across 4 projects
              including SwiftCare
            </li>
            <li className="text-[0.83rem] text-[rgba(245,240,232,0.65)] py-[0.35rem] pl-4 relative leading-[1.6] font-light before:content-['›'] before:absolute before:left-0 before:text-terra-lt">
              Ensured intuitive navigation and visual consistency throughout
              each product
            </li>
            <li className="text-[0.83rem] text-[rgba(245,240,232,0.65)] py-[0.35rem] pl-4 relative leading-[1.6] font-light before:content-['›'] before:absolute before:left-0 before:text-terra-lt">
              Collaborated asynchronously with cross-functional teams, managing
              design handoffs
            </li>
            <li className="text-[0.83rem] text-[rgba(245,240,232,0.65)] py-[0.35rem] pl-4 relative leading-[1.6] font-light before:content-['›'] before:absolute before:left-0 before:text-terra-lt">
              Produced wireframes, mockups, and interactive prototypes in Figma
            </li>
          </ul>
        </div>

        {/* Experience Card 2 */}
        <div className="bg-[rgba(255,255,255,0.05)] border border-[rgba(255,255,255,0.1)] p-10 rounded-[2px] transition-all duration-300 hover:bg-[rgba(255,255,255,0.08)] hover:-translate-y-[3px] relative overflow-hidden group before:content-[''] before:absolute before:top-0 before:left-0 before:w-[3px] before:h-full before:bg-terracotta before:scale-y-0 before:origin-bottom hover:before:scale-y-100 before:transition-transform before:duration-400">
          <div className="font-mono text-[0.68rem] tracking-[0.1em] text-terra-lt uppercase mb-[0.8rem]">
            Mar 2024 – Dec 2024
          </div>
          <h3 className="font-serif text-[1.4rem] font-normal text-cream mb-[0.3rem] leading-[1.2]">
            Android Developer &amp; QA Intern
          </h3>
          <div className="text-[0.82rem] text-gold mb-[1.2rem] font-medium tracking-[0.04em]">
            Lennobyte Solutions · Birgunj, Nepal
          </div>
          <ul className="list-none m-0 p-0">
            <li className="text-[0.83rem] text-[rgba(245,240,232,0.65)] py-[0.35rem] pl-4 relative leading-[1.6] font-light before:content-['›'] before:absolute before:left-0 before:text-terra-lt">
              <strong className="text-terra-lt font-medium">
                Android (Mar–Jun 2024):
              </strong>{" "}
              Built a fully functional To-Do app with multiple screens using
              Kotlin; contributed UI screens for a hospital management
              application
            </li>
            <li className="text-[0.83rem] text-[rgba(245,240,232,0.65)] py-[0.35rem] pl-4 relative leading-[1.6] font-light before:content-['›'] before:absolute before:left-0 before:text-terra-lt">
              <strong className="text-terra-lt font-medium">
                QA (Jul–Dec 2024):
              </strong>{" "}
              Executed structured manual testing across web platform modules;
              tracked bugs end-to-end
            </li>
            <li className="text-[0.83rem] text-[rgba(245,240,232,0.65)] py-[0.35rem] pl-4 relative leading-[1.6] font-light before:content-['›'] before:absolute before:left-0 before:text-terra-lt">
              Contributed to ~20% reduction in open bug backlog
            </li>
            <li className="text-[0.83rem] text-[rgba(245,240,232,0.65)] py-[0.35rem] pl-4 relative leading-[1.6] font-light before:content-['›'] before:absolute before:left-0 before:text-terra-lt">
              Participated in sprint reviews to improve release stability
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
