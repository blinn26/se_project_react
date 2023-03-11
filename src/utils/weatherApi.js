const APIkey = '0d380440b18ef6ce22ce3d3435ae1745';
const getForecastWeather = async () => {
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=36.471&lon=-119.4432&appid=${APIkey}&units=metric`
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
  weather.city = data.name;
  weather.temperature = data.main.temp;
  weather.condition = () => {
    if (data.main.temp >= 86) {
      return 'hot';
    } else if (data.main.temp >= 66 && data.main.temp < 85) {
      return 'warm';
    } else if (data.main.temp <= 65) {
      return 'cold';
    }
  };
  return weather;
};

export { getForecastWeather, filterDataFromWeatherApi };
