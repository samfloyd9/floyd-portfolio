// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTc4ODdhMTFmZTM2ZDZjZTcyZjdhNGI2ZThkMzBiMCIsIm5iZiI6MTczMDQzMDIzOS4zMjQxNjk5LCJzdWIiOiI2NzI0M2YzOGYwOGFiNWQzZjIwMzc5NjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TsJfsPyERUBu2TYy9qusAPDY3weAZdFaU6UrUCJ4HS4
import { useState, useEffect } from "react";
import { MdAdd } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import FavoriteButton from "./FavoriteButton";
import WatchlistButton from "./WatchlistButton";
import RatingControl from "./RatingControl";

function MovieRoulette({
  setSelectedMedia,
  accountId,
  sessionId,
  refreshFavoriteMovies,
  refreshWatchlistMovies,
  handleAddToList,
}) {
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [minRating, setMinRating] = useState(7.5);
  const [yearRange, setYearRange] = useState([1900, 2025]);
  const [language, setLanguage] = useState("en");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const [showRatingEdit, setShowRatingEdit] = useState({});

  const fetchGenres = async () => {
    try {
      const res = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTc4ODdhMTFmZTM2ZDZjZTcyZjdhNGI2ZThkMzBiMCIsIm5iZiI6MTczMDQzMDIzOS4zMjQxNjk5LCJzdWIiOiI2NzI0M2YzOGYwOGFiNWQzZjIwMzc5NjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TsJfsPyERUBu2TYy9qusAPDY3weAZdFaU6UrUCJ4HS4`,
          },
        }
      );
      const data = await res.json();
      setGenres(data.genres);
    } catch (err) {
      console.error("Failed to fetch genres:", err);
    }
  };

  useEffect(() => {
    fetchGenres();
  }, []);

  const handleSpin = async () => {
    setLoading(true);
    try {
      const url = `https://api.themoviedb.org/3/discover/movie?language=en-US&sort_by=popularity.desc&with_genres=${selectedGenre}&vote_average.gte=${minRating}&primary_release_date.gte=${yearRange[0]}-01-01&primary_release_date.lte=${yearRange[1]}-12-31&with_original_language=${language}`;

      const res = await fetch(url, {
        headers: {
          Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTc4ODdhMTFmZTM2ZDZjZTcyZjdhNGI2ZThkMzBiMCIsIm5iZiI6MTczMDQzMDIzOS4zMjQxNjk5LCJzdWIiOiI2NzI0M2YzOGYwOGFiNWQzZjIwMzc5NjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TsJfsPyERUBu2TYy9qusAPDY3weAZdFaU6UrUCJ4HS4`,
        },
      });
      const data = await res.json();

      // Shuffle results and pick up to 5
      const shuffled = [...data.results].sort(() => 0.5 - Math.random());
      setResults(shuffled.slice(0, 4));
    } catch (err) {
      console.error("Error fetching movies:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold text-orange-400">
        Random Movie Finder
      </h2>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block font-medium mb-1 text-purple-500">
            Genre
          </label>
          <select
            value={selectedGenre}
            onChange={(e) => setSelectedGenre(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="">-- Any Genre --</option>
            {genres.map((g) => (
              <option key={g.id} value={g.id}>
                {g.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1 text-purple-500">
            Minimum Rating: {minRating}
          </label>
          <input
            type="range"
            min="1"
            max="10"
            step="0.1"
            value={minRating}
            onChange={(e) => setMinRating(e.target.value)}
            className="w-full accent-orange-400"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-purple-500">
            Release Year From: {yearRange[0]}
          </label>
          <input
            type="range"
            min="1980"
            max="2024"
            value={yearRange[0]}
            onChange={(e) => setYearRange([+e.target.value, yearRange[1]])}
            className="w-full accent-orange-400"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-purple-500">
            To: {yearRange[1]}
          </label>
          <input
            type="range"
            min="1900"
            max="2025"
            value={yearRange[1]}
            onChange={(e) => setYearRange([yearRange[0], +e.target.value])}
            className="w-full accent-orange-400"
          />
        </div>

        <div>
          <label className="block font-medium mb-1 text-purple-500">
            Language
          </label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-full p-2 border rounded"
          >
            <option value="en">English</option>
            <option value="es">Spanish</option>
            <option value="fr">French</option>
            <option value="ja">Japanese</option>
            {/* Add more if needed */}
          </select>
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={handleSpin}
          disabled={loading}
          className="bg-orange-400 text-white px-4 py-2 rounded hover:bg-orange-500 transition"
        >
          Find Movies
        </button>

        {results.length > 0 && (
          <button
            onClick={handleSpin}
            disabled={loading}
            className="bg-gray-300 text-black px-4 py-2 rounded hover:bg-gray-400 transition"
          >
            Try Again
          </button>
        )}
      </div>

      {loading && <p className="text-center mt-4">Loading movies...</p>}

      {results.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 w-full">
          {results.map((movie) => (
            <div
              key={movie.id}
              className="bg-white shadow-md rounded p-2 text-center"
            >
              {movie.poster_path ? (
                <img
                  src={`https://image.tmdb.org/t/p/w185${movie.poster_path}`}
                  alt={movie.title}
                  className="mx-auto mt-2 rounded"
                />
              ) : (
                <div className="w-full bg-gray-200 flex items-center justify-center">
                  No Image
                </div>
              )}
              <div className="flex flex-row justify-around items-end">
                <div className="flex flex-col">
                  <p className="text-sm text-gray-600 mt-2 font-bold text-lg">
                    ⭐ {movie.vote_average.toFixed(1)}
                  </p>
                  <p className="text-sm text-gray-500">
                    {movie.release_date.slice(0, -6)}
                  </p>
                </div>
                <div
                  onClick={() =>
                    setShowRatingEdit((prev) => ({
                      ...prev,
                      [movie.id]: !prev[movie.id],
                    }))
                  }
                >
                  <RatingControl
                    sessionId={sessionId}
                    mediaId={movie.id}
                    mediaType={"movie"}
                    showRatingEdit={!!showRatingEdit[movie.id]}
                  />
                </div>
              </div>
              <div className="flex justify-center gap-2 mt-3">
                <button
                  onClick={() =>
                    setSelectedMedia({
                      id: movie.id,
                      media_type: "movie",
                    })
                  }
                >
                  <IoInformationCircleOutline className="text-[26px] border rounded hover:bg-gray-300 shadow-md" />
                </button>
                <button className="" onClick={() => handleAddToList(movie.id)}>
                  <MdAdd className="text-[26px] border-2 shadow-md rounded-md hover:bg-gray-300" />
                </button>
                <FavoriteButton
                  sessionId={sessionId}
                  accountId={accountId}
                  mediaId={movie.id}
                  mediaType={"movie"}
                  refreshFavorites={refreshFavoriteMovies}
                />
                <WatchlistButton
                  sessionId={sessionId}
                  accountId={accountId}
                  mediaId={movie.id}
                  mediaType={"movie"}
                  refreshWatchlist={refreshWatchlistMovies}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default MovieRoulette;
