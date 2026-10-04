import { ArrowRight, Users, Mic, Calendar, HeartHandshake } from "lucide-react";

const LEADERSHIP_ITEMS = [
  {
    icon: <Users className="w-5 h-5 text-gold shrink-0" />,
    title: "Team Leadership",
    desc: "Led a 5-member team to win the college Ideathon.",
  },
  {
    icon: <Mic className="w-5 h-5 text-gold shrink-0" />,
    title: "Public Speaking",
    desc: "Master of Ceremony for 7+ institutional events.",
  },
  {
    icon: <Calendar className="w-5 h-5 text-gold shrink-0" />,
    title: "Event Management",
    desc: "Organised and managed events with audiences of 100–200.",
  },
  {
    icon: <HeartHandshake className="w-5 h-5 text-gold shrink-0" />,
    title: "People & Communication",
    desc: "Collaborating with diverse teams and stakeholders.",
  },
];

export default function BeyondScreen() {
  return (
    <section
      id="leadership"
      aria-labelledby="leadership-heading"
      className="bg-[#38241B] text-white py-24 px-6 md:px-12"
      style={{ backgroundColor: "#38241B", padding: "6rem 1.5rem" }}
    >
      <div className="max-w-[1360px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-14 items-start">
        {/* Left Column Intro */}
        <div className="flex flex-col items-start">
          <span className="font-mono text-[0.72rem] tracking-[0.16em] uppercase text-gold/90 font-medium mb-3">
            04. Beyond The Screen
          </span>

          <h2
            id="leadership-heading"
            className="font-serif text-[clamp(2.4rem,4.5vw,3.6rem)] font-light text-white leading-[1.1] mb-5"
          >
            Leadership,
            <br />
            Events &amp; More
          </h2>

          <p className="text-[0.92rem] text-white/70 leading-[1.8] font-light mb-8 max-w-[420px]">
            Technology is only one part of what I do. I enjoy bringing people,
            ideas and teams together.
          </p>

          <a href="#contact" className="btn-outline-white">
            See Moments <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Right Column Grid + Banner Photo */}
        <div className="flex flex-col gap-6">
          {/* 4 Pillars 2x2 Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {LEADERSHIP_ITEMS.map((item) => (
              <div
                key={item.title}
                className="bg-white/[0.06] border border-white/10 p-5 rounded-[6px] transition-colors duration-200 hover:bg-white/[0.1]"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-[4px] bg-white/10 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="font-serif text-[1.1rem] font-medium text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-[0.8rem] text-white/65 leading-[1.65] font-light">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* Stage Photo + Quote Strip */}
          <div className="relative rounded-[8px] overflow-hidden border border-white/15 bg-black/40 aspect-[16/7.5] sm:aspect-[16/6.5]">
            <img
              src="/stage-mc.jpg"
              alt="Minakshi Nanda hosting on stage"
              className="w-full h-full object-cover opacity-60"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#38241B]/90 via-[#38241B]/40 to-transparent flex items-center px-8">
              <p className="font-serif italic text-[1.3rem] sm:text-[1.65rem] text-[#F5EAD9] font-light max-w-[440px] leading-snug drop-shadow-md">
                &ldquo;Meaningful conversations create opportunities.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
