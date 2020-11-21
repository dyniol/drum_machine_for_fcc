import React from 'react';
import "./UI.scss";
import { FaPowerOff, FaDrum, FaVolumeUp } from 'react-icons/fa';

export default function UI({
  display,
 // bankState,
  powerState,
  volumeLevel,
  onPowerClick,
  onBankClick,
  onVolumeChange,
}) {
  // Styled components here
return (
  <>
    <div id="title">
      <div>LISOWSKI</div>
      <div>DRUMMER</div>    
      <div className="title-icon">
        <FaDrum onClick={ onBankClick }/>
      </div>
    </div>
    <div id="display">
      <div id="display-text">{display}</div>
      <div id="status">
        <div id="status-volume">
          <div className="volume-icon">
            <FaVolumeUp />
          </div>
          {powerState ?`${volumeLevel}` : ""}
        </div>
        <div id="status-power">
          <div>{powerState ? "ON" : "OFF"}</div>
        </div>
      </div>
    </div>   
    <div id='controls'>
      <div className="controls-volume">
        <div className="slider-wrapper">
          <input
          id="volume"
          type="range"
          orient="vertical"
          defaultValue={volumeLevel}
          onChange={onVolumeChange}>
          </input>
        </div>
        <div>VOL</div>
      </div>
      <div className="controls-power">
        <div className="btn-wrapper" onClick={onPowerClick}>
          <div className={powerState ? "pwr-btn-on" : "pwr-btn-off"}>
            <FaPowerOff />
          </div>
        </div>
        <div>POWER</div>
      </div>
    </div>
  </>
  );
}