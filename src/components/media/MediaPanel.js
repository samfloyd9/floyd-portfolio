import { useState } from "react";
import { languages } from "./languages";
import { IoClose } from "react-icons/io5"; // Import Close Icon
import { MdAdd } from "react-icons/md";
import KnownForSection from "./KnownForSection";
import FavoriteButton from "./FavoriteButton";
import WatchlistButton from "./WatchlistButton";
import RatingControl from "./RatingControl";
import ActorImages from "./ActorImages";

function MediaPanel({
  detailedMedia,
  castAndCrew,
  tvCastAndCrew,
  tvShow,
  person,
  selectedMedia,
  setSelectedMedia,
  accountId,
  sessionId,
  refreshFavoriteTvShows,
  refreshFavoriteMovies,
  refreshWatchlistMovies,
  refreshWatchlistTvShows,
}) {

  // const API_TOKEN = "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTc4ODdhMTFmZTM2ZDZjZTcyZjdhNGI2ZThkMzBiMCIsIm5iZiI6MTczMDQzMDIzOS4zMjQxNjk5LCJzdWIiOiI2NzI0M2YzOGYwOGFiNWQzZjIwMzc5NjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TsJfsPyERUBu2TYy9qusAPDY3weAZdFaU6UrUCJ4HS4";

  const [showFullCast, setShowFullCast] = useState(false);
  const [showFullCrew, setShowFullCrew] = useState(false);
  const [currentCastPage, setCurrentCastPage] = useState(0);
  const [currentCrewPage, setCurrentCrewPage] = useState(0);
  const [showSeasons, setShowSeasons] = useState(false);
  const [expandedSeasons, setExpandedSeasons] = useState({});
  const [showFullTvCast, setShowFullTvCast] = useState(false);
  const [showFullTvCrew, setShowFullTvCrew] = useState(false);
  const [currentTvCastPage, setCurrentTvCastPage] = useState(0);
  const [currentTvCrewPage, setCurrentTvCrewPage] = useState(0);  
  const [showRatingEdit, setShowRatingEdit] = useState(false);

  const itemsPerPage = 25; // Number of cast/crew members per page

  // function to convert movie minutes into hours
  function convertMinutesToHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours} hr ${minutes} min`;
  }

  function formatNumberWithCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  function formatDate(dateString) {
    const date = new Date(dateString);
    const month = date.getMonth() + 1; // getMonth() returns 0-11, so add 1
    const day = date.getDate();
    const year = date.getFullYear();

    return `${month}-${day}-${year}`;
  }

  function getEnglishName(languages, isoCode) {
    const language = languages.find((lang) => lang.iso_639_1 === isoCode);
    return language ? language.english_name : "Unknown Language";
  }

  // ----------------------------------------------------------------------------------------

  const toggleSeasons = () => {
    setShowSeasons(!showSeasons);
    setShowFullTvCast(false);
    setShowFullTvCrew(false);
  };

  const toggleOverview = (seasonId) => {
    setExpandedSeasons((prev) => ({
      ...prev,
      [seasonId]: !prev[seasonId], // Toggle only the clicked season
    }));
    console.log("Expanded Seasons:", expandedSeasons);
  };

  // ----------------------------------------------------------------------------------------

  // Calculate total pages
  const totalCrewPages = Math.ceil(castAndCrew[0]?.crew?.length / itemsPerPage);

  // Get the current page's crew members
  const currentCrew = castAndCrew[0]?.crew?.slice(
    currentCrewPage * itemsPerPage,
    (currentCrewPage + 1) * itemsPerPage
  );

  // Toggle entire cast visibility
  const toggleCrew = () => {
    setShowFullCrew(!showFullCrew);
    setShowFullCast(false);
    setCurrentCrewPage(0); // Reset to first page when toggling
  };

  // ----------------------------------------------------------------------------------------

  // Calculate total pages
  const totalCastPages = Math.ceil(castAndCrew[0]?.cast?.length / itemsPerPage);

  // Get the current page's cast members
  const currentCast = castAndCrew[0]?.cast?.slice(
    currentCastPage * itemsPerPage,
    (currentCastPage + 1) * itemsPerPage
  );

  // Toggle entire cast visibility
  const toggleCast = () => {
    setShowFullCast(!showFullCast);
    setShowFullCrew(false);
    setCurrentCastPage(0); // Reset to first page when toggling
  };

  // ----------------------------------------------------------------------------------------

  // Calculate total pages
  const totalTvCrewPages = Math.ceil(
    tvCastAndCrew[0]?.crew?.length / itemsPerPage
  );

  // Get the current page's crew members
  const currentTvCrew = tvCastAndCrew[0]?.crew?.slice(
    currentTvCrewPage * itemsPerPage,
    (currentTvCrewPage + 1) * itemsPerPage
  );

  // Toggle entire cast visibility
  const toggleTvCrew = () => {
    setShowFullTvCrew(!showFullTvCrew);
    setShowFullTvCast(false);
    setShowSeasons(false);
    setCurrentTvCrewPage(0); // Reset to first page when toggling
  };

  // ----------------------------------------------------------------------------------------

  // Calculate total pages
  const totalTvCastPages = Math.ceil(
    tvCastAndCrew[0]?.cast?.length / itemsPerPage
  );

  // Get the current page's cast members
  const currentTvCast = tvCastAndCrew[0]?.cast?.slice(
    currentTvCastPage * itemsPerPage,
    (currentTvCastPage + 1) * itemsPerPage
  );

  // Toggle entire cast visibility
  const toggleTvCast = () => {
    setShowFullTvCast(!showFullTvCast);
    setShowFullTvCrew(false);
    setShowSeasons(false);
    setCurrentTvCastPage(0); // Reset to first page when toggling
  };

  // ----------------------------------------------------------------------------------------

  const moviePanel = (
    <div className="relative w-full h-[600px] border-2 border-gray-500 shadow-xl rounded-md flex flex-col justify-start items-start p-3 overflow-y-scroll bg-white">
      <button
        onClick={() => setSelectedMedia(null)}
        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg z-50"
      >
        &times;
      </button>
      <div>
        {detailedMedia.map((movie) => (
          <div
            key={movie.id}
            className="flex flex-col items-center justify-center m-3 w-fit"
          >
            <div className="text-4xl">{movie.original_title}</div>
            <div className="text-xs text-gray-500">
              {movie.belongs_to_collection?.name === ""
                ? null
                : movie.belongs_to_collection?.name}
            </div>
            {movie.tagline !== "" && (
              <div className="mb-3">"{movie.tagline}"</div>
            )}
            <div
              className={`flex flex-col w-4/5 mb-5 ${
                movie.tagline === "" || movie.tagline === null ? "mt-3" : ""
              }`}
            >
              <div>Overview: </div>
              <div>"{movie.overview}"</div>
            </div>
            <div className="flex flex-row justify-around w-full">
              <div className="flex flex-col items-center justify-center m-3">
                <div className="flex flex-row gap-2.5 justify-center items-center mb-1">
                  <div className="flex flex-row gap-1 items-center">
                    <span className="mr-1">Avg Rating: </span>
                    <span className="border border-gray-300 py-0.5 px-1 rounded-md text-lg">
                      {movie.vote_average.toFixed(1)}
                    </span>
                    <div className="text-xs text-gray-700">
                      ({formatNumberWithCommas(movie.vote_count)})
                    </div>
                  </div>

                  {/* <div className="flex flex-row items-center h-full gap-2.5">
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
                  </div> */}
                </div>
                <div className="flex flex-row gap-2 justify-center items-center content-center mb-2">
                  Genre:{" "}
                  <span className="flex flex-row gap-3">
                    {movie.genres.map((genre) => (
                      <div
                        className="border border-gray-300 rounded-md px-1 py-0.5"
                        key={genre.id}
                      >
                        {genre.name}
                      </div>
                    ))}
                  </span>
                </div>
                <div className="flex flex-row gap-5 mb-2.5">
                  <div>
                    <span className="mr-1">Release Date: </span>
                    <span className="border border-gray-300 py-1 px-1.5 rounded-md">
                      {formatDate(movie.release_date)}
                    </span>
                  </div>
                  <div>
                    <span className="mr-1">Runtime: </span>
                    <span className="border border-gray-300 py-1 px-1.5 rounded-md">
                      {convertMinutesToHoursAndMinutes(movie.runtime)}
                    </span>
                  </div>
                </div>

                <div className="flex flex-row gap-5 mb-2.5">
                  <div>
                    <span className="mr-1">Revenue: </span>
                    <span className="border border-gray-300 py-1 px-1.5 rounded-md">
                      {movie.revenue === null ||
                      movie.revenue === 0 ||
                      movie.revenue === ""
                        ? "Unknown"
                        : `$${formatNumberWithCommas(movie.revenue)}`}
                    </span>
                  </div>
                  <div>
                    <span className="mr-1">Budget: </span>
                    <span className="border border-gray-300 py-1 px-1.5 rounded-md">
                      {movie.budget === null ||
                      movie.budget === 0 ||
                      movie.budget === ""
                        ? "Unknown"
                        : `$${formatNumberWithCommas(movie.budget)}`}
                    </span>
                  </div>
                </div>
                <div className="flex flex-row gap-5 mb-2.5">
                  <div>
                    <span className="mr-1">Country: </span>
                    <span className="border border-gray-300 py-1 px-1.5 rounded-md">
                      {movie.origin_country}
                    </span>
                  </div>
                  <div>
                    <span className="mr-1">Language: </span>
                    <span className="border border-gray-300 py-1 px-1.5 rounded-md">
                      {getEnglishName(languages, movie.original_language)}
                    </span>
                  </div>
                </div>
              </div>

              <img
                alt="Backdrop"
                src={
                  movie.backdrop_path === null
                    ? "https://img.freepik.com/free-vector/shiny-film-negative-cinema-background-with-text-space_1017-52787.jpg?semt=ais_hybrid"
                    : `https://image.tmdb.org/t/p/w300/${movie.backdrop_path}`
                }
                className="rounded-md shadow-md mt-5 mb-5 w-[300px]"
                loading="lazy"
              />
            </div>
            <div className="flex flex-row justify-between content-between items-center gap-1.5">
              {/* <div>Production Companies: </div> */}
              <div className="flex flex-row gap-5">
                {movie.production_companies.map((company) => (
                  <div
                    className="flex flex-row gap-2 justify-center items-center content-center"
                    key={company.id}
                  >
                    {company.logo_path ? (
                      <img
                        alt="pic"
                        src={`https://image.tmdb.org/t/p/w45/${company.logo_path}`}
                        loading="lazy"
                      />
                    ) : (
                      <img
                        alt="pic"
                        src="https://media.istockphoto.com/id/1227217409/vector/old-classic-film-camera-vector-icon-template.jpg?s=612x612&w=0&k=20&c=rxxNWwbwUJAOPWWmVSFwFaLJcnfB4bA5j5-KAFtWTjA="
                        className="w-16"
                        loading="lazy"
                      />
                    )}
                    <div className="text-xs">{company.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}

        <div className="flex flex-row gap-4 items-center">
          <div>
            <button
              onClick={toggleCast}
              className={`py-1.5 px-2 bg-gray-300 border-2 border-gray-200 text-black rounded hover:bg-gray-400 ${
                showFullCast === true
                  ? "bg-purple-500 text-white hover:bg-purple-600"
                  : ""
              }`}
            >
              {showFullCast ? "Hide Cast" : "Show Cast"}
            </button>
          </div>

          <div>
            <button
              onClick={toggleCrew}
              className={`py-1.5 px-2 bg-gray-300 border-2 border-gray-200 text-black rounded hover:bg-gray-400 ${
                showFullCrew === true
                  ? "bg-purple-500 text-white hover:bg-purple-600"
                  : ""
              }`}
            >
              {showFullCrew ? "Hide Crew" : "Show Crew"}
            </button>
          </div>
        </div>

        <div>
          <div className="mt-3">
            {showFullCast && (
              <div className="mt-3">
                <div className="grid grid-cols-5 grid-rows-5 gap-2">
                  {currentCast.map((cast) => (
                    <div
                      key={cast.id}
                      className="flex flex-row items-center gap-2"
                    >
                      <img
                        src={
                          cast.profile_path !== null
                            ? `https://image.tmdb.org/t/p/w45/${cast.profile_path}`
                            : `https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=`
                        }
                        alt="cast pic"
                        className="rounded-sm shadow-sm w-[45px]"
                        loading="lazy"
                      />
                      <div className="flex flex-col">
                        <div
                          className={`${
                            cast.name.length >= 25
                              ? "text-[3px]"
                              : cast.name.length >= 18
                              ? "text-[8px]"
                              : "text-xs"
                          } ${
                            cast.name.length >= 25
                              ? "text-ellipsis overflow-hidden"
                              : ""
                          }`}
                        >
                          {cast.character}
                        </div>
                        <div className={`text-xs text-gray-600`}>
                          {cast.name}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => setCurrentCastPage(currentCastPage - 1)}
                    disabled={currentCastPage === 0}
                    className={`p-2 rounded ${
                      currentCastPage === 0
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    Previous
                  </button>

                  <button
                    onClick={() => setCurrentCastPage(currentCastPage + 1)}
                    disabled={currentCastPage === totalCastPages - 1}
                    className={`p-2 rounded ${
                      currentCastPage === totalCastPages - 1
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    Next
                  </button>
                </div>

                <p className="mt-2 text-gray-600">
                  Page {currentCastPage + 1} of {totalCastPages}
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="">
          {showFullCrew && (
            <div>
              <div className="grid grid-cols-5 grid-rows-5 gap-2">
                {currentCrew.map((crew) => (
                  <div
                    key={crew.credit_id}
                    className="flex flex-row items-center gap-2"
                  >
                    <img
                      src={
                        crew?.profile_path === null
                          ? `https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=`
                          : `https://image.tmdb.org/t/p/w45/${crew.profile_path}`
                      }
                      alt="cast pic"
                      className={`${
                        crew?.profile_path === null ? "w-[45px]" : ""
                      } rounded-sm shadow-sm`}
                      loading="lazy"
                    />
                    <div className="flex flex-col">
                      <div className="text-sm">{crew.name}</div>
                      <div className="text-xs text-gray-600">
                        {crew.department}
                      </div>
                      <div className="text-xs text-gray-600">{crew.job}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 flex gap-2">
                <button
                  onClick={() => setCurrentCrewPage(currentCrewPage - 1)}
                  disabled={currentCrewPage === 0}
                  className={`p-2 rounded ${
                    currentCrewPage === 0
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  Previous
                </button>

                <button
                  onClick={() => setCurrentCrewPage(currentCrewPage + 1)}
                  disabled={currentCrewPage === totalCrewPages - 1}
                  className={`p-2 rounded ${
                    currentCrewPage === totalCrewPages - 1
                      ? "bg-gray-300 cursor-not-allowed"
                      : "bg-blue-500 text-white"
                  }`}
                >
                  Next
                </button>
              </div>

              <p className="mt-2 text-gray-600">
                Page {currentCrewPage + 1} of {totalCrewPages}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  const tvPanel = (
    <div className="relative w-full h-[600px] border-2 border-gray-500 shadow-xl rounded-md flex flex-col justify-start items-center p-3 overflow-y-scroll bg-white">
      <button
        onClick={() => setSelectedMedia(null)}
        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg z-50"
      >
        &times;
      </button>
      {tvShow.map((show) => (
        <div key={show.id} className="">
          <div className="flex flex-col justify-center items-center">
            <div className="text-4xl">{show.original_name}</div>
            {show.tagline !== "" && (
              <div className="mt-1 mb-3">"{show.tagline}"</div>
            )}
            <div
              className={`flex flex-col w-4/5 mb-5 ${
                show.tagline === "" || show.tagline === null ? "mt-3" : ""
              }`}
            >
              <div>Overview: </div>
              <div>"{show.overview}"</div>
            </div>
          </div>
          <div className="flex flex-row justify-around">
            <div className="flex flex-col items-center justify-center m-3">
              <div className="flex flex-row gap-1 justify-center items-center mb-1">
                <div>
                  <span className="mr-1">Avg Rating: </span>
                  <span className="border border-gray-300 py-0.5 px-1 rounded-md text-lg">
                    {show.vote_average.toFixed(1)}
                  </span>
                </div>
                <div className="text-xs text-gray-700">
                  ({formatNumberWithCommas(show.vote_count)})
                </div>
              </div>
              <div className="flex flex-row gap-5 mb-2.5">
                <div>
                  <span className="mr-1">Seasons: </span>
                  <span className="border border-gray-300 py-1 px-1.5 rounded-md">
                    {show.number_of_seasons}
                  </span>
                </div>
                <div>
                  <span className="mr-1">Episodes: </span>
                  <span className="border border-gray-300 py-1 px-1.5 rounded-md">
                    {show.number_of_episodes}
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-5 mb-2.5">
                <div>
                  <span className="mr-1">Air Dates: </span>
                  <span className="border border-gray-300 py-1 px-1.5 rounded-md">
                    {/* {formatDate(show.first_air_date)} - {formatDate(show.last_air_date)} */}
                    {show.first_air_date.slice(0, -6)} -{" "}
                    {show.last_air_date === null || show.last_air_date === ""
                      ? "Current"
                      : show.last_air_date.slice(0, -6)}
                  </span>
                </div>
                <div>
                  <span className="mr-1">Runtime: </span>
                  <span className="border border-gray-300 py-1 px-1.5 rounded-md">
                    {show.episode_run_time} mins
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-2 justify-center items-center content-center mb-2">
                Genre:{" "}
                <span className="flex flex-row gap-3">
                  {show.genres.map((genre) => (
                    <div
                      className="border border-gray-300 rounded-md px-1 py-0.5"
                      key={genre.id}
                    >
                      {genre.name}
                    </div>
                  ))}
                </span>
              </div>
              <div className="flex flex-row gap-5 mb-2.5">
                <div>
                  <span className="mr-1">Country: </span>
                  <span className="border border-gray-300 py-1 px-1.5 rounded-md">
                    {show.origin_country}
                  </span>
                </div>
                <div>
                  <span className="mr-1">Language: </span>
                  <span className="border border-gray-300 py-1 px-1.5 rounded-md">
                    {getEnglishName(languages, show.original_language)}
                  </span>
                </div>
              </div>
            </div>

            <img
              alt="Backdrop"
              src={
                show.backdrop_path === null
                  ? "https://img.freepik.com/free-vector/shiny-film-negative-cinema-background-with-text-space_1017-52787.jpg?semt=ais_hybrid"
                  : `https://image.tmdb.org/t/p/w300/${show.backdrop_path}`
              }
              loading="lazy"
              className="rounded-md shadow-sm mt-5 mb-5 w-[300px]"
            />
          </div>
          {/* <div>
                <span>Website: </span>
                <a
                  href={movie.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:underline hover:text-blue-400 border border-gray-300 py-1 px-1.5 rounded-md"
                >
                  {movie.homepage}
                </a>
              </div> */}
          <div className="flex flex-row justify-center content-center items-center gap-5 mb-5">
            {/* <div>Production Companies: </div> */}
            <div className="flex flex-row gap-5 justify-center">
              {show.networks.map((company) => (
                <div
                  className="flex flex-row gap-2 items-center content-center"
                  key={company.id}
                >
                  {company.logo_path ? (
                    <img
                      alt="pic"
                      src={`https://image.tmdb.org/t/p/w45/${company.logo_path}`}
                      loading="lazy"
                    />
                  ) : (
                    <img
                      alt="pic"
                      src="https://media.istockphoto.com/id/1227217409/vector/old-classic-film-camera-vector-icon-template.jpg?s=612x612&w=0&k=20&c=rxxNWwbwUJAOPWWmVSFwFaLJcnfB4bA5j5-KAFtWTjA="
                      className="w-16"
                      loading="lazy"
                    />
                  )}
                  <div className="text-xs">{company.name}</div>
                </div>
              ))}
            </div>
            <div className="flex flex-row flex-wrap gap-5 justify-center">
              {show.production_companies.map((company) => (
                <div
                  className="flex flex-row gap-2 justify-center items-center content-center"
                  key={company.id}
                >
                  {company.logo_path ? (
                    <img
                      alt="pic"
                      src={`https://image.tmdb.org/t/p/w45/${company.logo_path}`}
                      loading="lazy"
                    />
                  ) : (
                    <img
                      alt="pic"
                      src="https://media.istockphoto.com/id/1227217409/vector/old-classic-film-camera-vector-icon-template.jpg?s=612x612&w=0&k=20&c=rxxNWwbwUJAOPWWmVSFwFaLJcnfB4bA5j5-KAFtWTjA="
                      className="w-16"
                      loading="lazy"
                    />
                  )}
                  <div className="text-xs">{company.name}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-row gap-2 items-center">
            <div className="flex flex-row items-center content-center">
              <div>
                <button
                  onClick={toggleSeasons}
                  className={`py-1.5 px-2 bg-gray-300 border-2 border-gray-200 text-black rounded hover:bg-gray-400 ${
                    showSeasons === true
                      ? "bg-purple-500 text-white hover:bg-purple-600"
                      : ""
                  }`}
                >
                  {showSeasons ? "Hide Seasons" : "Show Seasons"}
                </button>
              </div>
            </div>

            <div className="flex flex-row items-center content-center">
              <div>
                <button
                  onClick={toggleTvCast}
                  className={`py-1.5 px-2 bg-gray-300 border-2 border-gray-200 text-black rounded hover:bg-gray-400 ${
                    showFullTvCast === true
                      ? "bg-purple-500 text-white hover:bg-purple-600"
                      : ""
                  }`}
                >
                  {showFullTvCast ? "Hide Cast" : "Show Cast"}
                </button>
              </div>
            </div>

            <div className="flex flex-row items-center content-center">
              <button
                onClick={toggleTvCrew}
                className={`py-1.5 px-2 bg-gray-300 border-2 border-gray-200 text-black rounded hover:bg-gray-400 ${
                  showFullTvCrew === true
                    ? "bg-purple-500 text-white hover:bg-purple-600"
                    : ""
                }`}
              >
                {showFullTvCrew ? "Hide Crew" : "Show Crew"}
              </button>
            </div>
          </div>

          <div className="">
            <div className="mt-3">
              {showSeasons && (
                <div className="flex w-full">
                  <div className="flex flex-col gap-2 w-full">
                    {show.seasons.map((season) => (
                      <div
                        className="flex flex-row gap-2 items-start w-full justify-center content-center"
                        key={season.id}
                      >
                        <div className="flex flex-row justify-center content-center items-center w-full gap-20">
                          <div className="flex flex-row gap-2 w-fit">
                            <div className="flex-shrink-0">
                              <img
                                alt={season.name}
                                src={
                                  season.poster_path === null ||
                                  season.poster_path === ""
                                    ? "https://cdn.vectorstock.com/i/1000v/29/33/movie-and-film-poster-design-template-background-vector-43522933.jpg"
                                    : `https://image.tmdb.org/t/p/w92/${season.poster_path}`
                                }
                                className="rounded-md w-[92px] h-auto"
                                loading="lazy"
                              />
                            </div>
                            <div className="flex flex-col gap-1 w-full">
                              <div className="flex gap-2 w-fit">
                                <div className="w-full font-bold text-nowrap">
                                  {season.name}
                                </div>
                                <div className="text-gray-600">
                                  ({season.air_date.slice(0, -6)})
                                </div>
                              </div>
                              <div>{season.episode_count} Episodes</div>
                              <button
                                className="rounded-md w-fit px-1 py-0.5 border bg-gray-300 hover:bg-gray-500 hover:cursor-pointer"
                                onClick={() => toggleOverview(season.id)}
                              >
                                Overview
                              </button>
                              <div className="border px-2 py-1 w-fit">
                                {season.vote_average}
                              </div>
                            </div>
                          </div>

                          <div className="w-full">
                            {expandedSeasons[season.id] && (
                              <div className="flex w-fit text-sm">
                                {season.overview === ""
                                  ? "None"
                                  : season.overview}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="">
            <div className="mt-3">
              {showFullTvCast && (
                <div className="mt-3">
                  <div className="grid grid-cols-5 grid-rows-5 gap-2">
                    {currentTvCast.map((cast) => (
                      <div
                        key={cast.id}
                        className="flex flex-row items-center gap-2"
                      >
                        <img
                          src={
                            cast.profile_path !== null
                              ? `https://image.tmdb.org/t/p/w45/${cast.profile_path}`
                              : `https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=`
                          }
                          alt="cast pic"
                          className="rounded-sm shadow-sm w-[45px]"
                          loading="lazy"
                        />
                        <div className="flex flex-col">
                          <div
                            className={`${
                              cast.name.length >= 25
                                ? "text-[3px]"
                                : cast.name.length >= 18
                                ? "text-[8px]"
                                : "text-xs"
                            } ${
                              cast.name.length >= 25
                                ? "text-ellipsis overflow-hidden"
                                : ""
                            }`}
                          >
                            {cast.character}
                          </div>
                          <div className={`text-xs text-gray-600`}>
                            {cast.name}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 flex gap-2">
                    <button
                      onClick={() =>
                        setCurrentTvCastPage(currentTvCastPage - 1)
                      }
                      disabled={currentTvCastPage === 0}
                      className={`p-2 rounded ${
                        currentTvCastPage === 0
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-blue-500 text-white"
                      }`}
                    >
                      Previous
                    </button>

                    <button
                      onClick={() =>
                        setCurrentTvCastPage(currentTvCastPage + 1)
                      }
                      disabled={currentTvCastPage === totalTvCastPages - 1}
                      className={`p-2 rounded ${
                        currentTvCastPage === totalTvCastPages - 1
                          ? "bg-gray-300 cursor-not-allowed"
                          : "bg-blue-500 text-white"
                      }`}
                    >
                      Next
                    </button>
                  </div>

                  <p className="mt-2 text-gray-600">
                    Page {currentTvCastPage + 1} of {totalTvCastPages}
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="mt-5">
            {showFullTvCrew && (
              <div>
                <div className="grid grid-cols-5 grid-rows-5 gap-2">
                  {currentTvCrew.map((crew) => (
                    <div
                      key={crew.credit_id}
                      className="flex flex-row items-center gap-2"
                    >
                      <img
                        src={
                          crew?.profile_path === null
                            ? `https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=`
                            : `https://image.tmdb.org/t/p/w45/${crew.profile_path}`
                        }
                        alt="cast pic"
                        className={`${
                          crew?.profile_path === null ? "w-[45px]" : ""
                        } rounded-sm shadow-sm`}
                        loading="lazy"
                      />
                      <div className="flex flex-col">
                        <div className="text-sm">{crew.name}</div>
                        <div className="text-xs text-gray-600">
                          {crew.department}
                        </div>
                        <div className="text-xs text-gray-600">{crew.job}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-4 flex gap-2">
                  <button
                    onClick={() => setCurrentTvCrewPage(currentTvCrewPage - 1)}
                    disabled={currentTvCrewPage === 0}
                    className={`p-2 rounded ${
                      currentTvCrewPage === 0
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    Previous
                  </button>

                  <button
                    onClick={() => setCurrentTvCrewPage(currentTvCrewPage + 1)}
                    disabled={currentTvCrewPage === totalTvCrewPages - 1}
                    className={`p-2 rounded ${
                      currentTvCrewPage === totalTvCrewPages - 1
                        ? "bg-gray-300 cursor-not-allowed"
                        : "bg-blue-500 text-white"
                    }`}
                  >
                    Next
                  </button>
                </div>

                <p className="mt-2 text-gray-600">
                  Page {currentTvCrewPage + 1} of {totalTvCrewPages}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const personPanel = (
    <div className="relative w-full h-full min-h-[625px] max-h-[650px] border-2 border-gray-400 shadow-xl rounded-md flex flex-col items-center p-3 overflow-y-auto bg-white">
      <button
        onClick={() => setSelectedMedia(null)}
        className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center shadow-lg z-50"
      >
        &times;
      </button>
      {person.map((person) => (
        <div
          className="flex flex-col justify-center items-center"
          key={person.id}
        >
          <div className="text-4xl ">{person.name}</div>
          <div className="text-gray-600">{person.known_for_department}</div>
          {person.biography && (
            <div className="px-5">
            <div>Biography:</div>
            <div>{person.biography}</div>
          </div>
          )}
          <div className="flex flex-row gap-2 mb-2">
          {person.birthday && (
            <div className="flex gap-2 justify-center content-center items-center">
              <div className="">Birthdate: </div>
              <div className="border border-gray-300 py-0.5 px-1 rounded-md">
                {person.birthday}
              </div>
            </div>
          )}
            {person.deathday !== null && (
              <div className="flex gap-2 justify-center content-center items-center">
                <div className="">Deathdate: </div>
                <div className="border border-gray-300 py-0.5 px-1 rounded-md">
                  {person.deathday || "Current"}
                </div>
              </div>
            )}
          </div>
          {person.place_of_birth && (
            <div className="flex gap-2 justify-center content-center items-center">
            <div className="">Place of Birth: </div>
            <div className="border border-gray-300 py-0.5 px-1 rounded-md">
              {person.place_of_birth}
            </div>
          </div>
          )}
          <KnownForSection
            personId={person.id}
            setSelectedMedia={setSelectedMedia}
          />
          <div className="text-xl font-bold">Images:</div>
          <ActorImages personId={person.id} />
        </div>
      ))}
    </div>
  );

  if (!selectedMedia) return null;

  return (
    <>
      {detailedMedia.length > 0 &&
        selectedMedia.media_type === "movie" &&
        moviePanel}
      {tvShow.length > 0 && selectedMedia.media_type === "tv" && tvPanel}
      {person.length > 0 &&
        selectedMedia.media_type === "person" &&
        personPanel}
    </>
  );
}

export default MediaPanel;

{
  /* <button
        className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-700 transition"
        onClick={() => setSelectedMedia(null)}
      >
        <IoClose size={20} />
      </button> */
}
