import React from 'react';
import DrumPad from './DrumPad';
import { bankOne, bankTwo } from '../utilities/data';

function Drum() {
  return (
    <div className='row py-5'>
      {bankOne.map((clip) => {
        return <DrumPad key={clip.id} clip={{ ...clip }} />;
      })}
    </div>
  );
}

export default Drum;
