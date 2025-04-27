import { MdAdd } from "react-icons/md";
import { IoInformationCircleOutline } from "react-icons/io5";
import LoginButton from "./LoginButton";
import FavoriteButton from "./FavoriteButton";
import WatchlistButton from "./WatchlistButton";
import { useEffect } from "react";
import { MdOutlineClear } from "react-icons/md";

function MediaSearch({
  term,
  setTerm,
  input,
  setInput,
  mediaList,
  currentSearchPage,
  setCurrentSearchPage,
  mediaPages,
  selectedMedia,
  setSelectedMedia,
  logout,
  getRequestToken,
  sessionId,
  lists,
  showWatchlistModal,
  setShowWatchlistModal,
  handleAddToList,
  handleSelectList,
  accountId,
  refreshFavoriteTvShows,
  refreshFavoriteMovies,
  refreshWatchlistMovies,
  refreshWatchlistTvShows,
  mediaTypeFilter,
  setMediaTypeFilter,
  setMediaList,
  setMediaPages,
  toggleFeaturedMedia,
  setToggleFeaturedMedia,
  setToggleMediaLists,
  toggleMediaLists,
  toggleMovieRoulette,
  setToggleMovieRoulette,
}) {
  const totalSearchPages = mediaPages?.total_pages;

  const API_TOKEN =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTc4ODdhMTFmZTM2ZDZjZTcyZjdhNGI2ZThkMzBiMCIsIm5iZiI6MTczMDQzMDIzOS4zMjQxNjk5LCJzdWIiOiI2NzI0M2YzOGYwOGFiNWQzZjIwMzc5NjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TsJfsPyERUBu2TYy9qusAPDY3weAZdFaU6UrUCJ4HS4";

  const onSubmit = (term) => {
    let inputStr = term;
    let outputStr = inputStr.replace(/ /g, "%20");

    console.log(outputStr);
    setTerm(outputStr);
    setCurrentSearchPage(1);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(input);
    // setInput("");
  };

  const handleFilterChange = (type) => {
    setMediaTypeFilter(type);
    setCurrentSearchPage(1); // 🔁 Reset to first page when switching filters
  };

  const handleReset = () => {
    setTerm("");
    setInput("");
    setCurrentSearchPage(1);
    setMediaList([]); // ✅ clear current results
    setMediaPages(null); // ✅ reset pagination
  };

  // const handleReset = () => {
  //   setTerm('');
  //   // setInput("");
  // };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const truncate = (text, maxLength = 30) => {
    if (!text) return "";
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
  };

  useEffect(() => {
    if (term) {
      const fetchData = async () => {
        let endpoint = "";

        if (mediaTypeFilter === "movie") {
          endpoint = "https://api.themoviedb.org/3/search/movie";
        } else if (mediaTypeFilter === "tv") {
          endpoint = "https://api.themoviedb.org/3/search/tv";
        } else if (mediaTypeFilter === "person") {
          endpoint = "https://api.themoviedb.org/3/search/person";
        } else {
          endpoint = "https://api.themoviedb.org/3/search/multi";
        }

        const response = await fetch(
          `${endpoint}?query=${term}&include_adult=false&language=en-US&page=${currentSearchPage}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer ${API_TOKEN}`,
              accept: "application/json",
            },
          }
        );

        const data = await response.json();
        // setMediaList([data.results]);
        const filteredResults =
          data.results?.filter((item) => {
            if (
              (item.media_type === "movie" || mediaTypeFilter === "movie") &&
              !item.poster_path
            )
              return false;
            if (
              (item.media_type === "tv" || mediaTypeFilter === "tv") &&
              !item.poster_path
            )
              return false;
            if (
              (item.media_type === "person" || mediaTypeFilter === "person") &&
              !item.profile_path
            )
              return false;
            return true;
          }) || [];

        setMediaList([filteredResults]);
        setMediaPages(data);
      };

      fetchData();
    }
  }, [term, currentSearchPage, mediaTypeFilter]);

  const handleShowFeaturedMedia = () => {
    setToggleFeaturedMedia(!toggleFeaturedMedia);
    setToggleMovieRoulette(false);
    setSelectedMedia(null);
    setMediaList([]);
    setTerm("");
    setInput("");
  };

  const handleShowMediaLists = () => {
    setToggleMediaLists(!toggleMediaLists);
    // setSelectedMedia(null);
  };

  const handleShowMovieRoulette = () => {
    setToggleMovieRoulette(!toggleMovieRoulette);
    setToggleFeaturedMedia(false);
    setSelectedMedia(null);
    setMediaList([]);
    setTerm("");
    setInput("");
  };

  // console.log("Current Filter:", mediaTypeFilter);
  // console.log("Results to show:", mediaList[0]);

  return (
    <div>
      <div className="pt-3 flex flex-row items-center gap-5 w-full">
        <div className="flex flex-row justify-start items-center">
          <form onSubmit={handleFormSubmit} className="flex flex-col">
            {/* <label className="font-bold">Movies, TV Shows, Cast & Crew</label> */}
            <div className="flex flex-row gap-2">
              <input
                value={input}
                onChange={handleChange}
                className="border border-solid border-gray-300 rounded-lg p-1.5 w-60"
                placeholder="Search..."
              />
              <button
                className="w-fit px-1.5 my-1 bg-orange-400 hover:bg-orange-500 text-white rounded-lg"
                onClick={handleFormSubmit}
              >
                Search
              </button>
              <button
                className="w-fit px-1.5 my-1.5 bg-gray-200 hover:bg-red-500 hover:text-white rounded-lg"
                onClick={handleReset}
              >
                <MdOutlineClear />
              </button>
            </div>
          </form>
        </div>

        <div className="w-full flex justify-around">
          <div className="flex gap-5">
            {mediaList[0]?.length > 0 && (
              <div className="flex gap-2 items-center">
                {["all", "movie", "tv", "person"].map((type) => (
                  <button
                    key={type}
                    onClick={() => handleFilterChange(type)} // ✅ not setMediaTypeFilter directly
                    className={`px-2 py-0.5 rounded-md ${
                      mediaTypeFilter === type
                        ? "bg-purple-500 text-white"
                        : "bg-gray-200 hover:bg-gray-400 border-none"
                    }`}
                  >
                    {type.charAt(0).toUpperCase() + type?.slice(1)}
                  </button>
                ))}
              </div>
            )}

            {mediaList[0]?.length > 0 && (
              <div className="flex flex-col justify-center items-center gap-0.5">
                <div className="flex flex-row gap-1">
                  <button
                    onClick={() => setCurrentSearchPage(currentSearchPage - 1)}
                    disabled={currentSearchPage === 1}
                    className={`px-2 rounded-md ${
                      currentSearchPage === 1
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-purple-500 text-white hover:bg-purple-600"
                    }`}
                  >
                    Prev
                  </button>

                  <button
                    onClick={() => setCurrentSearchPage(currentSearchPage + 1)}
                    disabled={currentSearchPage === totalSearchPages}
                    className={`px-2 rounded-md ${
                      currentSearchPage === totalSearchPages
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-purple-500 text-white hover:bg-purple-600"
                    }`}
                  >
                    Next
                  </button>
                </div>
                <p className="text-gray-200 text-xs flex text-nowrap">
                  Page {currentSearchPage} of {totalSearchPages}
                </p>
              </div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-end gap-5">
        <div className="flex justify-around gap-5">
            <button
              className={`px-1.5 py-1 text-black shadow-lg bg-gray-300 hover:bg-gray-400 rounded-md ${
                toggleFeaturedMedia && !selectedMedia
                  ? "bg-purple-500 text-white hover:bg-purple-600"
                  : "bg-gray-300"
              }`}
              onClick={handleShowFeaturedMedia}
            >
              Featured
            </button>
            <button
              className={`px-1.5 py-1 text-black shadow-lg hover:bg-gray-400 rounded-md ${
                toggleMediaLists
                  ? "bg-purple-500 text-white hover:bg-purple-600"
                  : "bg-gray-300"
              }`}
              onClick={handleShowMediaLists}
            >
              Favorites/Watchlists
            </button>




            <button
              className={`px-1.5 text-nowrap py-1 text-black shadow-lg hover:bg-gray-400 rounded-md ${
                toggleMovieRoulette && !selectedMedia
                  ? "bg-purple-500 text-white hover:bg-purple-600"
                  : "bg-gray-300"
              }`}
              onClick={handleShowMovieRoulette}
            >
              Movie Finder
            </button>
          </div>
          <LoginButton
            logout={logout}
            getRequestToken={getRequestToken}
            sessionId={sessionId}
          />
        </div>
      </div>

      <div
        className={`${
          mediaList.length === 0
            ? "mb-0"
            : "mb-5 grid grid-cols-5 grid-rows-4 gap-3 mt-5"
        }`}
      >
        {mediaList[0] &&
          mediaList[0].map((media) => {
            if (media.media_type === "movie" || mediaTypeFilter === "movie") {
              return (
                <div key={media.id} className="text-black ">
                  <div className="flex flex-row w-[215px] gap-2 shadow-xl p-1.5 rounded-md bg-white">
                    <img
                      // src={`https://image.tmdb.org/t/p/w154/${media.poster_path}`}
                      src={
                        media.poster_path === null
                          ? `https://cdn.vectorstock.com/i/1000v/29/33/movie-and-film-poster-design-template-background-vector-43522933.jpg`
                          : media.poster_path !== ""
                          ? `https://image.tmdb.org/t/p/w154/${media.poster_path}`
                          : `https://image.tmdb.org/t/p/w154/${media.poster_path}`
                      }
                      alt={media.title}
                      className="w-min rounded-sm shadow-lg max-h-24"
                      loading="lazy"
                    />
                    <div className="flex flex-col gap-2">
                    <div className="flex flex-col items-start justify-center w-full">
                      <p className="text-sm">{truncate(media.title)}</p>
                      <p className="text-xs text-gray-600">
                        ({media.release_date?.slice(0, -6)})
                      </p>
                    </div>


                      <div className="flex flex-row gap-1.5">
                        <button
                          className=""
                          onClick={() => handleAddToList(media.id)}
                        >
                          <MdAdd className="text-xl border-2 shadow-md rounded-md" />
                        </button>
                        {media.id &&
                          (mediaTypeFilter === "movie" ||
                            media.media_type === "movie") && (
                            <FavoriteButton
                              sessionId={sessionId}
                              accountId={accountId}
                              mediaId={media.id}
                              mediaType={"movie"} // or hardcoded: "movie" or "tv"
                              refreshFavorites={refreshFavoriteMovies}
                            />
                          )}
                        {media.id &&
                          (mediaTypeFilter === "movie" ||
                            media.media_type === "movie") && (
                            <WatchlistButton
                              sessionId={sessionId}
                              accountId={accountId}
                              mediaId={media.id}
                              mediaType={"movie"} // or "tv"
                              refreshWatchlist={refreshWatchlistMovies} // optional
                            />
                          )}
                        <button className="">
                          <IoInformationCircleOutline
                            className="text-xl border-2 shadow-md rounded-md hover:bg-gray-300"
                            onClick={() =>
                              setSelectedMedia({
                                id: media.id,
                                media_type: "movie",
                              })
                            }
                          />
                        </button>
                      </div>
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
              );
            } else if (
              media.media_type === "person" ||
              mediaTypeFilter === "person"
            ) {
              return (
                <div key={media.id}>
                  <div className="flex flex-row w-[215px] gap-2 items-center shadow-xl p-1.5 rounded-md bg-white">
                    <img
                      // https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=
                      // src={`https://image.tmdb.org/t/p/w185/${media.profile_path}`}
                      src={
                        media.profile_path === null
                          ? `https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=`
                          : media.profile_path !== ""
                          ? `https://image.tmdb.org/t/p/w185/${media.profile_path}`
                          : `https://image.tmdb.org/t/p/w185/${media.profile_path}`
                      }
                      alt={media.name}
                      className="w-min rounded-sm shadow-lg max-h-24"
                      loading="lazy"
                    />
                    <div className="flex flex-col items-start justify-center w-full">
                      <p className="text-sm">{media.name}</p>
                      <p className="text-xs text-gray-600">
                        {media.known_for_department}
                      </p>
                    </div>

                    <div className="relative">
                      <div className="flex flex-row">
                        <button className="right-0 top-6 absolute">
                          <IoInformationCircleOutline
                            className="text-2xl border-2 shadow-md rounded-md"
                            onClick={() =>
                              setSelectedMedia({
                                id: media.id,
                                media_type: "person",
                              })
                            }
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            } else if (media.media_type === "tv" || mediaTypeFilter === "tv") {
              return (
                <div key={media.id}>
                  <div className="flex flex-row w-[215px] gap-2 shadow-xl p-1.5 rounded-md bg-white">
                    <img
                      // src={`https://image.tmdb.org/t/p/w154/${media.poster_path}`}
                      src={
                        media.poster_path === null
                          ? `https://cdn.vectorstock.com/i/1000v/13/51/movie-and-film-poster-design-template-background-vector-41551351.jpg`
                          : media.poster_path !== ""
                          ? `https://image.tmdb.org/t/p/w154/${media.poster_path}`
                          : `https://image.tmdb.org/t/p/w154/${media.poster_path}`
                      }
                      alt={media.name}
                      className="w-min rounded-sm shadow-lg max-h-24"
                      loading="lazy"
                    />

                    <div className="flex flex-col gap-2">
                      <div className="flex flex-col items-start justify-center w-full">
                        <p className="text-sm">{truncate(media.name)}</p>
                        <p className="text-xs text-gray-600">
                          ({media.first_air_date?.slice(0, -6)})
                        </p>
                      </div>

                      <div className="flex flex-row gap-1.5">
                        <button className="">
                          <IoInformationCircleOutline
                            className="text-xl border-2 shadow-md rounded-md hover:bg-gray-300"
                            onClick={() =>
                              setSelectedMedia({
                                id: media.id,
                                media_type: "tv",
                              })
                            }
                          />
                        </button>
                        <div className="">
                          {(mediaTypeFilter === "tv" ||
                            media.media_type === "tv") && (
                            <FavoriteButton
                              sessionId={sessionId}
                              accountId={accountId}
                              mediaId={media.id}
                              mediaType={"tv"} // or hardcoded: "movie" or "tv"
                              refreshFavorites={refreshFavoriteTvShows}
                            />
                          )}
                        </div>
                        {(mediaTypeFilter === "tv" ||
                          media.media_type === "tv") && (
                          <WatchlistButton
                            sessionId={sessionId}
                            accountId={accountId}
                            mediaId={media.id}
                            mediaType={"tv"} // or "tv"
                            refreshWatchlist={refreshWatchlistTvShows} // optional
                          />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}

export default MediaSearch;
