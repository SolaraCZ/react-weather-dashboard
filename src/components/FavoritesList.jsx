export default function FavoritesList() {
  const quickCities = ['Praha', 'Brno', 'Vídeň', 'Bratislava'];

  return (
    <div className="flex items-center gap-2 flex-wrap">
      <span className="text-xs text-slate-400 font-medium">Rychlý výběr:</span>
      {quickCities.map((city) => (
        <button
          key={city}
          type="button"
          className="text-xs px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 hover:border-sky-500/50 hover:text-sky-400 transition-colors"
        >
          {city}
        </button>
      ))}
    </div>
  );
}