import { MdAdd } from "react-icons/md";

import FavoriteButton from "./FavoriteButton";
import RatingControl from "./RatingControl";
import WatchlistButton from "./WatchlistButton";

import { useState } from "react";

function MediaCard({
  detailedMedia,
  tvShow,
  person,
  selectedMedia,
  setShowWatchlistModal,
  showWatchlistModal,
  lists,
  handleAddToList,
  handleSelectList,
  accountId,
  sessionId,
  refreshFavoriteTvShows,
  refreshFavoriteMovies,
  refreshWatchlistMovies,
  refreshWatchlistTvShows,
  setSelectedMedia,
}) {
  const [showRatingEdit, setShowRatingEdit] = useState(false);

  const handleShowRatingEdit = () => {
    setShowRatingEdit(!showRatingEdit);
  };

  // const handleTitleLength = (title) => {
  //   if (title.length > 24) {
  //     return <p className="text-sm">{title}</p>;
  //   } else if (title.length <= 24) {
  //     return <p className="text-lg">{title}</p>;
  //   } else if (title.length > 36) {
  //     return <p className="text-xs">{title}</p>;
  //   }
  // };

  // If nothing is selected, don't render anything
  if (!selectedMedia) return null;

  const movieCard = (
    <div className="flex justify-center border-gray-400 border-2 text-black items-center text-center w-fit h-full p-2 shadow-xl rounded-md bg-white">
      <div className="flex flex-row">
        {detailedMedia.map((movie) => (
          <div
            key={movie.id}
            className="flex flex-col justify-center w-[342px] content-center items-center"
          >
            <img
              alt={movie.id}
              src={
                movie.poster_path === null || movie.poster_path === ""
                  ? `https://cdn.vectorstock.com/i/1000v/29/33/movie-and-film-poster-design-template-background-vector-43522933.jpg`
                  : `https://image.tmdb.org/t/p/w342/${movie.poster_path}`
              }
              className="rounded-md shadow-md w-[342px]"
              loading="lazy"
            />
            <div className="flex flex-row w-full justify-between content-between items-center mt-1.5">
              <div className="flex justify-start">
                {/* <div className="bg-green-300 w-fit px-3 py-2 rounded-md shadow-md"></div> */}
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

              {/* <div className="w-full px-1.5">
                <div className="flex flex-row justify-center items-center">
                  <h1 className="font-bold w-full truncate">
                    {movie.title}
                  </h1>
                </div>
                <div className="flex justify-center mt-1">
                  <p className="text-gray-600">
                    {movie.release_date.slice(0, -6)}
                  </p>
                </div>
              </div> */}

              <div className="flex flex-col justify-end items-end">
                <div className="gap-2.5 flex flex-row">
                  <FavoriteButton
                    sessionId={sessionId}
                    accountId={accountId}
                    mediaId={movie.id}
                    mediaType={"movie"} // or hardcoded: "movie" or "tv"
                    refreshFavorites={refreshFavoriteMovies}
                  />
                  <WatchlistButton
                    sessionId={sessionId}
                    accountId={accountId}
                    mediaId={movie.id}
                    mediaType={"movie"}
                    refreshWatchlist={refreshWatchlistMovies}
                  />
                  <button
                    // className="right-5 bottom-0 absolute"
                    onClick={() => handleAddToList(movie.id)}
                  >
                    <MdAdd className="text-3xl border hover:bg-gray-300 shadow-md rounded-md bg-white" />
                  </button>
                </div>
              </div>

              {showWatchlistModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                  <div className="bg-white p-5 rounded-md">
                    <h3 className="text-lg font-bold mb-2">
                      Select a Collection for Movie
                    </h3>

                    {lists.length > 0 ? (
                      <ul>
                        {/* ✅ Filter the lists based on selected media type */}
                        {lists.map((list) => (
                          <li key={list.id} className="mb-2">
                            <button
                              onClick={() => handleSelectList(list.id)}
                              className="px-3 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                            >
                              {list.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>No collections found. Create one first!</p>
                    )}

                    <button
                      onClick={() => setShowWatchlistModal(false)}
                      className="mt-3 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const tvCard = (
    <div className="flex justify-center border-gray-500 border-2 text-black items-center text-center w-fit h-full p-2 shadow-xl rounded-md bg-white">
      <div className="flex flex-row">
        {tvShow.map((show) => (
          <div
            key={show.id}
            className="flex flex-col justify-center w-[342px] content-center items-center"
          >
            <img
              alt={show.id}
              src={
                show.poster_path === null || show.poster_path === ""
                  ? `https://cdn.vectorstock.com/i/1000v/29/33/movie-and-film-poster-design-template-background-vector-43522933.jpg`
                  : `https://image.tmdb.org/t/p/w342/${show.poster_path}`
              }
              className="rounded-md shadow-md w-[342px]"
              loading="lazy"
            />
            <div className="flex flex-row w-full justify-between content-between items-center mt-2">
              <div className="flex justify-start">
                {/* <div className="bg-green-300 w-fit px-3 py-2 rounded-md shadow-md"></div> */}
                <div
                  onClick={() =>
                    setShowRatingEdit((prev) => ({
                      ...prev,
                      [show.id]: !prev[show.id],
                    }))
                  }
                >
                  <RatingControl
                    sessionId={sessionId}
                    mediaId={show.id}
                    mediaType={"tv"}
                    showRatingEdit={!!showRatingEdit[show.id]}
                  />
                </div>
              </div>

              {/* <div className="w-1/2">
                <div className="flex flex-row justify-center items-center">
                  <h1 className="font-bold">
                    <div>{show.name}</div>
                  </h1>
                </div>
                <div className="flex justify-center mt-1">
                  <p className="">
                    ({show.first_air_date.slice(0, -6)} -{" "}
                    {show.last_air_date === null || show.last_air_date === ""
                      ? "Current"
                      : show.last_air_date.slice(0, -6)}
                    )
                  </p>
                </div>
              </div> */}

              <div className="flex flex-col justify-end items-end">
                <div className="gap-2.5 flex flex-row">
                  <button>
                    <MdAdd className="text-3xl border-white bg-white text-white" />
                  </button>
                  <FavoriteButton
                    sessionId={sessionId}
                    accountId={accountId}
                    mediaId={show.id}
                    mediaType={"tv"} // or hardcoded: "movie" or "tv"
                    refreshFavorites={refreshFavoriteTvShows}
                  />
                  <WatchlistButton
                    sessionId={sessionId}
                    accountId={accountId}
                    mediaId={show.id}
                    mediaType={"tv"}
                    refreshWatchlist={refreshWatchlistTvShows}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const personCard = (
    <div className="flex justify-center border-gray-500 border-2 text-black items-center text-center w-fit h-full p-5 shadow-xl rounded-md bg-white">
      <div className="flex flex-row">
        {person.map((person) => (
          <div
            key={person.id}
            className="flex flex-col justify-center w-[342px] content-center items-center"
          >
            <img
              alt={person.id}
              src={
                person.profile_path === null || person.profile_path === ""
                  ? "https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI="
                  : `https://image.tmdb.org/t/p/h632/${person.profile_path}`
              }
              className="rounded-md shadow-md w-[h-632px]"
              loading="lazy"
            />
            <div className="flex flex-row w-full justify-center content-center items-center mt-2">
              <div className="flex flex-row justify-center items-center">
                <div className="">
                  <h1 className="font-bold">{person.name}</h1>
                  <div className="flex justify-center">
                    <p className="text-sm text-gray-500">
                      (
                      {person.birthday === null || person.birthday === ""
                        ? "Unknown"
                        : person.birthday.slice(0, -6)}{" "}
                      -{" "}
                      {person.deathday === null || person.deathday === ""
                        ? "Current"
                        : person.deathday.slice(0, -6)}
                      )
                    </p>
                  </div>
                  <h2 className="text-sm text-gray-700">
                    {person.known_for_department}
                  </h2>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-row">
      {detailedMedia && selectedMedia.media_type === "movie" && movieCard}

      {tvShow && selectedMedia.media_type === "tv" && tvCard}

      {person && selectedMedia.media_type === "person" && personCard}
    </div>
  );
}

export default MediaCard;
