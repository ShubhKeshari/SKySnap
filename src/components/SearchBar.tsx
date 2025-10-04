import React, { useState } from 'react';
import { Search, Loader2 } from 'lucide-react';

interface SearchBarProps {
  onSearch: (city: string) => void;
  isLoading: boolean;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch, isLoading }) => {
  const [city, setCity] = useState('');

  const handleSearch = () => {
    if (city.trim()) {
      onSearch(city.trim());
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <div className="relative">
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Search for a city..."
          className="w-full px-6 py-4 pr-14 text-lg rounded-2xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all bg-white/80 backdrop-blur-sm shadow-lg"
          disabled={isLoading}
        />
        <button
          onClick={handleSearch}
          disabled={isLoading || !city.trim()}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isLoading ? (
            <Loader2 className="w-5 h-5 animate-spin" />
          ) : (
            <Search className="w-5 h-5" />
          )}
        </button>
      </div>
    </div>
  );
};

export default SearchBar;