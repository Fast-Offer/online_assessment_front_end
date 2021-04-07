import React from 'react';
import PlayPauseButton from './PlayPauseButton/PlayPauseButton';
import NumberedTime from './NumberedTime/NumberedTime';

const CountdownTimer = ({ hour, min, sec }) => {
  const [isActive, setIsActive] = React.useState(true);

  const toggleActive = () => setIsActive(!isActive);

  return (
    <div>
      <PlayPauseButton clickToSwitch={toggleActive} />
      <NumberedTime hourProp={hour} minProp={min} secProp={sec} activeStatus={isActive} />
    </div>
  );
};

export default CountdownTimer;
