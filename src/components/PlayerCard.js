import Button from "./Button";

function PlayerCard({ playerData, handleDelete }) {
  const renderedPlayerCard = (
    <div>
      <div>
        { playerData.hasOwnProperty() ? <img alt={`${playerData.name}`} src={`${playerData.plyrPictureSrc}`}/> : "" }
      </div>
      <div>{playerData.name}</div>
      <div>{playerData.position}</div>
      <Button onClick={() => handleDelete(playerData)} className="bg-red-300 rounded-xl">x</Button>
    </div>
  );

  return (
    <div className="border p-7 m-2 flex w-36">{renderedPlayerCard}</div>
  );
}

export default PlayerCard;