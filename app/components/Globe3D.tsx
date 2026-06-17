'use client';

import { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame, useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
import * as THREE from 'three';

function Atmosphere() {
  return (
    <mesh>
      <sphereGeometry args={[5.15, 64, 64]} />
      <shaderMaterial
        vertexShader={`
          varying vec3 vNormal;
          varying vec3 vPosition;
          void main() {
            vec4 worldPos = modelMatrix * vec4(position, 1.0);
            vNormal = normalize(mat3(modelMatrix) * normal);
            vPosition = worldPos.xyz;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
          }
        `}
        fragmentShader={`
          varying vec3 vNormal;
          varying vec3 vPosition;
          void main() {
            float intensity = pow(0.6 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.5);
            gl_FragColor = vec4(0.3, 0.6, 1.0, 1.0) * intensity * 0.5;
          }
        `}
        blending={THREE.AdditiveBlending}
        side={THREE.BackSide}
        transparent
        depthWrite={false}
      />
    </mesh>
  );
}

function Starfield() {
  const positions = useMemo(() => {
    const pos = new Float32Array(800 * 3);
    for (let i = 0; i < 800; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 25;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 20 - 8;
    }
    return pos;
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={800}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.03} color="#ffffff" sizeAttenuation transparent opacity={0.7} />
    </points>
  );
}

function EarthSphere() {
  const meshRef = useRef<THREE.Mesh>(null);
  const texture = useLoader(TextureLoader, 'https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg');

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.06;
    }
  });

  return (
    <>
      <mesh ref={meshRef} rotation={[0.45, 0, 0.2]}>
        <sphereGeometry args={[5, 80, 80]} />
        <meshStandardMaterial map={texture} roughness={0.6} metalness={0.05} />
      </mesh>
      <Atmosphere />
    </>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.3} />
      <directionalLight position={[10, 12, 5]} intensity={0.9} color="#ffffff" />
      <directionalLight position={[-6, -4, -10]} intensity={0.3} color="#8ec8f2" />
      <pointLight position={[0, 8, 2]} intensity={0.4} color="#ffffff" />
      <Starfield />
      <Suspense fallback={null}>
        <EarthSphere />
      </Suspense>
    </>
  );
}

export default function Globe3D() {
  return (
    <div className="absolute inset-0">
      <Canvas
        camera={{ position: [0, 4.5, 2.8], fov: 42 }}
        style={{ background: 'radial-gradient(ellipse at 55% 30%, #0d1b2a 0%, #020810 60%, #000000 100%)' }}
        gl={{ antialias: true, alpha: false }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
