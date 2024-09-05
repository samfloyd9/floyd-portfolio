function LineupRating({ lineup }) {
  
// const totalCost = useSelector(({ cars: { data, searchTerm } }) =>
//   data
//     .filter((car) =>
//       car.name.toLowerCase().includes(searchTerm.toLowerCase())
//     )
//     .reduce((acc, car) => acc + car.cost, 0)
// );

const filteredLineupRating = lineup.filter((player) => player.hasOwnProperty('teamPassing'));

const lineupRatingNumber = filteredLineupRating.reduce( function(acc, player) {
  return acc + player.teamPassing
}, 0)

// .filter((car) =>
//         car.name.toLowerCase().includes(searchTerm.toLowerCase())
//       )

console.log(filteredLineupRating);

  return (
    <div>{lineupRatingNumber}</div>
  );
}

export default LineupRating;