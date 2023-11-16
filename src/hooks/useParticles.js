import { useState, useEffect } from 'react';
import { useThree } from 'react-three-fiber';
import * as THREE from 'three';

const useParticles = () => {
  const { scene } = useThree();
  const [particleSystem, setParticleSystem] = useState(null);

  useEffect(() => {
    const particles = new THREE.Geometry();
    const particleMaterial = new THREE.PointsMaterial({
      color: 0xFFFFFF,
      size: 1,
      map: THREE.ImageUtils.loadTexture(
        "particle.png"
      ),
      blending: THREE.AdditiveBlending,
      transparent: true
    });

    for (let p = 0; p < 1000; p++) {
      const pX = Math.random() * 500 - 250,
            pY = Math.random() * 500 - 250,
            pZ = Math.random() * 500 - 250,
            particle = new THREE.Vector3(pX, pY, pZ);
      particles.vertices.push(particle);
    }

    const particleSystem = new THREE.Points(particles, particleMaterial);
    setParticleSystem(particleSystem);
    scene.add(particleSystem);
  }, [scene]);

  useEffect(() => {
    if (particleSystem) {
      const animateParticles = () => {
        particleSystem.rotation.y += 0.01;
        requestAnimationFrame(animateParticles);
      }
      animateParticles();
    }
  }, [particleSystem]);

  return particleSystem;
};

export default useParticles;