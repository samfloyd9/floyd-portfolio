import Pawn from "./Pawn";

const Nest = ({ color, pawns, handlePawnSelection, selectedPawn }) => {
  const determineNestColor = (color) => {
    if (color === "red") {
      return "bg-red-300";
    } else if (color === "blue") {
      return "bg-sky-300";
    } else if (color === "green") {
      return "bg-emerald-300";
    } else if (color === "yellow") {
      return "bg-yellow-200";
    }
  };

  return (
    <div className="w-full h-full flex justify-center items-center content-center bg-yellow-50 border border-black">
      <div
        className={`w-[95%] h-[95%] rounded-full ${determineNestColor(
          color
        )} border-2 border-black flex flex-row gap-4 justify-center content-center items-center`}
      >
        {pawns
          .filter((pawn) => pawn.location === "nest" && pawn.color === color)
          .map((pawn) => (
            <div
              key={pawn.id}
              onClick={() => handlePawnSelection(pawn)}
              className={`z-50 ${
                      selectedPawn?.id === pawn.id
                        ? "border-2 border-red-500"
                        : "cursor-pointer"
                    }`}
            >
              <Pawn color={pawn.color} />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Nest;
