import PlayerCard from "./PlayerCard";

function PlayerCardList({ data, handleDelete }) {
  const keyFn = (player) => {
    return player.name || player.template;
  };

  const renderedPlayerCardList = data.map((player) => {
    return (
      <PlayerCard
        key={keyFn(player)}
        handleDelete={handleDelete}
        playerData={player}
      />
    );
  });

  return <div className="flex flex-row">{renderedPlayerCardList}</div>;
}

export default PlayerCardList;
