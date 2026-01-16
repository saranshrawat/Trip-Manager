import React, { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import { Categories } from '../data/data';
import { useDebouncedValue } from '../hooks/customDebounce';
import { useAuth0 } from '@auth0/auth0-react';   // ✅ Import Auth0 hook

const MIN_QUERY_LENGTH = 2;
const DEFAULT_DEBOUNCE = 400;
const API_BASE = process.env.REACT_APP_API_BASE; // ✅ Environment-based API base

export default function SearchBar({ onResults }) {
  const { getAccessTokenSilently } = useAuth0();   // ✅ Get token function

  const [input, setInput] = useState('');
  const debouncedInput = useDebouncedValue(input, DEFAULT_DEBOUNCE);

  const [category, setCategory] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loadingSugg, setLoadingSugg] = useState(false);
  const [suggError, setSuggError] = useState(null);

  const [selectedPlace, setSelectedPlace] = useState(null); // { label, lat, lon }
  const [searching, setSearching] = useState(false);
  const [placesError, setPlacesError] = useState(null);

  const [highlightIndex, setHighlightIndex] = useState(-1);
  const listRef = useRef(null);
  const abortRef = useRef(null);

  // helper: get axios config with token
  async function getAuthConfig(controller) {
    const token = await getAccessTokenSilently();
    return {
      headers: { Authorization: `Bearer ${token}` },
      signal: controller?.signal,
      timeout: 8000,
    };
  }

  // fetch suggestions
  useEffect(() => {
    const q = (debouncedInput || '').trim();
    if (q.length < MIN_QUERY_LENGTH) {
      setSuggestions([]);
      setSuggError(null);
      return;
    }

    if (abortRef.current) {
      abortRef.current.abort();
      abortRef.current = null;
    }

    const controller = new AbortController();
    abortRef.current = controller;
    setLoadingSugg(true);
    setSuggError(null);

    (async () => {
      try {
        const config = await getAuthConfig(controller);
        const url = `${API_BASE}/api/search/suggestions?q=${encodeURIComponent(q)}`;
        const res = await axios.get(url, config);
        setSuggestions(res.data || []);
      } catch (err) {
        if (err?.code === 'ERR_CANCELED' || err?.name === 'CanceledError') return;
        console.error('Suggestions error', err);
        setSuggError('Unable to load suggestions');
      } finally {
        setLoadingSugg(false);
        abortRef.current = null;
      }
    })();

    return () => {
      if (abortRef.current) {
        abortRef.current.abort();
        abortRef.current = null;
      }
    };
  }, [debouncedInput, getAccessTokenSilently]);

  // clear selectedPlace if user edits input
  useEffect(() => {
    if (!selectedPlace) return;
    if (selectedPlace && input !== selectedPlace.label) {
      setSelectedPlace(null);
    }
  }, [input, selectedPlace]);

  // keyboard handlers
  function handleKeyDown(e) {
    if (!suggestions.length) return;
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlightIndex((i) => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlightIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === 'Enter') {
      if (highlightIndex >= 0 && highlightIndex < suggestions.length) {
        e.preventDefault();
        selectSuggestion(suggestions[highlightIndex]);
      }
    } else if (e.key === 'Escape') {
      setSuggestions([]);
      setHighlightIndex(-1);
    }
  }

  function selectSuggestion(s) {
    setSelectedPlace(s);
    setInput(s.label);
    setSuggestions([]);
    setHighlightIndex(-1);
    setSuggError(null);
  }

  async function handleSearch(e) {
    e?.preventDefault();
    setPlacesError(null);

    if (!selectedPlace) {
      setPlacesError('Please select a location from suggestions.');
      return;
    }
    if (!category) {
      setPlacesError('Please select a category.');
      return;
    }

    setSearching(true);
    try {
      const payload = {
        lat: selectedPlace.lat,
        lon: selectedPlace.lon,
        category,
        limit: 12,
      };
      const token = await getAccessTokenSilently();
      const res = await axios.post(`${API_BASE}/api/search/places`, payload, {
        headers: { Authorization: `Bearer ${token}` },
        timeout: 10000,
      });
      const results = res.data?.results || [];
      if (onResults) onResults(results);
      localStorage.setItem(
        'last_search',
        JSON.stringify({ place: selectedPlace, category, ts: Date.now() })
      );
    } catch (err) {
      console.error('Search error', err);
      setPlacesError('Search failed. Try again.');
    } finally {
      setSearching(false);
    }
  }

  function clearAll() {
    setInput('');
    setCategory('');
    setSelectedPlace(null);
    setSuggestions([]);
    setPlacesError(null);
    setHighlightIndex(-1);
  }

  const isSearchDisabled = !selectedPlace || !category || searching;

  return (
    <div className="search-bar">
      <form onSubmit={handleSearch} className="space-y-4">
        <div className="relative">
          <input
            type="text"
            name="search"
            value={input}
            placeholder="Enter place name"
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="w-full p-2 border rounded-md"
            aria-autocomplete="list"
            aria-expanded={suggestions.length > 0}
            aria-activedescendant={highlightIndex >= 0 ? `sugg-${highlightIndex}` : undefined}
          />
          {loadingSugg && <div className="absolute right-2 top-2 text-sm text-gray-500">Loading…</div>}

          {suggestions.length > 0 && (
            <ul
              ref={listRef}
              className="absolute z-20 w-full bg-white border rounded-md mt-1 max-h-56 overflow-auto"
              role="listbox"
            >
              {suggestions.map((s, i) => (
                <li
                  id={`sugg-${i}`}
                  key={`${s.label}-${i}`}
                  onClick={() => selectSuggestion(s)}
                  onMouseEnter={() => setHighlightIndex(i)}
                  className={`px-3 py-2 cursor-pointer ${i === highlightIndex ? 'bg-gray-100' : ''}`}
                  role="option"
                  aria-selected={i === highlightIndex}
                >
                  {s.label}
                </li>
              ))}
            </ul>
          )}

          {suggError && <div className="text-red-500 text-sm mt-1">{suggError}</div>}
        </div>

        <div className="w-full">
          <label className="block text-sm font-medium text-gray-700 mb-1">Category</label>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full p-2 border rounded-md bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select a category</option>
            {Categories.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
        </div>

        {placesError && <div className="text-red-600 text-sm">{placesError}</div>}

        <div className="flex gap-2">
          <button
            type="submit"
            disabled={isSearchDisabled}
            className={`px-4 py-2 rounded-md text-white ${isSearchDisabled ? 'bg-gray-400' : 'bg-blue-600'}`}
          >
            {searching ? 'Searching…' : 'Search'}
          </button>

          <button type="button" onClick={clearAll} className="px-4 py-2 rounded-md border">
            Clear
          </button>
        </div>
      </form>
    </div>
  );
}