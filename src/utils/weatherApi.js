const getForecastWeather = (location, APIkey) => {
  const parsedLocation = `${location.latitude},{location.longitude}`;
  return fetch(`https://api.openweathermap.org/data/2.5/weather?q=${parsedLocation}&appid=${APIkey}&units=metric`).then(
    (res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(`Error: ${res.status}`);
      }
    }
  );
};

const filterDataFromWeatherApi = (data) => {
  if (!data) {
    return null;
  }
  const weather = {};
  weather.city = data.location.name;
  weather.tempature = data.current.temp_f;
  return weather;
};

export { getForecastWeather, filterDataFromWeatherApi };
