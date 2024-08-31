function PlayerCard({ data }) {

  const playerCard = data.map((player) => {
    return (
      <div>
        <div>
          <img alt={`${player.name}`} src={`${player.plyrPictureSrc}`}/>
        </div>
        <div>{player.name}</div>
        <div>{player.position}</div>
      </div>
    )
  })

  return (
    <div className="flex flex-row">
      <div className="border p-7 m-2 flex w-36 h-48">{playerCard}</div>
      <div className="border p-7 m-2 flex text-start">SG</div>
      <div className="border p-7 m-2 flex text-start">SF</div>
      <div className="border p-7 m-2 flex text-start">PF</div>
      <div className="border p-7 m-2 flex text-start">C</div>
    </div>
  );
}

export default PlayerCard;