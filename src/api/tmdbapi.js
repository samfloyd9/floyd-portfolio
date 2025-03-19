const API_KEY = "917887a11fe36d6ce72f7a4b6e8d30b0";

// Get User's Account ID (Needed for Lists, Favorites, and Watchlists)
export const getAccountId = async (sessionId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/account?api_key=${API_KEY}&session_id=${sessionId}`
    );
    const data = await response.json();
    return data.id; // Return the account ID
  } catch (error) {
    console.error("Error fetching account ID:", error);
    return null;
  }
};

// Create a List
export const createList = async (sessionId, listName, description) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/list?api_key=${API_KEY}&session_id=${sessionId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: listName,
          description: description || "My custom watchlist", // Default if empty
          language: "en",
        }),
      }
    );

    const data = await response.json();
    return data.list_id; // Return the new list ID
  } catch (error) {
    console.error("Error creating watchlist:", error);
    return null;
  }
};

// ✅ Add a Movie to a Watchlist
export const addMovieToList = async (sessionId, listId, movieId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/list/${listId}/add_item?api_key=${API_KEY}&session_id=${sessionId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ media_id: movieId }),
      }
    );

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Error adding movie to list:", error);
    return false;
  }
};

// ✅ Get Movies in a Watchlist
export const getMoviesInList = async (listId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/list/${listId}?api_key=${API_KEY}`
    );
    const data = await response.json();
    return data.items || []; // Returns the list of movies
  } catch (error) {
    console.error("Error fetching movies in list:", error);
    return [];
  }
};


// Get All Lists Created by User
export const getUserLists = async (sessionId, accountId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/account/${accountId}/lists?api_key=${API_KEY}&session_id=${sessionId}`
    );
    const data = await response.json();
    return data.results; // Return an array of lists
  } catch (error) {
    console.error("Error fetching user lists:", error);
    return [];
  }
};

export const deleteList = async (sessionId, listId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/list/${listId}?api_key=${API_KEY}&session_id=${sessionId}`,
      { method: "DELETE" }
    );

    const data = await response.json();
    console.log("List Deleted:", data);
    return data.success;
  } catch (error) {
    console.error("Error deleting list:", error);
    return false;
  }
};

// "Simulated" Edit: Delete and Recreate Watchlist
export const editList = async (sessionId, listId, newName, newDescription) => {
  try {
    // Step 1: Delete Old List
    await fetch(
      `https://api.themoviedb.org/3/list/${listId}?api_key=${API_KEY}&session_id=${sessionId}`,
      { method: "DELETE" }
    );

    // Step 2: Create New List with Updated Info
    const response = await fetch(
      `https://api.themoviedb.org/3/list?api_key=${API_KEY}&session_id=${sessionId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newName,
          description: newDescription || "Updated watchlist",
          language: "en",
        }),
      }
    );

    const data = await response.json();
    return data.list_id; // Return the new list ID
  } catch (error) {
    console.error("Error editing watchlist:", error);
    return null;
  }
};

// ✅ Remove a Movie from a Watchlist
export const removeMovieFromList = async (sessionId, listId, movieId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/list/${listId}/remove_item?api_key=${API_KEY}&session_id=${sessionId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ media_id: movieId }),
      }
    );

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Error removing movie from list:", error);
    return false;
  }
};