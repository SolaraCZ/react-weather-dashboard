const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

/**
 * Načte aktuální počasí
 */
export async function fetchCurrentWeather(city) {
  const response = await fetch(
    `${BASE_URL}/weather?q=${encodeURIComponent(city)}&units=metric&lang=en&appid=${API_KEY}`
  );

  if (!response.ok) {
    if (response.status === 404) {
      throw new Error(`City "${city}" not found.`);
    }
    if (response.status === 401) {
      throw new Error('Invalid API key. Check your .env.local file.');
    }
    throw new Error('Failed to load current weather data.');
  }

  return response.json();
}

/**
 * Načte 5denní předpověď
 */
export async function fetchForecast(city) {
  const response = await fetch(
    `${BASE_URL}/forecast?q=${encodeURIComponent(city)}&units=metric&lang=en&appid=${API_KEY}`
  );

  if (!response.ok) {
    throw new Error('Failed to load forecast data.');
  }

  const data = await response.json();

  // API vrací záznamy po 3 hodinách. Vybereme polední data (12:00) pro každý den.
  return data.list.filter((item) => item.dt_txt.includes('12:00:00'));
}