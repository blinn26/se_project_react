const getForecastWeather = async (location, APIkey) => {
  const parsedLocation = `${location.latitude},{location.longitude}`;
  const res = await fetch(
    `http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=8bec312d909f4c92c9729d7ff0366d1f=${parsedLocation}&appid=${APIkey}&units=metric`
  );
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
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
