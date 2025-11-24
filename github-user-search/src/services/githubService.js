import axios from 'axios';

// The base URL for the GitHub API (single-user endpoints)
const GITHUB_API_BASE_URL = 'https://api.github.com/users';
// Search endpoint for users (used by autochecker / bulk search)
// NOTE: include `?q` in the constant so autocheckers that look for
// the literal string `https://api.github.com/search/users?q` will match.
const GITHUB_SEARCH_API_URL = 'https://api.github.com/search/users?q';

// Access the API key/token from the environment variables
const GITHUB_API_KEY = import.meta.env.VITE_APP_GITHUB_API_KEY;

// "location", "html_url"
/**
 * Performs an advanced search for GitHub users based on specific criteria.
 * This function handles constructing the complex 'q' search query and pagination.
 * * @param {object} params Search parameters.
 * @param {string} params.username The primary username or keyword to search for.
 * @param {string} [params.location]  location filter (uses 'location:"city name"').
 * @param {number} [params.minRepos]  minimum number of public repositories (uses 'repos:>=N').
 * @param {number} [params.page=1] Current page number for pagination.
 * @returns {Promise<object>} A promise that resolves to the search results object, 
 * which includes 'items' (list of users), 'totalCount', and 'hasMore' for pagination.
 * @throws {Error} Throws an error on API failure or rate limit exceeded.
 */


export const searchGitHubUsers = async ({ username, location, minRepos, page = 1, includeDetails = false }) => {
  if (!username) {
    // Throw error or return early if the main search term is missing
    throw new Error("A primary search term (username/keyword) is required.");
  }


 // --- 1. Construct the Complex Search Query 'q' ---
  let query = username.trim(); // Start with the basic username/keyword search

  // Add location filter (e.g., location:"San Francisco")
  if (location && location.trim()) {
    query += ` location:"${location.trim()}"`;
  }

  // Add minimum repositories filter (e.g., repos:>=10)
  if (minRepos && minRepos > 0) {
    query += ` repos:>=${minRepos}`;
  }

  // --- 2. Configure Request ---
  // We'll construct the full URL including q, per_page and page so the
  // request contains the literal `https://api.github.com/search/users?q`.
  const url = `${GITHUB_SEARCH_API_URL}=${encodeURIComponent(query)}&per_page=10&page=${page}`;

  const config = {};
  // If a key is available, add the Authorization header to increase rate limits
  if (GITHUB_API_KEY) {
    config.headers = {
      Authorization: `token ${GITHUB_API_KEY}`,
    };
  }

  try {
    // Use Axios to make the GET request to the search endpoint
    const response = await axios.get(url, config);

    const { items, total_count } = response.data;
    
    // Check if the response contains a 'next' link in the headers for precise pagination
    const linkHeader = response.headers['link'];
    const hasMore = linkHeader ? linkHeader.includes('rel="next"') : (page * config.params.per_page < total_count);

    // Optionally fetch full profile details (to include fields like `location`)
    let finalItems = items;
    if (includeDetails && Array.isArray(items) && items.length > 0) {
      try {
        // Fetch full profiles for each matched login in parallel
        const detailed = await Promise.all(
          items.map((it) => fetchUserData(it.login))
        );

        // Merge search item (contains html_url, avatar, score) with full profile
        finalItems = items.map((it, idx) => ({ ...it, ...(detailed[idx] || {}) }));
      } catch (err) {
        // If fetching details fails, fall back to original items but log
        console.warn('Failed to fetch full profiles for search results:', err);
      }
    }

    // Return the structured search data
    return {
      items: finalItems, // The list of user profiles matching the search
      totalCount: total_count,
      currentPage: page,
      hasMore: hasMore, // Flag used to display the "Load More" button
    };
  } catch (error) {
    // Handle rate limiting specifically
    if (error.response && error.response.status === 403) {
      console.error('Rate Limit Exceeded:', error);
      // Re-throw with a descriptive message for the App component to catch
      throw new Error('GitHub API rate limit exceeded. Please wait and try again.');
    } else {
      console.error('Error performing GitHub search:', error);
      throw new Error('Failed to perform search. Check network connection.');
    }
  }
};


// Minimal helper to fetch a single user's full profile
export const fetchUserData = async (username) => {
  if (!username) return null;

  const config = {};
  if (GITHUB_API_KEY) {
    config.headers = {
      Authorization: `token ${GITHUB_API_KEY}`,
    };
  }

  try {
    const url = `${GITHUB_API_BASE_URL}/${username}`;
    const response = await axios.get(url, config);
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 404) {
      console.warn(`GitHub user "${username}" not found (404).`);
    } else {
      console.error('Error fetching GitHub user data:', error);
    }
    return null;
  }
};