import React, { useState } from 'react';
import './App.scss';
import UI from "./components/UI"
import Sound from './components/Sound';
import { bankOne, bankTwo } from './components/Banks'

// Typescript wszędzie

const initialState = {
  current: bankOne,
};

export default function App(){
  const [display, setDisplay] = useState("POWER ON!");
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(35);
  const [banks, setBank] = useState(initialState);

  const bankHandler = () => {
    console.log('banks: ', banks );
    banks === bankOne
      ? setBank(bankTwo)
      : setBank(bankOne);
  };

  const displayHandler = (value) => {
    setDisplay(value);
  };

  const powerHandler = () => {
    setPower(!power);
    !power ? setDisplay("POWER ON!") : setDisplay("POWER OFF!");
  };

  const volumeHandler = (e) => {
    setVolume(e.target.value);
  };

  return (
    <div className="App">
      <div id="drum-machine">
        <div id="ui-container">
          <UI
            display={display}
            bankState={banks}
            powerState={power}
            volumeLevel={volume}
            onBankClick={bankHandler}
            onPowerClick={powerHandler}
            onVolumeChange={volumeHandler} />
        </div>
        <div id="drum-pads-container">
          {banks.current.map((item) => (
            <Sound
              key={item.id}
              soundId={item.id}
              keyCode={item.keyCode}
              keyTrigger={item.keyTrigger}
              soundSrc={item.url || item.src}
              updateDisplay={displayHandler}
              powerState={power}
              volumeLevel={volume} />
          ))}
        </div>
      </div>
    </div>
  );
}
