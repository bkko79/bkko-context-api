import React from 'react';
import {useAnother} from '../contexts/another';

const Counter = ( {number, increment} ) => {
  return (
    <div>
      <h1>{number}</h1>
      <button onClick={increment}>Increment</button>
    </div>
  );
};

export default useAnother(Counter);