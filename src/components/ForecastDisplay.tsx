import React from 'react';
import { Droplets } from 'lucide-react';
import type { ForecastDay } from '../types/weather.types';
import WeatherIcon from './WeatherIcon';

interface ForecastDisplayProps {
  forecast: ForecastDay[];
}

const ForecastDisplay: React.FC<ForecastDisplayProps> = ({ forecast }) => {
  return (
    <div className="w-full max-w-4xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      <h2 className="text-2xl font-bold mb-4 text-gray-800">5-Day Forecast</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        {forecast.map((day, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
          >
            <p className="text-sm font-semibold text-gray-600 mb-2">
              {day.date}
            </p>
            <div className="flex justify-center mb-2">
              <WeatherIcon icon={day.icon} size={12} />
            </div>
            <p className="text-2xl font-bold text-center mb-1">
              {Math.round(day.temp)}°C
            </p>
            <p className="text-xs text-gray-500 text-center capitalize">
              {day.condition}
            </p>
            <div className="flex items-center justify-center gap-1 mt-2 text-xs text-gray-500">
              <Droplets className="w-3 h-3" />
              <span>{day.humidity}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ForecastDisplay;