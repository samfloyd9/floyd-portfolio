import { useState, useEffect } from "react";
import { FaBookmark } from "react-icons/fa";
import { markAsWatchlist } from "../../api/tmdbapi";

const API_KEY = "917887a11fe36d6ce72f7a4b6e8d30b0";

function WatchlistButton({ sessionId, accountId, mediaId, mediaType, refreshWatchlist }) {
  const [inWatchlist, setInWatchlist] = useState(false);
  const [loading, setLoading] = useState(true);
  const [valid, setValid] = useState(true); // track if the ID is valid

  const fetchWatchlistStatus = async () => {
    if (!sessionId || !accountId || !mediaId || !mediaType) return;

    const typePath = mediaType === "movie" ? "movie" : "tv";

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${typePath}/${mediaId}/account_states?api_key=${API_KEY}&session_id=${sessionId}`
      );

      if (!response.ok) {
        if (response.status === 404) {
          // console.warn(`FavoriteButton: 404 for ${mediaType}/${mediaId}`);
          // setValid(false);
          return;
        } else {
          // throw new Error(`Request failed with status ${response.status}`);
        }
      }
      
      const data = await response.json();
      setInWatchlist(data.watchlist || false);
    } catch (error) {
      console.error("Error fetching watchlist status:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleWatchlist = async () => {
    const success = await markAsWatchlist(sessionId, accountId, mediaId, mediaType, !inWatchlist);
    if (success) {
      setInWatchlist((prev) => !prev);
      refreshWatchlist?.();
    } else {
      alert("Failed to update watchlist.");
    }
  };

  useEffect(() => {
    fetchWatchlistStatus();
  }, [sessionId, accountId, mediaId, mediaType]);

  // If it's loading or invalid, show nothing
  if (loading) return null;

  return (
    <button
      onClick={toggleWatchlist}
      className={`flex items-center px-1 py-0.5 rounded ${
        inWatchlist ? "bg-green-500" : "bg-gray-300"
      }`}
    >
      <FaBookmark className="text-sm" />
    </button>
  );
}

export default WatchlistButton;


// import { useState, useEffect } from "react";
// import { FaBookmark } from "react-icons/fa";
// import { markAsWatchlist } from "../../api/tmdbapi"; // Adjust path if needed

// const API_KEY = "917887a11fe36d6ce72f7a4b6e8d30b0";

// function WatchlistButton({ sessionId, accountId, mediaId, mediaType, refreshWatchlist }) {
//   const [inWatchlist, setInWatchlist] = useState(false);
//   const [loading, setLoading] = useState(true);

//   // const fetchWatchlistStatus = async () => {
//   //   try {
//   //     const typePath = mediaType === "movie" ? "movie" : "tv";
//   //     const response = await fetch(
//   //       `https://api.themoviedb.org/3/${typePath}/${mediaId}/account_states?api_key=${API_KEY}&session_id=${sessionId}`
//   //     );
//   //     const data = await response.json();
//   //     setInWatchlist(data.watchlist || false);
//   //   } catch (error) {
//   //     console.error("Error fetching watchlist status:", error);
//   //   } finally {
//   //     setLoading(false);
//   //   }
//   // };

//   const fetchWatchlistStatus = async () => {
//     try {
//       const typePath = mediaType === "movie" ? "movie" : "tv";
  
//       const response = await fetch(
//         `https://api.themoviedb.org/3/${typePath}/${mediaId}/account_states?api_key=${API_KEY}&session_id=${sessionId}`
//       );
  
//       if (response.status === 404) {
//         console.warn(`TMDB 404: No ${typePath} found with ID ${mediaId}`);
//         return;
//       }
  
//       const data = await response.json();
//       setInWatchlist(data.watchlist || false);
//     } catch (error) {
//       console.error("Error fetching watchlist status:", error);
//     } finally {
//       setLoading(false);
//     }
//   };
  

//   const toggleWatchlist = async () => {
//     const success = await markAsWatchlist(sessionId, accountId, mediaId, mediaType, !inWatchlist);
//     if (success) {
//       setInWatchlist((prev) => !prev);
//       refreshWatchlist?.();
//     } else {
//       alert("Failed to update watchlist.");
//     }
//   };

//   useEffect(() => {
//     if (sessionId && accountId && mediaId) {
//       fetchWatchlistStatus();
//     }
//   }, [sessionId, accountId, mediaId, mediaType]);

//   if (loading) return <p className="text-sm text-gray-400">...</p>;

//   return (
//     <button
//       onClick={toggleWatchlist}
//       className={`flex items-center px-1 py-0.5 rounded ${
//         inWatchlist ? "bg-green-500" : "bg-gray-300"
//       }`}
//     >
//       <FaBookmark className="text-sm" />
//     </button>
//   );
// }

// export default WatchlistButton;
