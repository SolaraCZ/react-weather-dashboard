export default function SearchBar() {
  return (
    <div className="w-full">
      <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
        <div className="relative flex-1">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none">
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Zadej název města (např. Praha, Tokio, Londýn)..."
            className="w-full pl-11 pr-4 py-3 bg-slate-900/80 border border-slate-800 rounded-xl focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all placeholder:text-slate-500 text-sm text-slate-100"
          />
        </div>
        <button
          type="submit"
          className="bg-sky-500 hover:bg-sky-400 text-slate-950 font-semibold px-6 py-3 rounded-xl transition-colors text-sm shadow-lg shadow-sky-500/20 active:scale-95 duration-150"
        >
          Hledat
        </button>
      </form>
    </div>
  );
}