import { ArrowRight, Mail, Linkedin, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="py-16 md:py-24 px-5 md:px-12 max-w-[1360px] mx-auto border-t border-[#E8DED1]"
    >
      {/* Desktop 3-column layout */}
      <div className="hidden lg:grid grid-cols-[1.1fr_0.9fr_1fr] gap-10 items-center">
        {/* Left Column Text & Action */}
        <div className="flex flex-col items-start">
          <span className="section-num-tag">07. Let&apos;s Connect</span>
          <h2 id="contact-heading" className="section-h2 mb-4">
            Let&apos;s build
            <br />
            something meaningful.
          </h2>

          <p className="text-[0.92rem] text-muted leading-[1.8] font-light mb-8 max-w-[420px]">
            Interested in technology, business, entrepreneurship, events or a
            new idea worth exploring? I&apos;d love to connect.
          </p>

          <a
            href="mailto:contact@minakshinanda.com.np"
            className="btn-terracotta"
          >
            Start a Conversation <ArrowRight className="w-4 h-4 ml-1" />
          </a>
        </div>

        {/* Center Column 3 Info Cards */}
        <div className="flex flex-col gap-4">
          <a
            href="mailto:contact@minakshinanda.com.np"
            className="flex items-center gap-4 p-4 rounded-[6px] bg-white border border-[#E6DCCF] transition-all duration-200 hover:border-terracotta/40 hover:shadow-sm no-underline"
          >
            <div className="w-10 h-10 rounded-[6px] bg-terracotta/10 border border-terracotta/20 flex items-center justify-center shrink-0">
              <Mail className="w-5 h-5 text-terracotta" />
            </div>
            <div>
              <div className="text-[0.68rem] tracking-[0.1em] uppercase text-muted font-medium">
                Email
              </div>
              <div className="text-[0.88rem] text-brown font-medium">
                minakshinanda.com.np
              </div>
            </div>
          </a>

          <a
            href="https://linkedin.com/in/minakshi-nanda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-[6px] bg-white border border-[#E6DCCF] transition-all duration-200 hover:border-terracotta/40 hover:shadow-sm no-underline"
          >
            <div className="w-10 h-10 rounded-[6px] bg-terracotta/10 border border-terracotta/20 flex items-center justify-center shrink-0">
              <Linkedin className="w-5 h-5 text-terracotta" />
            </div>
            <div>
              <div className="text-[0.68rem] tracking-[0.1em] uppercase text-muted font-medium">
                LinkedIn
              </div>
              <div className="text-[0.88rem] text-brown font-medium">
                Connect with me
              </div>
            </div>
          </a>

          <div className="flex items-center gap-4 p-4 rounded-[6px] bg-white border border-[#E6DCCF]">
            <div className="w-10 h-10 rounded-[6px] bg-terracotta/10 border border-terracotta/20 flex items-center justify-center shrink-0">
              <MapPin className="w-5 h-5 text-terracotta" />
            </div>
            <div>
              <div className="text-[0.68rem] tracking-[0.1em] uppercase text-muted font-medium">
                Location
              </div>
              <div className="text-[0.88rem] text-brown font-medium">
                Birgunj, Nepal
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Photo with Handwritten Overlay */}
        <div className="relative rounded-[8px] overflow-hidden border border-[#E6DCCF] bg-warm aspect-[4/4.5] shadow-sm">
          <img
            src="/contact-desk.jpg"
            alt="Warm workspace desk scene"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex flex-col justify-end p-6 md:p-8">
            <p className="font-script text-[1.8rem] md:text-[2.1rem] text-[#FAF6F0] leading-[1.15] drop-shadow-md select-none">
              &ldquo;Ideas.
              <br />
              People.
              <br />
              Collaboration.
              <br />
              Impact.&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Mobile Layout Matching Screen 9 Exactly */}
      <div className="lg:hidden flex flex-col items-start text-left">
        <span className="section-num-tag">07. Let&apos;s Connect</span>
        <h2 className="section-h2 mb-4">
          Let&apos;s build
          <br />
          something
          <br />
          meaningful.
        </h2>

        <p className="text-[0.88rem] text-muted leading-[1.75] font-light mb-7">
          Interested in technology, business, entrepreneurship, events or a new
          idea worth exploring? I&apos;d love to connect.
        </p>

        {/* 3 Contact Cards in 3-col grid on mobile */}
        <div className="w-full grid grid-cols-3 gap-2 sm:gap-3 mb-6 text-center">
          {/* Email */}
          <a
            href="mailto:contact@minakshinanda.com.np"
            className="flex flex-col items-center justify-center p-3 rounded-[6px] bg-white border border-[#E6DCCF] no-underline hover:border-terracotta/40"
          >
            <div className="w-8 h-8 rounded-[4px] bg-terracotta/10 flex items-center justify-center mb-1.5">
              <Mail className="w-4 h-4 text-terracotta" />
            </div>
            <div className="text-[0.62rem] uppercase tracking-wider text-muted font-medium mb-0.5">
              Email
            </div>
            <div className="text-[0.68rem] text-brown font-medium truncate w-full">
              minakshinanda.com.np
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/minakshi-nanda"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center p-3 rounded-[6px] bg-white border border-[#E6DCCF] no-underline hover:border-terracotta/40"
          >
            <div className="w-8 h-8 rounded-[4px] bg-terracotta/10 flex items-center justify-center mb-1.5">
              <Linkedin className="w-4 h-4 text-terracotta" />
            </div>
            <div className="text-[0.62rem] uppercase tracking-wider text-muted font-medium mb-0.5">
              LinkedIn
            </div>
            <div className="text-[0.68rem] text-brown font-medium truncate w-full">
              Connect with me
            </div>
          </a>

          {/* Location */}
          <div className="flex flex-col items-center justify-center p-3 rounded-[6px] bg-white border border-[#E6DCCF]">
            <div className="w-8 h-8 rounded-[4px] bg-terracotta/10 flex items-center justify-center mb-1.5">
              <MapPin className="w-4 h-4 text-terracotta" />
            </div>
            <div className="text-[0.62rem] uppercase tracking-wider text-muted font-medium mb-0.5">
              Location
            </div>
            <div className="text-[0.68rem] text-brown font-medium truncate w-full">
              Birgunj, Nepal
            </div>
          </div>
        </div>

        {/* Full-width CTA button */}
        <a
          href="mailto:contact@minakshinanda.com.np"
          className="btn-terracotta w-full justify-center text-center py-3 text-[0.88rem]"
        >
          Start a Conversation <ArrowRight className="w-4 h-4 ml-1" />
        </a>
      </div>
    </section>
  );
}
