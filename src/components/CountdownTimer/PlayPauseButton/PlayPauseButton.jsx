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

// class PlayPauseButton extends React.Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             isPaused: false
//         }

//     this.toggleButton = this.toggleButton.bind(this);
//     }

//     toggleButton = (prevState)=>{
//         this.setState({
//             isPaused: !prevState.isPaused
//         })
//     }

//     render(){
//         return(
//
//         )
//     }

// }

export default PlayPauseButton;
