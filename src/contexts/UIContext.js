import React, { createContext, useState } from 'react';

export const UIContext = createContext();

export const UIProvider = ({ children }) => {
  const [isControlsEnabled, setControlsEnabled] = useState(false);
  const [activeSection, setActiveSection] = useState('Projects');
  const [isLoading, setLoading] = useState(false);

  const enableControls = () => {
    setControlsEnabled(true);
  };

  const disableControls = () => {
    setControlsEnabled(false);
  };

  const switchSection = (section) => {
    setActiveSection(section);
  };

  const startLoading = () => {
    setLoading(true);
  };

  const stopLoading = () => {
    setLoading(false);
  };

  return (
    <UIContext.Provider value={{
      isControlsEnabled,
      activeSection,
      isLoading,
      enableControls,
      disableControls,
      switchSection,
      startLoading,
      stopLoading
    }}>
      {children}
    </UIContext.Provider>
  );
};