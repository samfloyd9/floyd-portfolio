import { IoInformationCircleOutline } from "react-icons/io5";
import { FaTrashCan } from "react-icons/fa6";
import { useState, useEffect } from "react";
import TvFavoriteButton from "./TvFavoriteButton";
import {
  createList,
  addToList,
  getUserLists,
  getAccountId,
  deleteList,
  editList,
  getMoviesInList,
  removeMovieFromList,
} from "../api/tmdbapi";

import { getFavoriteTvShows } from "../api/tmdbapi";
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
}) {
  const [listName, setListName] = useState("");
  const [listDescription, setListDescription] = useState("");

  const [editingList, setEditingList] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  const [selectedList, setSelectedList] = useState(null);
  const [showTvShows, setShowTvShows] = useState(false);

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
      getFavoriteTvShows(sessionId, accountId).then(setFavoriteTvShows);
    }
  }, [sessionId, accountId]);

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">Movie Collections</h1>

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

      {lists.length > 0 ? (
        <ul className="mt-4">
          {lists.map((list) => (
            <li key={list.id} className="flex flex-col p-2 border mb-3">
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
                  <div className="flex justify-between items-center">
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
                            className="border p-2 rounded-md max-w-[216px]"
                          >
                            <img
                              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                              alt={movie.title}
                              className="w-[200px] rounded-md"
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

      <div className="mt-8">
        <div className="flex flex-row justify-between w-full">
          <h2 className="text-2xl font-bold mb-3">Favorite TV Shows</h2>
          <button
            onClick={handleShowTvShows}
            className="px-3 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            {showTvShows ? "Hide Tv Shows" : "View Tv Shows"}
          </button>
        </div>

        {showTvShows && favoriteTvShows.length > 0 && (
          <div className="flex flex-wrap gap-1.5 mt-2">
            {favoriteTvShows
            .sort((a, b) => b.vote_average - a.vote_average)
            .map((show) => (
              <div key={show.id} className="shadow-md p-2 max-w-[216px] rounded">
                <img
                  src={
                    show.poster_path
                      ? `https://image.tmdb.org/t/p/w200/${show.poster_path}`
                      : `https://cdn.vectorstock.com/i/1000v/13/51/movie-and-film-poster-design-template-background-vector-41551351.jpg`
                  }
                  alt={show.name}
                  className="rounded w-[200px]"
                />
                <div className="flex flex-row justify-between items-center">
                  <div>
                    <p className="mt-2 text-sm font-medium max-w-[170px] flex flex-wrap">{show.name}</p>
                    <p className="text-xs text-gray-500">
                      ({show.first_air_date?.slice(0, 4)})
                    </p>
                  </div>
                  <div>
                    <RatingControl
                      sessionId={sessionId}
                      mediaId={show.id}
                      mediaType={"tv"} // "movie" or "tv"
                      showRatingEdit={false}
                    />
                  </div>
                </div>
                <div className="flex flex-row gap-2 justify-end">
                  <button
                    onClick={() =>
                      setSelectedMedia({
                        id: show.id,
                        media_type: "tv",
                      })
                    }
                  >
                    <IoInformationCircleOutline className="text-xl border-2 shadow-md rounded-md hover:bg-gray-300" />
                  </button>
                  <TvFavoriteButton
                    sessionId={sessionId}
                    accountId={accountId}
                    tvId={show.id}
                    refreshFavoriteTvShows={refreshFavoriteTvShows}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default MediaLists;
