import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const Pipeline3DCanvas: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      50,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 18);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Create 5 Connected Pulsing Hub Nodes for 5 Stages
    const nodeCount = 5;
    const nodes: THREE.Mesh[] = [];
    const colors = [0x00f0ff, 0x3b82f6, 0x8b5cf6, 0xec4899, 0x22c55e];

    const group = new THREE.Group();

    for (let i = 0; i < nodeCount; i++) {
      const geo = new THREE.IcosahedronGeometry(0.8, 1);
      const mat = new THREE.MeshBasicMaterial({
        color: colors[i],
        wireframe: true,
      });
      const mesh = new THREE.Mesh(geo, mat);

      // Distribute nodes along an S-curve or spiral in 3D
      const x = (i - 2) * 3.8;
      const y = Math.sin(i * 1.2) * 1.5;
      const z = Math.cos(i * 1.2) * 1.5;
      mesh.position.set(x, y, z);
      nodes.push(mesh);
      group.add(mesh);
    }

    // Connect nodes with a glowing laser line
    const curvePoints = nodes.map(n => n.position);
    const curve = new THREE.CatmullRomCurve3(curvePoints);
    const tubeGeo = new THREE.TubeGeometry(curve, 64, 0.08, 8, false);
    const tubeMat = new THREE.MeshBasicMaterial({
      color: 0x00f0ff,
      transparent: true,
      opacity: 0.7,
      wireframe: true,
    });
    const tubeMesh = new THREE.Mesh(tubeGeo, tubeMat);
    group.add(tubeMesh);

    // Orbiting particle beacons
    const beaconCount = 120;
    const beaconGeo = new THREE.BufferGeometry();
    const beaconPos = new Float32Array(beaconCount * 3);

    for (let i = 0; i < beaconCount; i++) {
      const t = (i / beaconCount);
      const pt = curve.getPoint(t);
      beaconPos[i * 3] = pt.x + (Math.random() - 0.5) * 1.2;
      beaconPos[i * 3 + 1] = pt.y + (Math.random() - 0.5) * 1.2;
      beaconPos[i * 3 + 2] = pt.z + (Math.random() - 0.5) * 1.2;
    }
    beaconGeo.setAttribute('position', new THREE.BufferAttribute(beaconPos, 3));
    const beaconMat = new THREE.PointsMaterial({
      color: 0xffffff,
      size: 0.12,
      transparent: true,
      opacity: 0.9,
    });
    const beaconPoints = new THREE.Points(beaconGeo, beaconMat);
    group.add(beaconPoints);

    scene.add(group);

    // Scroll interaction
    let scrollY = 0;
    const handleScroll = () => {
      scrollY = window.scrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', handleResize);

    let animationId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationId = requestAnimationFrame(animate);
      const time = clock.getElapsedTime();

      // Rotate whole group dynamically
      group.rotation.y = time * 0.2 + scrollY * 0.001;
      group.rotation.x = Math.sin(time * 0.3) * 0.1;

      // Animate nodes pulsing
      nodes.forEach((node, idx) => {
        node.rotation.x += 0.01 * (idx + 1);
        node.rotation.y += 0.015 * (idx + 1);
        const scale = 1 + Math.sin(time * 2 + idx) * 0.15;
        node.scale.set(scale, scale, scale);
      });

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      tubeGeo.dispose();
      tubeMat.dispose();
      beaconGeo.dispose();
      beaconMat.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-80 relative rounded-2xl overflow-hidden glass-panel my-6 pointer-events-none"
    />
  );
};
