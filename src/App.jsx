import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import Projects from "./components/Projects";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Interests from "./components/Interests";
import Footer from "./components/Footer";
import { prefersReducedMotion } from "./hooks/useReveal";

export default function App() {
  const cursorRef = useRef(null);
  const ringRef = useRef(null);
  const [cursorActive, setCursorActive] = useState(false);
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false);

  useEffect(() => {
    // Only enable custom cursor follower on fine pointer (desktop mouse) without reduced motion
    const mqHover = window.matchMedia("(hover: hover)");
    const mqFine = window.matchMedia("(pointer: fine)");
    if (!mqHover.matches || !mqFine.matches || prefersReducedMotion()) return;

    setCursorActive(true);
    document.body.classList.add("custom-cursor");

    let mx = -100;
    let my = -100;
    let rx = -100;
    let ry = -100;
    let frameId;

    const onMouseMove = (e) => {
      mx = e.clientX;
      my = e.clientY;

      const target = e.target;
      const isInteractive = Boolean(
        target && (target.closest("a") || target.closest("button") || target.closest("[role='button']"))
      );
      setIsHoveringInteractive(isInteractive);
    };

    const animate = () => {
      if (cursorRef.current && ringRef.current) {
        cursorRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
        rx += (mx - rx) * 0.12;
        ry += (my - ry) * 0.12;
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    frameId = requestAnimationFrame(animate);

    return () => {
      document.body.classList.remove("custom-cursor");
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  return (
    <>
      {/* Custom smooth cursor */}
      {cursorActive && (
        <>
          <div
            ref={cursorRef}
            aria-hidden="true"
            className={`fixed top-0 left-0 rounded-full bg-terracotta pointer-events-none z-[9999] transition-[width,height,background-color] duration-300 mix-blend-multiply ${
              isHoveringInteractive ? "w-5 h-5" : "w-3 h-3"
            }`}
          />
          <div
            ref={ringRef}
            aria-hidden="true"
            className={`fixed top-0 left-0 rounded-full border-[1.5px] border-terracotta pointer-events-none z-[9998] transition-[width,height,opacity] duration-300 ${
              isHoveringInteractive ? "w-14 h-14 opacity-20" : "w-9 h-9 opacity-50"
            }`}
          />
        </>
      )}

      <Navbar />

      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
        <Interests />
      </main>

      <Footer />
    </>
  );
}
