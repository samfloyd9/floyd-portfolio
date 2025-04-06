// API KEY
// 917887a11fe36d6ce72f7a4b6e8d30b0

// API TOKEN
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTc4ODdhMTFmZTM2ZDZjZTcyZjdhNGI2ZThkMzBiMCIsIm5iZiI6MTczMDQzMDIzOS4zMjQxNjk5LCJzdWIiOiI2NzI0M2YzOGYwOGFiNWQzZjIwMzc5NjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TsJfsPyERUBu2TYy9qusAPDY3weAZdFaU6UrUCJ4HS4

import MediaPanel from "./MediaPanel";
import MediaCard from "./MediaCard";
import MediaSearch from "./MediaSearch";
import MediaLists from "./MediaLists";
import { useState, useEffect } from "react";
import { getUserLists, getAccountId, addToList, getMoviesInList, getFavoriteTvShows } from "../../api/tmdbapi";

function Testing() {
  const API_KEY = "917887a11fe36d6ce72f7a4b6e8d30b0";

  const [selectedMedia, setSelectedMedia] = useState({
    id: 11,
    media_type: "movie",
  });

  const [term, setTerm] = useState("");
  const [input, setInput] = useState("");

  const [mediaList, setMediaList] = useState([]);
  const [mediaPages, setMediaPages] = useState(null);

  const [detailedMedia, setDetailedMedia] = useState([]);
  const [tvShow, setTvShow] = useState([]);
  const [person, setPerson] = useState([]);

  const [castAndCrew, setCastAndCrew] = useState([]);
  const [tvCastAndCrew, setTvCastAndCrew] = useState([]);
  const [currentSearchPage, setCurrentSearchPage] = useState(1);

  const [showWatchlistModal, setShowWatchlistModal] = useState(false);

  const [selectedMovie, setSelectedMovie] = useState(null);

  const [favoriteTvShows, setFavoriteTvShows] = useState([]);

  const [movies, setMovies] = useState({});

  const [sessionId, setSessionId] = useState(
    localStorage.getItem("tmdb_session_id")
  );
  const [accountId, setAccountId] = useState(
    localStorage.getItem("tmdb_account_id")
  );
  // const [lists, setLists] = useState({
  //   movies: [],
  //   tvShows: [],
  // });

  const [lists, setLists] = useState([]);

  const getOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTc4ODdhMTFmZTM2ZDZjZTcyZjdhNGI2ZThkMzBiMCIsIm5iZiI6MTczMjA0NTY2Mi42NTAyNDMzLCJzdWIiOiI2NzI0M2YzOGYwOGFiNWQzZjIwMzc5NjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bJ_mBQNoAB8tyOMYMxNHLea5aLK8aQv3SO4Rj683j8Q",
    },
  };

  // selectedMedia
  useEffect(() => {
    if (selectedMedia) {
      const fetchData = async () => {
        try {
          let url = "";

          if (selectedMedia.media_type === "movie") {
            url = `https://api.themoviedb.org/3/movie/${selectedMedia.id}?language=en-US`;
          } else if (selectedMedia.media_type === "tv") {
            url = `https://api.themoviedb.org/3/tv/${selectedMedia.id}?language=en-US`;
          } else if (selectedMedia.media_type === "person") {
            url = `https://api.themoviedb.org/3/person/${selectedMedia.id}`;
          }

          if (url) {
            const response = await fetch(url, getOptions);
            const responseData = await response.json();

            if (selectedMedia.media_type === "movie") {
              setDetailedMedia([responseData]);
            } else if (selectedMedia.media_type === "tv") {
              setTvShow([responseData]);
            } else if (selectedMedia.media_type === "person") {
              setPerson([responseData]);
            }

            console.log(`${selectedMedia.media_type} details:`, [responseData]);
          }
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };
      fetchData();
      console.log("selectedMedia:", selectedMedia);
    }
  }, [selectedMedia]);

  // Search Query
  useEffect(() => {
    if (term) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/multi?query=${term}&include_adult=false&language=en-US&page=${currentSearchPage}`,
            getOptions
          );
          const responseData = await response.json();
          setMediaList([responseData.results]);
          setMediaPages(responseData);
          console.log("mediaList:", [responseData.results]);
          console.log("mediaPages:", responseData);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [term, currentSearchPage]);

  // Credits for movies
  useEffect(() => {
    if (selectedMedia && selectedMedia.media_type === "movie") {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/movie/${selectedMedia.id}/credits?language=en-US?`,
            getOptions
          );
          const responseData = await response.json();
          setCastAndCrew([responseData]);
          console.log("movie credits:", [responseData]);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [selectedMedia]);

  // Credits for tv shows
  useEffect(() => {
    if (selectedMedia && selectedMedia.media_type === "tv") {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/tv/${selectedMedia.id}/aggregate_credits?language=en-US?`,
            getOptions
          );
          const responseData = await response.json();
          setTvCastAndCrew([responseData]);
          console.log("tv credits:", [responseData]);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [selectedMedia]);

  // Get Request Token & Open TMDB Auth Page
  const getRequestToken = async () => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/authentication/token/new?api_key=${API_KEY}`
      );
      const data = await response.json();

      if (data.success) {
        // Store request token before redirecting
        localStorage.setItem("tmdb_request_token", data.request_token);

        // Open TMDB authentication page in a new tab
        window.open(
          `https://www.themoviedb.org/authenticate/${data.request_token}`,
          "_blank"
        );

        // Wait & Check for approval automatically
        setTimeout(checkForApproval, 5000); // Wait 5 seconds, then check
      } else {
        console.error("Failed to get request token:", data.status_message);
      }
    } catch (error) {
      console.error("Error fetching request token:", error);
    }
  };

  // Automatically Get Session ID After Authentication
  const checkForApproval = async () => {
    const requestToken = localStorage.getItem("tmdb_request_token");

    if (!requestToken) {
      console.error("No request token found. Please authenticate first.");
      return;
    }

    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/authentication/session/new?api_key=${API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ request_token: requestToken }),
        }
      );

      const data = await response.json();

      if (data.success) {
        setSessionId(data.session_id);
        localStorage.setItem("tmdb_session_id", data.session_id); // Store session ID
        console.log("Session ID:", data.session_id);
      } else {
        console.error("Failed to create session:", data.status_message);
      }
    } catch (error) {
      console.error("Error fetching session ID:", error);
    }
  };

  const logout = async () => {
    const sessionId = localStorage.getItem("tmdb_session_id");

    if (!sessionId) return; // No session to log out

    try {
      // (Optional) Remove session from TMDB servers
      await fetch(
        `https://api.themoviedb.org/3/authentication/session?api_key=${API_KEY}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ session_id: sessionId }),
        }
      );

      // Remove session from local storage and state
      localStorage.removeItem("tmdb_session_id");
      setSessionId(null);
      console.log("Logged out successfully from TMDB");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleAddToList = (mediaId) => {
    setSelectedMovie(mediaId);
    setShowWatchlistModal(true);
  };
  

  const handleSelectList = async (listId) => {
    console.log("Adding to List ID:", listId);
  
    const success = await addToList(sessionId, listId, selectedMovie);
  
    if (success) {
      alert('Movie added to collection!');
  
      const updatedMovies = await getMoviesInList(listId);
      setMovies((prevMovies) => ({
        ...prevMovies,
        [listId]: updatedMovies, // ✅ Update UI immediately
      }));
    } else {
      alert(`Failed to add movie`);
    }
  
    setShowWatchlistModal(false);
    setSelectedMovie(null);
  };

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

  const refreshFavoriteTvShows = () => {
    getFavoriteTvShows(sessionId, accountId).then(setFavoriteTvShows);
  };

  return (
    <div>
      <MediaSearch
        setTerm={setTerm}
        input={input}
        setInput={setInput}
        mediaList={mediaList}
        mediaPages={mediaPages}
        currentSearchPage={currentSearchPage}
        setCurrentSearchPage={setCurrentSearchPage}
        setSelectedMedia={setSelectedMedia}
        logout={logout}
        getRequestToken={getRequestToken}
        sessionId={sessionId}
        lists={lists}
        setLists={setLists}
        movies={movies}
        setMovies={setMovies}
        accountId={accountId}
        selectedMedia={selectedMedia}
        showWatchlistModal={showWatchlistModal}
        setShowWatchlistModal={setShowWatchlistModal}
        handleAddToList={handleAddToList}
        handleSelectList={handleSelectList}
        selectedMovie={selectedMovie}
        setSelectedMovie={setSelectedMovie}
        refreshFavoriteTvShows={refreshFavoriteTvShows}
      />
      <div className="flex flex-row items-center gap-5">
        <MediaCard
          detailedMedia={detailedMedia}
          tvShow={tvShow}
          person={person}
          selectedMedia={selectedMedia}
          showWatchlistModal={showWatchlistModal}
          setShowWatchlistModal={setShowWatchlistModal}
          lists={lists}
          handleAddToList={handleAddToList}
          handleSelectList={handleSelectList}
          accountId={accountId}
          sessionId={sessionId}
          refreshFavoriteTvShows={refreshFavoriteTvShows}
        />
        <MediaPanel
          detailedMedia={detailedMedia}
          castAndCrew={castAndCrew}
          tvCastAndCrew={tvCastAndCrew}
          tvShow={tvShow}
          person={person}
          selectedMedia={selectedMedia}
          setSelectedMedia={setSelectedMedia}
        />
      </div>
      <MediaLists
        sessionId={sessionId}
        setSessionId={setSessionId}
        accountId={accountId}
        setAccountId={setAccountId}
        lists={lists}
        setLists={setLists}
        movies={movies}
        setMovies={setMovies}
        setSelectedMedia={setSelectedMedia}
        favoriteTvShows={favoriteTvShows}
        setFavoriteTvShows={setFavoriteTvShows}
        refreshFavoriteTvShows={refreshFavoriteTvShows}
      />
    </div>
  );
}

export default Testing;
