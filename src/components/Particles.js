```javascript
import React, { useMemo } from 'react';
import { useFrame } from 'react-three-fiber';
import { Vector3 } from 'three';

const Particles = ({ count = 5000 }) => {
  const particles = useMemo(() => {
    const temp = [];
    for (let i = 0; i < count; i++) {
      const value = [Math.random() * 100 - 50, Math.random() * 100 - 50, Math.random() * 100 - 50];
      temp.push(value);
    }
    return new Float32Array(temp);
  }, [count]);

  useFrame((state) => {
    state.gl.setClearColor('#020207');
    state.camera.position.lerp(new Vector3(0, 0, 25), 0.025);
    state.camera.lookAt(0, 0, 0);
  });

  return (
    <points>
      <bufferGeometry attach="geometry">
        <bufferAttribute
          attachObject={['attributes', 'position']}
          count={particles.length / 3}
          array={particles}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial attach="material" size={0.1} color="#ffffff" />
    </points>
  );
};

export default Particles;
```