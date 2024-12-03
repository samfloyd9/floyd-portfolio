import { useState, useEffect } from "react";

import { MdExpandMore } from "react-icons/md";
import { MdAdd } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import { IoInformationCircleOutline } from "react-icons/io5";

// API KEY
// 917887a11fe36d6ce72f7a4b6e8d30b0

// API TOKEN
// eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTc4ODdhMTFmZTM2ZDZjZTcyZjdhNGI2ZThkMzBiMCIsIm5iZiI6MTczMDQzMDIzOS4zMjQxNjk5LCJzdWIiOiI2NzI0M2YzOGYwOGFiNWQzZjIwMzc5NjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.TsJfsPyERUBu2TYy9qusAPDY3weAZdFaU6UrUCJ4HS4

// If release_year equals "" then put something else

// If no poster_path add a template or basic poster
// 'https://as2.ftcdn.net/v2/jpg/02/49/19/99/1000_F_249199908_wxPLWTH2NeHS13kGLzWgtFgk8gPSIxI4.jpg'

// <p>
//   Enter a search term to discover Movies, TV shows, Actors and
//   Directors!
// </p>

// <div className="gap-2 flex flex-row mt-2">
//     <button>
//       <IoInformationCircleOutline className="text-2xl border-2 shadow-md rounded-md" />
//     </button>
//     <button onClick={handleClick}>
//       <MdExpandMore className="text-2xl border-2 shadow-md rounded-md" />
//     </button>
//   </div>

// Keep this if i want altermante posters
// const [image, setImage] = useState(null);
// fetch("https://api.themoviedb.org/3/movie/11/images", options)
// .then((res) => res.json())
// .then((res) => setImage([res]))
// .then((res) => console.log(res))
// .catch((err) => console.error(err));
// {image ? (
//   <div className="flex justify-center">
//     {image.map((movieImage) => (
//       <div key={movieImage.id}>
//         <img
//           src={`https://image.tmdb.org/t/p/w342/${movieImage.posters[1].file_path}`}
//         />
//       </div>
//     ))}
//   </div>
// ) : (
//   <p>Loading...</p>
// )}

