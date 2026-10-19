import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import CurrentWeather from './components/CurrentWeather';
import ForecastList from './components/ForecastList';
import { fetchCurrentWeather, fetchForecast } from './services/weatherService';

const STORAGE_KEY = 'weather_dashboard_favorites';

export default function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Načtení oblíbených měst z localStorage (nebo výchozí)
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : ['Prague', 'Berlin', 'Tokyo'];
  });

  // Uložení do localStorage při každé změně favorites
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(favorites));
  }, [favorites]);

  const loadData = async (targetCity) => {
    setLoading(true);
    setError(null);

    try {
      const [weatherData, forecastData] = await Promise.all([
        fetchCurrentWeather(targetCity),
        fetchForecast(targetCity),
      ]);

      setCurrentWeather(weatherData);
      setForecast(forecastData);
    } catch (err) {
      setError(err.message || 'Failed to fetch weather data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData('Prague');
  }, []);

  const handleSaveCity = (cityName) => {
    if (!favorites.includes(cityName)) {
      setFavorites([...favorites, cityName]);
    }
  };

  const handleRemoveCity = (cityName) => {
    setFavorites(favorites.filter((city) => city !== cityName));
  };

  const isCurrentCitySaved = currentWeather && favorites.includes(currentWeather.name);

  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-950 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 flex flex-col gap-6">
        <section className="flex flex-col gap-3">
          <SearchBar onSearch={loadData} loading={loading} />
          <FavoritesList
            cities={favorites}
            onSelectCity={loadData}
            onRemoveCity={handleRemoveCity}
          />
        </section>

        {error && (
          <div className="p-4 bg-zinc-900 border-2 border-zinc-950 text-white rounded-md text-sm font-mono flex items-center justify-between">
            <span>[ERROR]: {error}</span>
            <button
              type="button"
              onClick={() => setError(null)}
              className="text-zinc-400 hover:text-white font-bold ml-4"
            >
              DISMISS [X]
            </button>
          </div>
        )}

        {loading && (
          <div className="p-12 text-center font-mono text-sm uppercase tracking-wider text-zinc-500">
            Fetching telemetry from weather satellite...
          </div>
        )}

        {!loading && currentWeather && (
          <section>
            <CurrentWeather
              data={currentWeather}
              onSaveCity={handleSaveCity}
              isSaved={isCurrentCitySaved}
            />
            <ForecastList forecast={forecast} />
          </section>
        )}
      </main>
    </div>
  );
}