// https://codepen.io/css_librarian/pen/mdRWVq for card idea

function FootballPlayerCard({ playerData, handleDelete }) {
  // let playerPosition = "";
  // if (playerData.position === "PG") {
  //   playerPosition = "PG";
  // } else if (playerData.position === "SG") {
  //   playerPosition = "SG";
  // } else if (playerData.position === "SF") {
  //   playerPosition = "SF";
  // } else if (playerData.position === "PF") {
  //   playerPosition = "PF";
  // } else if (playerData.position === "C") {
  //   playerPosition = "C";
  // }

  // const positionStyleLogic = (data) => {
  //   switch (data.position) {
  //     case "C":
  //       return "px-2";
  //     case "SF":
  //       return "px-1";
  //     case "PF":
  //       return "px-1";
  //     default:
  //       return "";
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

  // ${playerData.teamColor} ${playerData.teamColor2} ${positionStyleLogic(playerData)} border-${playerData.teamColor3} ----> 2nd div
  const renderedPlayerCard = (
    <div className="bg-black relative shadow-xl px-1.5 min-h-28 rounded-lg">
      <div
        className={`p-0.5 absolute top-0 right-0 rounded-md text-[9px] border-2 bg-black text-white border-gray-400 border-solid`}>
        {playerData.overallRating}
      </div>
      {/* <div className={`absolute ${playerData.teamLogoStyling}`}>
        <img
          alt={`${playerData.fullTeamName}`}
          src={`${playerData.teamLogoSrc}`}
          className={`${playerData.teamLogoStyling}} rounded-md shadow-lg`}
        />
      </div> */}
      <div className="mt-2">
        <div
          className={`p-1 absolute bottom-0 -right-1 ${playerData.teamPrimary} text-[8px] ${playerData.teamSecondary} rounded-md border-${playerData.teamAlternate} border-2 border-solid bg-black text-white border-gray-400 p-0.5 z-10 whitespace-nowrap`}
        >
          {/* {playerData.hasOwnProperty("plyrPictureSrc")
            ? `'${playerData.year.slice(-2)} ${playerData.name}`
            : ""} */}
          {/* {playerData.hasOwnProperty("plyrPictureSrc") &&
          playerData.hasOwnProperty("altName")
            ? `'${playerData.year.slice(-2)} ${playerData.altName}`
            : ""} */}
            {playerData.position} - {playerData.lastName}
        </div>
      </div>
      <div>
        <div>
          <img
            alt="NFL Player"
            src={
              playerData.hasOwnProperty("plyrCardPictureSrc")
                ? `${playerData.plyrCardPictureSrc}`
                : `${playerData.plyrPictureSrc}`
            }
            className={`rounded-md shadow-lg my-1.5 max-h-24 bg-blend-multiply`}
          />
        </div>
      </div>
    </div>
  );

  const playerTemplate = (
    <div className="bg-white shadow-xl px-1.5 min-h-28 text-xs rounded-lg flex content-center justify-center text-center items-center">
      {playerData.template}
    </div>
  );

  return (
    <div>
      {playerData.hasOwnProperty("teamPlayStyle") && (
        <div>
          <div
            className={`shadow-md rounded-xl border border-gray-300 ${bgImageLogic(playerData)} p-2 m-0.5 flex w-24 justify-center`}
          >
            {renderedPlayerCard}
          </div>
        </div>
      )}
      {playerData.hasOwnProperty("template") && (
        <div>
          <div
            className={`shadow-md rounded-xl border border-gray-300 p-2 m-0.5 flex w-24 justify-center`}
          >
            {playerTemplate}
          </div>
        </div>
      )}
    </div>
  );
}

export default FootballPlayerCard;
