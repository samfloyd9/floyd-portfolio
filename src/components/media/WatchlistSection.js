import { useState, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import FavoriteButton from "./FavoriteButton";
import WatchlistButton from "./WatchlistButton";
import RatingControl from "./RatingControl";

function WatchlistSection({
  sessionId,
  accountId,
  fetchFunction, // your getWatchlistMedia
  mediaType, // "movie" or "tv"
  setSelectedMedia,
  handleAddToList,
}) {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);

  const [showRatingEdit, setShowRatingEdit] = useState({});

  const fetchItems = async (pageNum = 1, append = false) => {
    try {
      setLoading(true);
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
      console.error("Error fetching watchlist:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (sessionId && accountId) {
      fetchItems(1, false);
    }
  }, [sessionId, accountId]);

  const handleLoadMore = () => {
    const nextPage = page + 1;
    setPage(nextPage);
    fetchItems(nextPage, true);
  };

  console.log(items);

  return (
    <div className="mt-4">
      {/* Items */}
      {items.length > 0 && (
        <>
          <div className="flex flex-wrap gap-1.5 mt-2">
            {/* {items
              .sort((a, b) => b.vote_average - a.vote_average)
              .map((item) => (
                <div
                  key={item.id}
                  className="shadow-md p-2 max-w-[216px] rounded bg-white"
                >
                  <img
                    src={
                      item.poster_path
                        ? `https://image.tmdb.org/t/p/w200/${item.poster_path}`
                        : `https://cdn.vectorstock.com/i/1000v/29/33/movie-and-film-poster-design-template-background-vector-43522933.jpg`
                    }
                    alt={item.title || item.name}
                    className="rounded w-[200px]"
                    loading="lazy"
                  />
                  <div className="flex flex-row justify-between items-center">
                    <div>
                      <p className="mt-2 text-sm font-medium max-w-[170px] flex flex-wrap">
                        {item.title || item.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        (
                        {(item.release_date || item.first_air_date || "").slice(
                          0,
                          4
                        )}
                        )
                      </p>
                    </div>
                    <RatingControl
                      sessionId={sessionId}
                      mediaId={item.id}
                      mediaType={mediaType}
                      showRatingEdit={false}
                    />
                  </div>
                  <div className="flex flex-row gap-2 justify-end">
                    {mediaType === "movie" && (
                      <button
                        className=""
                        onClick={() => handleAddToList(item.id)}
                      >
                        <MdAdd className="text-lg border-2 shadow-md rounded-md" />
                      </button>
                    )}
                    <button className="">
                      <IoInformationCircleOutline
                        className="text-lg border-2 shadow-md rounded-md hover:bg-gray-300"
                        onClick={() =>
                          setSelectedMedia({
                            id: item.id,
                            media_type: mediaType,
                          })
                        }
                      />
                    </button>
                    <FavoriteButton
                      sessionId={sessionId}
                      accountId={accountId}
                      mediaId={item.id}
                      mediaType={mediaType}
                      refreshFavorites={() => fetchItems(1, false)}
                    />
                    <WatchlistButton
                      sessionId={sessionId}
                      accountId={accountId}
                      mediaId={item.id}
                      mediaType={mediaType}
                      refreshWatchlist={() => fetchItems(1, false)}
                    />
                  </div>
                </div>
              ))} */}
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
                    <WatchlistButton
                      sessionId={sessionId}
                      accountId={accountId}
                      mediaId={item.id}
                      mediaType={mediaType}
                      refreshWatchlist={() => fetchItems(1, false)}
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

          {/* Load More Button */}
          {page < totalPages && (
            <div className="flex justify-center mt-4">
              <button
                onClick={handleLoadMore}
                disabled={loading}
                className="px-4 py-2 text-white bg-purple-500 hover:bg-purple-600 rounded-md disabled:bg-gray-400"
              >
                {loading ? "Loading..." : "Load More"}
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default WatchlistSection;
