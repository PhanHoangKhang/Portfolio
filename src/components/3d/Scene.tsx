import { Canvas } from "@react-three/fiber";
import Waveform from "./Waveform";

function cssVar(variable: string) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
}

export default function Scene() {
  const background = cssVar("--background");

  return (
    <Canvas
      camera={{
        position: [0, 0.3, 10],
        fov: 40,
      }}
      dpr={[1, 1.5]}
    >
      <color attach="background" args={[background]} />

      {/* Background waveforms */}
      <Waveform />

      <group position={[0, -2.8, 0]}>
        <Waveform />
      </group>

      <ambientLight intensity={1.2} />

      <pointLight
        position={[5, 5, 6]}
        color="#ffffff"
        intensity={4}
        distance={16}
      />

      <pointLight
        position={[-5, 3, 3]}
        color="#ffffff"
        intensity={2}
        distance={14}
      />

      <pointLight
        position={[0, 6, -2]}
        color="#ffffff"
        intensity={2}
        distance={15}
      />

      <pointLight
        position={[0, 1, -5]}
        color="#ffffff"
        intensity={1}
        distance={18}
      />
    </Canvas>
  );
}