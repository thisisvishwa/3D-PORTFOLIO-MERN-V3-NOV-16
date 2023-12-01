```javascript
import React, { useRef } from 'react';
import { Canvas } from 'react-three-fiber';
import { OrbitControls, PointerLockControls } from '@react-three/drei';

const CanvasComponent = () => {
  const controlsRef = useRef();

  return (
    <Canvas
      shadowMap
      gl={{ antialias: true }}
      pixelRatio={window.devicePixelRatio}
      camera={{ position: [0, 0, 5], fov: 75 }}
      onCreated={({ gl }) => {
        gl.toneMapping = THREE.Uncharted2ToneMapping;
        gl.setClearColor(new THREE.Color('#020207'));
      }}
    >
      <OrbitControls ref={controlsRef} />
      <PointerLockControls />
      <ambientLight intensity={0.3} />
      <spotLight position={[10, 10, 10]} angle={0.3} />
      <fog attach="fog" args={['#020207', 10, 30]} />
    </Canvas>
  );
};

export default CanvasComponent;
```