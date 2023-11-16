```javascript
import React, { useContext } from 'react';
import { UIContext } from '../contexts/UIContext';

const UI = () => {
  const { toggleControls, isControlsEnabled } = useContext(UIContext);

  return (
    <div className="ui-container">
      <button onClick={toggleControls}>
        {isControlsEnabled ? 'Disable Controls' : 'Enable Controls'}
      </button>
    </div>
  );
};

export default UI;
```