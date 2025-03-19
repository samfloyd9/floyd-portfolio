import { MdAdd } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

function MediaCard({ detailedMedia, tvShow, person, selectedMedia }) {
  const handleTitleLength = (title) => {
    if (title.length > 24) {
      return <p className="text-sm">{title}</p>;
    } else if (title.length <= 24) {
      return <p className="text-lg">{title}</p>;
    } else if (title.length > 36) {
      return <p className="text-xs">{title}</p>;
    }
  };

  // If nothing is selected, don't render anything
  if (!selectedMedia) return null;

  const movieCard = (
    <div className="flex justify-center border-gray-500 border-2 text-black items-center text-center w-fit h-full p-5 shadow-xl rounded-md">
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
            />
            <div className="flex flex-row w-full justify-between content-between items-center mt-2">
              <div className="w-1/4">
                <div className="bg-green-300 w-fit px-3 py-2 rounded-md shadow-md">
                  10
                </div>
              </div>

              <div className="w-1/2">
                <div className="flex flex-row justify-center items-center">
                  <h1 className="font-bold">
                    <div>{handleTitleLength(movie.title)}</div>
                  </h1>
                </div>
                <div className="flex justify-center mt-1">
                  <p className="">({movie.release_date.slice(0, -6)})</p>
                </div>
              </div>

              <div className="flex flex-col w-1/4 justify-end items-end">
                <div className="gap-2 flex flex-row">
                  <MdAdd className="text-3xl border-2 shadow-md rounded-md" />
                  <CiEdit className="text-3xl border-2 shadow-md rounded-md" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const tvCard = (
    <div className="flex justify-center border-gray-500 border-2 text-black items-center text-center w-fit h-full p-5 shadow-xl rounded-md">
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
            />
            <div className="flex flex-row w-full justify-between content-between items-center mt-2">
              <div className="w-1/4">
                <div className="bg-green-300 w-fit px-3 py-2 rounded-md shadow-md">
                  10
                </div>
              </div>

              <div className="w-1/2">
                <div className="flex flex-row justify-center items-center">
                  <h1 className="font-bold">
                    <div>{handleTitleLength(show.name)}</div>
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
              </div>

              <div className="flex flex-col w-1/4 justify-end items-end">
                <div className="gap-2 flex flex-row">
                  <MdAdd className="text-3xl border-2 shadow-md rounded-md" />
                  <CiEdit className="text-3xl border-2 shadow-md rounded-md" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  const personCard = (
    <div className="flex justify-center border-gray-500 border-2 text-black items-center text-center w-fit h-full p-5 shadow-xl rounded-md">
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
            />
            <div className="flex flex-row w-full justify-between content-between items-center mt-2">
              <div className="w-1/4">
                <div className="bg-green-300 w-fit px-3 py-2 rounded-md shadow-md">
                  10
                </div>
              </div>

              <div className="w-1/2">
                <div className="flex flex-row justify-center items-center">
                  <div className="">
                    <h1 className="">{handleTitleLength(person.name)}</h1>
                    <h2 className="text-sm text-gray-600">
                      {handleTitleLength(person.known_for_department)}
                    </h2>
                  </div>
                </div>
                <div className="flex justify-center">
                  <p className="text-sm">
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
              </div>

              <div className="flex flex-col w-1/4 justify-end items-end">
                <div className="gap-2 flex flex-row">
                  <MdAdd className="text-3xl border-2 shadow-md rounded-md" />
                  <CiEdit className="text-3xl border-2 shadow-md rounded-md" />
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
      {(detailedMedia &&
        selectedMedia.media_type === "movie") && (movieCard)}

      {(tvShow && selectedMedia.media_type === "tv") && (tvCard)}

      {(person && selectedMedia.media_type === "person") && (personCard)}
    </div>
  );
}

export default MediaCard;
