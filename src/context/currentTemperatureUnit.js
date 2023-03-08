import { createContext } from 'react';

export const CurrentTemperatureUnitContext = createContext({
  currentTemperatureUnit: 'F',
  handleToggleSwitchChange: () => {},
});

export default CurrentTemperatureUnitContext;
