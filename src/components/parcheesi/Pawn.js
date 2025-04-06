const Pawn = ({ color }) => {
  const pawnColor =
    color === "red"
      ? "bg-red-500"
      : color === "blue"
      ? "bg-blue-500"
      : color === "green"
      ? "bg-green-600"
      : "bg-yellow-500";

  return (
    <div
      className={`w-6 h-6 rounded-full border-2 border-black ${pawnColor} flex justify-center content-center items-center shadow-md`}
    >
      <div className={`w-3 h-3 rounded-full border border-black ${pawnColor}`} ></div>
    </div>
  );
};

export default Pawn;
