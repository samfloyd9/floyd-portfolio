import { useState, useEffect } from "react";
import { rateMedia, getMediaRating } from "../../api/tmdbapi";

const RatingControl = ({ sessionId, mediaId, mediaType, showRatingEdit }) => {
  const [rating, setRating] = useState(null);
  const [loading, setLoading] = useState(true);

  // console.log(rating)

  // Load existing rating on mount
  useEffect(() => {
    const loadRating = async () => {
      const userRating = await getMediaRating(sessionId, mediaId, mediaType);
      console.log("User rating:", userRating); // Debug
      setRating(userRating);
      setLoading(false);
    };
    if (sessionId && mediaId && mediaType) {
      loadRating();
    }
  }, [sessionId, mediaId, mediaType]);

  const updateRating = async (newRating) => {
    if (newRating < 0.5 || newRating > 10) return;

    const success = await rateMedia(sessionId, mediaId, mediaType, newRating);

    if (success) {
      setRating(newRating); // ✅ Update local state immediately
    } else {
      alert("Failed to update rating.");
    }
  };

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

  const getRatingBadge = (rating) => {
    if (rating >= 9.5) return "bg-cyan-300 text-black shadow-glow";
    if (rating >= 7.5) return "bg-green-200 text-black";
    if (rating >= 5) return "bg-yellow-200 text-black";
    if (rating >= 2.5) return "bg-orange-200 text-black";
    if (rating < 2.5 && rating > 0) return "bg-red-200 text-black";
    if (rating === null) return "bg-gray-400 text-white";
  };

  const displayRating = rating === null ? "NR" : rating;

  if (loading) return <p className="text-sm text-gray-400">?</p>;

  return (
    <div className="flex items-center gap-2">
      {showRatingEdit && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // prevent the event from bubbling up
            decrement();
          }}
          disabled={rating <= 0.5}
          className="px-1.5 text-sm bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          -
        </button>
      )}

      <div
        className={`px-1.5 py-1 border rounded text-center items-center content-center justify-center font-bold w-[44px] text-lg ${getRatingBadge(
          rating
        )} shadow-glow`}
      >
        {displayRating}
      </div>

      {showRatingEdit && (
        <button
          onClick={(e) => {
            e.stopPropagation(); // Prevent the event from bubbling up
            increment();
          }}
          disabled={rating >= 10}
          className="px-1.5 text-sm bg-gray-300 rounded hover:bg-gray-400 disabled:opacity-50"
        >
          +
        </button>
      )}
    </div>
  );
};

export default RatingControl;
