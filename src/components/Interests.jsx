import useReveal from "../hooks/useReveal";
import { Film, Book, Plane, Lightbulb, TrendingUp } from "lucide-react";

export default function Interests() {
  const { ref, isVisible } = useReveal();

  const interests = [
    { icon: <Film className="w-4 h-4" aria-hidden="true" />, label: "Video Editing" },
    { icon: <Book className="w-4 h-4" aria-hidden="true" />, label: "Reading" },
    { icon: <Plane className="w-4 h-4" aria-hidden="true" />, label: "Traveling" },
    { icon: <Lightbulb className="w-4 h-4" aria-hidden="true" />, label: "Technology Trends" },
    {
      icon: <TrendingUp className="w-4 h-4" aria-hidden="true" />,
      label: "Business & Entrepreneurship",
    },
  ];

  return (
    <section id="interests" aria-labelledby="interests-heading" className="bg-white px-6 py-14 md:px-16 md:py-16">
      <div
        ref={ref}
        className={`text-center max-w-[700px] mx-auto transition-all duration-[800ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
      >
        <div className="inline-flex items-center gap-2.5 font-mono text-[0.7rem] tracking-[0.16em] text-terracotta uppercase mb-4 before:content-[''] before:w-5 before:h-[1px] before:bg-terracotta justify-center">
          Beyond Work
        </div>
        <h2 id="interests-heading" className="font-serif text-[clamp(2.2rem,4vw,3.5rem)] font-light text-brown leading-[1.15] tracking-[-0.01em] text-center mb-8">
          What <em className="italic text-terracotta">fuels me</em>
        </h2>
        <div className="flex flex-wrap gap-[0.6rem] justify-center">
          {interests.map((interest, i) => (
            <span
              key={i}
              className="inline-flex items-center gap-2 px-4 py-1.5 border border-gold rounded-full text-[0.75rem] tracking-[0.05em] text-brown font-medium bg-[rgba(200,169,110,0.08)] transition-all duration-200 hover:bg-terracotta hover:border-terracotta hover:text-white hover:-translate-y-0.5"
            >
              {interest.icon}
              {interest.label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
