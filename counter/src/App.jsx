import { useState } from 'react';
import './styles.css';

export default function App() {
  const [count, setCount] = useState(0);

  function handleDecrease() {
    setCount(() => count - 1);
  }

  function handleIncrease() {
    setCount(() => count + 1);
  }

  function handleReset() {
    setCount(0);
  }
  return (
    <>
      <div className='container'>
        <h1 className='count'>{count}</h1>
        <button className='btn' onClick={handleDecrease}>
          decrease
        </button>
        <button className='btn' onClick={handleReset}>
          Reset
        </button>
        <button className='btn' onClick={handleIncrease}>
          increase
        </button>
      </div>
    </>
  );
}
