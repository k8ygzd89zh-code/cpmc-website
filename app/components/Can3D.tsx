'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, MeshWobbleMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Can({ position, color, speed, scale, metallic }: {
  position: [number, number, number];
  color: string;
  speed: number;
  scale: number;
  metallic: boolean;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(t * speed * 0.5) * 0.3;
      groupRef.current.position.y = Math.sin(t * speed + position[0]) * 0.2;
    }
    if (meshRef.current) {
      meshRef.current.rotation.z += 0.003;
    }
  });

  return (
    <group ref={groupRef} position={position}>
      {/* Main can body */}
      <mesh ref={meshRef} scale={[scale, scale * 1.6, scale]}>
        <cylinderGeometry args={[0.8, 0.8, 2, 64, 1, true]} />
        {metallic ? (
          <MeshWobbleMaterial
            color={color}
            metalness={1}
            roughness={0.15}
            factor={0.05}
            speed={0.5}
            envMapIntensity={0.8}
          />
        ) : (
          <meshStandardMaterial
            color={color}
            metalness={0.9}
            roughness={0.2}
            envMapIntensity={0.6}
          />
        )}
      </mesh>
      {/* Top rim */}
      <mesh position={[0, scale * 1.6, 0]} scale={[scale, scale, scale]}>
        <torusGeometry args={[0.8, 0.04, 16, 64]} />
        <meshStandardMaterial color="#C8A951" metalness={1} roughness={0.3} />
      </mesh>
      {/* Bottom rim */}
      <mesh position={[0, -scale * 1.6, 0]} scale={[scale, scale, scale]}>
        <torusGeometry args={[0.8, 0.04, 16, 64]} />
        <meshStandardMaterial color="#C8A951" metalness={1} roughness={0.3} />
      </mesh>
    </group>
  );
}

function Particles() {
  const points = useMemo(() => {
    const positions = new Float32Array(200 * 3);
    for (let i = 0; i < 200; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 15;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 10;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 8;
    }
    return positions;
  }, []);

  const ref = useRef<THREE.Points>(null!);

  useFrame((state) => {
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
    ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={200}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.02}
        color="#C8A951"
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export default function Can3DScene() {
  const cans = useMemo(() => [
    { position: [-2.5, 0, 0] as [number, number, number], color: '#C8A951', speed: 0.8, scale: 0.9, metallic: true },
    { position: [0, 0.5, -1] as [number, number, number], color: '#8AB4F8', speed: 1.0, scale: 1.0, metallic: true },
    { position: [2.5, 0, 0] as [number, number, number], color: '#E8B4B8', speed: 1.2, scale: 0.85, metallic: false },
    { position: [-1.2, -0.8, 1] as [number, number, number], color: '#B0B0B0', speed: 0.9, scale: 0.75, metallic: true },
    { position: [1.2, -0.8, 1] as [number, number, number], color: '#D4A574', speed: 1.1, scale: 0.75, metallic: false },
  ], []);

  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        <ambientLight intensity={0.3} />
        <spotLight
          position={[5, 5, 5]}
          angle={0.3}
          penumbra={1}
          intensity={2}
          color="#ffffff"
        />
        <pointLight position={[-3, -2, 3]} intensity={1} color="#C8A951" />
        <pointLight position={[3, 2, -3]} intensity={0.5} color="#8AB4F8" />
        <Particles />
        {cans.map((can, i) => (
          <Can key={i} {...can} />
        ))}
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
