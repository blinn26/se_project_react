const APIkey = '8bec312d909f4c92c9729d7ff0366d1f';
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
  weather.temp = data.main.temp;
  weather.condition = () => {
    if (weather.temp >= 86) {
      return 'hot';
    } else if (weather.temp >= 66 && weather.temp < 85) {
      return 'warm';
    } else if (weather.temp <= 65) {
      return 'cold';
    }
  };
  return weather;
};

export { getForecastWeather, filterDataFromWeatherApi };
