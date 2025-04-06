import AltPlayerCard from "./AltPlayerCard";

function AltPlayerCardList({ data }) {
  const keyFn = (player) => {
    return player.name || player.template;
  };

  const renderedPlayerCardList = data.map((player) => {
    return (
      <AltPlayerCard
        key={keyFn(player)}
        playerData={player}
      />
    );
  });

  return <div className={`flex flex-row`}>{renderedPlayerCardList}</div>;
}

export default AltPlayerCardList;
