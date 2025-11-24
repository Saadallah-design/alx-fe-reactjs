// src/components/Search.jsx
import React, { useState } from 'react';

const Search = ({ onSearch, isLoading = false }) => {
  const [username, setUsername] = useState('');

  //  Handler for input changes
  const handleInputChange = (event) => {
    // Update the 'username' state every time the user types
    setUsername(event.target.value);
  };

  // Handler for form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const names = username
      .split(',')
      .map((n) => n.trim())
      .filter(Boolean);

    // Check if the input is not empty before attempting a search
    if (names.length === 0) return;
     

    try {
      await Promise.all(names.map((name) => onSearch(name)));

    } catch (err) {
      console.error('Search failed', err);
    } finally {
      setUsername('');
    }    
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={handleInputChange}
          placeholder="Enter GitHub username..."
          aria-label="GitHub username search"
          disabled={isLoading}
          className="grow p-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white transition duration-150"

        />
        <button type="submit"
        disabled={isLoading}>
          {isLoading && <span>Searching...</span>}
          {!isLoading && <span>Search</span>}
        </button>
      </form>
    </div>
  );
};

export default Search;