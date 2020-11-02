import React, { useState } from 'react';
import './App.scss';
//import components
import UI from "./components/UI"
import Sound from './components/Sound';
//import banks
import Banks, { bankOne } from './components/Banks'

export default function App(){
  const [display, setDisplay] = useState("POWER ON!");
  const [power, setPower] = useState(true);
  const [volume, setVolume] = useState(35);
 // const [banks, setBank] = useState(true);

  // const bankHandler = () => {
  //   banks === Banks.bankOne
  //     ? setBank(Banks.bankTwo)
  //     : setBank(Banks.bankOne);
  // };

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
         // bankState={banks}
          powerState={power}
          volumeLevel={volume}
         // onBankClick={bankHandler}
          onPowerClick={powerHandler}
          onVolumeChange={volumeHandler}
          />
        </div>
        <div id="drum-pads-container">
          {bankOne.map((item) => (
            <Sound
              key={item.id}
              soundId={item.id}
              keyCode={item.keyCode}
              keyTrigger={item.keyTrigger}
              soundSrc={item.src}
              updateDisplay={displayHandler}
              powerState={power}
              volumeLevel={volume}
              />
          ))}
        </div>
      </div>
    </div>
  );
}
