import React, { useState } from 'react';

const PlayPauseButton = ({ onClick }) => {
  const [isPaused, setIsPaused] = useState(false);

  const toggleButton = () => {
    onClick();
    setIsPaused(!isPaused);
  };

  return (
    <div>
      {isPaused && <button onClick={toggleButton} type="button">Play</button>}
      {!isPaused && <button onClick={toggleButton} type="button">Pause</button>}
    </div>
  );
};
export default PlayPauseButton;
