export default class WeatherService {
  weatherData = {
    name: "drogobych",
    country: "ukr",
    weatherByDays: [
      {
        date: {
          day: "monday",
          date: 13,
          hour: 20,
          minutes: 13,
        },
        cloudliness: 20,
        humidity: 50,
        plessure: 1015,
        temp: 283,
        weatherDescription: "clear sky",
        wind: 5.7,
      },
      {
        date: {
          day: "tuesday",
          date: 14,
          hour: 20,
          minutes: 13,
        },
        cloudliness: 21,
        humidity: 60,
        plessure: 115,
        temp: 295,
        weatherDescription: "cloudly",
        wind: 2,
      },
    ],
  };
  _apiTest = "https://swapi.dev/api/people";
  _apiBase = "https://api.openweathermap.org/data/2.5";
  _apiKey = "2ae10c36fa338f88184fbc2160af3867";

  async getResource(city) {
    const res = await fetch(
      `${this._apiBase}/forecast?q=${city}&appid=${this._apiKey}`
    );
    if (!res.ok) {
      throw new Error(`Could not fetch ${city}, received ${res.status}`);
    }
    return await res.json();
  }

  // getWeatherInCity = async (city) => {
  //   const res = await fetch(this._apiTest);
  //   const data = await res.json();
  //   return await data;
  // };

  // getWeatherInCity = async (city) => {
  //   return await this.weatherData;
  // };

  getWeatherInCity = async (city) => {
    const data = await this.getResource(city);
    return this._transformDataWeather(data);
  };

  getDataWeatherByDay = (weatherDataByDay) => {
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
    return {
      date: {
        day: daysName[date.getDay()],
        date: date.getDate(),
        month: month[date.getMonth()],
        hour: (timeNow.getHours() < 10 ? "0" : "") + timeNow.getHours(),
        minutes: (timeNow.getMinutes() < 10 ? "0" : "") + timeNow.getMinutes(),
      },
      cloudliness: clouds.all,
      humidity: main.humidity,
      pressure: main.pressure,
      temp: Math.floor(main.temp - 273.15),
      description: weather[0].description,
      wind: wind.speed,
    };
  };
}
