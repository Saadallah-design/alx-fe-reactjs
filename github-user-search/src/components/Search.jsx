// src/components/Search.jsx
import React, { useState } from 'react';
import { searchGitHubUsers } from '../services/githubService';

// fetchUserData
const Search = ({ onSearch, isLoading = false }) => {
  const [username, setUsername] = useState('');
  const [results, setResults] = useState([]);
  const [localLoading, setLocalLoading] = useState(false);
  const [error, setError] = useState(null);

  // Handler for input changes
  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  // Handler for form submission: call search API and include details (location, html_url)
  const handleSubmit = async (e) => {
    e.preventDefault();

    const query = username.trim();
    if (!query) return;

    setLocalLoading(true);
    setError(null);

    try {
      // includeDetails=true merges full profile fields like `location` into each item
      const res = await searchGitHubUsers({ username: query, includeDetails: true, page: 1 });
      setResults(Array.isArray(res.items) ? res.items : []);
    } catch (err) {
      console.error('Search error', err);
      setError(err.message || 'Search failed');
      setResults([]);
    } finally {
      setLocalLoading(false);
    }
  };

  // When user clicks a result, call parent onSearch to fetch full profile and display
  const handleSelect = async (login) => {
    if (onSearch) await onSearch(login);
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username or keyword"
          aria-label="GitHub username search"
          disabled={isLoading || localLoading}
          className="grow p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition duration-150"
        />
        <button type="submit" disabled={isLoading || localLoading}>
          {(isLoading || localLoading) ? <span>Searching...</span> : <span>Search</span>}
        </button>
      </form>

      {/* Error message */}
      {error && <p className="error-message">{error}</p>}

      {/* Render results if any (uses && and map) */}
      {results && results.length > 0 && (
        <div className="search-results-list">
          <h4>Results</h4>
          <ul>
            {results.map((r) => (
              <li key={r.id} className="result-item">
                <div className="result-main">
                  <img src={r.avatar_url} alt={`${r.login} avatar`} className="w-8 h-8 rounded-full mr-2 inline-block" />
                  <strong>{r.login}</strong>
                  {r.name && <span className="ml-2">— {r.name}</span>}
                </div>
                <div className="result-meta">
                  {r.location && <span className="location">{r.location}</span>}
                  {r.html_url && (
                    <a href={r.html_url} target="_blank" rel="noopener noreferrer" className="ml-3 link">Profile</a>
                  )}
                  <button onClick={() => handleSelect(r.login)} className="ml-3 view-btn">View</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Search;