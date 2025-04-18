import { IoInformationCircleOutline } from "react-icons/io5";
import { FaTrashCan } from "react-icons/fa6";
import { useState, useEffect } from "react";
import FavoriteButton from "./FavoriteButton";
import WatchlistButton from "./WatchlistButton";
import FavoriteSection from "./FavoriteSection";
import WatchlistSection from "./WatchlistSection";

import {
  createList,
  addToList,
  getUserLists,
  getAccountId,
  deleteList,
  editList,
  getMoviesInList,
  removeMovieFromList,
  getFavoriteMedia,
  getWatchlistMedia,
} from "../../api/tmdbapi";

import RatingControl from "./RatingControl";

function MediaLists({
  sessionId,
  setAccountId,
  accountId,
  setLists,
  lists,
  movies,
  setMovies,
  setSelectedMedia,
  favoriteTvShows,
  setFavoriteTvShows,
  refreshFavoriteTvShows,
  refreshFavoriteMovies,
  refreshWatchlistMovies,
  refreshWatchlistTvShows,
  favoriteMovies,
  setFavoriteMovies,
  watchlistMovies,
  setWatchlistMovies,
  watchlistTvShows,
  setWatchlistTvShows,
  handleAddToList,
}) {
  const [listName, setListName] = useState("");
  const [listDescription, setListDescription] = useState("");

  const [editingList, setEditingList] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  const [selectedList, setSelectedList] = useState(null);

  const [showCollections, setShowCollections] = useState(false);

  const [showTvShows, setShowTvShows] = useState(false);
  const [showMovies, setShowMovies] = useState(false);
  const [showWatchlistMovies, setShowWatchlistMovies] = useState(false);
  const [showWatchlistTvShows, setShowWatchlistTvShows] = useState(false);

  useEffect(() => {
    if (sessionId && !accountId) {
      getAccountId(sessionId).then((id) => {
        setAccountId(id);
        localStorage.setItem("tmdb_account_id", id);
      });
    }

    if (sessionId && accountId) {
      getUserLists(sessionId, accountId).then(setLists);
    }
  }, [sessionId, accountId]);

  const handleCreateList = async () => {
    if (!listName.trim()) {
      alert("Please enter a list name.");
      return;
    }

    const newListId = await createList(sessionId, listName, listDescription);
    if (newListId) {
      setLists([
        ...lists,
        { id: newListId, name: listName, description: listDescription },
      ]);
      setListName("");
      setListDescription("");
      alert("Collection created successfully!");
    } else {
      alert("Failed to create collection.");
    }
  };

  const handleDeleteList = async (listId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this collection?"
    );
    if (!confirmed) return;

    const success = await deleteList(sessionId, listId);
    if (success) {
      setLists(lists.filter((list) => list.id !== listId)); // Remove from state
      alert("Collection deleted successfully!");
    } else {
      alert("Failed to delete collection.");
    }
  };

  const handleEditList = (list) => {
    setEditingList(list.id);
    setEditedName(list.name);
    setEditedDescription(list.description);
  };

  const handleSaveEdit = async (listId) => {
    if (!editedName.trim()) {
      alert("Please enter a valid name.");
      return;
    }

    const newListId = await editList(
      sessionId,
      listId,
      editedName,
      editedDescription
    );
    if (newListId) {
      setLists(
        lists.map((list) =>
          list.id === listId
            ? {
                ...list,
                id: newListId,
                name: editedName,
                description: editedDescription,
              }
            : list
        )
      );
      setEditingList(null);
      alert("Collection updated successfully!");
    } else {
      alert("Failed to update collection.");
    }
  };

  const handleViewMovies = async (listId) => {
    if (movies[listId]) {
      setSelectedList(selectedList === listId ? null : listId); // Toggle visibility
      return;
    }

    const listMovies = await getMoviesInList(listId);
    setMovies({ ...movies, [listId]: listMovies });
    setSelectedList(listId);
  };

  const handleShowTvShows = () => {
    setShowTvShows(!showTvShows);
    setShowWatchlistTvShows(false);
    setShowWatchlistMovies(false);
    setShowMovies(false);
  };

  const handleShowMovies = () => {
    setShowMovies(!showMovies);
    setShowTvShows(false);
    setShowWatchlistTvShows(false);
    setShowWatchlistMovies(false);
  };

  const handleToggleCollections = () => {
    setShowCollections((prev) => !prev);
  };

  const handleToggleWatchlistMovies = () => {
    setShowWatchlistMovies((prev) => !prev);
    setShowWatchlistTvShows(false);
    setShowMovies(false);
    setShowTvShows(false);
  };

  const handleToggleWatchlistTvShows = () => {
    setShowWatchlistTvShows((prev) => !prev);
    setShowWatchlistMovies(false);
    setShowMovies(false);
    setShowTvShows(false);
  };

  const handleRemoveMovie = async (listId, movieId) => {
    const confirmed = window.confirm(
      "Are you sure you want to remove this movie?"
    );
    if (!confirmed) return;

    const success = await removeMovieFromList(sessionId, listId, movieId);
    if (success) {
      // ✅ Update UI by removing the movie from state
      setMovies((prevMovies) => ({
        ...prevMovies,
        [listId]: prevMovies[listId].filter((movie) => movie.id !== movieId),
      }));
      alert("Movie removed from collection!");
    } else {
      alert("Failed to remove movie.");
    }
  };

  useEffect(() => {
    if (sessionId && accountId) {
      getFavoriteMedia(sessionId, accountId, "tv").then(setFavoriteTvShows);
    }
  }, [sessionId, accountId]);

  useEffect(() => {
    if (sessionId && accountId) {
      getFavoriteMedia(sessionId, accountId, "movie").then(setFavoriteMovies);
    }
  }, [sessionId, accountId]);

  return (
    <div className="p-5">
      <>
        <div className="flex flex-row justify-between w-full mt-8">
          <h2 className="text-2xl font-bold mb-3">Favorite Movies</h2>
          <button
            onClick={handleShowMovies}
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {showMovies ? "Hide Movies" : "View Movies"}
          </button>
        </div>
        {showMovies && (
          <FavoriteSection
            sessionId={sessionId}
            accountId={accountId}
            mediaType="movie"
            fetchFunction={getFavoriteMedia}
            setSelectedMedia={setSelectedMedia}
            handleAddToList={handleAddToList}
          />
        )}
      </>

      <>
        <div className="flex flex-row justify-between w-full mt-8">
          <h2 className="text-2xl font-bold mb-3">Favorite Tv Shows</h2>
          <button
            onClick={handleShowTvShows}
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {showTvShows ? "Hide Tv Shows" : "View Tv Shows"}
          </button>
        </div>
        {showTvShows && (
          <FavoriteSection
            sessionId={sessionId}
            accountId={accountId}
            mediaType="tv"
            fetchFunction={getFavoriteMedia}
            setSelectedMedia={setSelectedMedia}
          />
        )}
      </>

      <>
        <div className="flex flex-row justify-between w-full mt-8">
          <h2 className="text-2xl font-bold mb-3">Watchlist: Movies</h2>
          <button
            onClick={handleToggleWatchlistMovies}
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {showWatchlistMovies ? "Hide Watchlist" : "View Watchlist"}
          </button>
        </div>
        {showWatchlistMovies && (
          <WatchlistSection
            sessionId={sessionId}
            accountId={accountId}
            fetchFunction={getWatchlistMedia}
            mediaType="movie" // or "tv"
            setSelectedMedia={setSelectedMedia}
            handleAddToList={handleAddToList}
          />
        )}
      </>

      <>
        <div className="flex flex-row justify-between w-full mt-8">
          <h2 className="text-2xl font-bold mb-3">Watchlist: Tv Shows</h2>
          <button
            onClick={handleToggleWatchlistTvShows}
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {showWatchlistTvShows ? "Hide Watchlist" : "View Watchlist"}
          </button>
        </div>
        {showWatchlistTvShows && (
          <WatchlistSection
            sessionId={sessionId}
            accountId={accountId}
            fetchFunction={getWatchlistMedia}
            mediaType="tv" // or "tv"
            setSelectedMedia={setSelectedMedia}
          />
        )}
      </>

      {/* 🔹 Toggle Button for Movie Collections */}
      <div className="mt-8">
        <button
          onClick={handleToggleCollections}
          className="px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
        >
          {showCollections
            ? "Hide Movie Collections"
            : "Show Movie Collections"}
        </button>
      </div>

      {/* 🔹 Movie Collections Section (Hidden by Default) */}
      {showCollections && (
        <div className="mt-8">
          <h1 className="text-2xl font-bold mb-4">Movie Collections</h1>

          {/* Create Collection Form */}
          <div className="mb-5">
            <input
              type="text"
              placeholder="Collection Name"
              value={listName}
              onChange={(e) => setListName(e.target.value)}
              className="p-2 border rounded-md w-64"
            />
            <input
              type="text"
              placeholder="Description (optional)"
              value={listDescription}
              onChange={(e) => setListDescription(e.target.value)}
              className="p-2 border rounded-md w-64 ml-2"
            />
            <button
              onClick={handleCreateList}
              className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Create Collection
            </button>
          </div>

          {/* Render Lists */}
          {lists.length > 0 ? (
            <ul className="mt-4">
              {lists.map((list) => (
                <li key={list.id} className="flex flex-col mb-3 p-2 rounded-sm">
                  {editingList === list.id ? (
                    <>
                      {/* Edit Mode */}
                      <input
                        type="text"
                        value={editedName}
                        onChange={(e) => setEditedName(e.target.value)}
                        className="p-2 border rounded-md w-full mb-2"
                      />
                      <textarea
                        value={editedDescription}
                        onChange={(e) => setEditedDescription(e.target.value)}
                        className="p-2 border rounded-md w-full"
                        rows="2"
                      />
                      <div className="mt-2 flex gap-2">
                        <button
                          onClick={() => handleSaveEdit(list.id)}
                          className="px-3 py-1 bg-green-500 text-white rounded-md hover:bg-green-600"
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingList(null)}
                          className="px-3 py-1 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                        >
                          Cancel
                        </button>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Display Mode */}
                      <div className="flex justify-between items-center px-4">
                        <div>
                          <h2 className="font-bold text-lg">{list.name}</h2>
                          <p className="text-gray-600 text-sm">
                            {list.description || "No description provided."}
                          </p>
                        </div>
                        <div className="flex gap-2">
                          <button
                            onClick={() => handleEditList(list)}
                            className="px-3 py-1 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => handleDeleteList(list.id)}
                            className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                          >
                            Delete
                          </button>
                          <button
                            onClick={() => handleViewMovies(list.id)}
                            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                          >
                            {selectedList === list.id
                              ? "Hide Movies"
                              : "View Movies"}
                          </button>
                        </div>
                      </div>

                      {selectedList === list.id && (
                        <div className="mt-3 flex flex-wrap gap-1.5">
                          {movies[list.id]?.length > 0 ? (
                            movies[list.id]
                              .sort((a, b) => b.vote_average - a.vote_average)
                              .map((movie) => (
                                <div
                                  key={movie.id}
                                  className="border p-2 rounded-md max-w-[216px] bg-white"
                                >
                                  <img
                                    src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                                    alt={movie.title}
                                    className="w-[200px] rounded-md"
                                    loading="lazy"
                                  />
                                  <div className="flex flex-row justify-between mt-1">
                                    {" "}
                                    <p className="text-md">{movie.title}</p>
                                    <RatingControl
                                      sessionId={sessionId}
                                      mediaId={movie.id}
                                      mediaType={"movie"} // "movie" or "tv"
                                      showRatingEdit={false}
                                    />
                                  </div>
                                  <div className="flex gap-2 justify-end items-center">
                                    <WatchlistButton
                                      sessionId={sessionId}
                                      accountId={accountId}
                                      mediaId={movie.id}
                                      mediaType={"movie"} // or "tv"
                                      refreshWatchlist={refreshWatchlistMovies} // optional
                                    />
                                    <FavoriteButton
                                      sessionId={sessionId}
                                      accountId={accountId}
                                      mediaId={movie.id}
                                      mediaType={"movie"} // or hardcoded: "movie" or "tv"
                                      refreshFavorites={refreshFavoriteMovies}
                                    />
                                    <button className="mt-2">
                                      <IoInformationCircleOutline
                                        className="text-3xl border-2 shadow-md rounded-md hover:bg-gray-500"
                                        onClick={() =>
                                          setSelectedMedia({
                                            id: movie.id,
                                            media_type: movie.media_type,
                                          })
                                        }
                                      />
                                    </button>
                                    <button
                                      onClick={() =>
                                        handleRemoveMovie(list.id, movie.id)
                                      }
                                      className="mt-2 p-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                                    >
                                      <FaTrashCan />
                                    </button>
                                  </div>
                                </div>
                              ))
                          ) : (
                            <p className="text-gray-500 text-sm">
                              No movies in this list.
                            </p>
                          )}
                        </div>
                      )}
                    </>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <p>No collections found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default MediaLists;

{
  /* 🔹 Favorite Movies Section */
}
{
  /* <div className="mt-0">
        <div className="flex flex-row justify-between w-full">
          <h2 className="text-2xl font-bold mb-3">Favorite Movies</h2>
          <button
            onClick={handleShowMovies}
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {showMovies ? "Hide Movies" : "View Movies"}
          </button>
        </div>

        {showMovies && favoriteMovies.length > 0 && (
          <>
            <div className="flex flex-wrap gap-1.5 mt-2">
              {favoriteMovies
                .sort((a, b) => b.vote_average - a.vote_average)
                .map((movie) => (
                  <div
                    key={movie.id}
                    className="shadow-md p-2 max-w-[216px] rounded bg-white"
                  >
                    <img
                      src={
                        movie.poster_path
                          ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                          : `https://cdn.vectorstock.com/i/1000v/29/33/movie-and-film-poster-design-template-background-vector-43522933.jpg`
                      }
                      alt={movie.title}
                      className="rounded w-[200px]"
                      loading="lazy"
                    />
                    <div className="flex flex-row justify-between items-center">
                      <div>
                        <p className="mt-2 text-sm font-medium max-w-[170px] flex flex-wrap">
                          {movie.title}
                        </p>
                        <p className="text-xs text-gray-500">
                          ({movie.release_date?.slice(0, 4)})
                        </p>
                      </div>
                      <RatingControl
                        sessionId={sessionId}
                        mediaId={movie.id}
                        mediaType="movie"
                        showRatingEdit={false}
                      />
                    </div>
                    <div className="flex flex-row gap-2 justify-end">
                      <button
                        className=""
                        onClick={() => handleAddToList(movie.id)}
                      >
                        <MdAdd className="text-lg border-2 shadow-md rounded-md" />
                      </button>
                      <button className="">
                        <IoInformationCircleOutline
                          className="text-lg border-2 shadow-md rounded-md hover:bg-gray-300"
                          onClick={() =>
                            setSelectedMedia({
                              id: movie.id,
                              media_type: "movie",
                            })
                          }
                        />
                      </button>
                      <FavoriteButton
                        sessionId={sessionId}
                        accountId={accountId}
                        mediaId={movie.id}
                        mediaType="movie"
                        refreshFavorites={refreshFavoriteMovies}
                      />
                    </div>
                  </div>
                ))}
            </div>
          </>
        )}
      </div> */
}

{
  /* <div className="mt-8">
        <div className="flex flex-row justify-between w-full">
          <h2 className="text-2xl font-bold mb-3">Watchlist: Movies</h2>
          <button
            onClick={handleToggleWatchlistMovies}
            className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            {showWatchlistMovies ? "Hide Movies" : "View Movies"}
          </button>
        </div>

        {showWatchlistMovies && watchlistMovies.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {watchlistMovies
              .sort((a, b) => b.vote_average - a.vote_average)
              .map((movie) => (
                <div
                  key={movie.id}
                  className="shadow-md p-2 max-w-[216px] rounded bg-white"
                >
                  <img
                    src={
                      movie.poster_path
                        ? `https://image.tmdb.org/t/p/w200/${movie.poster_path}`
                        : `https://cdn.vectorstock.com/i/1000v/29/33/movie-and-film-poster-design-template-background-vector-43522933.jpg`
                    }
                    alt={movie.title}
                    className="rounded w-[200px]"
                    loading="lazy"
                  />
                  <div className="flex flex-row justify-between items-center">
                    <div>
                      <p className="mt-2 text-sm font-medium max-w-[170px] flex flex-wrap">
                        {movie.title}
                      </p>
                      <p className="text-xs text-gray-500">
                        ({movie.release_date?.slice(0, 4)})
                      </p>
                    </div>
                    <RatingControl
                      sessionId={sessionId}
                      mediaId={movie.id}
                      mediaType="movie"
                      showRatingEdit={false}
                    />
                  </div>
                  <div className="flex flex-row gap-2 justify-end">
                    <button
                      onClick={() =>
                        setSelectedMedia({ id: movie.id, media_type: "movie" })
                      }
                    >
                      <IoInformationCircleOutline className="text-xl border-2 shadow-md rounded-md hover:bg-gray-300" />
                    </button>
                    <button
                      className=""
                      onClick={() => handleAddToList(movie.id)}
                    >
                      <MdAdd className="text-lg border-2 shadow-md rounded-md" />
                    </button>
                    <WatchlistButton
                      sessionId={sessionId}
                      accountId={accountId}
                      mediaId={movie.id}
                      mediaType="movie"
                      refreshWatchlist={refreshWatchlistMovies}
                    />
                    <FavoriteButton
                      sessionId={sessionId}
                      accountId={accountId}
                      mediaId={movie.id}
                      mediaType="movie" // or hardcoded: "movie" or "tv"
                      refreshFavorites={refreshFavoriteMovies}
                    />
                  </div>
                </div>
              ))}
          </div>
        )}
      </div> */
}

{
  /* 🔹 Favorite TV Shows Section */
}
{
  /* <div className="mt-8">
        <div className="flex flex-row justify-between w-full">
          <h2 className="text-2xl font-bold mb-3">Favorite TV Shows</h2>
          <button
            onClick={handleShowTvShows}
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {showTvShows ? "Hide TV Shows" : "View TV Shows"}
          </button>
        </div>

        {showTvShows && favoriteTvShows.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {favoriteTvShows
              .sort((a, b) => b.vote_average - a.vote_average)
              .map((show) => (
                <div
                  key={show.id}
                  className="shadow-md p-2 max-w-[216px] rounded bg-white"
                >
                  <img
                    src={
                      show.poster_path
                        ? `https://image.tmdb.org/t/p/w200/${show.poster_path}`
                        : `https://cdn.vectorstock.com/i/1000v/13/51/movie-and-film-poster-design-template-background-vector-41551351.jpg`
                    }
                    alt={show.name}
                    className="rounded w-[200px]"
                    loading="lazy"
                  />
                  <div className="flex flex-row justify-between items-center">
                    <div>
                      <p className="mt-2 text-sm font-medium max-w-[170px] flex flex-wrap">
                        {show.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        ({show.first_air_date?.slice(0, 4)})
                      </p>
                    </div>
                    <RatingControl
                      sessionId={sessionId}
                      mediaId={show.id}
                      mediaType="tv"
                      showRatingEdit={false}
                    />
                  </div>
                  <div className="flex flex-row gap-2 justify-end">
                    <button
                      onClick={() =>
                        setSelectedMedia({ id: show.id, media_type: "tv" })
                      }
                    >
                      <IoInformationCircleOutline className="text-xl border-2 shadow-md rounded-md hover:bg-gray-300" />
                    </button>
                    <FavoriteButton
                      sessionId={sessionId}
                      accountId={accountId}
                      mediaId={show.id}
                      mediaType="tv"
                      refreshFavorites={refreshFavoriteTvShows}
                    />
                  </div>
                </div>
              ))}
          </div>
        )}
      </div> */
}

{
  /* <div className="mt-8">
        <div className="flex flex-row justify-between w-full">
          <h2 className="text-2xl font-bold mb-3">Watchlist: TV Shows</h2>
          <button
            onClick={handleToggleWatchlistTvShows}
            className="px-3 py-1 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            {showWatchlistTvShows ? "Hide TV Shows" : "View TV Shows"}
          </button>
        </div>

        {showWatchlistTvShows && watchlistTvShows.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {watchlistTvShows
              .sort((a, b) => b.vote_average - a.vote_average)
              .map((show) => (
                <div
                  key={show.id}
                  className="shadow-md p-2 max-w-[216px] rounded bg-white"
                >
                  <img
                    src={
                      show.poster_path
                        ? `https://image.tmdb.org/t/p/w200/${show.poster_path}`
                        : `https://cdn.vectorstock.com/i/1000v/13/51/movie-and-film-poster-design-template-background-vector-41551351.jpg`
                    }
                    alt={show.name}
                    className="rounded w-[200px]"
                    loading="lazy"
                  />
                  <div className="flex flex-row justify-between items-center">
                    <div>
                      <p className="mt-2 text-sm font-medium max-w-[170px] flex flex-wrap">
                        {show.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        ({show.first_air_date?.slice(0, 4)})
                      </p>
                    </div>
                    <RatingControl
                      sessionId={sessionId}
                      mediaId={show.id}
                      mediaType="tv"
                      showRatingEdit={false}
                    />
                  </div>
                  <div className="flex flex-row gap-2 justify-end">
                    <button
                      onClick={() =>
                        setSelectedMedia({ id: show.id, media_type: "tv" })
                      }
                    >
                      <IoInformationCircleOutline className="text-xl border-2 shadow-md rounded-md hover:bg-gray-300" />
                    </button>
                    <WatchlistButton
                      sessionId={sessionId}
                      accountId={accountId}
                      mediaId={show.id}
                      mediaType="tv"
                      refreshWatchlist={refreshWatchlistTvShows}
                    />
                    <FavoriteButton
                      sessionId={sessionId}
                      accountId={accountId}
                      mediaId={show.id}
                      mediaType="tv" // or hardcoded: "movie" or "tv"
                      refreshFavorites={refreshFavoriteTvShows}
                    />
                  </div>
                </div>
              ))}
          </div>
        )}
      </div> */
}
