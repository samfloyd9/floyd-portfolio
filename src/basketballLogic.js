// const positionColorLogic = (data) => {
//   switch (data.position) {
//     case "PG":
//       return "bg-blue-200";
//     case "SG":
//       return "bg-red-200";
//     case "SF":
//       return "bg-green-200";
//     case "PF":
//       return "bg-purple-200";
//     case "C":
//       return "bg-yellow-200";
//     default:
//       return "bg-gray-200";
//   }
// };

// const bgImageLogic = (data) => {
//   switch (data.position) {
//     case "PG":
//       return "bg-[url('https://t3.ftcdn.net/jpg/01/80/42/34/360_F_180423436_zNNzuzuXFr8v2uzyurYoNdpVOnkCjUyY.jpg')] text-white";
//     case "SG":
//       return "bg-[url('https://t3.ftcdn.net/jpg/02/83/50/58/360_F_283505879_AAiyGlpN2HGT4g7kvdGkhavhhRSPiswi.jpg')] text-white";
//     case "SF":
//       return "bg-[url('https://t4.ftcdn.net/jpg/03/03/85/23/360_F_303852309_PnDlqRxgiNbOzBJqF28NY6BVLVPOmPr1.jpg')] text-white";
//     case "PF":
//       return "bg-[url('https://t4.ftcdn.net/jpg/03/07/23/93/360_F_307239339_H1NCevU1LdJ37VEpslZuZOCZhJssljJt.jpg')] text-white";
//     case "C":
//       return "bg-[url('https://t4.ftcdn.net/jpg/01/61/68/99/360_F_161689955_EpKC0KL9j377yZPjRrmm4mc1sXxuKG9P.jpg')] bold text-lg";
//     default:
//       return "bg-gray-200";
//   }
// };

// const filteredOffChemistryLineupRating = lineup.filter((player) =>
//   player.hasOwnProperty("teamOffChemRating")
// );

// const lineupOffChemistryRatingNumber = filteredOffChemistryLineupRating.reduce(
//   function (acc, player) {
//     return acc + player.teamOffChemRating;
//   }, 0);

//   const filteredDefChemistryLineupRating = lineup.filter((player) =>
//   player.hasOwnProperty("teamDefChemRating")
// );

// const lineupDefChemistryRatingNumber = filteredDefChemistryLineupRating.reduce(
//   function (acc, player) {
//     return acc + player.teamDefChemRating;
//   }, 0);

// {
//   label: "Rnk",
//   render: function (player) {

//     // Cant pass in sortedData array cause it takes in config array

//     return (
//       <div>{data.indexOf(player) + 1}</div>
//     );
//   }
// },

// useEffect(() => {
//   document.body.addEventListener("click", (event) => {
//     const composedPath = event.composedPath();
//     const composedPathCheck = composedPath[3].outerText.slice(0, -2);
//     console.log(event.composedPath());
//   });
// }, []);

// const bgImageLogic = (data) => {
//   switch (data.position) {
//     case "PG":
//       return "bg-[url('https://t3.ftcdn.net/jpg/01/80/42/34/360_F_180423436_zNNzuzuXFr8v2uzyurYoNdpVOnkCjUyY.jpg')]";
//     case "SG":
//       return "bg-[url('https://t3.ftcdn.net/jpg/02/83/50/58/360_F_283505879_AAiyGlpN2HGT4g7kvdGkhavhhRSPiswi.jpg')]";
//     case "SF":
//       return "bg-[url('https://t4.ftcdn.net/jpg/03/03/85/23/360_F_303852309_PnDlqRxgiNbOzBJqF28NY6BVLVPOmPr1.jpg')]";
//     case "PF":
//       return "bg-[url('https://t4.ftcdn.net/jpg/03/07/23/93/360_F_307239339_H1NCevU1LdJ37VEpslZuZOCZhJssljJt.jpg')]";
//     case "C":
//       return "bg-[url('https://t4.ftcdn.net/jpg/01/61/68/99/360_F_161689955_EpKC0KL9j377yZPjRrmm4mc1sXxuKG9P.jpg')]";
//     default:
//       return "bg-gray-200";
//   }
// };
