export default function CurrentWeather({ data, onSaveCity, isSaved }) {
  if (!data) return null;

  const { name, sys, main, weather, wind } = data;
  const temp = Math.round(main.temp);
  const feelsLike = Math.round(main.feels_like);
  const condition = weather[0]?.main || 'Clear';
  const description = weather[0]?.description || '';
  const iconCode = weather[0]?.icon;

  return (
    <div className="bg-white border-2 border-zinc-300 rounded-lg p-6 shadow-sm">
      <div className="flex items-start justify-between border-b-2 border-zinc-200 pb-6">
        <div>
          <div className="flex items-center gap-3">
            <span className="font-mono text-xs uppercase tracking-wider font-bold text-zinc-500">
              Current Conditions
            </span>
            <button
              type="button"
              onClick={() => onSaveCity(name)}
              className={`font-mono text-xs uppercase font-bold px-2 py-0.5 rounded border transition-colors ${
                isSaved
                  ? 'bg-zinc-950 text-white border-zinc-950 cursor-default'
                  : 'bg-white text-zinc-700 border-zinc-300 hover:border-zinc-950'
              }`}
            >
              {isSaved ? 'SAVED' : '+ SAVE CITY'}
            </button>
          </div>

          <h2 className="text-4xl font-black text-zinc-950 mt-2 tracking-tight">
            {name}, <span className="text-zinc-600 font-bold">{sys?.country}</span>
          </h2>
          <p className="text-zinc-700 font-medium text-base mt-1 capitalize">{description}</p>
        </div>

        <div className="flex items-center gap-4">
          {iconCode && (
            <img
              src={`https://openweathermap.org/img/wn/${iconCode}@2x.png`}
              alt={condition}
              className="w-16 h-16 object-contain"
            />
          )}
          <div className="text-right">
            <div className="text-6xl font-black text-zinc-950 tracking-tighter">
              {temp}°C
            </div>
            <span className="font-mono text-xs font-semibold text-zinc-600">
              Feels like {feelsLike}°C
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
        <div className="bg-zinc-50 border border-zinc-200 p-3 rounded">
          <span className="font-mono text-xs text-zinc-600 uppercase tracking-wider font-bold">
            Humidity
          </span>
          <p className="text-2xl font-black text-zinc-950 mt-1">{main.humidity}%</p>
        </div>
        <div className="bg-zinc-50 border border-zinc-200 p-3 rounded">
          <span className="font-mono text-xs text-zinc-600 uppercase tracking-wider font-bold">
            Wind Speed
          </span>
          <p className="text-2xl font-black text-zinc-950 mt-1">{Math.round(wind.speed * 3.6)} km/h</p>
        </div>
        <div className="bg-zinc-50 border border-zinc-200 p-3 rounded">
          <span className="font-mono text-xs text-zinc-600 uppercase tracking-wider font-bold">
            Pressure
          </span>
          <p className="text-2xl font-black text-zinc-950 mt-1">{main.pressure} hPa</p>
        </div>
        <div className="bg-zinc-50 border border-zinc-200 p-3 rounded">
          <span className="font-mono text-xs text-zinc-600 uppercase tracking-wider font-bold">
            Range (Min/Max)
          </span>
          <p className="text-2xl font-black text-zinc-950 mt-1">
            {Math.round(main.temp_min)}° / {Math.round(main.temp_max)}°
          </p>
        </div>
      </div>
    </div>
  );
}