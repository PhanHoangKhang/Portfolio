import { Line } from "@react-three/drei";
import * as THREE from "three";
import { useMemo } from "react";

function cssVar(variable: string) {
  return getComputedStyle(document.documentElement)
    .getPropertyValue(variable)
    .trim();
}

export default function Waveform() {
  const waveColor = cssVar("--wave");

  const waves = useMemo(() => {
    const result: THREE.Vector3[][] = [];

    const waveCount = 7;
    const points = 220;

    for (let w = 0; w < waveCount; w++) {
      const wave: THREE.Vector3[] = [];

      for (let i = 0; i < points; i++) {
        const t = i / (points - 1);

        const x = THREE.MathUtils.lerp(-9, 9, t);

        /*
         * Smooth envelope:
         * line starts subtle,
         * becomes stronger in the middle,
         * fades at the end.
         */
        const envelope = Math.sin(Math.PI * t);

        const amplitude = (0.65 + w * 0.035) * envelope;

        const frequency = 1.15;

        const phase = w * 0.18;

        const y = 0.5 + w * 0.42 + Math.sin(x * frequency + phase) * amplitude;

        wave.push(new THREE.Vector3(x, y, -4.5 - w * 0.015));
      }

      result.push(wave);
    }

    return result;
  }, []);

  return (
    <group rotation={[0, 0, -0.08]} position={[0, -0.8, 0]}>
      {waves.map((points, index) => (
        <Line
            key={index}
            points={points}
            color={waveColor}
            transparent
            opacity={0.4 - index * 0.03}
            lineWidth={1.1}
        />
        ))}
    </group>
  );
}
