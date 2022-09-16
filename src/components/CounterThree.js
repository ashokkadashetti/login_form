import React, {useReducer, createContext} from 'react';
import ComponentA from './ComponentA';

const initialState = 0
const reducer = (state, action) => {
    switch (action){
        case 'increment':
            return state + 1
        case 'decrement':
            return state - 1
        case 'reset':
            return initialState
        default:
            return state
    }
}
export const UserContext = createContext()

function CounterThree() {

    const [count, dispatch] = useReducer(reducer, initialState)
    const [count1, dispatchTwo] = useReducer(reducer, initialState)

  return (
    <div>
        <UserContext.Provider value={count}>
            <ComponentA />
        </UserContext.Provider>
        <div>
            <div>Count - {count}</div>
          <button onClick={() => dispatch('increment')}>Increment</button>
          <button onClick={() => dispatch('decrement')}>Decrement</button>
          <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
        <div>
            <div>Count - {count1}</div>
          <button onClick={() => dispatchTwo('increment')}>Increment</button>
          <button onClick={() => dispatchTwo('decrement')}>Decrement</button>
          <button onClick={() => dispatchTwo('reset')}>Reset</button>
        </div>
    </div>
  );
}

export default CounterThree;
