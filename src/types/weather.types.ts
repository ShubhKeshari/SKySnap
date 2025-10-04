export interface WeatherData {
  city: string;
  country: string;
  temperature: number;
  feelsLike: number;
  condition: string;
  description: string;
  humidity: number;
  windSpeed: number;
  pressure: number;
  visibility: number;
  icon: string;
}

export interface ForecastDay {
  date: string;
  temp: number;
  condition: string;
  icon: string;
  humidity: number;
}