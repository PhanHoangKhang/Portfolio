import Scene from "./components/3d/Scene";
import Monitor from "./components/3d/Monitor";
import Navbar from "./components/ui/Navbar";

function App() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-background">
      {/* 3D scene */}
      <div className="absolute inset-0">
        <Scene />
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Monitor UI */}
      <section
        className="absolute z-20"
        style={{
          left: "50%",
          top: "20.5%",
          width: "57.5%",
          aspectRatio: "752 / 437",
          transform: "translateX(-50%)",
        }}
      >
        <Monitor />
      </section>

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 vignette" />

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 z-30 -translate-x-1/2"
        style={{
          color: "var(--muted-dark)",
        }}
      >
        <div className="flex flex-col items-center gap-2">
          

          <div
            className="h-8 w-px"
            style={{
              background:
                "linear-gradient(to bottom, var(--primary), transparent)",
            }}
          />
        </div>
      </div>
    </main>
  );
}

export default App;