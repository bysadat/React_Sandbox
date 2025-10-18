import { useState, useEffect } from 'react';

const LifeCycleLogger = () => {
  const [count, setCount] = useState(0);

  //MOUNT(ComponentDidUpdate)
  useEffect(() => {
    console.log('Component mounted.. ');

    //UNMOUNT[CleanUp Function](componetWillUnmount)
    return () => {
      console.log('Component Unmount....');
    };
  }, []);

  //For update...meaning if the count changes in the dependency array, then run.UPDATE(ComponentDidUpdate)
  useEffect(() => {
    if (count > 0) {
      console.log('Component updated!!', count);
    }
  }, [count]);

  const incrementCount = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return (
    <div className="logger-container">
      <h2>Lifecyclelogger(Function Component)</h2>
      <p>Count:{count}</p>
      <button onClick={incrementCount} className="secondary-btn">
        Update
      </button>
    </div>
  );
};

export default LifeCycleLogger;