function Testing() {
  const [data, setData] = useState(11);

  const [term, setTerm] = useState("");
  const [input, setInput] = useState("");

  const [showContent, setShowContent] = useState(false);
  const [movieList, setMovieList] = useState([]);

  const [detailedMedia, setDetailedMedia] = useState([]);

  const [favoriteMovies, setFavoriteMovies] = useState([]);

  const onSubmit = (term) => {
    let inputStr = term;
    let outputStr = inputStr.replace(/ /g, "%20");

    console.log(outputStr);
    setTerm(outputStr);
  };

  const handleClick = () => {
    setShowContent(!showContent);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    onSubmit(input);
    setInput("");
  };

  const handleReset = () => {
    setTerm([]);
  };

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const getOptions = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MTc4ODdhMTFmZTM2ZDZjZTcyZjdhNGI2ZThkMzBiMCIsIm5iZiI6MTczMjA0NTY2Mi42NTAyNDMzLCJzdWIiOiI2NzI0M2YzOGYwOGFiNWQzZjIwMzc5NjIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.bJ_mBQNoAB8tyOMYMxNHLea5aLK8aQv3SO4Rj683j8Q",
    },
  };

  // useEffect(() => {
  //   fetch("https://api.themoviedb.org/3/movie/11?language=en-US", getOptions)
  //     .then((res) => res.json())
  //     .then((res) => setData([res]))
  //     .then((res) => console.log(res))
  //     .catch((err) => console.error(err));
  // }, []);




  useEffect(() => {
    if (data) {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://api.themoviedb.org/3/movie/${data}?language=en-US`, getOptions);
          const responseData = await response.json();
          setDetailedMedia([responseData]);
          console.log([responseData]);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [data]);



  useEffect(() => {
    if (term) {
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://api.themoviedb.org/3/search/multi?query=${term}&include_adult=false&language=en-US&page=1`,
            getOptions
          );
          const responseData = await response.json();
          setMovieList([responseData.results]);
          console.log([responseData.results]);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      };

      fetchData();
    }
  }, [term]);

  function convertMinutesToHoursAndMinutes(totalMinutes) {
    const hours = Math.floor(totalMinutes / 60);
    const minutes = totalMinutes % 60;

    return `${hours} hr ${minutes} min`;
  }

  const handleTitleLength = (title) => {
    if (title.length > 12) {
      return (
        <p className="text-xs">{title}</p>
      )
    } else if (title.length < 12) {
      return (
        <p className="text-lg">{title}</p>
        )
    }
  }

  return (
    <div>
      <div className="mb-5 flex flex-row">
        <div className="flex flex-row justify-center items-center content-center">
          <form onSubmit={handleFormSubmit} className="flex flex-col">
            <label className="font-bold">Enter Search Term</label>
            <div className="flex flex-row gap-5">
              <input
                value={input}
                onChange={handleChange}
                className="border border-solid border-gray-300 rounded-lg p-2 w-60"
              />
              <button
                className="w-fit mt-2 p-1 bg-gray-300 border-2 hover:bg-gray-400 rounded-lg"
                onClick={handleFormSubmit}
              >
                Search
              </button>
              <button
                className="w-fit mt-2 p-1 bg-gray-300 border-2 hover:bg-gray-400 rounded-lg"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>

      <div>
        <div className="flex flex-row gap-8 flex-wrap mb-5">
          {movieList[0] ? (
            movieList[0].map((media) => {
              if (media.media_type === "movie") {
                return (
                  <div key={media.id} className="text-black">
                    <div className="flex flex-row w-[200px] gap-2 shadow-xl p-1.5 rounded-md">
                      <img
                        // src={`https://image.tmdb.org/t/p/w154/${media.poster_path}`}
                        src={(media.poster_path === null) ? `https://cdn.vectorstock.com/i/1000v/29/33/movie-and-film-poster-design-template-background-vector-43522933.jpg` : (media.poster_path !== "") ? `https://image.tmdb.org/t/p/w154/${media.poster_path}` : `https://image.tmdb.org/t/p/w154/${media.poster_path}` }
                        alt={media.title}
                        className="w-min rounded-sm shadow-lg max-h-24"
                      />
                      <div className="flex flex-col items-start justify-center w-full">
                        <p className="text-xs">{media.title}</p>
                        <p className="text-xs text-gray-600">
                          ({media.release_date.slice(0, -6)})
                        </p>
                      </div>

                      <div className="relative">
                        <div className="flex flex-row">
                          <button className="right-5 bottom-0 absolute">
                            <MdAdd className="text-lg border-2 shadow-md rounded-md" />
                          </button>
                          <button className="right-0 bottom-0 absolute"
                          //  onClick={handleAddMovie}
                           >
                            <IoInformationCircleOutline className="text-lg border-2 shadow-md rounded-md hover:bg-gray-400" 
                           onClick={() => setData(media.id)}

                          //  const handleAddMovie = (id) => {
                          //   setData(id);
                          //   console.log(data);
                          //   handleAddMovie(media.id
                          // };

                            />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else if (media.media_type === "person") {
                return (
                  <div key={media.id}>
                    <div
                      className="flex flex-row w-[200px] gap-2 items-center shadow-xl p-1.5 rounded-md"
                    >
                      <img
                        // https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=
                        // src={`https://image.tmdb.org/t/p/w185/${media.profile_path}`}
                        src={(media.profile_path === null) ? `https://media.istockphoto.com/id/1345388323/vector/human-silhouette-isolated-vector-icon.jpg?s=612x612&w=0&k=20&c=a1wg9LYywdqDUG-t9rifrf16XEdWZbWe7ajuYxJTxEI=` : (media.profile_path !== "") ? `https://image.tmdb.org/t/p/w185/${media.profile_path}` : `https://image.tmdb.org/t/p/w185/${media.profile_path}` }
                        alt={media.name}
                        className="w-min rounded-sm shadow-lg max-h-24"
                      />
                      <div className="flex flex-col items-start justify-center w-full">
                        <p className="text-sm">{media.name}</p>
                        <p className="text-xs text-gray-600">
                          {media.known_for_department}
                        </p>
                      </div>

                      <div className="relative">
                        <div className="flex flex-row">
                          <button className="right-5 top-6 absolute">
                            <MdAdd className="text-lg border-2 shadow-md rounded-md" />
                          </button>
                          <button className="right-0 top-6 absolute">
                            <IoInformationCircleOutline className="text-lg border-2 shadow-md rounded-md" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              } else if (media.media_type === "tv") {
                return (
                  <div key={media.id}>
                    <div
                      className="flex flex-row w-[200px] gap-2 items-center shadow-xl p-1.5 rounded-md"
                    >
                      <img
                        // src={`https://image.tmdb.org/t/p/w154/${media.poster_path}`}
                        src={(media.poster_path === null) ? `https://cdn.vectorstock.com/i/1000v/13/51/movie-and-film-poster-design-template-background-vector-41551351.jpg` : (media.poster_path !== "") ? `https://image.tmdb.org/t/p/w154/${media.poster_path}` : `https://image.tmdb.org/t/p/w154/${media.poster_path}` }
                        alt={media.name}
                        className="w-min rounded-sm shadow-lg max-h-24"
                      />
                      <div className="flex flex-col items-start justify-center w-full">
                        <p className="text-sm">{media.name}</p>
                        <p className="text-xs text-gray-600">
                          ({media.first_air_date.slice(0, -6)})
                        </p>
                      </div>

                      <div className="relative">
                        <div className="flex flex-row">
                          <button className="right-5 top-8 absolute">
                            <MdAdd className="text-lg border-2 shadow-md rounded-md" />
                          </button>
                          <button className="right-0 top-8 absolute">
                            <IoInformationCircleOutline className="text-lg border-2 shadow-md rounded-md" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }
            })
          ) : (
            <div></div>
          )}
        </div>
      </div>

      <div className="flex flex-row gap-5">
        <div className="flex justify-center border-gray-500 border-2 text-black items-center text-center w-fit p-5 shadow-xl rounded-md">
          {detailedMedia && data ? (
            <div className="flex flex-row">
              {detailedMedia.map((movie) => (
                <div
                  key={movie.id}
                  className="flex flex-col justify-center w-[372px] content-center"
                >
                  <img
                    alt={movie.id}
                    src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                    className="rounded-md shadow-md"
                  />
                  <div className="flex flex-row justify-center items-center mt-2">
                    <div className="w-1/3">
                      <div className="bg-green-300 w-fit px-3 py-2 rounded-md shadow-md">
                        10
                      </div>
                    </div>

                    <div className="w-1/3">
                      <div className="flex flex-row justify-center items-center">
                        <h1 className="font-bold">
                          <div>{handleTitleLength(movie.title)}</div>
                        </h1>
                      </div>
                      <div className="flex justify-center mt-1">
                        <p className="">({movie.release_date.slice(0, -6)})</p>
                      </div>
                    </div>

                    <div className="flex flex-col w-1/3 justify-end items-end">
                      <div className="gap-2 flex flex-row">
                        <MdAdd className="text-3xl border-2 shadow-md rounded-md" />
                        <CiEdit className="text-3xl border-2 shadow-md rounded-md" />
                      </div>
                    </div>
                  </div>

                  {showContent && (
                    <div className="flex flex-col w-[372px]">
                      <p className="m-2">
                        {convertMinutesToHoursAndMinutes(movie.runtime)}
                      </p>
                      <p className="p-1 w-full">{movie.overview}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
        <div className="w-full border-2 border-gray-500 shadow-xl rounded-md">
          {detailedMedia ? (
            <div>
              {detailedMedia.map((movie) => (
                <div key={movie.id} className=""></div>
              ))}
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Testing;

// **************************************
// handleClicks for buttons and count panel
// **************************************
// const [count, setCount] = useState(0);
// const handleIncrement = () => {
//   setCount(count + 1);
// };

// const handleDecrement = () => {
//   setCount(count - 1);
// };

// const handleReset = () => {
//   setCount(0);
// };

// **************************************
// Render of the buttons and count panel
// **************************************
/* <div className="flex flex-col mt-24 w-fit justify-center">
<Panel className="w-content">{count}</Panel>
<div className="flex flex-row gap-5 mt-5">
  <Button onClick={handleIncrement} secondary rounded>
    Increment
  </Button>
  <Button onClick={handleDecrement} secondary rounded>
    Decrement
  </Button>
  <Button onClick={handleReset} danger rounded>
    Reset
  </Button>
</div>
</div> */

// Link to my old website
/* <div className="flex justify-center mt-24">
<a
  href="https://samfloyd9.github.io/"
  target="_blank"
  rel="noreferrer"
  className="hover:text-blue-500"
>
  My Old Website
</a>
</div> */
