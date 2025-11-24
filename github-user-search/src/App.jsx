import Search from './components/Search';
import './App.css';
import UserProfile from './components/UserProfile';
import { fetchUserData, searchGitHubUsers } from './services/githubService';
import { useState } from 'react';



function App() {
  // State for storing the fetched user data
  const [userData, setUserData] = useState(null);
  // State for tracking loading status
  const [isLoading, setIsLoading] = useState(false);
  // State for tracking errors (e.g., user not found, API failure)
  const [error, setError] = useState(null);

const handleSearch = async (searchTerm) => {
  // Reset states and set loading
  setUserData(null);
  setError(null);
  setIsLoading(true);

  try {
    // Use the search endpoint to find matching users
    const result = await searchGitHubUsers({ username: searchTerm });

    // If the search returned items, fetch the full profile for the first match
    if (result && Array.isArray(result.items) && result.items.length > 0) {
      const first = result.items[0];
      // fetch full profile so UserProfile has the expected fields
      const full = await fetchUserData(first.login);
      if (full) {
        setUserData(full);
        return full; // return data so Search can await and update recent list
      }
    }

    // No matches found
    setError("Looks like we can't find the user.");
    return null;
  } catch (e) {
    setError(e.message || 'An unexpected error occurred. Please try again.');
    return null;
  } finally {
    setIsLoading(false);
  }
};

  // --- Conditional Rendering Logic ---
  let content;
  if (isLoading) {
    content = <p className="status-message">Loading...</p>;
  } else if (error) {
    content = <p className="error-message">{error}</p>;
  } else if (userData) {
    // Success: Pass the data to the display component
    content = <UserProfile user={userData} />;
  } else {
    // Initial state or after a search clears
    content = <p className="status-message">Start searching for a GitHub user above!</p>;
  }

  return (
    <>
      <h1>Hello to this project</h1>
      <h2>Github User Search</h2>
      <Search onSearch={handleSearch} isLoading={isLoading} />

      <main className="search-results">
        {/* User profile details and results will go here */}
        <h2>Search Results</h2>
        {content}
      </main>
    </>
  )
}

export default App
