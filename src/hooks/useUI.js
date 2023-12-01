import { useState, useEffect } from 'react';

const useUI = () => {
  const [activeSection, setActiveSection] = useState('Projects');
  const [controlsEnabled, setControlsEnabled] = useState(false);

  const toggleControls = () => {
    setControlsEnabled(!controlsEnabled);
  };

  const switchSection = (section) => {
    setActiveSection(section);
  };

  useEffect(() => {
    // Add event listeners or subscriptions here

    return () => {
      // Clean up event listeners or subscriptions here
    };
  }, []);

  return {
    activeSection,
    controlsEnabled,
    toggleControls,
    switchSection
  };
};

export default useUI;