// https://codepen.io/css_librarian/pen/mdRWVq for card idea

function FootballPlayerCard({ playerData, handleDelete }) {
  const positionStyleLogic = (data) => {
    switch (data.position) {
      case "C":
        return "px-1.5";
    }
  };


  // "bg-[url('https://t4.ftcdn.net/jpg/05/06/04/57/360_F_506045729_Jswvv9LBHIJyOqOl6CZaMp3q36XEzfu6.jpg')]"
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
      case "citrine":
        return "bg-[url('https://i.pinimg.com/736x/c6/d1/8f/c6d18f9d3c666f01bb9fccb75d9b2bb7.jpg')]";
      case "canary":
        return "bg-[url('https://www.shutterstock.com/image-photo/beautiful-yellow-sapphire-gemstoneyellow-background-260nw-694629484.jpg')]";
      default:
        return "bg-gray-200";
    }
  };

  // ${playerData.teamColor} ${playerData.teamColor2} ${positionStyleLogic(playerData)} border-${playerData.teamColor3} ----> 2nd div
  const renderedPlayerCard = (
    <div className="bg-black relative shadow-xl px-1.5 min-h-28 mx-auto max-w-[88px] rounded-lg">
      <div
        className={`p-0.5 absolute top-0 mx-auto right-0 rounded-md ${positionStyleLogic(playerData)} text-[9px] border-2 bg-${playerData.teamPrimary} text-${playerData.teamSecondary} border-${playerData.teamAlternate} border-solid`}
      >
        {playerData.position}
      </div>
      <div className={`absolute mx-auto ${playerData.teamLogoStyling}`}>
        <img
          alt={`${playerData.fullTeamName}`}
          src={`${playerData.teamLogo}`}
          className={`${playerData.teamLogoStyling}} rounded-md shadow-lg`}
        />
      </div>
      <div className="mt-2">
        <div
          className={`p-1 absolute bottom-0 -right-1 bg-${playerData.teamPrimary} text-[8px] text-${playerData.teamSecondary} rounded-md border-${playerData.teamAlternate} border-2 border-solid p-0.5 z-5 whitespace-nowrap`}
        >
          {playerData.hasOwnProperty("plyrPictureSrc")
            ? `'${playerData.year.slice(-2)} ${playerData.firstName.charAt(0)}. ${playerData.lastName}`
            : ""}
        </div>
      </div>
      <div>
        <div>
          <img
            alt="NFL Player"
            src={`${playerData.plyrPictureSrc}`}
            className={`rounded-md shadow-lg my-1.5 max-h-[100px] max-w-[100px] bg-blend-multiply`}
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
            className={`shadow-md rounded-xl border border-gray-300 ${bgImageLogic(
              playerData
            )} px-0 py-1.5 m-0.5 flex w-24 justify-center`}
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
