import { use, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useMemo } from 'react'
import SuggestionBox from './SuggestionBox'

export default function Navbar() {
  const [query, setQuery] = useState('')
  const [searchHistory, setSearchHistory] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem('searchHistory') || '[]');
    setSearchHistory(stored);
  }, []);

  const filteredSuggestions = useMemo(() => {
    return searchHistory.filter((item) =>
      item.toLowerCase().includes(query.toLowerCase())
    );
  }, [query, searchHistory]);

  function handleSearch(e) {
    if (e.key === 'Enter' && query.trim()) {
      setSearchHistory((prev) => {
        const updated = [query, ...prev.filter((item) => item !== query)].slice(0, 10);
        localStorage.setItem('searchHistory', JSON.stringify(updated));
        return updated;
      });
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery('');
      setShowSuggestions(false);
    }
  }

  
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-900 bg-gray-900/95 backdrop-blur text-white">
      <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3 sm:px-6">
        <Link to="/" className="text-lg font-semibold text-white">
          Media Streamer
        </Link>

        <div className="relative flex-1">
          <input
            className="w-full rounded-full border border-slate-200 bg-white px-4 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-400"
            type="text"
            placeholder="Search videos..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowSuggestions(true);
            }}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 150)}
            onKeyDown={handleSearch}
          />
          {showSuggestions && (
            <SuggestionBox
              suggestions={query ? filteredSuggestions : searchHistory}
              onSelect={(suggestion) => {
                setQuery(suggestion);
                navigate(`/search?q=${encodeURIComponent(suggestion)}`);
                setShowSuggestions(false);
              }}
            />
          )}
        </div>

        <div className="hidden items-center gap-2 text-sm text-slate-600 sm:flex">
          <Link
            to="/upload"
            className="rounded-full border border-slate-200 px-3 py-1 transition hover:border-slate-400"
          >
            Upload
          </Link>
          <Link
            to="/profile"
            className="rounded-full border border-slate-200 px-3 py-1 transition hover:border-slate-400"
          >
            Profile
          </Link>
        </div>
      </div>
    </nav>
  )
}