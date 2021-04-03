import React from 'react';
import PlayPauseButton from './PlayPauseButton/PlayPauseButton';
import NumberedTime from './NumberedTime/NumberedTime';
import ProgressCircle from './ProgressCircle/ProgressCircle';

const CountdownTimer = ({ hour, min, sec }) => {
    
    const [isActive,setIsActive] = React.useState(true);

    const toggleActive = () =>setIsActive(!isActive);

    return (    
        <div>
          <PlayPauseButton onClick={toggleActive}/>
          <NumberedTime hourProp={hour} minProp={min} secProp={sec} activeStatus={isActive} />
          <ProgressCircle percentage={62} />
        </div>
    );
}

export default CountdownTimer;
