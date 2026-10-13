export default function SearchBar() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
      <input
        type="text"
        placeholder="Enter city (e.g. Prague, London, Tokyo)..."
        className="flex-1 bg-white border-2 border-zinc-300 focus:border-zinc-950 rounded-md px-4 py-3 text-sm text-zinc-950 font-medium placeholder-zinc-500 focus:outline-none transition-colors"
      />
      <button
        type="submit"
        className="bg-zinc-950 hover:bg-zinc-800 text-white font-bold text-sm px-6 py-3 rounded-md transition-colors"
      >
        Search
      </button>
    </form>
  );
}