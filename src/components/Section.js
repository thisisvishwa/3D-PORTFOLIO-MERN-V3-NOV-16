```javascript
import React, { useContext } from 'react';
import { SectionContext } from '../contexts/SectionContext';
import Project from './Project';
import Skill from './Skill';
import About from './About';

const Section = () => {
  const { activeSection } = useContext(SectionContext);

  switch (activeSection) {
    case 'Projects':
      return <Project />;
    case 'Skills':
      return <Skill />;
    case 'About':
      return <About />;
    default:
      return null;
  }
};

export default Section;
```