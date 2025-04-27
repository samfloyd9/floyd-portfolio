import {
  GiInvertedDice1,
  GiInvertedDice2,
  GiInvertedDice3,
  GiInvertedDice4,
  GiInvertedDice5,
  GiInvertedDice6,
} from "react-icons/gi";

const DiceSelection = ({
  dice,
  selectedDice,
  setSelectedDice,
  selectedPawn,
  availableDice,
  setAvailableDice,
}) => {
  
  const handleDiceSelection = (diceValue, dieIndex) => {
    if (!selectedPawn) return; // Must select a pawn first
    if (!availableDice[dieIndex] && dieIndex !== "bonus") return; // Allow bonus selection manually
  
    setSelectedDice({ value: diceValue, index: dieIndex });
    console.log("Selected Dice:", diceValue, "from", dieIndex);
  };

  const getDieImage = (dieResult) => {
    switch (dieResult) {
      case 1:
        return <GiInvertedDice1 className="text-4xl" />;
      case 2:
        return <GiInvertedDice2 className="text-4xl" />;
      case 3:
        return <GiInvertedDice3 className="text-4xl" />;
      case 4:
        return <GiInvertedDice4 className="text-4xl" />;
      case 5:
        return <GiInvertedDice5 className="text-4xl" />;
      case 6:
        return <GiInvertedDice6 className="text-4xl" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col items-start">
      {Object.keys(availableDice).length > 0 && <div>Options:</div>}
      <div className="flex space-x-4">
        {/* First Die */}
        {availableDice.dieOne && (
          <button
            onClick={() => handleDiceSelection(dice.dieOne.result, "dieOne")}
            disabled={!availableDice.dieOne}
            className={`px-1 py-1 rounded border border-gray-500 ${
              selectedDice?.value === dice.dieOne.result &&
              selectedDice?.index === "dieOne"
                ? "bg-yellow-100"
                : "bg-white"
            }`}
          >
            {getDieImage(dice.dieOne.result)}
          </button>
        )}

        {/* Second Die */}
        {availableDice.dieTwo && (
          <button
            onClick={() => handleDiceSelection(dice.dieTwo.result, "dieTwo")}
            disabled={!availableDice.dieTwo}
            className={`px-1 py-1 rounded border border-gray-500 ${
              selectedDice?.value === dice.dieTwo.result &&
              selectedDice?.index === "dieTwo"
                ? "bg-yellow-100"
                : "bg-white"
            }`}
          >
            {getDieImage(dice.dieTwo.result)}
          </button>
        )}

        {/* Both Dice Combined */}
        {availableDice.both && (
          <button
            onClick={() =>
              handleDiceSelection(
                dice.dieOne.result + dice.dieTwo.result,
                "both"
              )
            }
            className={`px-1 py-1 rounded border border-gray-500 ${
              selectedDice?.value === dice.dieOne.result + dice.dieTwo.result &&
              selectedDice?.index === "both"
                ? "bg-yellow-100"
                : "bg-white"
            }`}
          >
            <div className="flex gap-1">
              {getDieImage(dice.dieOne.result)}{" "}
              {getDieImage(dice.dieTwo.result)}
            </div>
          </button>
        )}

        {/* 🎯 Bonus 20 Button */}
        {availableDice.bonus20 && (
          <button
            onClick={() =>
              handleDiceSelection(availableDice.bonus20.result, "bonus")
            }
            className={`px-2 py-2 rounded border border-green-500 font-bold text-green-700 ${
              selectedDice?.index === "bonus" ? "bg-green-200" : "bg-white"
            }`}
          >
            +20 Bonus
          </button>
        )}
      </div>
    </div>
  );
};

export default DiceSelection;
