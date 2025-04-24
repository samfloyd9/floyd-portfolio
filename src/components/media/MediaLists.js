import { IoInformationCircleOutline } from "react-icons/io5";
import { useState, useEffect } from "react";
import FavoriteButton from "./FavoriteButton";
import WatchlistButton from "./WatchlistButton";
import FavoriteSection from "./FavoriteSection";
import WatchlistSection from "./WatchlistSection";
import { IoTrashOutline } from "react-icons/io5";
import { CiEdit } from "react-icons/ci";
import { MdAdd } from "react-icons/md";

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
  toggleMediaLists,
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

  const [showRatingEdit, setShowRatingEdit] = useState({});

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
    <>
      {toggleMediaLists && (
        <div className="p-5">
          <>
            <div className="flex flex-row justify-between w-full mt-8">
              <h2 className="text-3xl text-orange-400 font-bold mb-3">
                Favorite Movies
              </h2>
              <button
                onClick={handleShowMovies}
                className="px-3 py-1 bg-orange-400 text-white rounded-md hover:bg-orange-500"
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
              <h2 className="text-3xl text-orange-400 font-bold mb-3">
                Favorite Tv Shows
              </h2>
              <button
                onClick={handleShowTvShows}
                className="px-3 py-1 bg-orange-400 text-white rounded-md hover:bg-orange-500"
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
              <h2 className="text-3xl text-purple-500 font-bold mb-3">
                Watchlist: Movies
              </h2>
              <button
                onClick={handleToggleWatchlistMovies}
                className="px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-600"
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
              <h2 className="text-3xl text-purple-500 font-bold mb-3">
                Watchlist: Tv Shows
              </h2>
              <button
                onClick={handleToggleWatchlistTvShows}
                className="px-3 py-1 bg-purple-500 text-white rounded-md hover:bg-purple-600"
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
              className="px-4 py-2 mb-5 bg-orange-400 text-white rounded-md hover:bg-orange-500"
            >
              {showCollections
                ? "Hide Movie Collections"
                : "View Movie Collections"}
            </button>
          </div>

          {/* 🔹 Movie Collections Section (Hidden by Default) */}
          {showCollections && (
            <div className="mt-8">
              <h1 className="text-2xl font-bold text-purple-500 mb-4">
                Movie Collections
              </h1>

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
                  className="ml-2 px-4 py-2 bg-purple-500 text-white rounded-md hover:bg-purple-600"
                >
                  Create Collection
                </button>
              </div>

              {/* Render Lists */}
              {lists.length > 0 ? (
                <ul className="mt-4">
                  {lists.map((list) => (
                    <li
                      key={list.id}
                      className="flex flex-col mb-3 p-2 rounded-sm"
                    >
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
                            onChange={(e) =>
                              setEditedDescription(e.target.value)
                            }
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
                              <h2 className="font-bold text-xl text-orange-400">
                                {list.name}
                              </h2>
                              <p className="text-gray-300 text-sm">
                                {list.description || "No description provided."}
                              </p>
                            </div>
                            <div className="flex gap-2 justify-center">
                              <button
                                onClick={() => handleDeleteList(list.id)}
                                className="px-1 py-0.5 bg-gray-300 text-md text-black my-0.5 rounded-md hover:bg-red-500 hover:text-white"
                              >
                                <IoTrashOutline />
                              </button>
                              <button
                                onClick={() => handleEditList(list)}
                                className="px-1 py-0.5 bg-gray-300 text-md my-0.5 text-black rounded-md hover:bg-yellow-300"
                              >
                                <CiEdit />
                              </button>
                              <button
                                onClick={() => handleViewMovies(list.id)}
                                className="px-3 py-1 bg-orange-400 text-white rounded-md hover:bg-orange-500"
                              >
                                {selectedList === list.id
                                  ? "Hide Movies"
                                  : "View Movies"}
                              </button>
                            </div>
                          </div>

                          {selectedList === list.id && (
                            <div className="mt-3 flex flex-wrap gap-1.5 mx-auto">
                              {movies[list.id]?.length > 0 ? (
                                movies[list.id]
                                  .sort(
                                    (a, b) => b.vote_average - a.vote_average
                                  )
                                  .map((movie) => (
                                    <div
                                      key={movie.id}
                                      className="border p-2 rounded-md max-w-[216px] bg-white"
                                    >
                                      <img
                                        src={
                                          movie.poster_path
                                            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
                                            : `https://via.placeholder.com/200x300?text=No+Image`
                                        }
                                        alt={movie.title}
                                        className="rounded w-[200px] h-[300px] object-cover"
                                        loading="lazy"
                                      />
                                      <div className="flex justify-between items-center mt-2">
                                        <div className="w-full">
                                          <p className="text-md font-semibold truncate">
                                            {movie.title}
                                          </p>
                                          <p className="text-xs text-gray-500">
                                            {(movie.release_date || "").slice(
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
                                                id: movie.id,
                                                media_type: "movie",
                                              })
                                            }
                                          >
                                            <IoInformationCircleOutline className="text-[26px] border rounded hover:bg-gray-300 shadow-md" />
                                          </button>
                                          <button
                                            onClick={() =>
                                              handleRemoveMovie(
                                                list.id,
                                                movie.id
                                              )
                                            }
                                            className="px-1 py-0.5 border text-[16px] text-black rounded-md hover:bg-red-500 hover:text-white"
                                          >
                                            <IoTrashOutline />
                                          </button>
                                          <FavoriteButton
                                            sessionId={sessionId}
                                            accountId={accountId}
                                            mediaId={movie.id}
                                            mediaType={"movie"}
                                            refreshFavorites={
                                              refreshFavoriteMovies
                                            }
                                          />
                                          <WatchlistButton
                                            sessionId={sessionId}
                                            accountId={accountId}
                                            mediaId={movie.id}
                                            mediaType={"movie"}
                                            refreshWatchlist={
                                              refreshFavoriteMovies
                                            }
                                          />
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
                                            showRatingEdit={
                                              !!showRatingEdit[movie.id]
                                            }
                                          />
                                        </div>
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
      )}
    </>
  );
}

export default MediaLists;
