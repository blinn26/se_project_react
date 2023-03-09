import React from 'react';
import './ToggleSwitch.css';

//1.add to the css toggle-switch-input_toggled class
//2. add functionality which will change the isChecked prop

const ToggleSwitch = ({ isChecked, onToggle }) => {
  return (
    <div className='toggle-switch'>
      <input
        type='checkbox'
        className={`toggle-switch-input ${isChecked ? 'toggle-switch-input_toggled' : ''}`}
        checked={isChecked}
        onChange={onToggle}
        id='toggleSwitch'
      />
      <label className='toggle-switch-label' htmlFor='toggleSwitch'>
        <span className='toggle-switch-switch toggle-switch-inner' />
      </label>
    </div>
  );
};

export default ToggleSwitch;
