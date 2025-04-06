// const handleAddPlayerToLineup = (player) => {
//   if (player.position === "PG") {
//     const newLineup = [...lineup];
//     newLineup.splice(0, 1, player);
//     setLineup(newLineup);
//     console.log(newLineup);
//   } else if (player.position === "SG") {
//     const newLineup = [...lineup];
//     newLineup.splice(1, 1, player);
//     setLineup(newLineup);
//     console.log(newLineup);
//   } else if (player.position === "SF") {
//     const newLineup = [...lineup];
//     newLineup.splice(2, 1, player);
//     setLineup(newLineup);
//     console.log(newLineup);
//   } else if (player.position === "PF") {
//     const newLineup = [...lineup];
//     newLineup.splice(3, 1, player);
//     setLineup(newLineup);
//     console.log(newLineup);
//   } else if (player.position === "C") {
//     const newLineup = [...lineup];
//     newLineup.splice(4, 1, player);
//     setLineup(newLineup);
//     console.log(newLineup);
//   }
// };

// const handleDelete = (playerData) => {
//   if (playerData.position === "PG") {
//     const newLineup = [...lineup];
//     newLineup.splice(0, 1, {
//       template: "Select a PG from the list above",
//     });
//     setLineup(newLineup);
//   } else if (playerData.position === "SG") {
//     const newLineup = [...lineup];
//     newLineup.splice(1, 1, {
//       template: "Select a SG from the list above",
//     });
//     setLineup(newLineup);
//   } else if (playerData.position === "SF") {
//     const newLineup = [...lineup];
//     newLineup.splice(2, 1, {
//       template: "Select a SF from the list above",
//     });
//     setLineup(newLineup);
//   } else if (playerData.position === "PF") {
//     const newLineup = [...lineup];
//     newLineup.splice(3, 1, {
//       template: "Select a PF from the list above",
//     });
//     setLineup(newLineup);
//   } else if (playerData.position === "C") {
//     const newLineup = [...lineup];
//     newLineup.splice(4, 1, {
//       template: "Select a C from the list above",
//     });
//     setLineup(newLineup);
//   }
// };

// const handleRandomPointGuard = () => {
//   const pointGuardFilteredLineup = data.filter((player) =>
//     player.position.includes("PG")
//   );
//   const randomPointGuardIndex = Math.floor(
//     Math.random() * pointGuardFilteredLineup.length
//   );
//   const randomPointGuard = pointGuardFilteredLineup[randomPointGuardIndex];
//   const newLineup = [...lineup];
//   newLineup.splice(0, 1, randomPointGuard);
//   setLineup(newLineup);
// };

// const handleRandomShootingGuard = () => {
//   const shootingGuardFilteredLineup = data.filter((player) =>
//     player.position.includes("SG")
//   );
//   const randomShootingGuardIndex = Math.floor(
//     Math.random() * shootingGuardFilteredLineup.length
//   );
//   const randomShootingGuard =
//     shootingGuardFilteredLineup[randomShootingGuardIndex];
//   const newLineup = [...lineup];
//   newLineup.splice(1, 1, randomShootingGuard);
//   setLineup(newLineup);
// };

// const handleRandomSmallForward = () => {
//   const smallForwardFilteredLineup = data.filter((player) =>
//     player.position.includes("SF")
//   );
//   const randomSmallForwardIndex = Math.floor(
//     Math.random() * smallForwardFilteredLineup.length
//   );
//   const randomSmallForward =
//     smallForwardFilteredLineup[randomSmallForwardIndex];
//   const newLineup = [...lineup];
//   newLineup.splice(2, 1, randomSmallForward);
//   setLineup(newLineup);
// };

// const handleRandomPowerForward = () => {
//   const powerForwardFilteredLineup = data.filter((player) =>
//     player.position.includes("PF")
//   );
//   const randomPowerForwardIndex = Math.floor(
//     Math.random() * powerForwardFilteredLineup.length
//   );
//   const randomPowerForward =
//     powerForwardFilteredLineup[randomPowerForwardIndex];
//   const newLineup = [...lineup];
//   newLineup.splice(3, 1, randomPowerForward);
//   setLineup(newLineup);
// };

// const handleRandomCenter = () => {
//   const centerFilteredLineup = data.filter((player) =>
//     player.position.includes("C")
//   );
//   const randomCenterIndex = Math.floor(
//     Math.random() * centerFilteredLineup.length
//   );
//   const randomCenter = centerFilteredLineup[randomCenterIndex];
//   const newLineup = [...lineup];
//   newLineup.splice(4, 1, randomCenter);
//   setLineup(newLineup);
// };

// const handleRandomLineup = () => {
//   const pointGuardFilteredLineup = data.filter((player) =>
//     player.position.includes("PG")
//   );
//   const shootingGuardFilteredLineup = data.filter((player) =>
//     player.position.includes("SG")
//   );
//   const smallForwardFilteredLineup = data.filter((player) =>
//     player.position.includes("SF")
//   );
//   const powerForwardFilteredLineup = data.filter((player) =>
//     player.position.includes("PF")
//   );
//   const centerFilteredLineup = data.filter((player) =>
//     player.position.includes("C")
//   );
//   const randomPointGuardIndex = Math.floor(
//     Math.random() * pointGuardFilteredLineup.length
//   );
//   const randomShootingGuardIndex = Math.floor(
//     Math.random() * shootingGuardFilteredLineup.length
//   );
//   const randomSmallForwardIndex = Math.floor(
//     Math.random() * smallForwardFilteredLineup.length
//   );
//   const randomPowerForwardIndex = Math.floor(
//     Math.random() * powerForwardFilteredLineup.length
//   );
//   const randomCenterIndex = Math.floor(
//     Math.random() * centerFilteredLineup.length
//   );
//   const randomPointGuard = pointGuardFilteredLineup[randomPointGuardIndex];
//   const randomShootingGuard =
//     shootingGuardFilteredLineup[randomShootingGuardIndex];
//   const randomSmallForward =
//     smallForwardFilteredLineup[randomSmallForwardIndex];
//   const randomPowerForward =
//     powerForwardFilteredLineup[randomPowerForwardIndex];
//   const randomCenter = centerFilteredLineup[randomCenterIndex];

