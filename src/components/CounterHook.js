import React,{useState, useEffect} from 'react';

function CounterHook() {
    
    const [count, setCount] = useState(0)

    const tick = () => {
        setCount(count + 1)
    }

    useEffect(() => {
      const interval = setInterval(tick, 1000)
    });

  return (
    <div>
      {count}
    </div>
  );
}

export default CounterHook;
