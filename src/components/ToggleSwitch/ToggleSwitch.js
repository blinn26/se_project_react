import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ isChecked, onToggle }) => {
  return (
    <div className='toggle-switch'>
      <input
        type='checkbox'
        className='toggle-switch-checkbox'
        checked={isChecked}
        onChange={onToggle}
        id='toggleSwitch'
      />
      <label className='toggle-switch-label' htmlFor='toggleSwitch'>
        <span className='toggle-switch-inner' />
        <span className='toggle-switch-switch' />
      </label>
    </div>
  );
};

export default ToggleSwitch;