//   setLineup([
//     randomPointGuard,
//     randomShootingGuard,
//     randomSmallForward,
//     randomPowerForward,
//     randomCenter,
//   ]);
// };

// const filteredTotalChemistryLineupRating = lineup.filter((player) =>
// player.hasOwnProperty("teamTotalChemRating")
// );
// const lineupTotalChemistryRatingNumber =
// filteredTotalChemistryLineupRating.reduce(function (acc, player) {
//   return acc + player.teamTotalChemRating;
// }, 0);

// // ------------------------------------------------------------------------------------------

// const filteredTotalImpactLineupRating = lineup.filter((player) =>
// player.hasOwnProperty("teamTotalImpact")
// );
// const lineupTotalImpactRatingNumber = filteredTotalImpactLineupRating.reduce(
// function (acc, player) {
//   return acc + player.teamTotalImpact;
// },
// 0
// );

// const lineupChemLogic = (chemRatingNum) => {
//   if (chemRatingNum > 6) {
//     return "A+";
//   } else if (chemRatingNum <= 6 && chemRatingNum > 5.5) {
//     return "A";
//   } else if (chemRatingNum <= 5.5 && chemRatingNum > 5) {
//     return "A-";
//   } else if (chemRatingNum <= 5 && chemRatingNum > 4.5) {
//     return "B+";
//   } else if (chemRatingNum <= 4.5 && chemRatingNum > 4) {
//     return "B";
//   } else if (chemRatingNum <= 4 && chemRatingNum > 3.5) {
//     return "B-";
//   } else if (chemRatingNum <= 3.5 && chemRatingNum > 3) {
//     return "C+";
//   } else if (chemRatingNum <= 3 && chemRatingNum > 2.5) {
//     return "C";
//   } else if (chemRatingNum <= 2.5 && chemRatingNum > 2) {
//     return "C-";
//   } else if (chemRatingNum <= 2 && chemRatingNum > 1.5) {
//     return "D+";
//   } else if (chemRatingNum <= 1.5 && chemRatingNum > 1) {
//     return "D";
//   } else if (chemRatingNum <= 1 && chemRatingNum > 0.5) {
//     return "D-";
//   } else if (chemRatingNum <= 0.5) {
//     return "F";
//   }
// };

// const chemistryColorLogic = (chemRatingNum) => {
//   if (chemRatingNum > 6) {
//     return "bg-cyan-300";
//   } else if (chemRatingNum <= 6 && chemRatingNum > 5.5) {
//     return "bg-lime-600";
//   } else if (chemRatingNum <= 5.5 && chemRatingNum > 5) {
//     return "bg-lime-500";
//   } else if (chemRatingNum <= 5 && chemRatingNum > 4.5) {
//     return "bg-lime-400";
//   } else if (chemRatingNum <= 4.5 && chemRatingNum > 4) {
//     return "bg-lime-300";
//   } else if (chemRatingNum <= 4 && chemRatingNum > 3.5) {
//     return "bg-lime-200";
//   } else if (chemRatingNum <= 3.5 && chemRatingNum > 3) {
//     return "bg-yellow-200";
//   } else if (chemRatingNum <= 3 && chemRatingNum > 2.5) {
//     return "bg-yellow-300";
//   } else if (chemRatingNum <= 2.5 && chemRatingNum > 2) {
//     return "bg-yellow-400";
//   } else if (chemRatingNum <= 2 && chemRatingNum > 1.5) {
//     return "bg-amber-500";
//   } else if (chemRatingNum <= 1.5 && chemRatingNum > 1) {
//     return "bg-orange-400";
//   } else if (chemRatingNum <= 1 && chemRatingNum > 0.5) {
//     return "bg-orange-500-";
//   } else if (chemRatingNum <= 0.5) {
//     return "bg-red-500";
//   }
// };

// const tsColorLogic = (data) => {
//   if (data.ts > 0) {
//     return <div className="text-green-700">+{data.ts.toFixed(1)}</div>;
//   } else if (data.ts === 0) {
//     return <div className="text-yellow-500">{data.ts.toFixed(1)}</div>;
//   } else if (data.ts < 0) {
//     return <div className="text-red-600">{data.ts.toFixed(1)}</div>;
//   }
// };

// const badgeColorLogic = (data) => {
//   switch (data) {
//     case "goat":
//       // return "bg-cyan-300";
//       return "bg-rose-600";
//     case "hof":
//       return "bg-purple-400";
//     case "gold":
//       return "bg-yellow-400";
//     case "silver":
//       return "bg-slate-300";
//     case "bronze":
//       return "bg-yellow-600";
//     default:
//       return "bg-gray-200";
//   }
// };