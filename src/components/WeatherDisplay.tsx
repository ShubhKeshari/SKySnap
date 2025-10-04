import React from 'react';
import { MapPin, Droplets, Wind, Gauge, Eye } from 'lucide-react';
import type { WeatherData } from '../types/weather.types';
import WeatherIcon from './WeatherIcon';

interface WeatherDisplayProps {
  data: WeatherData;
}

const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mb-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl p-8 shadow-2xl text-white">
        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="flex items-center gap-2 text-lg mb-2">
              <MapPin className="w-5 h-5" />
              <span className="font-semibold">
                {data.city}, {data.country}
              </span>
            </div>
            <p className="text-white/80 capitalize">{data.description}</p>
          </div>
          <div className="text-right">
            <WeatherIcon icon={data.icon} size={16} />
          </div>
        </div>

        <div className="flex items-end justify-between mb-8">
          <div>
            <div className="text-7xl font-bold mb-2">
              {Math.round(data.temperature)}°C
            </div>
            <p className="text-lg text-white/80">
              Feels like {Math.round(data.feelsLike)}°C
            </p>
          </div>
          <div className="text-right">
            <p className="text-3xl font-semibold capitalize">{data.condition}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
            <div className="flex items-center gap-2 mb-2">
              <Droplets className="w-5 h-5" />
              <span className="text-sm text-white/80">Humidity</span>
            </div>
            <p className="text-2xl font-semibold">{data.humidity}%</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
            <div className="flex items-center gap-2 mb-2">
              <Wind className="w-5 h-5" />
              <span className="text-sm text-white/80">Wind Speed</span>
            </div>
            <p className="text-2xl font-semibold">{data.windSpeed} m/s</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
            <div className="flex items-center gap-2 mb-2">
              <Gauge className="w-5 h-5" />
              <span className="text-sm text-white/80">Pressure</span>
            </div>
            <p className="text-2xl font-semibold">{data.pressure} hPa</p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all">
            <div className="flex items-center gap-2 mb-2">
              <Eye className="w-5 h-5" />
              <span className="text-sm text-white/80">Visibility</span>
            </div>
            <p className="text-2xl font-semibold">
              {(data.visibility / 1000).toFixed(1)} km
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;