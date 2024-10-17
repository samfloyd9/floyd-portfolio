function AltPlayerCard({ playerData }) {
  const positionStyleLogic = (data) => {
    switch (data.position) {
      case "C":
        return "px-1";
      default:
        return "";
    }
  };

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

  const playerNameLength = (playerData) => {
    if (playerData.lastName.length > 7) {
      return "text-[4px]"
    } else {
      return "text-[5px]"
    }
  }


  const renderedPlayerCard = (
    <div className="bg-black relative shadow-xl min-h-14 px-0.5 mx-auto my-auto rounded-lg">
      <div className={`p-0.5 absolute top-0 mx-auto ${positionStyleLogic(playerData)} right-0 rounded-sm text-[6px] border-0.5 bg-${playerData.teamPrimary} text-${playerData.teamSecondary} border-${playerData.teamAlternate} border-solid`}>
        {playerData.position}
      </div>
      <div className={`absolute mx-auto max-h-4 -top-0.5 left-0`}>
        <img
          alt={`${playerData.fullTeamName}`}
          src={`${playerData.teamLogo}`}
          className={`rounded-md shadow-lg max-h-4 -top-0.5 left-0`}
        />
      </div>
      <div
        className={`p-0.5 px-1 absolute left-0 bottom-0 bg-${playerData.teamPrimary} ${playerNameLength(playerData)} text-${playerData.teamSecondary} rounded-md border-${playerData.teamAlternate} w-10 text-center border-1 border-solid z-5 whitespace-nowrap my-auto`}
      >
        {playerData.hasOwnProperty("plyrPictureSrc")
          ? `${playerData.firstName.charAt(0)}. ${playerData.lastName}`
          : ""}
      </div>
      <div>
        <img
          alt="NFL Player"
          src={`${playerData.plyrHeadshotSrc}`}
          className={`rounded-md shadow-lg my-0.5 max-h-12 bg-blend-multiply`}
        />
      </div>
    </div>
  );

  const playerTemplate = (
    <div className="bg-white shadow-xl px-1.5 min-h-14 text-xs rounded-lg flex content-center justify-center text-center items-center">
      Add Plyr
    </div>
  );

  return (
    <div>
      {playerData.hasOwnProperty("teamPlayStyle") && (
        <div>
          <div
            className={`shadow-md rounded-md border border-gray-300 ${bgImageLogic(
              playerData
            )} px-[1px] py-0.5 m-0.5 flex w-12 justify-center`}
          >
            {renderedPlayerCard}
          </div>
        </div>
      )}
      {playerData.hasOwnProperty("template") && (
        <div>
          <div
            className={`shadow-md rounded-md border border-gray-300 px-[1px] py-0.5 m-0.5 flex w-12 justify-center`}
          >
            {playerTemplate}
          </div>
        </div>
      )}
    </div>
  );
}

export default AltPlayerCard;
