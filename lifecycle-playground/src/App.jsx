import { useState } from 'react';
import LifeCycleLogger from './LifeCycleLogger';

function App() {
  const [showLogger, setShowLogger] = useState(false);

  return (
    <div className="container">
      <h2>React Lifecycle Playground</h2>

      {/* Toggle LifecycleLogger */}
      <button
        className="primary-btn"
        onClick={() => setShowLogger(!showLogger)}
      >
        {showLogger ? 'Unmount Logger' : 'Mount Logger'}
      </button>

      {showLogger && <LifeCycleLogger />}
    </div>
  );
}
export default App;
