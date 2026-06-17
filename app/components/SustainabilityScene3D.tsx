'use client';

import { useRef, useEffect, useCallback, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

/* ================================================================
   Scroll-Driven Sunlight
   ================================================================ */
function Sunlight({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const groupRef = useRef<THREE.Group>(null);
  const targetAngle = useRef(0);
  const currentAngle = useRef(0);
  const { invalidate } = useThree();

  const onScroll = useCallback(() => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    const vh = window.innerHeight;
    // progress: 0→1 as section scrolls through viewport
    const raw = (vh - rect.top) / (vh + rect.height);
    const progress = Math.max(0, Math.min(1, raw));
    // sunlight tilts upward ~10° from initial angle as user scrolls down
    targetAngle.current = progress * 0.17;
  }, [sectionRef]);

  useEffect(() => {
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, [onScroll]);

  useFrame(() => {
    if (!groupRef.current) return;
    // smooth interpolation — heavy easing for fluid feel
    currentAngle.current += (targetAngle.current - currentAngle.current) * 0.04;
    groupRef.current.rotation.x = currentAngle.current;
    invalidate();
  });

  return (
    <group ref={groupRef} rotation={[0.05, 0, 0]}>
      {/* Key sunlight — warm, enters from upper-left */}
      <directionalLight
        position={[-5, 10, 6]}
        intensity={14}
        color="#fff8ec"
      />
      {/* Secondary warm fill */}
      <directionalLight
        position={[-2, 6, -2]}
        intensity={3}
        color="#ffe8d0"
      />
    </group>
  );
}

/* ================================================================
   Photorealistic Aerosol Can
   ================================================================ */
function AerosolCan() {
  const groupRef = useRef<THREE.Group>(null);

  // ── PBR Materials ──────────────────────────────────────
  const body = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#e6e2da', metalness: 0.96, roughness: 0.16, name: 'body',
  }), []);

  const shoulder = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#ddd8d0', metalness: 0.94, roughness: 0.13, name: 'shoulder',
  }), []);

  const ring = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#cec8bc', metalness: 0.92, roughness: 0.22, name: 'ring',
  }), []);

  const neck = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#d4d0c4', metalness: 0.90, roughness: 0.26, name: 'neck',
  }), []);

  const cap = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#ede8e0', metalness: 0.87, roughness: 0.30, name: 'cap',
  }), []);

  return (
    <group ref={groupRef} position={[0, -0.25, 0]}>
      {/* ── Main body cylinder ── */}
      <mesh material={body} position={[0, 0, 0]}>
        <cylinderGeometry args={[0.68, 0.70, 3.6, 64]} />
      </mesh>

      {/* ── Bottom rim ── */}
      <mesh material={ring} position={[0, -1.82, 0]}>
        <torusGeometry args={[0.70, 0.025, 12, 64]} />
      </mesh>

      {/* ── Bottom edge bevel ── */}
      <mesh material={ring} position={[0, -1.78, 0]}>
        <torusGeometry args={[0.69, 0.015, 8, 64]} />
      </mesh>

      {/* ── Shoulder dome (curved transition to neck) ── */}
      <mesh material={shoulder} position={[0, 1.82, 0]}>
        <sphereGeometry args={[0.78, 72, 32, 0, Math.PI * 2, 0, 0.38]} />
      </mesh>

      {/* ── Shoulder-body seam ring ── */}
      <mesh material={ring} position={[0, 1.78, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.71, 0.022, 12, 64]} />
      </mesh>

      {/* ── Neck ring (valve cup rim) ── */}
      <mesh material={ring} position={[0, 2.08, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.30, 0.035, 16, 48]} />
      </mesh>

      {/* ── Neck cylinder ── */}
      <mesh material={neck} position={[0, 2.25, 0]}>
        <cylinderGeometry args={[0.26, 0.28, 0.42, 48]} />
      </mesh>

      {/* ── Actuator cap body ── */}
      <mesh material={cap} position={[0, 2.55, 0]}>
        <cylinderGeometry args={[0.34, 0.34, 0.48, 48]} />
      </mesh>

      {/* ── Cap bottom groove ring ── */}
      <mesh material={ring} position={[0, 2.30, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.33, 0.012, 8, 48]} />
      </mesh>

      {/* ── Cap top dome ── */}
      <mesh material={cap} position={[0, 2.80, 0]}>
        <sphereGeometry args={[0.34, 40, 20, 0, Math.PI * 2, 0, 0.28]} />
      </mesh>

      {/* ── Spray nozzle tip ── */}
      <mesh material={neck} position={[0, 2.92, 0]}>
        <cylinderGeometry args={[0.06, 0.08, 0.12, 24]} />
      </mesh>
    </group>
  );
}

