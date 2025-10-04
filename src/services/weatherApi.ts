import type { WeatherData, ForecastDay } from '../types/weather.types';

const API_KEY = '1f3fafb5c6a62c5c2d1a80c3545afd7b';
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const fetchCurrentWeather = async (city: string): Promise<WeatherData> => {
    console.log("Fetching weather for city:", city);
  const response = await fetch(
    `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error('City not found. Please check the spelling and try again.');
  }

  const data = await response.json();

  return {
    city: data.name,
    country: data.sys.country,
    temperature: data.main.temp,
    feelsLike: data.main.feels_like,
    condition: data.weather[0].main,
    description: data.weather[0].description,
    humidity: data.main.humidity,
    windSpeed: data.wind.speed,
    pressure: data.main.pressure,
    visibility: data.visibility,
    icon: data.weather[0].icon,
  };
};

export const fetchForecast = async (city: string): Promise<ForecastDay[]> => {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`
  );

  if (!response.ok) {
    throw new Error('Unable to fetch forecast data.');
  }

  const data = await response.json();
  const dailyForecasts: ForecastDay[] = [];

  for (let i = 0; i < data.list.length; i += 8) {
    const item = data.list[i];
    dailyForecasts.push({
      date: new Date(item.dt * 1000).toLocaleDateString('en-US', {
        weekday: 'short',
        month: 'short',
        day: 'numeric',
      }),
      temp: item.main.temp,
      condition: item.weather[0].main,
      icon: item.weather[0].icon,
      humidity: item.main.humidity,
    });
  }

  return dailyForecasts.slice(0, 5);
};