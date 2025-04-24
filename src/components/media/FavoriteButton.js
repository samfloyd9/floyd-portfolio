import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";
import { favoriteMedia } from "../../api/tmdbapi";

const API_KEY = "917887a11fe36d6ce72f7a4b6e8d30b0";

function FavoriteButton({
  sessionId,
  accountId,
  mediaId,           // works for movie or tv
  mediaType,         // 'movie' or 'tv'
  refreshFavorites,  // optional
}) {
  const [isFavorited, setIsFavorited] = useState(false);
  const [loading, setLoading] = useState(true);
  const [valid, setValid] = useState(true); // ✅ prevent rendering on 404

  const fetchFavoriteStatus = async () => {
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

      setIsFavorited(data.favorite || false);
    } catch (error) {
      console.error("Error fetching favorite status:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleFavorite = async () => {
    const success = await favoriteMedia(sessionId, accountId, mediaId, mediaType, !isFavorited);
    if (success) {
      setIsFavorited((prev) => !prev);
      refreshFavorites?.();
    } else {
      alert("Failed to update favorite status.");
    }
  };

  useEffect(() => {
    fetchFavoriteStatus();
  }, [sessionId, accountId, mediaId, mediaType]);

  // prevent rendering on load or invalid state
  if (loading) return null;

  return (
    <button
      onClick={toggleFavorite}
      className={`flex items-center px-1 my-0.5 rounded ${
        isFavorited ? "bg-yellow-500" : "bg-gray-300"
      }`}
    >
      <FaStar className="text-[16px]" />
    </button>
  );
}

export default FavoriteButton;
