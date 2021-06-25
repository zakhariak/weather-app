import imagesArray from "../localBase/imagesData";

export default class WeatherService {
  _apiBase = "https://api.openweathermap.org/data/2.5";
  _apiKey = "61ade19c356e2c03bc8958e250b65cda";
  _apiKey2 = "2ae10c36fa338f88184fbc2160af3867";

  async getResource(city) {
    const res = await fetch(
      `${this._apiBase}/forecast?q=${city}&appid=${this._apiKey}`
    );
    if (!res.ok) {
      throw new Error(`Could not fetch ${city}, received ${res.status}`);
    }
    return await res.json();
  }

  getWeatherInCity = async (city) => {
    const data = await this.getResource(city);
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this._transformDataWeather(data));
      }, 700);
    });
  };

  getWeatherByDay = (weatherData) => {
    return this._transformCityWeatherByDay(weatherData);
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
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const date = new Date(dt_txt);
    const timeNow = new Date();

    function addIcon(iconId) {
      return imagesArray.find((icon) => icon.id === iconId).path;
    }

    return {
      date: {
        day: daysName[date.getDay()],
        date: date.getDate(),
        month: month[date.getMonth()],
        hour:
          date.getDate() === timeNow.getDate()
            ? (timeNow.getHours() < 10 ? "0" : "") + timeNow.getHours()
            : (date.getHours() < 10 ? "0" : "") + date.getHours(),
        minutes: (timeNow.getMinutes() < 10 ? "0" : "") + timeNow.getMinutes(),
      },
      cloudliness: clouds.all,
      humidity: main.humidity,
      pressure: main.pressure,
      temp: Math.floor(main.temp - 273.15),
      description: weather[0].description,
      icon: addIcon(weather[0].icon),
      wind: wind.speed,
    };
  };
}
