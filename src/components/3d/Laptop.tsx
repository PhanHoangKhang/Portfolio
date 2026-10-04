import { Edges, RoundedBox } from "@react-three/drei";

function cssVar(variable: string) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
}

export default function Laptop() {
  const surface = cssVar("--surface");
  const surface2 = cssVar("--surface-2");

  const monitorBorder = cssVar("--monitor-border");
  const frame = cssVar("--monitor-frame");

  const primary = cssVar("--primary");
  const primaryLight = cssVar("--primary-light");
  const primaryDark = cssVar("--primary-dark");

  return (
    <group position={[0, -0.85, 0]}>
      {/* Monitor body */}
      <RoundedBox
        args={[8.2, 5.05, 0.34]}
        radius={0.14}
        smoothness={8}
        position={[0, 0.7, 0]}
      >
        <meshStandardMaterial
          color={monitorBorder}
          metalness={0.25}
          roughness={0.4}
        />

        <Edges scale={1.01} threshold={15} color={monitorBorder} />
      </RoundedBox>

      {/* Gray bezel */}
      <RoundedBox
        args={[7.82, 4.67, 0.09]}
        radius={0.1}
        smoothness={8}
        position={[0, 0.7, 0.19]}
      >
        <meshStandardMaterial color={frame} metalness={0.55} roughness={0.3} />
      </RoundedBox>

      {/* Screen */}
      <RoundedBox
        args={[7.52, 4.37, 0.05]}
        radius={0.07}
        smoothness={8}
        position={[0, 0.7, 0.25]}
      >
        <meshStandardMaterial
          color={cssVar("--background")}
          metalness={0.05}
          roughness={0.8}
          emissive={surface2}
          emissiveIntensity={0.2}
        />
      </RoundedBox>

      {/* Left decoration */}
      <mesh position={[-3.92, 2.55, 0.22]}>
        <boxGeometry args={[0.035, 0.45, 0.025]} />

        <meshStandardMaterial
          color={primaryLight}
          emissive={primaryLight}
          emissiveIntensity={2}
        />
      </mesh>

      {/* Right decoration */}
      <mesh position={[3.92, -1.1, 0.22]}>
        <boxGeometry args={[0.035, 0.45, 0.025]} />

        <meshStandardMaterial
          color={primary}
          emissive={primary}
          emissiveIntensity={2}
        />
      </mesh>

      {/* Bottom LED */}
      <mesh position={[0, -1.85, 0.21]}>
        <boxGeometry args={[0.9, 0.025, 0.025]} />

        <meshStandardMaterial
          color={primaryLight}
          emissive={primaryLight}
          emissiveIntensity={2}
        />
      </mesh>

      {/* Stand */}
      <RoundedBox
        args={[0.7, 1, 0.45]}
        radius={0.05}
        smoothness={6}
        position={[0, -1.9, -0.02]}
      >
        <meshStandardMaterial
            color={monitorBorder}
            metalness={0.25}
            roughness={0.4}
        />
      </RoundedBox>

      {/* Stand base */}
      <RoundedBox
        args={[2.9, 0.18, 1.45]}
        radius={0.08}
        smoothness={6}
        position={[0, -2.4, 0]}
      >
        <meshStandardMaterial
        color={monitorBorder}
        metalness={0.25}
        roughness={0.4}
        />
      </RoundedBox>

      {/* Stand accent */}
      <mesh position={[0, -2.29, 0.7]}>
        <boxGeometry args={[1.2, 0.025, 0.025]} />

        <meshStandardMaterial
          color={primary}
          emissive={primary}
          emissiveIntensity={1.5}
        />
      </mesh>

      {/* Screen glow */}
      <pointLight
        position={[0, 0.7, 2]}
        color={primary}
        intensity={3}
        distance={7}
      />
    </group>
  );
}
