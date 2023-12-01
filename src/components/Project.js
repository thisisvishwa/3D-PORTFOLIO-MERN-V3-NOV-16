```javascript
import React, { useState, useEffect } from 'react';
import { useProject } from '../hooks/useProject';
import { Canvas, useFrame } from 'react-three-fiber';
import { useSpring, a } from 'react-spring/three';
import { OrbitControls, PointerLockControls } from 'drei';
import ReactPlayer from 'react-player';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';

const Project = () => {
  const { project, isLoading, error } = useProject();
  const [expand, setExpand] = useState(false);
  const props = useSpring({ scale: expand ? [1.5, 1.5, 1.5] : [1, 1, 1] });

  const schema = yup.object().shape({
    name: yup.string().required(),
    description: yup.string().required(),
    tags: yup.array().of(yup.string().required()),
  });

  const { register, handleSubmit, errors } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // Post request to API to create project
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <a.mesh scale={props.scale} onClick={() => setExpand(!expand)}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial attach="material" color="orange" />
      <OrbitControls />
      <PointerLockControls />
      <ReactPlayer url={project.videoUrl} />
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" ref={register} />
        <input name="description" ref={register} />
        <input name="tags" ref={register} />
        <input type="submit" />
      </form>
    </a.mesh>
  );
};

export default Project;
```