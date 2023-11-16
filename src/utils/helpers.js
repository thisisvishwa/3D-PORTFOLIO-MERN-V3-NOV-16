```javascript
// src/utils/helpers.js

export const throttle = (func, limit) => {
  let inThrottle;
  return function() {
    const args = arguments;
    const context = this;
    if (!inThrottle) {
      func.apply(context, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  }
}

export const memoize = (func) => {
  const cache = {};
  return (...args) => {
    const key = JSON.stringify(args);
    if (cache[key]) {
      return cache[key];
    } else {
      const val = func.apply(null, args);
      cache[key] = val;
      return val;
    }
  };
};

export const loadTexture = (url) => {
  return new Promise((resolve, reject) => {
    const loader = new THREE.TextureLoader();
    loader.load(
      url,
      texture => resolve(texture),
      undefined,
      error => reject(error)
    );
  });
};

export const loadModel = (url) => {
  return new Promise((resolve, reject) => {
    const loader = new THREE.GLTFLoader();
    loader.load(
      url,
      gltf => resolve(gltf),
      undefined,
      error => reject(error)
    );
  });
};

export const createBufferGeometry = (vertices, faces) => {
  const geometry = new THREE.BufferGeometry();
  geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
  geometry.setIndex(faces);
  return geometry;
};
```