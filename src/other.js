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

//////////////////////////////////////////////////////

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

// useEffect(() => {
//   fetch("https://api.themoviedb.org/3/movie/11?language=en-US", getOptions)
//     .then((res) => res.json())
//     .then((res) => setData([res]))
//     .then((res) => console.log(res))
//     .catch((err) => console.error(err));
// }, []);
