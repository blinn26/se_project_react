import React, { useState } from 'react';
import './ToggleSwitch.css';

function ToggleSwitch(props) {
  const [checked, setChecked] = useState(props.checked);

  const handleToggle = () => {
    setChecked(!checked);
    props.onChange(!checked);
  };

  return (
    <label className='toggle-switch'>
      <input type='checkbox' checked={checked} onChange={handleToggle} />
      <span className='toggle-switch-slider'></span>
    </label>
  );
}

export default ToggleSwitch;
