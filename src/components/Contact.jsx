import useReveal from "../hooks/useReveal";
import { MapPin, Briefcase, Palette, ArrowUpRight } from "lucide-react";

const LINKEDIN_URL = "https://linkedin.com/in/minakshi-nanda";

export default function Contact() {
  const { ref: leftRef, isVisible: leftVisible } = useReveal();
  const { ref: rightRef, isVisible: rightVisible } = useReveal();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-warm grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center px-6 py-20 md:px-16 md:py-28"
    >
      <div
        ref={leftRef}
        className={`transition-all duration-[800ms] ease-out ${leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-7"}`}
      >
        <p className="inline-flex items-center gap-2.5 font-mono text-[0.7rem] tracking-[0.16em] text-terracotta uppercase mb-4 before:content-[''] before:w-5 before:h-[1px] before:bg-terracotta">
          Let&apos;s Connect
        </p>
        <h2
          id="contact-heading"
          className="font-serif text-[clamp(1.8rem,3vw,2.8rem)] font-light text-brown leading-[1.25] tracking-[-0.01em] mt-6"
        >
          Have a project
          <br />
          or opportunity
          <br />
          in <em className="italic text-terracotta">mind?</em>
        </h2>
        <p className="text-[0.88rem] text-muted leading-[1.8] mt-[1.2rem] max-w-[380px] font-light">
          Whether you&apos;re looking for a designer who understands
          development, or a business-minded professional who leads with empathy
          — I&apos;d love to hear from you.
        </p>
        <p className="mt-6 font-mono text-[0.7rem] tracking-[0.12em] uppercase text-muted">
          Fastest reply · LinkedIn DM · Birgunj, Nepal (NPT)
        </p>
      </div>

      <div
        ref={rightRef}
        className={`flex flex-col gap-6 transition-all duration-[800ms] ease-out ${rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"}`}
      >
        <div className="flex items-start gap-[1.2rem] p-6 bg-white rounded-[2px] border border-[rgba(92,61,46,0.08)] transition-all duration-200 hover:translate-x-1 hover:shadow-[-4px_4px_16px_rgba(180,83,42,0.12)]">
          <div
            aria-hidden="true"
            className="w-10 h-10 bg-terracotta text-white rounded-[2px] flex items-center justify-center shrink-0"
          >
            <MapPin className="w-[1.1rem] h-[1.1rem]" />
          </div>
          <div>
            <div className="text-[0.68rem] tracking-[0.1em] uppercase text-muted font-medium mb-[0.2rem]">
              Location
            </div>
            <div className="text-[0.88rem] text-brown font-medium">
              Birgunj, Madhesh Province, Nepal
            </div>
          </div>
        </div>

        <div className="flex items-start gap-[1.2rem] p-6 bg-white rounded-[2px] border border-[rgba(92,61,46,0.08)] transition-all duration-200 hover:translate-x-1 hover:shadow-[-4px_4px_16px_rgba(180,83,42,0.12)]">
          <div
            aria-hidden="true"
            className="w-10 h-10 bg-terracotta text-white rounded-[2px] flex items-center justify-center shrink-0"
          >
            <Briefcase className="w-[1.1rem] h-[1.1rem]" />
          </div>
          <div>
            <div className="text-[0.68rem] tracking-[0.1em] uppercase text-muted font-medium mb-[0.2rem]">
              LinkedIn
            </div>
            <div className="text-[0.88rem] text-brown font-medium">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit hover:text-terracotta transition-colors underline decoration-terracotta/40 underline-offset-4"
              >
                linkedin.com/in/minakshi-nanda
              </a>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-[1.2rem] p-6 bg-white rounded-[2px] border border-[rgba(92,61,46,0.08)] transition-all duration-200 hover:translate-x-1 hover:shadow-[-4px_4px_16px_rgba(180,83,42,0.12)]">
          <div
            aria-hidden="true"
            className="w-10 h-10 bg-terracotta text-white rounded-[2px] flex items-center justify-center shrink-0"
          >
            <Palette className="w-[1.1rem] h-[1.1rem]" />
          </div>
          <div>
            <div className="text-[0.68rem] tracking-[0.1em] uppercase text-muted font-medium mb-[0.2rem]">
              Available For
            </div>
            <div className="text-[0.88rem] text-brown font-medium">
              UI/UX Design · Business Ops · Management Roles
            </div>
          </div>
        </div>

        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-[2.2rem] py-[0.85rem] bg-brown text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[2px] transition-all duration-200 hover:bg-terracotta hover:-translate-y-0.5 text-center mt-2"
        >
          Message me on LinkedIn
          <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
        </a>
      </div>
    </section>
  );
}
