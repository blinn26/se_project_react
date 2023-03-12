import React, { useContext } from 'react';
import './ToggleSwitch.css';
import { CurrentTemperatureUnitContext } from '../../context/currentTemperatureUnit';

const ToggleSwitch = ({ isChecked, onToggle }) => {
  const { currentTemperatureUnit, setCurrentTemperatureUnit } = useContext(CurrentTemperatureUnitContext);

  const handleToggle = () => {
    currentTemperatureUnit === 'F' ? setCurrentTemperatureUnit('C') : setCurrentTemperatureUnit('F');
    onToggle();
  };

  return (
    <div className='toggle-switch'>
      <input
        type='checkbox'
        className='toggle-switch-input'
        checked={isChecked}
        onChange={handleToggle}
        id='toggleSwitch'
      />
      <label className='toggle-switch-label' htmlFor='toggleSwitch'>
        <span className='toggle-switch-switch toggle-switch-inner' />
      </label>
    </div>
  );
};

export default ToggleSwitch;
