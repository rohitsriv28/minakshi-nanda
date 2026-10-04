import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-16 md:py-24 px-5 md:px-12 max-w-[1360px] mx-auto border-t border-[#E8DED1]"
    >
      <div className="mb-10 md:mb-14">
        <span className="section-num-tag">06. Education</span>
        <h2 id="education-heading" className="section-h2">
          Learning for a{" "}
          <em className="italic text-terracotta font-normal">bigger impact.</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Card 1: MBA */}
        <div className="bg-white rounded-[8px] border border-[#E6DCCF] p-6 sm:p-8 shadow-sm transition-all duration-200 hover:border-terracotta/40 hover:shadow-md flex items-start gap-4 sm:gap-5">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cream border border-[#E8DED1] flex items-center justify-center shrink-0 mt-0.5">
            <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-terracotta" />
          </div>
          <div>
            <h3 className="font-serif text-[1.18rem] sm:text-[1.28rem] font-semibold text-brown mb-0.5 leading-snug">
              Master of Business Administration (MBA)
            </h3>
            <p className="text-[0.82rem] sm:text-[0.88rem] text-terracotta font-medium mb-0.5">
              Purvanchal University
            </p>
            <p className="font-mono text-[0.68rem] sm:text-[0.72rem] text-muted uppercase font-medium mb-3.5">
              May 2025 – Present
            </p>

            <ul className="list-none m-0 p-0 space-y-1.5 text-[0.8rem] sm:text-[0.85rem] text-muted font-light">
              <li className="flex items-start gap-2 before:content-['•'] before:text-terracotta before:text-[0.9rem]">
                <span>Business Management</span>
              </li>
              <li className="flex items-start gap-2 before:content-['•'] before:text-terracotta before:text-[0.9rem]">
                <span>Organisational Behaviour</span>
              </li>
              <li className="flex items-start gap-2 before:content-['•'] before:text-terracotta before:text-[0.9rem]">
                <span>Strategic Management</span>
              </li>
              <li className="flex items-start gap-2 before:content-['•'] before:text-terracotta before:text-[0.9rem]">
                <span>Marketing</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Card 2: BSc CSIT */}
        <div className="bg-white rounded-[8px] border border-[#E6DCCF] p-6 sm:p-8 shadow-sm transition-all duration-200 hover:border-terracotta/40 hover:shadow-md flex items-start gap-4 sm:gap-5">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cream border border-[#E8DED1] flex items-center justify-center shrink-0 mt-0.5">
            <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-terracotta" />
          </div>
          <div>
            <h3 className="font-serif text-[1.18rem] sm:text-[1.28rem] font-semibold text-brown mb-0.5 leading-snug">
              BSc in Computer Science &amp; IT (BSc CSIT)
            </h3>
            <p className="text-[0.82rem] sm:text-[0.88rem] text-terracotta font-medium mb-0.5">
              Tribhuvan University
            </p>
            <p className="font-mono text-[0.68rem] sm:text-[0.72rem] text-muted uppercase font-medium mb-3.5">
              2019 – 2024
            </p>

            <ul className="list-none m-0 p-0 space-y-1.5 text-[0.8rem] sm:text-[0.85rem] text-muted font-light">
              <li className="flex items-start gap-2 before:content-['•'] before:text-terracotta before:text-[0.9rem]">
                <span>Data Structures &amp; Algorithms</span>
              </li>
              <li className="flex items-start gap-2 before:content-['•'] before:text-terracotta before:text-[0.9rem]">
                <span>Artificial Intelligence</span>
              </li>
              <li className="flex items-start gap-2 before:content-['•'] before:text-terracotta before:text-[0.9rem]">
                <span>Computer Networking</span>
              </li>
              <li className="flex items-start gap-2 before:content-['•'] before:text-terracotta before:text-[0.9rem]">
                <span>Advanced Java</span>
              </li>
              <li className="flex items-start gap-2 before:content-['•'] before:text-terracotta before:text-[0.9rem]">
                <span>Web Technology and more</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
