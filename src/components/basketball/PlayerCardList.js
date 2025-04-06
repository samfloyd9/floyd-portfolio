// Imports the individual PlayerCard component
import PlayerCard from "./PlayerCard";

// PlayerCardList takes in a list of player data and a delete handler,
// and renders each player as a PlayerCard.
function PlayerCardList({ data, handleDelete }) {
  // Generates a unique key for each player card.
  // Uses player name if available, otherwise falls back to 'template'.
  const keyFn = (player) => {
    return player.name || player.template;
  };

  // Maps over the incoming data and returns a PlayerCard for each player.
  const renderedPlayerCardList = data.map((player) => {
    return (
      <PlayerCard
        key={keyFn(player)}               // unique key
        handleDelete={handleDelete}       // function passed to delete the player
        playerData={player}               // the player object
      />
    );
  });

  // Display the cards in a column by default, row layout on large screens
  return <div className="flex flex-col lg:flex-row">{renderedPlayerCardList}</div>;
}

export default PlayerCardList;
