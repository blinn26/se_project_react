import React, { useState } from 'react';
import './ToggleSwitch.css';
import { currentTemperatureUnit } from '../../context/currentTemperatureUnit.js';

function ToggleSwitch(props) {
  const [checked, setChecked] = useState(props.checked);

  function App() {
    const [currentTemperatureUnit, setCurrentTemperatureUnit] = useState('F');
    // rest of the component code
  }

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
