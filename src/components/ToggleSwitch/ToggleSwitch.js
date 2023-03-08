import React from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({ isChecked, onToggle }) => {
  return (
    <div className='toggle-switch'>
      <input
        type='checkbox'
        className='toggle-switch-input'
        checked={isChecked}
        onChange={onToggle}
        id='toggleSwitch'
      />
      <label className='toggle-switch-label' htmlFor='toggleSwitch'>
        {/* <span className='toggle-switch-inner' /> */}
        <span className='toggle-switch-switch toggle-switch-inner' />
      </label>
    </div>
  );
};

export default ToggleSwitch;
