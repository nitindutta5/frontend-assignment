export const fetchWrapper = async (url, options = {}) => {
  const defaultHeaders = {
    "Content-Type": "application/json",
  };

  // Merge default headers with any custom headers
  const config = {
    method: options.method || "GET",
    headers: { ...defaultHeaders, ...options.headers },
    body: options.body ? JSON.stringify(options.body) : null,
    ...options, // Allows additional options like credentials, mode, etc.
  };

  try {
    const response = await fetch(url, config);

    // Check for HTTP errors
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Error: ${response.status} - ${response.statusText} (${
          errorData.message || "No details"
        })`
      );
    }

    // Parse JSON response
    return await response.json();
  } catch (error) {
    console.error("Fetch Error:", error.message);
    throw error; // Rethrow to handle in the calling code
  }
};
