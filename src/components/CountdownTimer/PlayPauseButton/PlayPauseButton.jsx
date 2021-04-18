import React, { useState } from 'react';

const PlayPauseButton = ({ clickToSwitch }) => {
  const [isPaused, setIsPaused] = useState(false);

  const toggleButton = () => {
    clickToSwitch();
    setIsPaused(!isPaused);
  };

  return (
    <div>
      {isPaused && <button onClick={toggleButton} type="button" style={{ backgroundColor: 'green' }}>Play Button</button>}
      {!isPaused && <button onClick={toggleButton} type="button" style={{ backgroundColor: 'pink' }}>Pause Button</button>}
      <span>
        {'-PlayPauseButton-// isPaused state is : '}
        {isPaused ? 'true' : 'false'}
      </span>
    </div>
  );
};
export default PlayPauseButton;
