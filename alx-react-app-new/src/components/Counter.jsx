import { useState } from 'react';

function Counter() {
  // Initialize state
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Simple Counter</h2>
      <p style={{ fontSize: '24px', margin: '20px 0' }}>Current Count: {count}</p>

      <button 
        onClick={() => setCount(count + 1)} 
        style={{ margin: '5px', padding: '10px 20px' }}
      >
        Increment
      </button>

      <button 
        onClick={() => setCount(count - 1)} 
        style={{ margin: '5px', padding: '10px 20px' }}
      >
        Decrement
      </button>

      <button 
        onClick={() => setCount(0)} 
        style={{ margin: '5px', padding: '10px 20px' }}
      >
        Reset
      </button>
    </div>
  );
}

export default Counter;
