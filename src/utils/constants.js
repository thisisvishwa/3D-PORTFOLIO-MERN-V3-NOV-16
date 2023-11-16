```javascript
// src/utils/constants.js

export const SECTIONS = {
  PROJECTS: 'projects',
  SKILLS: 'skills',
  ABOUT: 'about',
};

export const API_ENDPOINTS = {
  PROJECTS: '/api/projects',
  SKILLS: '/api/skills',
  ABOUT: '/api/about',
  AUTH: '/api/auth',
};

export const ADMIN_ROUTES = {
  PROJECTS: '/admin/projects',
  SKILLS: '/admin/skills',
  ABOUT: '/admin/about',
};

export const EFFECTS = {
  BLOOM: 'bloom',
  DEPTH_OF_FIELD: 'depth_of_field',
  DOT_SCREEN: 'dot_screen',
  RGB_SHIFT: 'rgb_shift',
};

export const CONTROLS = {
  ORBIT: 'orbit',
  POINTER_LOCK: 'pointer_lock',
};

export const ANIMATIONS = {
  FADE_IN: 'fade_in',
  MESH_MORPHING: 'mesh_morphing',
  SPINNING: 'spinning',
};

export const OPTIMIZATIONS = {
  REACT_MEMO: 'react_memo',
  BUFFER_GEOMETRY: 'buffer_geometry',
  DYNAMIC_TEXTURE_LOADING: 'dynamic_texture_loading',
  LIMIT_REALTIME_LIGHTS: 'limit_realtime_lights',
  CACHE_ASSET_LOADING: 'cache_asset_loading',
  THROTTLE_RENDER_RATE: 'throttle_render_rate',
};
```