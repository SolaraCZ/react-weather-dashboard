export default function FavoritesList() {
  const cities = ['Prague', 'Berlin', 'Vienna', 'Bratislava'];

  return (
    <div className="flex items-center gap-2 text-xs font-mono">
      <span className="text-zinc-600 font-bold uppercase">Quick:</span>
      {cities.map((city) => (
        <button
          key={city}
          type="button"
          className="px-3 py-1 bg-white hover:bg-zinc-200 border border-zinc-300 text-zinc-900 font-semibold rounded text-xs transition-colors"
        >
          {city}
        </button>
      ))}
    </div>
  );
}