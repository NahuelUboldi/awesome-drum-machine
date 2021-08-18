import React, { useContext } from 'react';
import { PropContext } from '../App';

function Display() {
  const { padClicked, setPadClicked } = useContext(PropContext);
  console.log(padClicked);

  return (
    <div id='display'>
      {padClicked && (
        <div className='alert alert-info text-center fs-2'>{padClicked}</div>
      )}
    </div>
  );
}

export default Display;
