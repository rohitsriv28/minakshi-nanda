import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Proof from "./components/Proof";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Interests from "./components/Interests";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import StickyMobileCta from "./components/StickyMobileCta";
import { prefersReducedMotion } from "./hooks/useReveal";

export default function App() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const [cursorOn, setCursorOn] = useState(false);

  useEffect(() => {
    // Decorative follower only: fine pointer + hover + no reduced-motion.
    // Native cursor stays visible — the follower is pure enhancement.
    const mqHover = window.matchMedia("(hover: hover)");
    const mqFine = window.matchMedia("(pointer: fine)");
    const mqMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!mqHover.matches || !mqFine.matches || mqMotion.matches) return;
    if (prefersReducedMotion()) return;

    setCursorOn(true);
    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let frameId;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;
    };

    const animate = () => {
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
        rx += (mx - rx) * 0.16;
        ry += (my - ry) * 0.16;
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <div className="grain">
      {cursorOn && (
        <>
          <div
            ref={cursorRef}
            aria-hidden="true"
            className="hidden md:block w-3 h-3 bg-terracotta rounded-full fixed top-0 left-0 pointer-events-none z-[9999] opacity-80"
          />
          <div
            ref={ringRef}
            aria-hidden="true"
            className="hidden md:block w-9 h-9 border-[1.5px] border-terracotta rounded-full fixed top-0 left-0 pointer-events-none z-[9998] opacity-40"
          />
        </>
      )}

      <Navbar />
      <main id="main">
        <Hero />
        <Proof />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Interests />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCta />
    </div>
  );
}
