export default function CurrentWeather() {
  return (
    <div className="bg-white border-2 border-zinc-300 rounded-lg p-6 shadow-sm">
      {/* Top Header */}
      <div className="flex items-start justify-between border-b-2 border-zinc-200 pb-6">
        <div>
          <span className="font-mono text-xs uppercase tracking-wider font-bold text-zinc-500">
            Current Conditions
          </span>
          <h2 className="text-4xl font-black text-zinc-950 mt-1 tracking-tight">
            Prague, <span className="text-zinc-600 font-bold">CZ</span>
          </h2>
          <p className="text-zinc-700 font-medium text-base mt-1">Partly Cloudy</p>
        </div>

        <div className="text-right">
          <div className="text-7xl font-black text-zinc-950 tracking-tighter">
            21°C
          </div>
          <span className="font-mono text-xs font-semibold text-zinc-600">Feels like 20°C</span>
        </div>
      </div>

      {/* Grid Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
        <div className="bg-zinc-50 border border-zinc-200 p-3 rounded">
          <span className="font-mono text-xs text-zinc-600 uppercase tracking-wider font-bold">
            Humidity
          </span>
          <p className="text-2xl font-black text-zinc-950 mt-1">54%</p>
        </div>
        <div className="bg-zinc-50 border border-zinc-200 p-3 rounded">
          <span className="font-mono text-xs text-zinc-600 uppercase tracking-wider font-bold">
            Wind Speed
          </span>
          <p className="text-2xl font-black text-zinc-950 mt-1">14 km/h</p>
        </div>
        <div className="bg-zinc-50 border border-zinc-200 p-3 rounded">
          <span className="font-mono text-xs text-zinc-600 uppercase tracking-wider font-bold">
            Pressure
          </span>
          <p className="text-2xl font-black text-zinc-950 mt-1">1018 hPa</p>
        </div>
        <div className="bg-zinc-50 border border-zinc-200 p-3 rounded">
          <span className="font-mono text-xs text-zinc-600 uppercase tracking-wider font-bold">
            Range (Min/Max)
          </span>
          <p className="text-2xl font-black text-zinc-950 mt-1">17° / 23°</p>
        </div>
      </div>
    </div>
  );
}