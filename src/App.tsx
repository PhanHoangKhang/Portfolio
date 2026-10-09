import Scene from "./components/3d/Scene";
import Navbar from "./components/ui/Navbar";
import Hero from "./sections/Hero";
import TechMarquee from "./components/ui/TechMarquee";
import Education from "./sections/Education";
import Experience from "./sections/Experience";
import Projects from "./sections/Project";
import Footer from "./components/ui/Footer";
import Activity from "./sections/Activity";
import Contact from "./sections/Contact";
import Awards from "./sections/Awards";

function App() {
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ background: "var(--background)" }}
    >
      {/* 3D BACKGROUND */}
      <div className="fixed inset-0">
        <Scene />
      </div>

      {/* Dark overlay */}
      <div className="pointer-events-none fixed inset-0 bg-black/20" />

      {/* CONTENT */}
      <Navbar />

      <Hero />
      <TechMarquee />
      <Education />
      <Experience />
      <Awards />
      <Projects />
      <Activity />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;
