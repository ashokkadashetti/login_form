import React, {useState, useMemo} from 'react';

function Memo() {

    const [counterOne, setCounterOne] = useState(0)
    const [counterTwo, setCounterTwo] = useState(0)

    const incrementCountrOne = () => {
        setCounterOne(counterOne + 1)
    }

    const incerementCounterTwo = () => {
        setCounterTwo(counterTwo + 1)
    }

    const isEven = useMemo(() => {
        let i = 0
        while( i < 2000000000) i++
        return counterOne %  2 ===0
    }, [counterOne])

  return (
    <div>
      <div>
        <button onClick={incrementCountrOne}>Increment counterOne - {counterOne}</button>
        <span>{isEven ? 'Even' : 'Odd'}</span>
      </div>
      <div>
        <button onClick={incerementCounterTwo}>Increment Counter two - {counterTwo}</button>
      </div>
    </div>
  );
}

export default Memo;
