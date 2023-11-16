```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, PointerLockControls } from '@react-three/drei';
import { Bloom, DepthOfField, DotScreen, RGBShift } from '@react-postprocessing/postprocessing';
import App from './App';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <Canvas
      antialias
      shadows
      pixelRatio={Math.min(2, isBrowser ? window.devicePixelRatio : 1)}
      gl={{ alpha: false }}
      camera={{ position: [0, 0, 120], fov: 70 }}
    >
      <OrbitControls />
      <PointerLockControls />
      <Bloom />
      <DepthOfField />
      <DotScreen />
      <RGBShift />
      <App />
    </Canvas>
  </React.StrictMode>,
  document.getElementById('root')
);
```