import React from 'react';
import {
  Cloud,
  CloudRain,
  CloudSnow,
  Sun,
  CloudFog,
} from 'lucide-react';

interface WeatherIconProps {
  icon: string;
  size?: number;
}

const WeatherIcon: React.FC<WeatherIconProps> = ({ icon, size = 16 }) => {
  const iconCode = icon.substring(0, 2);
  const isDay = icon.endsWith('d');
  const className = `w-${size} h-${size}`;

  const getIcon = () => {
    switch (iconCode) {
      case '01':
        return <Sun className={`${className} ${isDay ? 'text-yellow-400' : 'text-gray-400'}`} />;
      case '02':
      case '03':
      case '04':
        return <Cloud className={`${className} text-gray-400`} />;
      case '09':
      case '10':
      case '11':
        return <CloudRain className={`${className} text-blue-400`} />;
      case '13':
        return <CloudSnow className={`${className} text-blue-200`} />;
      case '50':
        return <CloudFog className={`${className} text-gray-400`} />;
      default:
        return <Cloud className={`${className} text-gray-400`} />;
    }
  };

  return <div className="inline-block">{getIcon()}</div>;
};

export default WeatherIcon;