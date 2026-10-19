import { useState } from 'react';

export default function SearchBar({ onSearch, loading }) {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const clean = query.trim();
    if (!clean) return;
    onSearch(clean);
    setQuery('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        disabled={loading}
        placeholder="Enter city (e.g. Prague, London, Tokyo)..."
        className="flex-1 bg-white border-2 border-zinc-300 focus:border-zinc-950 rounded-md px-4 py-3 text-sm text-zinc-950 font-medium placeholder-zinc-500 focus:outline-none transition-colors disabled:opacity-50"
      />
      <button
        type="submit"
        disabled={loading}
        className="bg-zinc-950 hover:bg-zinc-800 disabled:bg-zinc-400 text-white font-bold text-sm px-6 py-3 rounded-md transition-colors"
      >
        {loading ? 'Searching...' : 'Search'}
      </button>
    </form>
  );
}