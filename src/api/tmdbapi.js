const API_KEY = "917887a11fe36d6ce72f7a4b6e8d30b0";

// Get User's Account ID (Needed for Lists, Favorites, and Collections)
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
          description: description || "My custom collection", // Default if empty
          language: "en",
        }),
      }
    );

    const data = await response.json();
    return data.list_id; // Return the new list ID
  } catch (error) {
    console.error("Error creating collection:", error);
    return null;
  }
};

export const addToList = async (sessionId, listId, mediaId) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/list/${listId}/add_item?api_key=${API_KEY}&session_id=${sessionId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          media_id: mediaId, // ✅ Only pass the movie ID
        }),
      }
    );

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Error adding item to list:", error);
    return false;
  }
};

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

export const editList = async (sessionId, listId, newName, newDescription) => {
  try {
    // Step 1: Fetch existing movies in the list
    const existingMovies = await getMoviesInList(listId);

    // Step 2: Delete Old List
    await fetch(
      `https://api.themoviedb.org/3/list/${listId}?api_key=${API_KEY}&session_id=${sessionId}`,
      { method: "DELETE" }
    );

    // Step 3: Create New List with Updated Info
    const response = await fetch(
      `https://api.themoviedb.org/3/list?api_key=${API_KEY}&session_id=${sessionId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newName,
          description: newDescription || "Updated collection",
          language: "en",
        }),
      }
    );

    const data = await response.json();
    if (!data.list_id) {
      console.error("Error creating new list after editing:", data);
      return null;
    }

    const newListId = data.list_id;

    // Step 4: Re-add movies to the new list
    for (const movie of existingMovies) {
      await addToList(sessionId, newListId, movie.id);
    }

    return newListId; // Return the new list ID
  } catch (error) {
    console.error("Error editing collection:", error);
    return null;
  }
};

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
    if (!data.success) {
      console.error("Failed to remove movie:", data);
      return false;
    }

    // ✅ Fetch updated movie list after removal
    const updatedMovies = await getMoviesInList(listId);
    return updatedMovies; // Return updated list so UI can refresh
  } catch (error) {
    console.error("Error removing movie from list:", error);
    return false;
  }
};

export const favoriteMedia = async (sessionId, accountId, mediaId, mediaType, isFavorite) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/account/${accountId}/favorite?api_key=${API_KEY}&session_id=${sessionId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          media_type: mediaType, // "movie" or "tv"
          media_id: mediaId,
          favorite: isFavorite, // true or false
        }),
      }
    );

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Error favoriting media:", error);
    return false;
  }
};

export const getFavoriteMedia = async (sessionId, accountId, mediaType, page = 1) => {
  const typePath = mediaType === "movie" ? "movies" : mediaType;

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/account/${accountId}/favorite/${typePath}?api_key=${API_KEY}&session_id=${sessionId}&page=${page}`
    );
    const data = await response.json();
    return data; // return { results: [], total_pages: N }
  } catch (error) {
    console.error(`Error fetching favorite ${mediaType}:`, error);
    return { results: [], total_pages: 1 };
  }
};


// export const getFavoriteMedia = async (sessionId, accountId, mediaType) => {
//   const typePath = mediaType === "movie" ? "movies" : mediaType;

//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/account/${accountId}/favorite/${typePath}?api_key=${API_KEY}&session_id=${sessionId}`
//     );
//     const data = await response.json();
//     return data.results || [];
//   } catch (error) {
//     console.error(`Error fetching favorite ${mediaType}:`, error);
//     return [];
//   }
// };

export const rateMedia = async (sessionId, mediaId, mediaType, ratingValue) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/${mediaType}/${mediaId}/rating?api_key=${API_KEY}&session_id=${sessionId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value: ratingValue }),
      }
    );

    const data = await response.json();
    if (!data.success) {
      console.error("Failed to rate media:", data.status_message);
    }
    return data.success;
  } catch (error) {
    console.error("Error rating media:", error);
    return false;
  }
};

export const getMediaRating = async (sessionId, mediaId, mediaType) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/${mediaType}/${mediaId}/account_states?api_key=${API_KEY}&session_id=${sessionId}`
    );
    const data = await response.json();
    console.log("media Rating", data);

    return data.rated?.value || null; // returns rating like 8.5, or null if not rated
  } catch (error) {
    console.error("Error fetching user rating:", error);
    return null;
  }
};

export const markAsWatchlist = async (sessionId, accountId, mediaId, mediaType, isWatchlisted) => {
  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/account/${accountId}/watchlist?api_key=${API_KEY}&session_id=${sessionId}`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          media_type: mediaType, // 'movie' or 'tv'
          media_id: mediaId,
          watchlist: isWatchlisted, // true or false
        }),
      }
    );

    const data = await response.json();
    return data.success;
  } catch (error) {
    console.error("Error updating watchlist:", error);
    return false;
  }
};

export const getWatchlistMedia = async (sessionId, accountId, mediaType, page = 1) => {
  const typePath = mediaType === "movie" ? "movies" : "tv";

  try {
    const response = await fetch(
      `https://api.themoviedb.org/3/account/${accountId}/watchlist/${typePath}?api_key=${API_KEY}&session_id=${sessionId}&page=${page}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error fetching watchlist ${mediaType}:`, error);
    return { results: [], total_pages: 1 };
  }
};


// export const getWatchlistMedia = async (sessionId, accountId, mediaType) => {
//   const typePath = mediaType === "movie" ? "movies" : "tv";

//   try {
//     const response = await fetch(
//       `https://api.themoviedb.org/3/account/${accountId}/watchlist/${typePath}?api_key=${API_KEY}&session_id=${sessionId}`
//     );
//     const data = await response.json();
//     return data.results || [];
//   } catch (error) {
//     console.error(`Error fetching watchlist for ${mediaType}:`, error);
//     return [];
//   }
// };