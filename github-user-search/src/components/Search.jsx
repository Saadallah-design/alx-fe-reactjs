// src/components/Search.jsx
import React, { useState } from 'react';

const Search = ({ onSearch }) => {
  const [username, setUsername] = useState('');

  //  Handler for input changes
  const handleInputChange = (event) => {
    // Update the 'username' state every time the user types
    setUsername(event.target.value);
  };

  // Handler for form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if the input is not empty before attempting a search
    if (username.trim()) {
      // Call the function passed down from the parent (App.jsx)
      // This is where the actual API call will be triggered later
      onSearch(username.trim());
      
      // Clear the input field after submission
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
        />
        <button type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Search;