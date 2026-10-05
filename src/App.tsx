import Scene from "./components/3d/Scene";
import Navbar from "./components/ui/Navbar";
import Hero from "./components/sections/Hero";

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

    </main>
  );
}

export default App;