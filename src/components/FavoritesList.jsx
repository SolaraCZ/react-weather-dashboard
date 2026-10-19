export default function FavoritesList({ cities, onSelectCity, onRemoveCity }) {
  if (!cities || cities.length === 0) return null;

  return (
    <div className="flex items-center gap-2 text-xs font-mono flex-wrap">
      <span className="text-zinc-600 font-bold uppercase">Saved:</span>
      {cities.map((city) => (
        <div
          key={city}
          className="flex items-center bg-white border border-zinc-300 rounded overflow-hidden"
        >
          <button
            type="button"
            onClick={() => onSelectCity(city)}
            className="px-3 py-1 text-zinc-900 font-semibold hover:bg-zinc-100 transition-colors"
          >
            {city}
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onRemoveCity(city);
            }}
            title="Remove from favorites"
            className="px-2 py-1 text-zinc-400 hover:text-red-600 hover:bg-zinc-100 border-l border-zinc-200 transition-colors font-bold"
          >
            ×
          </button>
        </div>
      ))}
    </div>
  );
}