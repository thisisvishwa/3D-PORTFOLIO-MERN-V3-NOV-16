import React, { createContext, useState } from 'react';

export const SectionContext = createContext();

export const SectionProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState('Projects');

  const changeSection = (section) => {
    setActiveSection(section);
  };

  return (
    <SectionContext.Provider value={{ activeSection, changeSection }}>
      {children}
    </SectionContext.Provider>
  );
};