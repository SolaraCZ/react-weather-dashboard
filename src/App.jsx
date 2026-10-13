import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import CurrentWeather from './components/CurrentWeather';
import ForecastList from './components/ForecastList';

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-100 text-zinc-950 flex flex-col font-sans">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 flex flex-col gap-6">
        <section className="flex flex-col gap-3">
          <SearchBar />
          <FavoritesList />
        </section>

        <section>
          <CurrentWeather />
          <ForecastList />
        </section>
      </main>

    </div>
  );
}