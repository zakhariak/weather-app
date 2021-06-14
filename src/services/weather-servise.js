export default class WeatherService {
  _apiBase = "https://api.openweathermap.org/data/2.5";
  _apiKey = "2ae10c36fa338f88184fbc2160af3867";

  async getResource(city) {
    const res = await fetch(
      `${this._apiBase}/forecast?q=${city}&appid=${this._apiKey}`
    );
    if (!res.ok) {
      throw new Error(`Could not fetch ${city}, received ${res.status}`);
    }
    return await await res.json();
  }

  getWeatherInCity = async (city) => {
    const data = await this.getResource(city);
    return this._transformCityWeatherByDay(data);
  };

  getDataWeatherByDay = async (weatherDataByDay) => {
    return this._transformCityWeatherByDay(weatherDataByDay);
  };

  _transformDataWeather = (weatherData) => {
    return {
      name: weatherData.city.name,
      country: weatherData.city.country,
      weatherByDays: weatherData.list,
    };
  };

  _transformCityWeatherByDay = (weatherByDay) => {
    const { clouds, main, weather, wind, dt_txt } = weatherByDay;
    const daysName = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const date = new Date(dt_txt);
    return {
      date: {
        day: daysName[date.getDay()],
        date: date.getDate(),
        hour: new Date().getHours(),
        minutes: new Date().getMinutes(),
      },
      cloudliness: clouds.all,
      humidity: main.humidity,
      plessure: main.humidity,
      temp: main.temp,
      weatherDescription: weather[0].description,
      wind: wind.speed,
    };
  };
}
