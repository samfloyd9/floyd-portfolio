// PlayerCard displays a player photo and other data like team, position, and name.
// If a player isn't selected then theres a "template" instead of a real card
// The background image is styled based on the player's "cardColor" value.
function PlayerCard({ playerData, handleDelete }) {
  // Card backgrounds mapped by card color
  const cardBackgroundMap = {
    sapphire: "bg-[url('https://t3.ftcdn.net/jpg/01/80/42/34/360_F_180423436_zNNzuzuXFr8v2uzyurYoNdpVOnkCjUyY.jpg')]",
    ruby: "bg-[url('https://t3.ftcdn.net/jpg/02/83/50/58/360_F_283505879_AAiyGlpN2HGT4g7kvdGkhavhhRSPiswi.jpg')]",
    emerald: "bg-[url('https://t4.ftcdn.net/jpg/03/03/85/23/360_F_303852309_PnDlqRxgiNbOzBJqF28NY6BVLVPOmPr1.jpg')]",
    amethyst: "bg-[url('https://t4.ftcdn.net/jpg/03/07/23/93/360_F_307239339_H1NCevU1LdJ37VEpslZuZOCZhJssljJt.jpg')]",
    diamond: "bg-[url('https://t4.ftcdn.net/jpg/01/61/68/99/360_F_161689955_EpKC0KL9j377yZPjRrmm4mc1sXxuKG9P.jpg')]",
    citrine: "bg-[url('https://i.pinimg.com/736x/c6/d1/8f/c6d18f9d3c666f01bb9fccb75d9b2bb7.jpg')]",
    canary: "bg-[url('https://i.etsystatic.com/6172334/r/il/f9f1ae/1983782947/il_570xN.1983782947_8a46.jpg')]",
    aqua: "bg-[url('https://www.waldemarjewellers.com.au/wp-content/uploads/2024/02/aqumarine-rough-gemstone.jpg')]",
  };
  
  const bgImageLogic = (player) => {
    return cardBackgroundMap[player.cardColor] || "bg-gray-200";
  };

  // function for positioning style tweaks based on position
  const positionStyleLogic = (data) => {
    switch (data.position) {
      case "C":
        return "px-2";
      case "PF":
      case "SF":
        return "px-1";
      default:
        return "";
    }
  };

  // Adjustments for specific players image alignment
  const specialPlayerOffsets = {
    "Wilt Chamberlain": "mt-5",
    "Bob Pettit": "mt-4",
    "Joel Embiid": "mt-2",
    "Jerry Lucas": "mt-7",
    "Tony Parker": "mt-3.5",
  };

  const imageOffset = specialPlayerOffsets[playerData.name] || "";

  // Card title logic
  const cardTitle = playerData.plyrPictureSrc
    ? `'${playerData.year.slice(-2)} ${
        playerData.altName || playerData.name
      }`
    : "";

  // Card layout when a player is selected
  const renderedPlayerCard = (
    <div className="bg-black relative shadow-xl px-1.5 min-h-64 rounded-lg">
      {/* Position tag in top right corner */}
      <div
        className={`p-1 absolute top-0 right-0 rounded-md ${playerData.teamColor} ${playerData.teamColor2} ${positionStyleLogic(
          playerData
        )} text-md border-${playerData.teamColor3} border-2 border-solid`}
      >
        {playerData.position}
      </div>

      {/* Team logo in background */}
      <div className={`absolute ${playerData.teamLogoStyling}`}>
        <img
          alt={playerData.fullTeamName}
          src={playerData.teamLogoSrc}
          className={playerData.teamLogoStyling}
        />
      </div>

      {/* Year + Name badge */}
      <div className="mt-2">
        <div
          className={`p-1.5 absolute bottom-0 -right-1 ${playerData.teamColor} text-sm ${playerData.teamColor2} rounded-md border-${playerData.teamColor3} border-2 border-solid p-1 text-black z-10 whitespace-nowrap`}
        >
          {cardTitle}
        </div>
      </div>

      {/* Player card image */}
      <div>
        <img
          alt={playerData.name}
          src={
            playerData.plyrCardPictureSrc || playerData.plyrPictureSrc
          }
          className={`rounded-md shadow-lg my-1.5 max-h-60 ${imageOffset} bg-blend-multiply`}
        />
      </div>
    </div>
  );

  // Layout for placeholder "template" card
  const playerTemplate = (
    <div className="bg-white shadow-xl px-1.5 min-h-64 rounded-lg flex content-center justify-center text-center items-center">
      {playerData.template}
    </div>
  );

  return (
    <div>
      {playerData.plyrPictureSrc && (
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
          </div>
        </div>
      )}

      {playerData.template && (
        <div>
          <div
            className={`${bgImageLogic(
              playerData
            )} shadow-md rounded-xl border border-gray-300 p-2 m-2 flex w-48 justify-center`}
          >
            {playerTemplate}
          </div>
        </div>
      )}
    </div>
  );
}

export default PlayerCard;
