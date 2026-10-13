import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import FavoritesList from './components/FavoritesList';
import CurrentWeather from './components/CurrentWeather';
import ForecastList from './components/ForecastList';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-950 flex flex-col">
      <Navbar />

      <main className="flex-1 max-w-5xl w-full mx-auto px-4 py-8 flex flex-col gap-6">
        {/* Vyhledávání a rychlé tagy */}
        <section className="flex flex-col gap-3">
          <SearchBar />
          <FavoritesList />
        </section>

        {/* Hlavní zobrazení počasí */}
        <section>
          <CurrentWeather />
          <ForecastList />
        </section>
      </main>

      <footer className="py-6 border-t border-slate-900 text-center text-xs text-slate-600">
        Weather Dashboard • React + Tailwind CSS
      </footer>
    </div>
  );
}