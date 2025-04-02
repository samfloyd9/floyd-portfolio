import { useState, useEffect } from "react";
import { rateMedia, getMediaRating } from "../api/tmdbapi";

const RatingControl = ({ sessionId, mediaId, mediaType, showRatingEdit }) => {
  const [rating, setRating] = useState(null);
  const [loading, setLoading] = useState(true);

  // console.log(rating)

  // Load existing rating on mount
  useEffect(() => {
    const loadRating = async () => {
      const userRating = await getMediaRating(sessionId, mediaId, mediaType);
      console.log("User rating:", userRating); // Debug
      setRating(userRating ?? 5); // Default to 5 if not rated
      setLoading(false);
    };
    if (sessionId && mediaId && mediaType) {
      loadRating();
    }
  }, [sessionId, mediaId, mediaType]);

  // Save rating on change
  // const updateRating = async (newRating) => {
  //   if (newRating < 0.5 || newRating > 10) return;
  //   const success = await rateMedia(sessionId, mediaId, mediaType, newRating);
  //   if (success) setRating(newRating);
  // };
  const updateRating = async (newRating) => {
    if (newRating < 0.5 || newRating > 10) return;
  
    const success = await rateMedia(sessionId, mediaId, mediaType, newRating);
  
    if (success) {
      setRating(newRating); // ✅ Update local state immediately
    } else {
      alert("Failed to update rating.");
    }
  };

  // const increment = () => updateRating(parseFloat((rating + 0.5).toFixed(1)));
  // const decrement = () => updateRating(parseFloat((rating - 0.5).toFixed(1)));

  const increment = () => {
    const current = typeof rating === "number" ? rating : 5; // default to 5 if null
    const newRating = parseFloat((current + 0.5).toFixed(1));
    if (newRating <= 10) updateRating(newRating);
  };
  
  const decrement = () => {
    const current = typeof rating === "number" ? rating : 5; // default to 5 if null
    const newRating = parseFloat((current - 0.5).toFixed(1));
    if (newRating >= 0.5) updateRating(newRating);
  };

  if (loading) return <p className="text-sm text-gray-400">?</p>;

  return (
    <div className="flex items-center gap-2">
      {showRatingEdit && (
        <button
          onClick={decrement}
          disabled={rating <= 0.5}
          className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          -
        </button>
      )}

      <div className="px-3 py-1 border rounded bg-white text-center font-bold w-12">
        {rating}
      </div>

      {showRatingEdit && (
        <button
          onClick={increment}
          disabled={rating >= 10}
          className="px-2 py-1 bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50 z-30"
        >
          +
        </button>
      )}
    </div>
  );
};

export default RatingControl;
