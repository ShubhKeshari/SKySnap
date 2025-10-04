import React, { useState, useEffect } from "react";
import { Cloud, Loader2 } from "lucide-react";
import SearchBar from "../components/SearchBar";
import WeatherDisplay from "../components/WeatherDisplay";
import ForecastDisplay from "../components/ForecastDisplay";
import ErrorDisplay from "../components/ErrorDisplay";
import type { WeatherData, ForecastDay } from "../types/weather.types";
import { fetchCurrentWeather, fetchForecast } from "../services/weatherApi";

const HomePage: React.FC = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [forecast, setForecast] = useState<ForecastDay[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async (city: string) => {
    setIsLoading(true);
    setError(null);

    try {
      const weather = await fetchCurrentWeather(city);
      setWeatherData(weather);

      const forecastData = await fetchForecast(city);
      setForecast(forecastData);
      localStorage.setItem("lastCity", city);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "An error occurred. Please try again."
      );
      setWeatherData(null);
      setForecast([]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const lastCity = localStorage.getItem("lastCity");
    if (lastCity) {
      handleSearch(lastCity);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 py-12 px-4">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
            SkySnap
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold text-gray-400 mb-2">
            Weather Forecast
          </h2>
          <p className="text-gray-600 text-lg">
            Get real-time weather updates for any city worldwide
          </p>
        </div>

        <SearchBar onSearch={handleSearch} isLoading={isLoading} />

        {isLoading && (
          <div className="flex flex-col justify-center items-center py-12">
            <Loader2 className="w-12 h-12 animate-spin text-blue-500 mb-4" />
            <p className="text-gray-600">Fetching weather data...</p>
          </div>
        )}

        {error && !isLoading && <ErrorDisplay message={error} />}

        {weatherData && !isLoading && !error && (
          <>
            <WeatherDisplay data={weatherData} />
            {forecast.length > 0 && <ForecastDisplay forecast={forecast} />}
          </>
        )}

        {!weatherData && !isLoading && !error && (
          <div className="text-center py-12">
            <Cloud className="w-24 h-24 mx-auto text-gray-300 mb-4" />
            <p className="text-gray-500 text-lg">
              Search for a city to see the weather forecast
            </p>
            <p className="text-gray-400 text-sm mt-2">
              Try: London, New York, Tokyo, Paris...
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;
