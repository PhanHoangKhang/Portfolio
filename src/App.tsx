import Scene from "./components/3d/Scene";
import Navbar from "./components/ui/Navbar";
import Hero from "./components/sections/Hero";
import TechMarquee from "./components/ui/TechMarquee";
import Education from "./components/sections/Education";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">

      {/* 3D BACKGROUND */}
      <div className="fixed inset-0">
        <Scene />
      </div>

      {/* Dark overlay */}
      <div className="pointer-events-none fixed inset-0 bg-black/35" />

      {/* CONTENT */}
      <Navbar />

      <Hero />
      <TechMarquee />
      <Education />
    </main>
  );
}

export default App;