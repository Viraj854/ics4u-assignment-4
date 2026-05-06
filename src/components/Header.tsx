import { Link } from '@/components/Link';
import { useDebounce } from '@/hooks';
import { useEffect, useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

const FILTERS = [
  { label: 'Movies', value: 'movie' },
  { label: 'TV', value: 'tv' },
  { label: 'Person', value: 'person' },
];

export const Header = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get('q') || '');
  const [filter, setFilter] = useState('movie');
  const debouncedQuery = useDebounce(query, 400);

  useEffect(() => {
    if (debouncedQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(debouncedQuery.trim())}&filter=${filter}`);
    }
  }, [debouncedQuery, filter, navigate]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center gap-6 px-6 py-3">

        <Link to="/" className="text-lg font-semibold text-gray-900 border-none!">
          TMDB Explorer
        </Link>

        <div className="flex items-center gap-5">
          <Link to="/movies">
            <span className="flex items-center gap-1.5">
              Movies
            </span>
          </Link>

          <Link to="/television">
            <span className="flex items-center gap-1.5">
              TV
            </span>
          </Link>

          <Link to="/trending">
            <span className="flex items-center gap-1.5">
              Trending
            </span>
          </Link>

          <Link to="/genre">
            <span className="flex items-center gap-1.5">
              Genre
            </span>
          </Link>
        </div>

        <div className="flex-1" />

        <div className="relative">
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-48 rounded-full border border-gray-200 bg-gray-50 py-2 pl-9 pr-4 text-sm text-gray-900 placeholder-gray-400 transition-all duration-200 focus:w-64 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100"
          />
        </div>

        <div className="flex shrink-0 items-center gap-1.5">
          {FILTERS.map((f) => (
            <button
              key={f.value}
              onClick={() => setFilter(f.value)}
              className={`flex cursor-pointer items-center gap-1.5 rounded-full px-4 py-2 text-sm font-medium transition ${filter === f.value
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
};