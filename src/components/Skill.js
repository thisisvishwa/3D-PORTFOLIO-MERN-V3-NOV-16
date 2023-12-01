```javascript
import React, { useState, useEffect } from 'react';
import { useThree } from 'react-three-fiber';
import { useSkill } from '../hooks/useSkill';
import SkillDetail from './SkillDetail';

const Skill = () => {
  const { skills, loading, error } = useSkill();
  const [selectedSkill, setSelectedSkill] = useState(null);
  const { camera } = useThree();

  useEffect(() => {
    if (selectedSkill) {
      camera.position.set(0, 0, 5);
    }
  }, [selectedSkill, camera]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <>
      {skills.map((skill) => (
        <mesh
          key={skill._id}
          onClick={() => setSelectedSkill(skill)}
          position={[Math.random() * 5, Math.random() * 5, Math.random() * 5]}
        >
          <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
          <meshStandardMaterial attach="material" color={skill.color} />
        </mesh>
      ))}
      {selectedSkill && (
        <SkillDetail
          skill={selectedSkill}
          onClose={() => setSelectedSkill(null)}
        />
      )}
    </>
  );
};

export default Skill;
```