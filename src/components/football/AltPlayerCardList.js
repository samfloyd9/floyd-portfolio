// AltPlayerCardList.js
import AltPlayerCard from "./AltPlayerCard";

// Renders a horizontal list of AltPlayerCard components
function AltPlayerCardList({ data }) {
  // Generates a unique key for each player card
  const keyFn = (player) => {
    // Prefer using player.name, fallback to player.template string
    return player.name || player.template;
  };

  // Maps each player object to an AltPlayerCard component
  const renderedPlayerCardList = data.map((player) => (
    <AltPlayerCard key={keyFn(player)} playerData={player} />
  ));

  return (
    <div className="flex flex-row">
      {renderedPlayerCardList}
    </div>
  );
}

export default AltPlayerCardList;
