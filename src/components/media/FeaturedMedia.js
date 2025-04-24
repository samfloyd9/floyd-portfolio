import { useEffect, useState, useRef } from "react";
import FavoriteButton from "./FavoriteButton";
import WatchlistButton from "./WatchlistButton";
import { MdAdd } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";

function FeaturedMedia({
  sessionId,
  accountId,
  handleAddToList,
  refreshFavoriteMovies,
  refreshFavoriteTvShows,
  refreshWatchlistMovies,
  refreshWatchlistTvShows,
  setSelectedMedia,
}) {
  const API_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTc4ODdhMTFmZTM2ZDZjZTcyZjdhNGI2ZThkMzBiMCIsIm5iZiI6MTczMDQzMDIzOS4zMjQxNjk5LCJzdWIiOiI2NzI0M2YzOGYwOGFiNWQzZjIwMzc5NjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TsJfsPyERUBu2TYy9qusAPDY3weAZdFaU6UrUCJ4HS4";

  const categoryOptions = {
    movie: [
      { label: "Now Playing", value: "now_playing" },
      { label: "Popular", value: "popular" },
      { label: "Top Rated", value: "top_rated" },
      { label: "Upcoming", value: "upcoming" },
    ],
    tv: [
      { label: "Airing Today", value: "airing_today" },
      { label: "On The Air", value: "on_the_air" },
      { label: "Popular", value: "popular" },
      { label: "Top Rated", value: "top_rated" },
    ],
  };
  const [mediaType, setMediaType] = useState("movie");
  const [category, setCategory] = useState("popular");
  const [items, setItems] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/${mediaType}/${category}?language=en-US&page=1`,
          {
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
              accept: "application/json",
            },
          }
        );
        const data = await response.json();
        console.log("Fetched data:", data); // DEBUG
        setItems(data.results || []);
        setCurrentIndex(Math.floor((data.results?.length || 1) / 2));
      } catch (err) {
        console.error("Error fetching media:", err);
        setItems([]);
      }
    };

    fetchMedia();
  }, [category, mediaType]);

  useEffect(() => {
    if (items.length === 0) return;

    const startAutoSlide = () => {
      intervalRef.current = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          prevIndex === items.length - 1 ? 0 : prevIndex + 1
        );
      }, 15000);
    };

    startAutoSlide();

    return () => clearInterval(intervalRef.current);
  }, [items]);

  const handleManualNav = (newIndex) => {
    clearInterval(intervalRef.current);
    setCurrentIndex(newIndex);
  };

  const current = items[currentIndex];
  const prev = items[currentIndex - 1];
  const next = items[currentIndex + 1];

  const formatFullDate = (rawDate) => {
    if (!rawDate) return "";
    return new Date(rawDate).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="max-w-5xl mx-auto">
      {/* Media Type Selector */}
      <div className="flex justify-center gap-3 mb-3">
        {["movie", "tv"].map((type) => (
          <button
            key={type}
            onClick={() => {
              setMediaType(type);
              setCategory(categoryOptions[type][0].value);
              clearInterval(intervalRef.current);
            }}
            className={`px-4 py-1 rounded font-semibold capitalize transition ${
              mediaType === type
                ? "bg-purple-500 text-white"
                : "bg-gray-200 hover:bg-gray-400"
            }`}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Category Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-3">
        {categoryOptions[mediaType].map(({ label, value }) => (
          <button
            key={value}
            onClick={() => {
              setCategory(value);
              clearInterval(intervalRef.current);
            }}
            className={`px-4 py-1 rounded-md font-medium transition ${
              category === value
                ? "bg-purple-500 text-white"
                : "bg-gray-200 hover:bg-gray-400"
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* Media Slides */}
      <div className="flex items-center justify-center gap-6">
        {/* Prev */}
        {prev?.poster_path && (
          <img
            onClick={() => handleManualNav(currentIndex - 1)}
            src={`https://image.tmdb.org/t/p/w185${prev.poster_path}`}
            alt={prev.title || prev.name}
            className="cursor-pointer opacity-40 hover:opacity-90 transition transform scale-90 hover:scale-100 rounded shadow-md"
          />
        )}

        {/* Current */}
        {current?.poster_path ? (
          <div className="text-center bg-white px-2.5 py-2 rounded">
            {/* <h2 className="text-2xl font-bold mb-2">
              {current.title || current.name}
            </h2> */}
            <img
              src={`https://image.tmdb.org/t/p/w342${current.poster_path}`}
              alt={current.title || current.name}
              className="rounded shadow-lg mx-auto"
            />
            <p className="mt-2 text-gray-600 text-sm">
              {(current.release_date || current.first_air_date)?.slice(0, 4)} •{" "}
              {current.vote_average.toFixed(1)} ⭐
            </p>
            {category === "upcoming" && mediaType === "movie" && (
              <p className="mt-1 text-blue-600 font-medium">
                Coming {formatFullDate(current.release_date)}
              </p>
            )}
            <div className="flex flex-row items-center justify-center gap-2">
              <button
                className=""
                onClick={() => handleAddToList(current.id)}
              >
                <MdAdd className="text-xl border-2 shadow-md rounded-md" />
              </button>
              <button className="">
                <IoInformationCircleOutline
                  className="text-xl border-2 shadow-md rounded-md hover:bg-gray-300"
                  onClick={() =>
                    setSelectedMedia({
                      id: current.id,
                      media_type: mediaType,
                    })
                  }
                />
              </button>
              <FavoriteButton
                sessionId={sessionId}
                accountId={accountId}
                mediaId={current.id}
                mediaType={mediaType} // or hardcoded: "movie" or "tv"
                refreshFavorites={
                  mediaType === "movie"
                    ? refreshFavoriteMovies
                    : refreshFavoriteTvShows
                }
              />
              <WatchlistButton
                sessionId={sessionId}
                accountId={accountId}
                mediaId={current.id}
                mediaType={mediaType} // or "tv"
                refreshWatchlist={
                  mediaType === "movie"
                    ? refreshWatchlistMovies
                    : refreshWatchlistTvShows
                }
              />
            </div>
          </div>
        ) : (
          <p className="text-gray-400">No poster available</p>
        )}

        {/* Next */}
        {next?.poster_path && (
          <img
            onClick={() => handleManualNav(currentIndex + 1)}
            src={`https://image.tmdb.org/t/p/w185${next.poster_path}`}
            alt={next.title || next.name}
            className="cursor-pointer opacity-40 hover:opacity-90 transition transform scale-90 hover:scale-100 rounded shadow-md"
          />
        )}
      </div>

      {/* Manual Nav */}
      {/* <div className="flex justify-center gap-4 mt-3">
        <button
          onClick={() => handleManualNav(currentIndex - 1)}
          disabled={currentIndex === 0}
          className="px-3 py-1 bg-gray-200 hover:bg-gray-400 rounded disabled:opacity-40"
        >
          Prev
        </button>
        <button
          onClick={() => handleManualNav(currentIndex + 1)}
          disabled={currentIndex >= items.length - 1}
          className="px-3 py-1 bg-gray-200 hover:bg-gray-400 rounded disabled:opacity-40"
        >
          Next
        </button>
      </div> */}
    </div>
  );
}

export default FeaturedMedia;
