import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <div className='toggle-switch'>
      <input
        type='checkbox'
        className='toggle-switch-checkbox'
        checked={isOn}
        onChange={handleToggle}
        id='toggle-switch'
      />
      <label className='toggle-switch-label' htmlFor='toggle-switch'>
        <span className='toggle-switch-inner' />
        <span className='toggle-switch-switch' />
      </label>
    </div>
  );
};

export default ToggleSwitch;
