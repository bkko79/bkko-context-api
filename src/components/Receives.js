import React from 'react';
import { useSample } from '../contexts/sample';

const Receives = ( {value} ) => {
  return (
    <div>
      current: { value }
    </div>
  )
}

export default useSample(Receives);