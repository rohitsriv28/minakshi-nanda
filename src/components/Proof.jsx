import useReveal from "../hooks/useReveal";
import events from "../data/events.jsonc";

export default function Proof() {
  const { ref, isVisible } = useReveal();
  const eventCount = events.length;
  const totalAudience = events.reduce((sum, e) => sum + (e.audienceSize || 0), 0);

  const stats = [
    { value: "4+", label: "Projects shipped · design + build" },
    { value: `${eventCount}`, label: "Stages hosted as MC" },
    { value: `${totalAudience}+`, label: "Audience members addressed" },
    { value: "20%", label: "Bug-backlog reduction · Lennobyte QA" },
  ];

  return (
    <section
      aria-label="Selected proof"
      className="bg-brown text-cream px-6 md:px-16 py-10 border-y border-[rgba(255,255,255,0.08)]"
    >
      <div
        ref={ref}
        className={`flex flex-col md:flex-row md:items-center gap-6 md:gap-12 transition-all duration-[600ms] ease-out ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
      >
        <p className="font-mono text-[0.68rem] tracking-[0.16em] uppercase text-gold shrink-0">
          Selected proof
        </p>
        <dl className="grid grid-cols-2 md:grid-cols-4 gap-6 flex-1">
          {stats.map((s) => (
            <div key={s.label} className="flex flex-col">
              <dt className="order-2 text-[0.72rem] tracking-[0.06em] uppercase text-[rgba(245,240,232,0.6)] font-medium leading-snug">
                {s.label}
              </dt>
              <dd className="order-1 font-serif text-[2rem] font-light text-cream leading-none mb-1">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
