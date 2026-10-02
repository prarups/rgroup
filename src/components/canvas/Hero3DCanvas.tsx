import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Hero3DCanvas: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const currentMount = mountRef.current;
    if (!currentMount) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 22;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);

    // Full Spectral Rainbow Particle Spectrum
    const particleCount = 950;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    // 7 True Rainbow Spectrum Colors (ROYGBIV)
    const rainbowPalette = [
      new THREE.Color('#FF2E93'), // Hot Magenta/Red
      new THREE.Color('#FF8A00'), // Vibrant Orange
      new THREE.Color('#FFDE00'), // Radiant Gold/Yellow
      new THREE.Color('#00E575'), // Emerald Green
      new THREE.Color('#00D4FF'), // Electric Cyan
      new THREE.Color('#3B82F6'), // Royal Blue
      new THREE.Color('#845EC2'), // Deep Violet/Purple
    ];

    for (let i = 0; i < particleCount; i++) {
      const radius = 8 + Math.random() * 9.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      // Rainbow color distribution based on angle and index
      const colorIndex = (Math.floor((theta / (Math.PI * 2)) * 7) + i) % 7;
      const selectedColor = rainbowPalette[colorIndex];

      colors[i * 3] = selectedColor.r;
      colors[i * 3 + 1] = selectedColor.g;
      colors[i * 3 + 2] = selectedColor.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.24,
      vertexColors: true,
      transparent: true,
      opacity: 0.95,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Prismatic Core Mesh
    const coreGeo = new THREE.IcosahedronGeometry(4.8, 2);
    const coreMat = new THREE.MeshBasicMaterial({
      color: 0x00d4ff,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    scene.add(coreMesh);

    // Rainbow Chromatic Torus Rings
    const ringGeo1 = new THREE.TorusGeometry(8.8, 0.06, 16, 120);
    const ringMat1 = new THREE.MeshBasicMaterial({
      color: 0xff2e93,
      transparent: true,
      opacity: 0.5,
    });
    const ring1 = new THREE.Mesh(ringGeo1, ringMat1);
    ring1.rotation.x = Math.PI / 3;
    scene.add(ring1);

    const ringGeo2 = new THREE.TorusGeometry(9.6, 0.05, 16, 120);
    const ringMat2 = new THREE.MeshBasicMaterial({
      color: 0xffde00,
      transparent: true,
      opacity: 0.45,
    });
    const ring2 = new THREE.Mesh(ringGeo2, ringMat2);
    ring2.rotation.y = Math.PI / 4;
    scene.add(ring2);

    const ringGeo3 = new THREE.TorusGeometry(10.4, 0.04, 16, 120);
    const ringMat3 = new THREE.MeshBasicMaterial({
      color: 0x00e575,
      transparent: true,
      opacity: 0.4,
    });
    const ring3 = new THREE.Mesh(ringGeo3, ringMat3);
    ring3.rotation.z = Math.PI / 6;
    scene.add(ring3);

    // Mouse Tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Scroll Tracking
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      if (!currentMount) return;
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsed = clock.getElapsedTime();

      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      const scrollFactor = scrollY * 0.0015;

      // Rotate particle cloud
      particles.rotation.y = elapsed * 0.09 + targetX * 0.35 + scrollFactor * 0.8;
      particles.rotation.x = elapsed * 0.05 + targetY * 0.25 + scrollFactor * 0.4;

      coreMesh.rotation.y = -elapsed * 0.14 + targetX * 0.4;
      coreMesh.rotation.x = elapsed * 0.1;

      ring1.rotation.z = elapsed * 0.2;
      ring1.rotation.x = Math.PI / 3 + targetY * 0.2;

      ring2.rotation.y = Math.PI / 4 + elapsed * 0.15;
      ring2.rotation.z = -elapsed * 0.1;

      ring3.rotation.x = Math.PI / 6 + elapsed * 0.12;

      // Scroll camera zoom
      camera.position.z = 22 - Math.min(scrollY * 0.015, 7.5);
      camera.position.x = targetX * 2.5;
      camera.position.y = targetY * 2.5;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      ringGeo1.dispose();
      ringMat1.dispose();
      ringGeo2.dispose();
      ringMat2.dispose();
      ringGeo3.dispose();
      ringMat3.dispose();
    };
  }, []);

  return (
    <div 
      ref={mountRef} 
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-hidden" 
      aria-hidden="true"
    />
  );
};
