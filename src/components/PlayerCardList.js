import PlayerCard from "./PlayerCard";
import Button from "./Button";

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

  // {data.hasOwnProperty("plyrPictureSrc") ? (  
  //   <div>
  //     <button
  //       onClick={() => handleDelete(data)}
  //       className="bg-red-500 rounded-xl px-1.5"
  //     >
  //       x
  //     </button>
  //   </div>
  // ) : (
  //   ""
  // )}

  return <div className="flex flex-row">{renderedPlayerCardList}</div>;
}

export default PlayerCardList;