/* ================================================================
   Lawn Ground
   ================================================================ */
function Lawn() {
  const nearGrass = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#5a8f40', roughness: 0.82, metalness: 0, name: 'grass-near',
  }), []);

  const midGrass = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#6a9e50', roughness: 0.88, metalness: 0, name: 'grass-mid',
  }), []);

  const farGrass = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#7bab60', roughness: 0.92, metalness: 0, name: 'grass-far',
  }), []);

  return (
    <group position={[0, -1.95, 0]}>
      {/* Near foreground */}
      <mesh material={nearGrass} rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 3]} receiveShadow>
        <planeGeometry args={[16, 6]} />
      </mesh>
      {/* Mid ground — main */}
      <mesh material={midGrass} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, -1]} receiveShadow>
        <planeGeometry args={[16, 8]} />
      </mesh>
      {/* Far ground — lighter, receding */}
      <mesh material={farGrass} rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.02, -5]} receiveShadow>
        <planeGeometry args={[16, 10]} />
      </mesh>
    </group>
  );
}

/* ================================================================
   Subtle Grass Clusters near the can base
   ================================================================ */
function GrassClusters() {
  const blades = useMemo(() => {
    const arr: { x: number; z: number; h: number; rot: number }[] = [];
    for (let i = 0; i < 80; i++) {
      const a = Math.random() * Math.PI * 2;
      const d = 0.85 + Math.random() * 2.2;
      arr.push({
        x: Math.cos(a) * d,
        z: Math.sin(a) * d,
        h: 0.15 + Math.random() * 0.7,
        rot: Math.random() * 0.4,
      });
    }
    return arr;
  }, []);

  const green = useMemo(() => new THREE.MeshStandardMaterial({
    color: '#4d8a3a', roughness: 0.65, metalness: 0,
  }), []);

  return (
    <group position={[0, -1.92, 0]}>
      {blades.map((b, i) => (
        <mesh key={i} position={[b.x, b.h / 2, b.z]}
          rotation={[b.rot, i * 0.7, b.rot * 0.5]}
          material={green}>
          <boxGeometry args={[0.015, b.h, 0.015]} />
        </mesh>
      ))}
    </group>
  );
}

/* ================================================================
   Ambient & Fill Lights
   ================================================================ */
function AmbientLights() {
  return (
    <>
      <ambientLight intensity={1.6} color="#f5f0e6" />
      {/* Ground bounce — green-tinged fill from below */}
      <directionalLight position={[3, -2, -3]} intensity={1.8} color="#c8e0b8" />
      {/* Rim / backlight to define silhouette */}
      <directionalLight position={[0, 4, -5]} intensity={2.5} color="#d8e0f0" />
      {/* Subtle top fill for the cap area */}
      <directionalLight position={[1, 6, 2]} intensity={2} color="#ffe8d8" />
    </>
  );
}

/* ================================================================
   Inner Scene
   ================================================================ */
function Scene({ sectionRef }: { sectionRef: React.RefObject<HTMLElement | null> }) {
  const canGroupRef = useRef<THREE.Group>(null);

  return (
    <>
      <AmbientLights />
      <Sunlight sectionRef={sectionRef} />
      <Lawn />
      {/* Position can + grass cluster on the right */}
      <group ref={canGroupRef} position={[2.0, 0, 0]}>
        <AerosolCan />
        <GrassClusters />
      </group>
    </>
  );
}

/* ================================================================
   Exported Component
   ================================================================ */
export default function SustainabilityScene3D({
  sectionRef,
}: {
  sectionRef: React.RefObject<HTMLElement | null>;
}) {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [-1.0, 1.4, 5.2], fov: 42 }}
        style={{ background: 'transparent' }}
        gl={{
          antialias: true,
          alpha: true,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.05,
        }}
      >
        <Scene sectionRef={sectionRef} />
      </Canvas>
    </div>
  );
}
