import useReveal from "../hooks/useReveal";
import { MapPin, Linkedin, Sparkles, ArrowRight } from "lucide-react";

export default function Contact() {
  const { ref: leftRef, isVisible: leftVisible } = useReveal();
  const { ref: rightRef, isVisible: rightVisible } = useReveal();

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="bg-warm grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center px-6 py-20 lg:px-16 lg:py-28"
    >
      {/* Left Column */}
      <div
        ref={leftRef}
        className={`transition-all duration-800 ease-out ${
          leftVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-7"
        }`}
      >
        <div className="section-label">Let&apos;s Connect</div>
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
        <p className="text-[0.88rem] text-muted leading-[1.8] mt-5 max-w-[380px] font-light">
          Whether you&apos;re looking for a designer who understands
          development, or a business-minded professional who leads with empathy
          — I&apos;d love to hear from you.
        </p>
      </div>

      {/* Right Column Contact Cards */}
      <div
        ref={rightRef}
        className={`flex flex-col gap-6 transition-all duration-800 ease-out ${
          rightVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-7"
        }`}
      >
        {/* Location */}
        <div className="flex items-start gap-5 p-6 bg-white rounded-[2px] border border-[rgba(92,61,46,0.08)] transition-all duration-300 hover:translate-x-1 hover:shadow-[-4px_4px_16px_rgba(201,107,63,0.1)]">
          <div className="w-10 h-10 bg-terracotta text-white rounded-[2px] flex items-center justify-center shrink-0">
            <MapPin className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-[0.68rem] tracking-[0.1em] uppercase text-muted font-medium mb-1">
              Location
            </div>
            <div className="text-[0.88rem] text-brown font-medium">
              Birgunj, Madhesh Province, Nepal
            </div>
          </div>
        </div>

        {/* LinkedIn */}
        <div className="flex items-start gap-5 p-6 bg-white rounded-[2px] border border-[rgba(92,61,46,0.08)] transition-all duration-300 hover:translate-x-1 hover:shadow-[-4px_4px_16px_rgba(201,107,63,0.1)]">
          <div className="w-10 h-10 bg-terracotta text-white rounded-[2px] flex items-center justify-center shrink-0">
            <Linkedin className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-[0.68rem] tracking-[0.1em] uppercase text-muted font-medium mb-1">
              LinkedIn
            </div>
            <div className="text-[0.88rem] text-brown font-medium">
              <a
                href="https://linkedin.com/in/minakshi-nanda"
                target="_blank"
                rel="noopener noreferrer"
                className="text-inherit no-underline hover:text-terracotta transition-colors"
              >
                linkedin.com/in/minakshi-nanda
              </a>
            </div>
          </div>
        </div>

        {/* Available For */}
        <div className="flex items-start gap-5 p-6 bg-white rounded-[2px] border border-[rgba(92,61,46,0.08)] transition-all duration-300 hover:translate-x-1 hover:shadow-[-4px_4px_16px_rgba(201,107,63,0.1)]">
          <div className="w-10 h-10 bg-terracotta text-white rounded-[2px] flex items-center justify-center shrink-0">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="text-[0.68rem] tracking-[0.1em] uppercase text-muted font-medium mb-1">
              Available For
            </div>
            <div className="text-[0.88rem] text-brown font-medium">
              UI/UX Design · Business Ops · Management Roles
            </div>
          </div>
        </div>

        {/* Send message CTA */}
        <a
          href="mailto:contact@minakshinanda.com"
          className="btn-primary w-full text-center mt-2"
        >
          Send a Message <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </section>
  );
}
