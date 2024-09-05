import Button from "./Button";

// https://codepen.io/css_librarian/pen/mdRWVq for card idea

function PlayerCard({ playerData, handleDelete }) {
  let playerPosition = "";
  if (playerData.position === "PG") {
    playerPosition = "PG";
  } else if (playerData.position === "SG") {
    playerPosition = "SG";
  } else if (playerData.position === "SF") {
    playerPosition = "SF";
  } else if (playerData.position === "PF") {
    playerPosition = "PF";
  } else if (playerData.position === "C") {
    playerPosition = "C";
  }

  const positionColorLogic = (data) => {
    switch (data.position) {
      case "PG":
        return "bg-blue-200";
      case "SG":
        return "bg-red-200";
      case "SF":
        return "bg-green-200";
      case "PF":
        return "bg-purple-200";
      case "C":
        return "bg-yellow-200";
      default:
        return "bg-gray-200";
    }
  };

  const bgImageLogic = (data) => {
    switch (data.position) {
      case "PG":
        return "bg-[url('https://t3.ftcdn.net/jpg/01/80/42/34/360_F_180423436_zNNzuzuXFr8v2uzyurYoNdpVOnkCjUyY.jpg')]";
      case "SG":
        return "bg-[url('https://t3.ftcdn.net/jpg/02/83/50/58/360_F_283505879_AAiyGlpN2HGT4g7kvdGkhavhhRSPiswi.jpg')]";
      case "SF":
        return "bg-[url('https://t4.ftcdn.net/jpg/03/03/85/23/360_F_303852309_PnDlqRxgiNbOzBJqF28NY6BVLVPOmPr1.jpg')]";
      case "PF":
        return "bg-[url('https://t4.ftcdn.net/jpg/03/07/23/93/360_F_307239339_H1NCevU1LdJ37VEpslZuZOCZhJssljJt.jpg')]";
      case "C":
        return "bg-[url('https://t4.ftcdn.net/jpg/01/61/68/99/360_F_161689955_EpKC0KL9j377yZPjRrmm4mc1sXxuKG9P.jpg')]";
      default:
        return "bg-[url('https://t4.ftcdn.net/jpg/01/61/68/99/360_F_161689955_EpKC0KL9j377yZPjRrmm4mc1sXxuKG9P.jpg')]";
    }
  };

  // Emeralnd (green) // https://t4.ftcdn.net/jpg/03/03/85/23/360_F_303852309_PnDlqRxgiNbOzBJqF28NY6BVLVPOmPr1.jpg
  // Diamond (yellow) 'https://t4.ftcdn.net/jpg/01/61/68/99/360_F_161689955_EpKC0KL9j377yZPjRrmm4mc1sXxuKG9P.jpg'
  // Ruby (red) // https://t3.ftcdn.net/jpg/02/83/50/58/360_F_283505879_AAiyGlpN2HGT4g7kvdGkhavhhRSPiswi.jpg
  // Sapphire (blue) https://t3.ftcdn.net/jpg/01/80/42/34/360_F_180423436_zNNzuzuXFr8v2uzyurYoNdpVOnkCjUyY.jpg
  // Amythest (purple )https://t4.ftcdn.net/jpg/03/07/23/93/360_F_307239339_H1NCevU1LdJ37VEpslZuZOCZhJssljJt.jpg

  const renderedPlayerCard = (
    <div className="bg-black relative shadow-xl px-2.5 rounded-lg">
      <div
        className={`px-1.5 absolute top-0 -left-0 rounded-md ${positionColorLogic(
          playerData
        )} text-xl border-black border-2 border-solid p-1 text-black`}
      >
        {playerPosition}
      </div>
      <div>
        {playerData.hasOwnProperty("plyrPictureSrc") ? (
          <img
            alt={`${playerData.name}`}
            src={
              playerData.hasOwnProperty("plyrCardPictureSrc")
                ? `${playerData.plyrCardPictureSrc}`
                : `${playerData.plyrPictureSrc}`
            }
            className="rounded-md shadow-lg"
          />
        ) : (
          ""
        )}
      </div>
      <div className="absolute top-0 right-0">
        {playerData.hasOwnProperty("plyrPictureSrc") ? (
          <img
            alt={`${playerData.fullTeamName}`}
            src={`${playerData.teamLogoSrc}`}
            className="rounded-md shadow-lg"
          />
        ) : (
          ""
        )}
      </div>
      <div className="mt-2">
        {playerData.hasOwnProperty("template") ? (
          <div className="py-20 px-5">{playerData.template}</div>
        ) : (
          ""
        )}
        <div
          className={`p-1.5 absolute bottom-0 -right-1 ${playerData.teamColor} text-sm ${playerData.teamColor2} rounded-md border-black border-2 border-solid p-1 text-black overflow-hidden whitespace-nowrap`}
        >
          {playerData.hasOwnProperty("plyrPictureSrc")
            ? `'${playerData.year.slice(-2)} ${playerData.name}`
            : ""}
        </div>
        {/* className="card" */}
        {/* <div className="uppercase relative h-80 w-52 border-solid border-red-700 border-8"> */}
        {/* className="team-logo" */}
        {/* <img alt={`${playerData.team}`} src={`${playerData.teamLogoSrc}`} className="absolute z-15 top-2.5 left-2.5"/> */}
        {/* className="player" */}
        {/* <img alt={`${playerData.name}`} src={`${playerData.plyrCardPictureSrc}`} className="absolute top-0 left-0 z-2 w-48 border-2 border-solid border-black" /> */}
        {/* className="name" */}
        {/* <div className="absolute bottom-10 right-0 w-2/3 h-8 text-center z-10 bg-yellow-400 border-solid border-black border-2"></div> */}
      </div>
    </div>
  );

  // bg-[url('https://t3.ftcdn.net/jpg/01/80/42/34/360_F_180423436_zNNzuzuXFr8v2uzyurYoNdpVOnkCjUyY.jpg')]

  return (
    <div
      className={`shadow-md rounded-xl border border-gray-300 p-2 m-2 flex w-48 justify-center`}
    >
      {renderedPlayerCard}
    </div>
  );
}

export default PlayerCard;
