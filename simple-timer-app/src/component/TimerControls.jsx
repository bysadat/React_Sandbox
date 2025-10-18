import { useEffect, useRef } from 'react';

const TimerControls = ({ onToggle, isRunning, onReset }) => {
  const startButtonRef = useRef(null);

  useEffect(() => {
    if (startButtonRef.current) {
      startButtonRef.current.focus();
    }
  }, []);

  return (
    <>
      <button
        ref={startButtonRef}
        onClick={onToggle}
        className="mt-4 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        {isRunning ? 'Pause' : 'Start'}
      </button>

      {/* Reset timer button */}
      <button
        onClick={onReset}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 ml-4"
      >
        Reset
      </button>
    </>
  );
};

export default TimerControls;
