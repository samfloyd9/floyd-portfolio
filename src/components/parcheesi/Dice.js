const Dice = ({ dice, rolling, selectedDice, availableDice }) => {
  return (
    <div className="flex space-x-4">
      {rolling ? (
        <>
          <div className="animate-spin text-4xl">🎲</div>
          <div className="animate-spin text-4xl">🎲</div>
        </>
      ) : (
        <>
          {/* Check if dieOne is available in the availableDice object */}
          <div
            className={`${
              !availableDice.dieOne
              // || availableDice.dieOne.value !== dice.dieOne.result
                ? "opacity-20 cursor-not-allowed"
                : ""
            }`}
          >
            {dice.dieOne.dieImg}
          </div>

          {/* Check if dieTwo is available in the availableDice object */}
          <div
            className={`${
              !availableDice.dieTwo 
              // || availableDice.dieTwo.value !== dice.dieTwo.result
                ? "opacity-20 cursor-not-allowed"
                : ""
            }`}
          >
            {dice.dieTwo.dieImg}
          </div>
        </>
      )}
    </div>
  );
};

export default Dice;