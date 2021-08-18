import React, { useContext, useState, useEffect } from 'react';
import './App.css';
//components
import Display from './components/Display';
import Drum from './components/Drum';
import Header from './components/Header';
import { bankOne } from './utilities/data';

export const PropContext = React.createContext();

function App() {
  const [padClicked, setPadClicked] = useState('');

  const propsToShare = {
    padClicked,
    setPadClicked,
  };

  return (
    <PropContext.Provider value={{ ...propsToShare }}>
      <div className='container d-flex align-items-center justify-content-center'>
        <div id='drum-machine'>
          <Header />
          <Drum />
          <Display />
        </div>
      </div>
    </PropContext.Provider>
  );
}

export default App;
