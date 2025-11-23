import axios from 'axios';

// The base URL for the GitHub API (Missing in your provided code)
const GITHUB_API_BASE_URL = 'https://api.github.com/users';

// Access the API key/token from the environment variables
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

/**
 * Fetches user data from the GitHub API using the provided username.
 * @param {string} username The GitHub username to search for.
 * @returns {Promise<object | null>} A promise that resolves to the user data object, 
 * or null if the user is not found or an error occurs.
 */
export const fetchUserData = async (username) => {
  if (!username) {
    return null; // Return early if no username is provided
  }

  // Configuration object for Axios request
  const config = {};
  
  // If a key is available, add the Authorization header to increase rate limits
  if (GITHUB_API_KEY) {
    config.headers = {
      Authorization: `token ${GITHUB_API_KEY}`,
    };
  }

  try {
    // Construct the full API endpoint URL
    const url = `${GITHUB_API_BASE_URL}/${username}`;

    // Use Axios to make the GET request
    const response = await axios.get(url, config);

    // If the request is successful (status code 200), return the data
    return response.data;
  } catch (error) {
    // Handle specific error codes, like 404 (Not Found)
    if (error.response && error.response.status === 404) {
      console.warn(`GitHub user "${username}" not found (404).`);
    } else {
      // Log any other errors (network issues, API errors, rate limiting)
      console.error('Error fetching GitHub user data:', error);
    }
    // Return null to indicate that the fetch failed or the user was not found
    return null;
  }
};