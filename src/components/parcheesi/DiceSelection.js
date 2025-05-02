import { useState } from "react";
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
  pawns,
}) => {
  const [chunkSelection, setChunkSelection] = useState([]);

  const handleDiceSelection = (diceValue, dieIndex) => {
    if (!selectedPawn) return;
    if (!availableDice[dieIndex] && !["bonus", "bonus10"].includes(dieIndex))
      return;

    setSelectedDice({ value: diceValue, index: dieIndex });
    console.log("value:", diceValue, "index:", dieIndex);
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

  const handleChunkSelect = (chunkKey) => {
    if (!availableDice[chunkKey]) return;
    if (chunkSelection.includes(chunkKey)) return;
    setChunkSelection([...chunkSelection, chunkKey]);
  };

  const clearSelection = () => {
    setChunkSelection([]);
    setSelectedDice(null);
  };

  const confirmChunkSelection = () => {
    const total = chunkSelection.reduce(
      (sum, key) =>
        availableDice[key] ? sum + availableDice[key].result : sum,
      0
    );
    const moveIndex = `combo_${chunkSelection.join("_")}`;

    setSelectedDice({
      value: total,
      index: moveIndex,
      chunks: [...chunkSelection],
    });

    setChunkSelection([]); // Clear UI buttons but keep selectedDice
  };

  const renderChunkButton = (key) => {
    const isSelected =
      chunkSelection.includes(key) ||
      (selectedDice?.chunks && selectedDice.chunks.includes(key));
    const chunk = availableDice[key];
    return (
      <button
        key={key}
        onClick={() => handleChunkSelect(key)}
        className={`px-2 py-2 rounded border border-purple-500 font-bold text-purple-700 ${
          isSelected ? "bg-purple-200" : "bg-white"
        }`}
      >
        {getDieImage(chunk.result)}
      </button>
    );
  };

  const totalSelected = chunkSelection.reduce((sum, key) => {
    const chunk = availableDice[key];
    return chunk ? sum + chunk.result : sum;
  }, 0);

  return (
    <div className="flex flex-col items-start space-y-3">
      {Object.keys(availableDice).length > 0 && <div>Options:</div>}

      <div className="flex flex-wrap gap-2">
        {/* Regular dice */}
        {availableDice.dieOne && (
          <button
            onClick={() => handleDiceSelection(dice.dieOne.result, "dieOne")}
            className={`px-1 py-1 rounded border border-gray-500 ${
              selectedDice?.index === "dieOne" ? "bg-yellow-100" : "bg-white"
            }`}
          >
            {getDieImage(dice.dieOne.result)}
          </button>
        )}

        {availableDice.dieTwo && (
          <button
            onClick={() => handleDiceSelection(dice.dieTwo.result, "dieTwo")}
            className={`px-1 py-1 rounded border border-gray-500 ${
              selectedDice?.index === "dieTwo" ? "bg-yellow-100" : "bg-white"
            }`}
          >
            {getDieImage(dice.dieTwo.result)}
          </button>
        )}

        {availableDice.both && (
          <button
            onClick={() =>
              handleDiceSelection(
                dice.dieOne.result + dice.dieTwo.result,
                "both"
              )
            }
            disabled={
              selectedPawn &&
              pawns.some(
                (p) => p.color === selectedPawn.color && p.location === "nest"
              ) &&
              (dice.dieOne.result === 5 || dice.dieTwo.result === 5)
            }
            className={`px-1 py-1 rounded border border-gray-500 ${
              selectedDice?.index === "both" ? "bg-yellow-100" : "bg-white"
            } ${
              selectedPawn &&
              pawns.some(
                (p) => p.color === selectedPawn.color && p.location === "nest"
              ) &&
              (dice.dieOne.result === 5 || dice.dieTwo.result === 5)
                ? "opacity-30 cursor-not-allowed"
                : ""
            }`}
          >
            <div className="flex gap-1">
              {getDieImage(dice.dieOne.result)}
              {getDieImage(dice.dieTwo.result)}
            </div>
          </button>
        )}

        {/* Bonuses */}
        {Object.entries(availableDice).map(([key, die]) =>
          key.startsWith("bonus20") ? (
            <button
              key={key}
              onClick={() => handleDiceSelection(die.result, key)}
              className={`px-2 py-2 rounded border border-green-500 font-bold text-green-700 ${
                selectedDice?.index === key ? "bg-green-200" : "bg-white"
              }`}
            >
              +20 Bonus
            </button>
          ) : null
        )}

        {Object.entries(availableDice).map(([key, die]) =>
          key.startsWith("bonus10") ? (
            <button
              key={key}
              onClick={() => handleDiceSelection(die.result, key)}
              className={`px-2 py-2 rounded border border-blue-500 font-bold text-blue-700 ${
                selectedDice?.index === key ? "bg-blue-200" : "bg-white"
              }`}
            >
              +10 Bonus
            </button>
          ) : null
        )}

        {/* 14-Move Chunks */}
        {["double1", "double2", "opp1", "opp2"].map((key) =>
          availableDice[key] ? renderChunkButton(key) : null
        )}
      </div>

      {/* ✅ Show chunk summary only if still building a combo */}
      {chunkSelection.length > 0 && !selectedDice?.chunks && (
        <>
          <div className="text-sm mt-1">
            Selected Chunks:{" "}
            {chunkSelection
              .map((key) => availableDice[key]?.result)
              .filter((v) => v !== undefined)
              .join(" + ")}{" "}
            = <strong>{totalSelected}</strong>
          </div>

          <div className="flex gap-3 mt-2">
            <button
              onClick={clearSelection}
              className="px-3 py-1 bg-gray-300 text-black rounded"
            >
              Clear
            </button>
            <button
              onClick={confirmChunkSelection}
              disabled={!selectedPawn}
              className={`px-3 py-1 rounded text-white ${
                !selectedPawn
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-green-500 hover:bg-green-600"
              }`}
            >
              Confirm Move
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default DiceSelection;

// import { useState } from "react";
// import {
//   GiInvertedDice1,
//   GiInvertedDice2,
//   GiInvertedDice3,
//   GiInvertedDice4,
//   GiInvertedDice5,
//   GiInvertedDice6,
// } from "react-icons/gi";

// const DiceSelection = ({
//   dice,
//   selectedDice,
//   setSelectedDice,
//   selectedPawn,
//   availableDice,
//   setAvailableDice,
//   pawns,
// }) => {
//   const [chunkSelection, setChunkSelection] = useState([]);

//   const handleDiceSelection = (diceValue, dieIndex) => {
//     if (!selectedPawn) return;
//     if (!availableDice[dieIndex] && !["bonus", "bonus10"].includes(dieIndex))
//       return;

//     setSelectedDice({ value: diceValue, index: dieIndex });
//     console.log("value:", diceValue, "index:", dieIndex);
//   };

//   const getDieImage = (dieResult) => {
//     switch (dieResult) {
//       case 1:
//         return <GiInvertedDice1 className="text-4xl" />;
//       case 2:
//         return <GiInvertedDice2 className="text-4xl" />;
//       case 3:
//         return <GiInvertedDice3 className="text-4xl" />;
//       case 4:
//         return <GiInvertedDice4 className="text-4xl" />;
//       case 5:
//         return <GiInvertedDice5 className="text-4xl" />;
//       case 6:
//         return <GiInvertedDice6 className="text-4xl" />;
//       default:
//         return null;
//     }
//   };

//   const handleChunkSelect = (chunkKey) => {
//     if (!availableDice[chunkKey]) return;
//     if (chunkSelection.includes(chunkKey)) return;
//     setChunkSelection([...chunkSelection, chunkKey]);
//   };

//   const clearSelection = () => {
//     setChunkSelection([]);
//     setSelectedDice(null);
//   };

//   const confirmChunkSelection = () => {
//     const total = chunkSelection.reduce(
//       (sum, key) => (availableDice[key] ? sum + availableDice[key].result : sum),
//       0
//     );
//     const moveIndex = `combo_${chunkSelection.join("_")}`;

//     setSelectedDice({
//       value: total,
//       index: moveIndex,
//       chunks: [...chunkSelection],
//     });

//     setChunkSelection([]); // ✅ Good: clears buttons
//   };

//   const renderChunkButton = (key) => {
//     const isSelected = chunkSelection.includes(key);
//     const chunk = availableDice[key];
//     return (
//       <button
//         key={key}
//         onClick={() => handleChunkSelect(key)}
//         className={`px-2 py-2 rounded border border-purple-500 font-bold text-purple-700 ${
//           isSelected ? "bg-purple-200" : "bg-white"
//         }`}
//       >
//         {getDieImage(chunk.result)}
//       </button>
//     );
//   };

//   const totalSelected = chunkSelection.reduce((sum, key) => {
//     const chunk = availableDice[key];
//     return chunk ? sum + chunk.result : sum;
//   }, 0);

//   return (
//     <div className="flex flex-col items-start space-y-3">
//       {Object.keys(availableDice).length > 0 && <div>Options:</div>}

//       <div className="flex flex-wrap gap-2">
//         {/* Regular dice */}
//         {availableDice.dieOne && (
//           <button
//             onClick={() => handleDiceSelection(dice.dieOne.result, "dieOne")}
//             className={`px-1 py-1 rounded border border-gray-500 ${
//               selectedDice?.index === "dieOne" ? "bg-yellow-100" : "bg-white"
//             }`}
//           >
//             {getDieImage(dice.dieOne.result)}
//           </button>
//         )}

//         {availableDice.dieTwo && (
//           <button
//             onClick={() => handleDiceSelection(dice.dieTwo.result, "dieTwo")}
//             className={`px-1 py-1 rounded border border-gray-500 ${
//               selectedDice?.index === "dieTwo" ? "bg-yellow-100" : "bg-white"
//             }`}
//           >
//             {getDieImage(dice.dieTwo.result)}
//           </button>
//         )}

//         {availableDice.both && (
//           <button
//             onClick={() =>
//               handleDiceSelection(
//                 dice.dieOne.result + dice.dieTwo.result,
//                 "both"
//               )
//             }
//             disabled={
//               selectedPawn &&
//               pawns.some(
//                 (p) => p.color === selectedPawn.color && p.location === "nest"
//               ) &&
//               (dice.dieOne.result === 5 || dice.dieTwo.result === 5)
//             }
//             className={`px-1 py-1 rounded border border-gray-500 ${
//               selectedDice?.index === "both" ? "bg-yellow-100" : "bg-white"
//             } ${
//               selectedPawn &&
//               pawns.some(
//                 (p) => p.color === selectedPawn.color && p.location === "nest"
//               ) &&
//               (dice.dieOne.result === 5 || dice.dieTwo.result === 5)
//                 ? "opacity-30 cursor-not-allowed"
//                 : ""
//             }`}
//           >
//             <div className="flex gap-1">
//               {getDieImage(dice.dieOne.result)}
//               {getDieImage(dice.dieTwo.result)}
//             </div>
//           </button>
//         )}

//         {/* Bonuses */}
//         {Object.entries(availableDice).map(([key, die]) =>
//           key.startsWith("bonus20") ? (
//             <button
//               key={key}
//               onClick={() => handleDiceSelection(die.result, key)}
//               className={`px-2 py-2 rounded border border-green-500 font-bold text-green-700 ${
//                 selectedDice?.index === key ? "bg-green-200" : "bg-white"
//               }`}
//             >
//               +20 Bonus
//             </button>
//           ) : null
//         )}

//         {Object.entries(availableDice).map(([key, die]) =>
//           key.startsWith("bonus10") ? (
//             <button
//               key={key}
//               onClick={() => handleDiceSelection(die.result, key)}
//               className={`px-2 py-2 rounded border border-blue-500 font-bold text-blue-700 ${
//                 selectedDice?.index === key ? "bg-blue-200" : "bg-white"
//               }`}
//             >
//               +10 Bonus
//             </button>
//           ) : null
//         )}

//         {/* 14-Move Chunks */}
//         {["double1", "double2", "opp1", "opp2"].map((key) =>
//           availableDice[key] ? renderChunkButton(key) : null
//         )}
//       </div>

//       {/* Selected Chunk Total */}
//       {chunkSelection.length > 0 && (
//         <>
//           <div className="text-sm mt-1">
//             Selected Chunks:{" "}
//             {chunkSelection
//               .map((key) => availableDice[key]?.result)
//               .filter((v) => v !== undefined)
//               .join(" + ")}{" "}
//             = <strong>{totalSelected}</strong>
//           </div>

//           <div className="flex gap-3 mt-2">
//             <button
//               onClick={clearSelection}
//               className="px-3 py-1 bg-gray-300 text-black rounded"
//             >
//               Clear
//             </button>
//             <button
//               onClick={confirmChunkSelection}
//               disabled={!selectedPawn}
//               className={`px-3 py-1 rounded text-white ${
//                 !selectedPawn
//                   ? "bg-gray-400 cursor-not-allowed"
//                   : "bg-green-500 hover:bg-green-600"
//               }`}
//             >
//               Confirm Move
//             </button>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default DiceSelection;
