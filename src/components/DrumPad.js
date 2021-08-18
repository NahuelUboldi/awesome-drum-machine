import React, { useContext, useEffect } from 'react';
import { PropContext } from '../App';

function DrumPad({ clip }) {
  const { keyCode, keyTrigger, id, url } = clip;
  const { setPadClicked, padClicked } = useContext(PropContext);

  const playAudio = (id) => {
    const audio = document.getElementById(keyTrigger);
    audio.play();
    setPadClicked(id);
  };
  useEffect(() => {
    const timer = setTimeout(() => setPadClicked(''), 800);
    return () => {
      clearTimeout(timer);
    };
  }, [padClicked]);

  const handleKeyDown = (e) => {
    const keyPressed = e.key.toUpperCase();
    if (keyPressed === clip.keyTrigger) {
      playAudio(id);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <>
      <div className='col-4 d-flex flex-column align-items-center p-2'>
        <div>{id}</div>
        <button
          id={id}
          className='px-5 drum-pad btn btn-primary btn-lg text-warning'
          onClick={() => playAudio(id)}
        >
          {keyTrigger}
          <audio className='clip' src={url} id={keyTrigger} />
        </button>
      </div>
    </>
  );
}

export default DrumPad;
