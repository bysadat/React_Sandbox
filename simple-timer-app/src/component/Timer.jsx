import { useState, useRef, useEffect } from 'react';

import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';
const Timer = () => {
  //Using use ref
  const timerRef = useRef(null);

  const [time, setTime] = useState(() => {
    return Number(localStorage.getItem('time') || 0);
  });

  const [isRunning, setIsRunning] = useState(false);

  //Saving time to local Storage

  useEffect(() => {
    localStorage.setItem('time', JSON.stringify(time));
  }, [time]);

  //Toggle timer function
  const toggleTimer = () => {
    if (isRunning) {
      //Clear interval to stop the timmer
      clearInterval(timerRef.current);
      timerRef.current = null;
    } else {
      //Start Interval
      timerRef.current = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }

    setIsRunning(!isRunning);
  };

  //Reset Timer function
  const resetTimer = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
    timerRef.current = null;
    localStorage.removeItem('time');
  };
  return (
    <div>
      <TimerDisplay time={time} />
      <TimerControls
        onToggle={toggleTimer}
        onReset={resetTimer}
        isRunning={isRunning}
      />
    </div>
  );
};

export default Timer;
