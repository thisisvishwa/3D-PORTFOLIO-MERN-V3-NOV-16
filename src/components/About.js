```javascript
import React, { useContext } from 'react';
import { UserContext } from '../contexts/UserContext';
import styled from 'styled-components';

const AboutContainer = styled.div`
  // Add your styles here
`;

const Hero = styled.div`
  // Add your styles here
`;

const AboutMe = styled.div`
  // Add your styles here
`;

const Experience = styled.div`
  // Add your styles here
`;

const Education = styled.div`
  // Add your styles here
`;

const Contact = styled.div`
  // Add your styles here
`;

const About = () => {
  const { user } = useContext(UserContext);

  return (
    <AboutContainer>
      <Hero>
        <h1>{user.name}</h1>
        <h2>{user.title}</h2>
        <img src={user.avatar} alt="Avatar" />
        <button>Scroll Down</button>
      </Hero>
      <AboutMe>
        <h3>About Me</h3>
        <p>{user.bio}</p>
        <p>Skills: {user.skills.join(', ')}</p>
        <p>Interests: {user.interests.join(', ')}</p>
      </AboutMe>
      <Experience>
        <h3>Experience</h3>
        {user.experience.map((exp, index) => (
          <div key={index}>
            <h4>{exp.company}</h4>
            <p>{exp.position}</p>
            <p>{exp.dateRange}</p>
            <p>{exp.description}</p>
            <p>Technologies used: {exp.technologies.join(', ')}</p>
          </div>
        ))}
      </Experience>
      <Education>
        <h3>Education</h3>
        {user.education.map((edu, index) => (
          <div key={index}>
            <h4>{edu.school}</h4>
            <p>{edu.degree}</p>
            <p>{edu.dateRange}</p>
          </div>
        ))}
      </Education>
      <Contact>
        <h3>Contact</h3>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        <p>Social Media: {user.socialMedia.join(', ')}</p>
        <a href={user.resume} download>Download Resume</a>
      </Contact>
    </AboutContainer>
  );
};

export default About;
```