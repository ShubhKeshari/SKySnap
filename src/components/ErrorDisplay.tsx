import React from 'react';
import { Cloud } from 'lucide-react';

interface ErrorDisplayProps {
  message: string;
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ message }) => {
  return (
    <div className="w-full max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-300">
      <div className="bg-red-50 border-2 border-red-200 rounded-2xl p-6 text-center">
        <div className="text-red-500 mb-3">
          <Cloud className="w-16 h-16 mx-auto" />
        </div>
        <h3 className="text-xl font-semibold text-red-800 mb-2">Oops!</h3>
        <p className="text-red-600">{message}</p>
      </div>
    </div>
  );
};

export default ErrorDisplay;