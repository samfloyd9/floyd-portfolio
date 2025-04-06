import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { favoriteMedia } from "../../api/tmdbapi"; // Make sure this is imported
const API_KEY = "917887a11fe36d6ce72f7a4b6e8d30b0"; // or import this if centralized

function TvFavoriteButton({ sessionId, accountId, tvId, refreshFavoriteTvShows }) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [loading, setLoading] = useState(true);

  // Fetch current favorite status
  const fetchFavoriteStatus = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/tv/${tvId}/account_states?api_key=${API_KEY}&session_id=${sessionId}`
      );
      const data = await response.json();
      setIsFavorited(data.favorite || false);
    } catch (error) {
      console.error("Error fetching TV favorite status:", error);
    } finally {
      setLoading(false);
    }
  };

  // Toggle favorite state
  const toggleFavorite = async () => {
    const success = await favoriteMedia(sessionId, accountId, tvId, "tv", !isFavorited);
    if (success) {
      setIsFavorited((prev) => !prev);
      refreshFavoriteTvShows?.();
    } else {
      alert("Failed to update favorite status.");
    }
  };

  useEffect(() => {
    if (sessionId && accountId && tvId) {
      fetchFavoriteStatus();
    }
  }, [sessionId, accountId, tvId]);

  if (loading) return <p className="text-sm text-gray-400">Checking favorite status...</p>;

  return (
    <button
      onClick={toggleFavorite}
      className={`flex items-center px-1 py-0.5 rounded ${
        isFavorited ? "bg-yellow-500" : "bg-gray-300"
      }`}
    >
      <FaStar className="text-sm"/>
      {/* {isFavorited ? "Unfavorite Show" : "Favorite Show"} */}
    </button>
  );
}
 export default TvFavoriteButton;