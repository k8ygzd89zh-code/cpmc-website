'use client';

import { useRef, Suspense, useEffect, useState, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

// ─── Scroll-driven key light ────────────────────────────────────
function Sunlight({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const lightRef = useRef<THREE.DirectionalLight>(null);
  const { invalidate } = useThree();
  const [angle, setAngle] = useState(-0.3); // start from upper-right

  const onScroll = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const viewH = window.innerHeight;
    // progress: 0 when section enters viewport, 1 when it leaves
    const raw = 1 - (rect.top + rect.height * 0.5) / viewH;
    const progress = Math.max(0, Math.min(1, raw));
    // light sweeps from upper-right (angle ~ -0.5) across to upper-center (~ 0.15)
    setAngle(-0.5 + progress * 0.65);
    invalidate();
  }, [sectionRef, invalidate]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  return (
    <group rotation={[0.6, angle, 0]}>
      <directionalLight
        ref={lightRef}
        position={[0, 0, 8]}
        intensity={18}
        color="#fdf5e6"
        castShadow={false}
      />
    </group>
  );
}

// ─── Can Lid Model ───────────────────────────────────────────────
function CanLid() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.001;
    }
  });

  // Premium metallic material — gold/silver tone like an aerosol can cap
  const metalGold = new THREE.MeshStandardMaterial({
    color: '#d4c090',
    metalness: 0.95,
    roughness: 0.18,
  });
  const metalSilver = new THREE.MeshStandardMaterial({
    color: '#d8dce6',
    metalness: 0.95,
    roughness: 0.15,
  });
  const rimMat = new THREE.MeshStandardMaterial({
    color: '#c4b880',
    metalness: 0.92,
    roughness: 0.22,
  });
  const centerMat = new THREE.MeshStandardMaterial({
    color: '#e8e4d8',
    metalness: 0.88,
    roughness: 0.25,
  });
  const ringMat = new THREE.MeshStandardMaterial({
    color: '#bfb090',
    metalness: 0.9,
    roughness: 0.2,
  });

  return (
    <group ref={groupRef} rotation={[0.55, 0.15, 0.08]}>
      {/* Main dome — the curved top of the lid */}
      <mesh position={[0, 0.22, 0]} material={metalGold}>
        <sphereGeometry args={[2.2, 64, 32, 0, Math.PI * 2, 0, 0.35]} />
      </mesh>

      {/* Outer rim ring */}
      <mesh position={[0, 0.15, 0]} rotation={[Math.PI / 2, 0, 0]} material={rimMat}>
        <torusGeometry args={[2.15, 0.08, 32, 80]} />
      </mesh>

      {/* Outer bevel ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.08, 0]} material={ringMat}>
        <torusGeometry args={[1.82, 0.04, 16, 80]} />
      </mesh>

      {/* Concentric expansion ring 1 */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.22, 0]} material={ringMat}>
        <torusGeometry args={[1.45, 0.03, 16, 80]} />
      </mesh>

      {/* Concentric expansion ring 2 */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.25, 0]} material={ringMat}>
        <torusGeometry args={[0.95, 0.025, 16, 64]} />
      </mesh>

      {/* Inner ring */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 0.28, 0]} material={ringMat}>
        <torusGeometry args={[0.55, 0.025, 16, 48]} />
      </mesh>

      {/* Center cap / valve cup */}
      <mesh position={[0, 0.32, 0]} material={centerMat}>
        <cylinderGeometry args={[0.38, 0.42, 0.06, 48]} />
      </mesh>

      {/* Center dome top */}
      <mesh position={[0, 0.35, 0]} material={metalSilver}>
        <sphereGeometry args={[0.38, 32, 16, 0, Math.PI * 2, 0, 0.2]} />
      </mesh>

      {/* Side wall / body of the lid */}
      <mesh position={[0, -0.12, 0]} material={metalGold}>
        <cylinderGeometry args={[2.2, 2.18, 0.35, 64, 1, true]} />
      </mesh>

      {/* Bottom disc to close the lid */}
      <mesh position={[0, -0.28, 0]} rotation={[Math.PI, 0, 0]} material={rimMat}>
        <ringGeometry args={[0.6, 2.2, 64]} />
      </mesh>
    </group>
  );
}

// ─── Soft fill light from below-left ─────────────────────────────
function FillLight() {
  return (
    <directionalLight
      position={[-4, -2, 3]}
      intensity={2.5}
      color="#a8c8f0"
    />
  );
}

// ─── Ambient rim light ───────────────────────────────────────────
function RimLight() {
  return (
    <directionalLight
      position={[0, 3, -3]}
      intensity={3}
      color="#c8d8f0"
    />
  );
}

// ─── Scene ───────────────────────────────────────────────────────
function Scene({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  return (
    <>
      <ambientLight intensity={1.2} color="#f0ede8" />
      <FillLight />
      <RimLight />
      <Sunlight sectionRef={sectionRef} />
      <Suspense fallback={null}>
        <CanLid />
      </Suspense>
    </>
  );
}

// ─── Exported component ──────────────────────────────────────────
export default function CanLid3D({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 1.2, 5.5], fov: 32 }}
        style={{ background: 'transparent' }}
        gl={{ antialias: true, alpha: true, toneMapping: THREE.ACESFilmicToneMapping, toneMappingExposure: 1.1 }}
      >
        <Scene sectionRef={sectionRef} />
      </Canvas>
    </div>
  );
}
