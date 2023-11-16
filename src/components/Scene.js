```javascript
import React, { useState, useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PointerLockControls } from '@react-three/drei';
import { useThree } from 'react-three-fiber';
import Projects from './Projects';
import Skills from './Skills';
import About from './About';

const Scene = () => {
  const [activeSection, setActiveSection] = useState('Projects');
  const { camera } = useThree();

  useEffect(() => {
    camera.position.z = 5;
  }, [camera]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  return (
    <Canvas
      shadows
      gl={{ antialias: true }}
      pixelRatio={window.devicePixelRatio}
    >
      <OrbitControls />
      <PointerLockControls />
      <ambientLight intensity={0.5} />
      <spotLight position={[10, 10, 10]} angle={0.3} />
      {activeSection === 'Projects' && <Projects />}
      {activeSection === 'Skills' && <Skills />}
      {activeSection === 'About' && <About />}
    </Canvas>
  );
};

export default Scene;
```