import { useState, useEffect } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";
import { MdAdd } from "react-icons/md";
import FavoriteButton from "./FavoriteButton";
import RatingControl from "./RatingControl";

function FavoriteSection({
  sessionId,
  accountId,
  mediaType, // "movie" or "tv"
  fetchFunction, // e.g., getFavoriteMovies or getFavoriteTvShows
  refreshFunction, // e.g., refreshFavoriteMovies or refreshFavoriteTvShows
  setSelectedMedia,
  handleAddToList,
}) {
  const [items, setItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const [showRatingEdit, setShowRatingEdit] = useState({});

  const loadItems = async (pageNum = 1, append = false) => {
    try {
      setLoading(true);

      // ✅ Pass mediaType into getFavoriteMedia
      const data = await fetchFunction(
        sessionId,
        accountId,
        mediaType,
        pageNum
      );

      if (append) {
        setItems((prev) => [...prev, ...(data.results || [])]);
      } else {
        setItems(data.results || []);
      }

      setTotalPages(data.total_pages || 1);
    } catch (error) {
      console.error("Error fetching items:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (sessionId && accountId) {
      loadItems(1, false); // Load first page
    }
  }, [sessionId, accountId]);

  const handleLoadMore = () => {
    const nextPage = currentPage + 1;
    setCurrentPage(nextPage);
    loadItems(nextPage, true);
  };

  return (
    <div className="mt-4">
      {items.length > 0 ? (
        <div className="flex flex-wrap gap-2">
          {items
            .sort((a, b) => b.vote_average - a.vote_average)
            .map((item) => (
              <div
                key={item.id}
                className="border p-2 rounded-md max-w-[216px] shadow bg-white"
              >
                <img
                  src={
                    item.poster_path
                      ? `https://image.tmdb.org/t/p/w200${item.poster_path}`
                      : `https://via.placeholder.com/200x300?text=No+Image`
                  }
                  alt={item.title || item.name}
                  className="rounded w-[200px] h-[300px] object-cover"
                  loading="lazy"
                />
                <div className="flex justify-between items-center mt-2">
                  <div className="w-full">
                    <p className="text-md font-semibold truncate">
                      {item.title || item.name}
                    </p>
                    <p className="text-xs text-gray-500">
                      {(item.release_date || item.first_air_date || "").slice(
                        0,
                        4
                      )}
                    </p>
                  </div>
                </div>
                <div className="flex flex-row justify-between items-end">
                  <div className="flex justify-center gap-2 mt-2">
                    <button
                      onClick={() =>
                        setSelectedMedia({
                          id: item.id,
                          media_type: mediaType,
                        })
                      }
                    >
                      <IoInformationCircleOutline className="text-[26px] border rounded hover:bg-gray-300 shadow-md" />
                    </button>
                    {mediaType === "movie" && (
                      <button
                        className=""
                        onClick={() => handleAddToList(item.id)}
                      >
                        <MdAdd className="text-[26px] border-2 shadow-md rounded-md hover:bg-gray-300" />
                      </button>
                    )}
                    <FavoriteButton
                      sessionId={sessionId}
                      accountId={accountId}
                      mediaId={item.id}
                      mediaType={mediaType}
                      refreshFavorites={refreshFunction}
                    />
                  </div>
                  <div
                    onClick={() =>
                      setShowRatingEdit((prev) => ({
                        ...prev,
                        [item.id]: !prev[item.id],
                      }))
                    }
                  >
                    <RatingControl
                      sessionId={sessionId}
                      mediaId={item.id}
                      mediaType={mediaType}
                      showRatingEdit={!!showRatingEdit[item.id]}
                    />
                  </div>
                </div>
              </div>
            ))}
        </div>
      ) : (
        <p className="text-gray-400 mt-4">No items found.</p>
      )}

      {/* Load More Button */}
      {currentPage < totalPages && (
        <div className="flex justify-center mt-6">
          <button
            onClick={handleLoadMore}
            disabled={loading}
            className="px-4 py-2 text-white bg-orange-400 hover:bg-orange-500 rounded-md disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {loading ? "Loading..." : "Load More"}
          </button>
        </div>
      )}
    </div>
  );
}

export default FavoriteSection;
