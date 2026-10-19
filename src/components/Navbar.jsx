export default function Navbar() {
  return (
    <header className="border-b border-zinc-300 bg-white px-6 py-4">
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-3.5 h-3.5 bg-zinc-950 rounded-none"></div>
          <span className="font-mono text-sm font-bold tracking-wider uppercase text-zinc-950">
            Weather
          </span>
        </div>
        <span className="font-mono text-xs text-zinc-600 font-semibold uppercase tracking-wider">
        </span>
      </div>
    </header>
  );
}