import { useState } from 'react';

export const useCounter = (initialState = 10) =>{

  const [counter, setState] = useState( initialState );

  const increment = () => setState( counter + 1 );

  const reset = () => setState( initialState );

  const decrement = () => setState( counter - 1 );
  

  return {
    counter, 
    increment,
    reset,
    decrement
  }

}