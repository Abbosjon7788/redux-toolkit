import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { decrement, increment, incrementByAmount, reset } from '../redux/reducers/counter';

const Counter = () => {
     const count = useSelector((state) => state.counter.value);
     const dispatch = useDispatch();

     const [value, setValue] = useState(null);

     const clear = () => {
          dispatch(reset());
          setValue('');
     }

     console.log(count);

     return (
          <div>
               <h1>{count}</h1>
               <button onClick={() => dispatch(decrement())}>Decrement</button>
               <button onClick={() => dispatch(increment())}>Increment</button>
               <input type="text" placeholder="Input any number" value={value} onChange={(e) => setValue(e.target.value)} />
               <button onClick={() => value ? dispatch(incrementByAmount(parseInt(value))) : alert('Input any number')}>Increment By Amount ({value})</button>
               <button onClick={() => clear()}>Reset</button>
          </div>
     )
}

export default Counter;
