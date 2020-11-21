import React, { useState, useEffect } from 'react';
import './Sound.scss'
import { CSSTransition } from 'react-transition-group';

export default function Sound({
  soundId,
  keyCode,
  keyTrigger,
  soundSrc,
  updateDisplay,
  powerState,
  volumeLevel,
}) {
  const [fadeProp, setfadeProp] = useState(false);

  const playSound = () => {
    //playSound logic, runs only when power is true
      if (powerState) {
        // get html sound element with selector
        const sound = document.getElementById(keyTrigger);
        sound.currentTime = 0;
        sound.play();
        sound.volume = volumeLevel / 100;
        // Zmienić nazwę funkcji, wywalić komentarz
        // update display text
        updateDisplay(soundId);
        // apply fade transition
        // to samo tutaj
        setfadeProp(true);
      }
    };
    const keyHandler = (e) => {
      if (e.keyCode === keyCode) {
        playSound();
      }
    };

    useEffect(() => {
      window.addEventListener('keydown', keyHandler);
      return () => {
        window.removeEventListener('keydown', keyHandler);
      };
    });

    return (
      <CSSTransition
      in = {fadeProp}
      timeout = {100}
      onEntered = {() => setfadeProp (false)}
      exit = {false}
      classNames="fade"
      >
        <div id={soundId} className="drum-pad" onClick={playSound}>          
          <audio id={keyTrigger} className="clip" src={soundSrc}></audio>
          {keyTrigger}
        </div>
      </CSSTransition>
    );
}
