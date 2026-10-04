import useReveal from "../hooks/useReveal";
import { Film, BookOpen, Plane, Lightbulb, TrendingUp } from "lucide-react";

const INTERESTS = [
  { icon: <Film className="w-4 h-4" />, label: "Video Editing" },
  { icon: <BookOpen className="w-4 h-4" />, label: "Reading" },
  { icon: <Plane className="w-4 h-4" />, label: "Traveling" },
  { icon: <Lightbulb className="w-4 h-4" />, label: "Technology Trends" },
  {
    icon: <TrendingUp className="w-4 h-4" />,
    label: "Business & Entrepreneurship",
  },
];

export default function Interests() {
  const { ref, isVisible } = useReveal();

  return (
    <section
      id="interests"
      aria-labelledby="interests-heading"
      className="bg-white px-6 py-20 lg:px-16"
    >
      <div
        ref={ref}
        className={`text-center max-w-[700px] mx-auto transition-all duration-800 ease-out ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
        }`}
      >
        <div className="section-label justify-center">Beyond Work</div>
        <h2
          id="interests-heading"
          className="section-title text-center mb-10"
        >
          What <em>fuels me</em>
        </h2>

        <div className="flex flex-wrap gap-4 justify-center">
          {INTERESTS.map((item) => (
            <div
              key={item.label}
              className="inline-flex items-center gap-2.5 py-[0.7rem] px-[1.6rem] border border-warm rounded-full text-[0.85rem] text-brown font-normal bg-cream transition-all duration-300 hover:bg-terracotta hover:border-terracotta hover:text-white hover:-translate-y-0.5 cursor-default"
            >
              {item.icon}
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
