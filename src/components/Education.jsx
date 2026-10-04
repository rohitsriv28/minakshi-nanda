import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section
      id="education"
      aria-labelledby="education-heading"
      className="py-24 px-6 md:px-12 max-w-[1360px] mx-auto border-t border-[#E8DED1]"
    >
      <div className="mb-14">
        <span className="section-num-tag">06. Education</span>
        <h2 id="education-heading" className="section-h2">
          Learning for a <em className="italic text-terracotta font-normal">bigger impact.</em>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Card 1: MBA */}
        <div className="bg-white rounded-[6px] border border-[#E6DCCF] p-8 shadow-sm transition-all duration-200 hover:border-terracotta/40 hover:shadow-md flex items-start gap-5">
          <div className="w-12 h-12 rounded-full bg-cream border border-[#E8DED1] flex items-center justify-center shrink-0 mt-1">
            <GraduationCap className="w-6 h-6 text-terracotta" />
          </div>
          <div>
            <h3 className="font-serif text-[1.28rem] font-semibold text-brown mb-1 leading-snug">
              Master of Business Administration (MBA)
            </h3>
            <p className="text-[0.88rem] text-terracotta font-medium mb-1">
              Purvanchal University
            </p>
            <p className="font-mono text-[0.72rem] text-muted uppercase font-medium mb-4">
              May 2025 – Present
            </p>
            <p className="text-[0.85rem] text-muted leading-[1.7] font-light">
              Focus areas: Business Management, Organisational Behaviour,
              Strategic Management, Marketing. Active contributor as Master of
              Ceremony and key organising member for college events.
            </p>
          </div>
        </div>

        {/* Card 2: BSc CSIT */}
        <div className="bg-white rounded-[6px] border border-[#E6DCCF] p-8 shadow-sm transition-all duration-200 hover:border-terracotta/40 hover:shadow-md flex items-start gap-5">
          <div className="w-12 h-12 rounded-full bg-cream border border-[#E8DED1] flex items-center justify-center shrink-0 mt-1">
            <BookOpen className="w-6 h-6 text-terracotta" />
          </div>
          <div>
            <h3 className="font-serif text-[1.28rem] font-semibold text-brown mb-1 leading-snug">
              BSc in Computer Science &amp; IT (BSc CSIT)
            </h3>
            <p className="text-[0.88rem] text-terracotta font-medium mb-1">
              Tribhuvan University
            </p>
            <p className="font-mono text-[0.72rem] text-muted uppercase font-medium mb-4">
              2019 – 2024
            </p>
            <p className="text-[0.85rem] text-muted leading-[1.7] font-light">
              Relevant coursework: Data Structures &amp; Algorithms, Artificial
              Intelligence, Networking, Databases, Web Technology, Advanced
              Java, Cloud Computing and more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
