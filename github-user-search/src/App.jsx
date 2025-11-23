import Search from './components/Search';
import './App.css';
import UserProfile from './components/UserProfile';
import { fetchUserData } from './services/githubService';
import { useState } from 'react';



function App() {
  // State for storing the fetched user data
  const [userData, setUserData] = useState(null);
  // State for tracking loading status
  const [isLoading, setIsLoading] = useState(false);
  // State for tracking errors (e.g., user not found, API failure)
  const [error, setError] = useState(null);

const handleSearch = async (searchTerm) => {
  // 1. Reset states and set loading
    setUserData(null);
    setError(null);
    setIsLoading(true);

try {
      // 2. Call the API function
      const data = await fetchUserData(searchTerm);
      
      // 3. Update state based on API response
      if (data) {
        // Success: User found
        setUserData(data);
      } else {
        // Failure: User not found (fetchUserData returns null on 404 or error)
        setError("Looks like we can't find the user.");
      }
    } catch (e) {
      // Catch any unexpected errors during the process
      setError('An unexpected error occurred. Please try again.');
    } finally {
      // 4. Always turn off loading regardless of success or failure
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
      <Search onSearch={handleSearch}/>

      <main className="search-results">
        {/* User profile details and results will go here */}
        <h2>Search Results</h2>
        {content}
      </main>
    </>
  )
}

export default App
