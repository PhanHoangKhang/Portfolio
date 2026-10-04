import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import Laptop from "./Laptop";

function cssVar(variable: string) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
}

export default function Scene() {
  const background = cssVar("--background");
  const primary = cssVar("--primary");
  const primaryLight = cssVar("--primary-light");
  const primaryDark = cssVar("--primary-dark");

  return (
    <Canvas
      camera={{
        position: [0, 0.3, 10],
        fov: 40,
      }}
      dpr={[1, 2]}
    >
      <color attach="background" args={[background]} />

      <Stars
        radius={100}
        depth={80}
        count={6000}
        factor={2.5}
        saturation={0}
        fade
        speed={0.1}
      />

      <ambientLight intensity={1.2} />

      <pointLight
        position={[5, 5, 6]}
        color={primary}
        intensity={6}
        distance={16}
      />

      <pointLight
        position={[-5, 3, 3]}
        color={primaryDark}
        intensity={3}
        distance={14}
      />

      <pointLight
        position={[0, 6, -2]}
        color={primaryLight}
        intensity={3}
        distance={15}
      />

      <pointLight
        position={[0, 1, -5]}
        color={primary}
        intensity={2}
        distance={18}
      />

      <Laptop />
    </Canvas>
  );
}
