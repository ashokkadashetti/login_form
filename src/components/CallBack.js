import React,{useState, useCallback} from 'react';
import Button from './Button';
import Count from './Count';
import Title from './Title';

function CallBack() {

    const [age, setAge] = useState(25)
    const [salary, setSalary] = useState(10000)

    const incrementAge = useCallback(() => {
        setAge(age + 1 )
    }, [age])

    const incrementSalary = useCallback(() => {
        setSalary(salary + 10000)
    }, [salary])

  return (
    <div>
      <Title />
      <Count text='age' count={age}/>
      <Button handleClick={incrementAge}>IncrementAge</Button>
      <Count text='salary' count={salary}/>
      <Button handleClick={incrementSalary}>IncrementSalary</Button>
    </div>
  );
}

export default CallBack;
