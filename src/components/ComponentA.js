import React,{useState, useContext} from 'react';
import ComponentB from './ComponentB';
import { UserContext } from './CounterThree';

function ComponentA() {
  const count = useContext(UserContext)
  console.log(count);
  const name = 'Ashok'
  const [data, setData] = useState()

  const clickHandler = () => {
    setData(name)
  }
  return (
    <div>
      Count - {count}
      <button onClick={clickHandler}>Click me!!!</button>
      <ComponentB name={data}/> 
    </div>
  );
}

export default ComponentA;
