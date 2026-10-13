export default function CurrentWeather() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-slate-900/90 to-slate-950 border border-slate-800/80 p-6 md:p-8 rounded-2xl shadow-xl">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <div className="flex items-baseline gap-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">Praha</h2>
            <span className="text-slate-400 text-sm font-medium">CZ</span>
          </div>
          <p className="text-slate-400 text-sm mt-1">Dnes, Polooblačno</p>
          <div className="text-6xl md:text-7xl font-extrabold text-sky-400 mt-4 tracking-tighter">
            21°C
          </div>
        </div>

        <div className="flex flex-col items-center md:items-end justify-center">
          {/* Minimalist Weather SVG Icon */}
          <div className="w-20 h-20 md:w-24 md:h-24 text-sky-400 bg-sky-500/10 border border-sky-500/20 rounded-2xl flex items-center justify-center">
            <svg
              className="w-12 h-12 md:w-14 md:h-14"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>
          <p className="text-xs text-slate-400 mt-3">Pocitová teplota: 20°C</p>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8 pt-6 border-t border-slate-800/60">
        <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/40">
          <p className="text-xs text-slate-500">Vlhkost</p>
          <p className="text-base font-semibold text-slate-200 mt-1">54 %</p>
        </div>
        <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/40">
          <p className="text-xs text-slate-500">Vítr</p>
          <p className="text-base font-semibold text-slate-200 mt-1">14 km/h</p>
        </div>
        <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/40">
          <p className="text-xs text-slate-500">Tlak</p>
          <p className="text-base font-semibold text-slate-200 mt-1">1018 hPa</p>
        </div>
        <div className="p-3 bg-slate-950/40 rounded-xl border border-slate-800/40">
          <p className="text-xs text-slate-500">UV Index</p>
          <p className="text-base font-semibold text-slate-200 mt-1">Střední (4)</p>
        </div>
      </div>
    </div>
  );
}