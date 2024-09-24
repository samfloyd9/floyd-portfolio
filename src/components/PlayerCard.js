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

  const positionStyleLogic = (data) => {
    switch (data.position) {
      case "C":
        return "px-2";
      case "SF":
        return "px-1";
      case "PF":
        return "px-1";
      default:
        return "";
    }
  };

  // const positionColorLogic = (data) => {
  //   switch (data.position) {
  //     case "PG":
  //       return "bg-blue-300";
  //     case "SG":
  //       return "bg-red-300";
  //     case "SF":
  //       return "bg-green-300";
  //     case "PF":
  //       return "bg-purple-300";
  //     case "C":
  //       return "bg-yellow-300 px-2";
  //     default:
  //       return "bg-gray-200";
  //   }
  // };

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

  const bgImageLogic = (data) => {
    switch (data.cardColor) {
      case "sapphire":
        return "bg-[url('https://t3.ftcdn.net/jpg/01/80/42/34/360_F_180423436_zNNzuzuXFr8v2uzyurYoNdpVOnkCjUyY.jpg')]";
      case "ruby":
        return "bg-[url('https://t3.ftcdn.net/jpg/02/83/50/58/360_F_283505879_AAiyGlpN2HGT4g7kvdGkhavhhRSPiswi.jpg')]";
      case "emerald":
        return "bg-[url('https://t4.ftcdn.net/jpg/03/03/85/23/360_F_303852309_PnDlqRxgiNbOzBJqF28NY6BVLVPOmPr1.jpg')]";
      case "amethyst":
        return "bg-[url('https://t4.ftcdn.net/jpg/03/07/23/93/360_F_307239339_H1NCevU1LdJ37VEpslZuZOCZhJssljJt.jpg')]";
      case "diamond":
        return "bg-[url('https://t4.ftcdn.net/jpg/01/61/68/99/360_F_161689955_EpKC0KL9j377yZPjRrmm4mc1sXxuKG9P.jpg')]";
      default:
        return "bg-gray-200";
    }
  };

  // const randomPosButtonType = () => {

  // }

  let wiltStyle = "";
  if (playerData.name === "Wilt Chamberlain") {
    wiltStyle = "mt-5";
  }

  const renderedPlayerCard = (
    <div className="bg-black relative shadow-xl px-1.5 min-h-64 rounded-lg">
      <div
        className={`p-1 absolute top-0 right-0 rounded-md ${
          playerData.teamColor
        } ${playerData.teamColor2} ${positionStyleLogic(
          playerData
        )} text-md border-${playerData.teamColor3} border-2 border-solid`}
      >
        {playerPosition}
      </div>
      <div className={`absolute ${playerData.teamLogoStyling}`}>
        <img
          alt={`${playerData.fullTeamName}`}
          src={`${playerData.teamLogoSrc}`}
          className={`${playerData.teamLogoStyling}} rounded-md shadow-lg`}
        />
      </div>
      <div className="mt-2">
        <div
          className={`p-1.5 absolute bottom-0 -right-1 ${playerData.teamColor} text-sm ${playerData.teamColor2} rounded-md border-${playerData.teamColor3} border-2 border-solid p-1 text-black z-10 whitespace-nowrap`}
        >
          {playerData.hasOwnProperty("plyrPictureSrc") &&
          !playerData.hasOwnProperty("altName")
            ? `'${playerData.year.slice(-2)} ${playerData.name}`
            : ""}
          {playerData.hasOwnProperty("plyrPictureSrc") &&
          playerData.hasOwnProperty("altName")
            ? `'${playerData.year.slice(-2)} ${playerData.altName}`
            : ""}
        </div>
      </div>
      <div>
        <div>
          <img
            alt={`${playerData.name}`}
            src={
              playerData.hasOwnProperty("plyrCardPictureSrc")
                ? `${playerData.plyrCardPictureSrc}`
                : `${playerData.plyrPictureSrc}`
            }
            className={`rounded-md shadow-lg my-1.5 max-h-60 ${wiltStyle} bg-blend-multiply`}
          />
        </div>
      </div>
    </div>
  );

  const playerTemplate = (
    <div className="bg-white shadow-xl px-1.5 min-h-64 rounded-lg flex content-center justify-center text-center items-center">
      {playerData.template}
    </div>
  );

  // let currentPositionIndex = '';
  // if (playerData.position === 'Point Guard' || playerData.position === 'PG') {
  //   currentPositionIndex = 0;
  // }

  return (
    <div>
      {playerData.hasOwnProperty("plyrPictureSrc") && (
        <div>
          <div
            className={`${bgImageLogic(
              playerData
            )} shadow-md rounded-xl border border-gray-300 p-2 m-2 flex w-48 justify-center`}
          >
            {renderedPlayerCard}
          </div>
          <div className="flex justify-center">
            <button
              onClick={() => handleDelete(playerData)}
              className="bg-red-300 text-xs rounded-lg px-1"
            >
              x
            </button>
            {/* <button
              onClick={() => handleRandomPosition()}
              className="bg-green-500 text-xs rounded-lg px-1 ml-2"
            >
              ?
            </button> */}
          </div>
        </div>
      )}
      {playerData.hasOwnProperty("template") && (
        <div>
          <div
            className={`${bgImageLogic(
              playerData
            )} shadow-md rounded-xl border border-gray-300 p-2 m-2 flex w-48 justify-center`}
          >
            {playerTemplate}
          </div>
          {/* <div className="flex justify-center">
            <button
              onClick={() => handleRandomPosition()}
              className="bg-green-500 text-xs rounded-lg px-1"
            >
              ?
            </button>
          </div> */}
        </div>
      )}
    </div>
  );
}

export default PlayerCard;
