import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import MetricStrip from "./components/MetricStrip";
import About from "./components/About";
import Journey from "./components/Journey";
import Projects from "./components/Projects";
import BeyondScreen from "./components/BeyondScreen";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#FAF6F0] text-[#201A16] font-sans antialiased selection:bg-[#A64B2A] selection:text-white">
      <Navbar />

      <main id="main">
        <Hero />
        <MetricStrip />
        <About />
        <Journey />
        <Projects />
        <BeyondScreen />
        <Skills />
        <Education />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
