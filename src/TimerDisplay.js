import { useState, useEffect } from 'react';


const TimerDisplay = () => {

  const [ x, setX ] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setX((x) => x + 1);
    }, 1000);
  }, []);

  return (
    <div>
      <p>This is how long the timer component has been displayed!</p>
      <p>time: {x} seconds</p>
    </div>
  );

};

export default TimerDisplay;
