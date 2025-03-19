import { useState, useEffect } from "react";
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

function MediaLists({
  sessionId,
  setAccountId,
  accountId,
  setLists,
  lists,
  movies,
  setMovies,
}) {
  const [listName, setListName] = useState("");
  const [listDescription, setListDescription] = useState("");

  const [editingList, setEditingList] = useState(null);
  const [editedName, setEditedName] = useState("");
  const [editedDescription, setEditedDescription] = useState("");

  const [selectedList, setSelectedList] = useState(null);

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
      alert("Watchlist created successfully!");
    } else {
      alert("Failed to create watchlist.");
    }
  };

  // ✅ Handle Deleting a Watchlist
  const handleDeleteList = async (listId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this watchlist?"
    );
    if (!confirmed) return;

    const success = await deleteList(sessionId, listId);
    if (success) {
      setLists(lists.filter((list) => list.id !== listId)); // Remove from state
      alert("Watchlist deleted successfully!");
    } else {
      alert("Failed to delete watchlist.");
    }
  };

  // Handle Editing a Watchlist
  const handleEditList = (list) => {
    setEditingList(list.id);
    setEditedName(list.name);
    setEditedDescription(list.description);
  };

  // Handle Saving the "Edited" Watchlist
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
      alert("Watchlist updated successfully!");
    } else {
      alert("Failed to update watchlist.");
    }
  };

  // ✅ Handle Viewing Movies in a Watchlist
  const handleViewMovies = async (listId) => {
    if (movies[listId]) {
      setSelectedList(selectedList === listId ? null : listId); // Toggle visibility
      return;
    }

    const listMovies = await getMoviesInList(listId);
    setMovies({ ...movies, [listId]: listMovies });
    setSelectedList(listId);
  };

  // ✅ Remove a movie from a watchlist
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
      alert("Movie removed from watchlist!");
    } else {
      alert("Failed to remove movie.");
    }
  };

  return (
    <div className="p-5">
      <h1 className="text-2xl font-bold mb-4">My TMDB Watchlists</h1>

      {/* Create Watchlist Form */}
      <div className="mb-5">
        <input
          type="text"
          placeholder="Watchlist Name"
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
          Create Watchlist
        </button>
      </div>

      {/* List of Watchlists */}
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

                  {/* Show Movies Inside Watchlist */}
                  {selectedList === list.id && (
                    <div className="mt-3 grid grid-cols-4 gap-3">
                      {movies[list.id]?.length > 0 ? (
                        movies[list.id].map((movie) => (
                          <div key={movie.id} className="border p-2 rounded-md">
                            <img
                              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                              alt={movie.title}
                              className="w-full rounded-md"
                            />
                            <p className="text-sm mt-1">{movie.title}</p>
                            <button
                              onClick={() =>
                                handleRemoveMovie(list.id, movie.id)
                              }
                              className="mt-2 px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                            >
                              Remove
                            </button>
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
        <p>No watchlists found.</p>
      )}
    </div>
  );
}

export default MediaLists;
