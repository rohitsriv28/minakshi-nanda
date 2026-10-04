import { useEffect, useState } from "react";

export default function StickyMobileCta() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pastHero = window.scrollY > window.innerHeight * 0.85;
      const nearBottom =
        window.innerHeight + window.scrollY >
        document.body.scrollHeight - 480;
      setShow(pastHero && !nearBottom);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#contact"
      aria-hidden={!show}
      tabIndex={show ? 0 : -1}
      className={`md:hidden fixed bottom-4 inset-x-4 z-40 text-center px-6 py-3.5 bg-brown text-white text-[0.78rem] font-medium tracking-[0.1em] uppercase rounded-[2px] shadow-[0_12px_32px_rgba(26,20,16,0.35)] transition-all duration-200 ${
        show
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-4 pointer-events-none"
      }`}
    >
      Let&apos;s work together
    </a>
  );
}
