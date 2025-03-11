import { useState, useEffect } from "react";

import Dice from "../components/Dice";
import DiceSelection from "../components/DiceSelection";

import {
  GiInvertedDice1,
  GiInvertedDice2,
  GiInvertedDice3,
  GiInvertedDice4,
  GiInvertedDice5,
  GiInvertedDice6,
} from "react-icons/gi";
import ParcheesiVersion2 from "../components/ParcheesiVersion2";
import OptionsMenu from "../components/OptionsMenu";

function ParcheesiPage() {
  const [pawns, setPawns] = useState([
    { id: "R1", position: 32, color: "red", location: "onTrack" },
    { id: "R2", position: 30, color: "red", location: "onTrack" },
    { id: "R3", position: 63, color: "red", location: "onTrack" },
    { id: "R4", position: 12, color: "red", location: "onTrack" },

    { id: "B1", position: 61, color: "blue", location: "onTrack" },
    { id: "B2", position: 67, color: "blue", location: "onTrack" },
    { id: "B3", position: 29, color: "blue", location: "onTrack" },
    { id: "B4", position: 21, color: "blue", location: "onTrack" },

    { id: "G1", position: 44, color: "green", location: "onTrack" },
    { id: "G2", position: 2, color: "green", location: "onTrack" },
    { id: "G3", position: 7, color: "green", location: "onTrack" },
    { id: "G4", position: 58, color: "green", location: "onTrack" },

    { id: "Y1", position: 11, color: "yellow", location: "onTrack" },
    { id: "Y2", position: 19, color: "yellow", location: "onTrack" },
    { id: "Y3", position: 41, color: "yellow", location: "onTrack" },
    { id: "Y4", position: 13, color: "yellow", location: "onTrack" },
  ]);

  const [dice, setDice] = useState({
    dieOne: {
      result: 1,
      dieImg: <GiInvertedDice1 className="text-4xl" />,
      index: 1,
    },
    dieTwo: {
      result: 1,
      dieImg: <GiInvertedDice1 className="text-4xl" />,
      index: 2,
    },
  });

  const [availableDice, setAvailableDice] = useState({}); // Stores dice values that can still be used
  const [rolling, setRolling] = useState(false);
  const [firstPlayerMessage, setFirstPlayerMessage] = useState("");
  const [selectedPawn, setSelectedPawn] = useState(null);
  const [selectedDice, setSelectedDice] = useState(null);
  const [usedDice, setUsedDice] = useState([]); // Tracks which dice have been used
  const [currentRolling, setCurrentRolling] = useState(null); // Tracks which player is rolling
  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [hasRolled, setHasRolled] = useState(false);
  const [doublesCount, setDoublesCount] = useState(0);

  const playerOrder = ["yellow", "green", "red", "blue"]; // Turn cycle order

  const [initialRolls, setInitialRolls] = useState({
    red: { roll: null, icon: null },
    blue: { roll: null, icon: null },
    yellow: { roll: null, icon: null },
    green: { roll: null, icon: null },
  });

  const rollTwoDice = () => {
    if (hasRolled) return; // Prevent rolling again before turn ends

    setRolling(true); // Start rolling animation

    setTimeout(() => {
      const dieOneResult = Math.floor(Math.random() * 6) + 1;
      const dieTwoResult = Math.floor(Math.random() * 6) + 1;
      // const bothDiceTotal = dieOneResult + dieTwoResult;

      const dieImg = (dieResult) => {
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

      setDice({
        ...dice,
        dieOne: { result: dieOneResult, dieImg: dieImg(dieOneResult) },
        dieTwo: { result: dieTwoResult, dieImg: dieImg(dieTwoResult) },
      });

      // setAvailableDice([dieOneResult, dieTwoResult, bothDiceTotal]); // Both dice are available to use
      setAvailableDice({
        ...dice,
        both: { result: dieTwoResult + dieOneResult, index: "both" },
      });

      setRolling(false); // Stop rolling animation
      setHasRolled(true);
    }, 2000); // Wait 1.5 seconds to show final dice
  };

  const currentPlayerColor = (currentPlayer) => {
    if (currentPlayer === "red") {
      return "bg-red-300 border border-black p-2 rounded-md";
    } else if (currentPlayer === "blue") {
      return "bg-blue-300 border border-black p-2 rounded-md";
    } else if (currentPlayer === "green") {
      return "bg-green-300 border border-black p-2 rounded-md";
    } else if (currentPlayer === "yellow") {
      return "bg-yellow-300 border border-black p-2 rounded-md";
    }
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

  // const [pawns, setPawns] = useState([
  //   { id: "R1", position: null, color: "red", location: "nest" },
  //   { id: "R2", position: null, color: "red", location: "nest" },
  //   { id: "R3", position: null, color: "red", location: "nest" },
  //   { id: "R4", position: null, color: "red", location: "nest" },

  //   { id: "B1", position: null, color: "blue", location: "nest" },
  //   { id: "B2", position: null, color: "blue", location: "nest" },
  //   { id: "B3", position: null, color: "blue", location: "nest" },
  //   { id: "B4", position: null, color: "blue", location: "nest" },

  //   { id: "G1", position: null, color: "green", location: "nest" },
  //   { id: "G2", position: null, color: "green", location: "nest" },
  //   { id: "G3", position: null, color: "green", location: "nest" },
  //   { id: "G4", position: null, color: "green", location: "nest" },

  //   { id: "Y1", position: null, color: "yellow", location: "nest" },
  //   { id: "Y2", position: null, color: "yellow", location: "nest" },
  //   { id: "Y3", position: null, color: "yellow", location: "nest" },
  //   { id: "Y4", position: null, color: "yellow", location: "nest" },
  // ]);

  const rollForTurn = async () => {
    const players = ["red", "blue", "yellow", "green"];
    let newRolls = {};

    for (let i = 0; i < players.length; i++) {
      const player = players[i];

      setCurrentRolling(player); // Show who's rolling
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay

      const roll = Math.floor(Math.random() * 6) + 1;
      newRolls[player] = {
        roll,
        icon: getDieImage(roll), // Get the corresponding die icon
      };

      setInitialRolls((prevRolls) => ({
        ...prevRolls,
        [player]: newRolls[player],
      }));
    }

    setCurrentRolling(null);

    // Wait 3 seconds before determining the winner
    await new Promise((resolve) => setTimeout(resolve, 1000));

    determineWinner(newRolls);
  };

  const determineWinner = (rolls) => {
    const maxRoll = Math.max(...Object.values(rolls).map((roll) => roll.roll));

    // Get all players who rolled the highest value
    const highestPlayers = Object.keys(rolls).filter(
      (player) => rolls[player].roll === maxRoll
    );

    if (highestPlayers.length === 1) {
      setCurrentPlayer(highestPlayers[0]);
      setGameStarted(true);
      setFirstPlayerMessage(`${highestPlayers[0].toUpperCase()} goes first!`); // Show the message

      // Hide the message after 5 seconds
      setTimeout(() => {
        setFirstPlayerMessage("");
      }, 5000);
    } else {
      setFirstPlayerMessage("Tie! Re-rolling for:" + highestPlayers);
      reRollTiedPlayers(highestPlayers, rolls); // Handle tie-breaking
    }
  };

  const reRollTiedPlayers = async (tiedPlayers, rolls) => {
    let newRolls = { ...rolls };

    // Roll each tied player one by one
    for (let player of tiedPlayers) {
      setCurrentRolling(player); // Show who's rolling
      await new Promise((resolve) => setTimeout(resolve, 1000)); // 1-second delay between each roll

      // Re-roll the current tied player
      const roll = Math.floor(Math.random() * 6) + 1;
      newRolls[player] = {
        roll,
        icon: getDieImage(roll), // Get the corresponding die icon
      };

      setInitialRolls((prevRolls) => ({
        ...prevRolls,
        [player]: newRolls[player],
      }));

      // Wait 1 second before rolling the next player
      await new Promise((resolve) => setTimeout(resolve, 100));
    }

    // Once all players have re-rolled, determine the new winner
    determineWinner(newRolls);
  };

  const resetGame = () => {
    // Reset pawns to their nest positions
    const resetPawns = pawns.map((pawn) => ({
      ...pawn,
      position: null, // Reset pawn position to the nest
      location: "nest",
    }));

    setAvailableDice({}); // Stores dice values that can still be used

    setRolling(false);

    setSelectedPawn(null);
    setSelectedDice(null);

    setUsedDice([]); // Tracks which dice have been used
    setHasRolled(false);

    // Reset the initial rolls and other state
    setPawns(resetPawns);
    setInitialRolls({
      red: { roll: null, icon: null },
      blue: { roll: null, icon: null },
      yellow: { roll: null, icon: null },
      green: { roll: null, icon: null },
    });
    setCurrentPlayer(null);
    setCurrentRolling(null);
    setGameStarted(false); // Reset the game state
    setFirstPlayerMessage(""); // Clear the "first player" message
    setDice({
      ...dice,
      dieOne: { result: 1, dieImg: <GiInvertedDice1 className="text-4xl" /> },
      dieTwo: { result: 1, dieImg: <GiInvertedDice1 className="text-4xl" /> },
    });
  };

  // const [blockades, setBlockades] = useState([]);

  // const updateBlockades = (pawns) => {
  //   const blockadeSpaces = pawns
  //     .filter((pawn, self) =>
  //       self.filter((p) => p.position === pawn.position).length === 2
  //     )
  //     .map((pawn) => pawn.position);

  //   setBlockades([...new Set(blockadeSpaces)]); // Remove duplicates
  // };

  // const isMoveBlocked = (position) => {
  //   return blockades.includes(position); // If the space is in the blockade list, it's blocked
  // };

  const homeColumnStarts = {
    red: 34,
    blue: 17,
    yellow: 68,
    green: 51,
  };

  const confirmMove = () => {
    if (!selectedPawn || !selectedDice) return; // Ensure selections exist
    // if (hasRolled) return;

    let newPosition = (selectedPawn.position + selectedDice.value) % 68;
    let remainingMoves = selectedDice.value;

    // if (isMoveBlocked(newPosition)) {
    //   console.log("Move is blocked!");
    //   return;
    // }

    if (newPosition === homeColumnStarts[selectedPawn.color]) {
      remainingMoves -= newPosition - selectedPawn.position; // Subtract moves used to reach home column

      setPawns((prevPawns) =>
        prevPawns.map((pawn) =>
          pawn.id === selectedPawn.id
            ? {
                ...pawn,
                position: remainingMoves, // Move within home column
                location: "homeColumn",
              }
            : pawn
        )
      );
    } else {
      // Normal movement
      setPawns((prevPawns) =>
        prevPawns.map((pawn) =>
          pawn.id === selectedPawn.id
            ? { ...pawn, position: newPosition }
            : pawn
        )
      );
    }

    // setPawns((prevPawns) =>
    //   prevPawns.map((pawn) =>
    //     pawn.id === selectedPawn.id ? { ...pawn, position: newPosition } : pawn
    //   )
    // );

    setUsedDice((prevUsed) => {
      const updatedUsedDice = [...prevUsed, { index: selectedDice.index }];
    
      // If both dice are used, store all three in the array
      if (
        updatedUsedDice.some(die => die.index === "dieOne") &&
        updatedUsedDice.some(die => die.index === "dieTwo")
      ) {
        return [{ index: "dieOne" }, { index: "dieTwo" }, { index: "both" }];
      }
    
      if (updatedUsedDice.some(die => die.index === "both")) {
        return [{ index: "dieOne" }, { index: "dieTwo" }, { index: "both" }];
      }
    
      return updatedUsedDice;
    });

    setAvailableDice((prevDice) => {
      let updatedDice = { ...prevDice }; // Make a copy of availableDice

      if (selectedDice.index === "both") {
        // If both dice were used, clear availableDice
        return {};
      } else {
        // Remove the selected die from availableDice
        delete updatedDice[selectedDice.index]; // Remove the selected die index from availableDice

        // If the "both" option exists, remove it as one die has been selected
        if (updatedDice.both) {
          delete updatedDice.both; // Remove "both" if a single die was used
        }

        return updatedDice; // Return updated availableDice
      }
    });
    
    // const allDiceUsed =
    //   (usedDice.some((die) => die.index === "dieOne") &&
    //     usedDice.some((die) => die.index === "dieTwo")) ||
    //   usedDice.some((die) => die.index === "both");

    // const allDiceUsed =
    //   (usedDice.some((die) => die.index === "dieOne") &&
    //     usedDice.some((die) => die.index === "dieTwo") && usedDice.some((die) => die.index === "both"));

    // const allDiceUsed = usedDice.length === 3;

    // if (Object.keys(availableDice).length === 0) {
    //   console.log("All dice used. Ending turn...");
    //   endTurn();
    // }

    // Reset selections
    setSelectedPawn(null);
    setSelectedDice(null);
    setHasRolled(true);
  };

  // useEffect(() => {
  //   console.log("Checking availableDice after update:", availableDice);
  
  //   if (Object.keys(availableDice).length === 0) {
  //     console.log("All dice used. Ending turn...");
  //     endTurn();
  //   }
  // }, [availableDice]); // Runs every time availableDice updates

  const endTurn = () => {
    if (Object.keys(availableDice).length > 0) return;
    const currentIndex = playerOrder.indexOf(currentPlayer);
    const nextPlayer = playerOrder[(currentIndex + 1) % playerOrder.length]; // Loop to the next player

    setCurrentPlayer(nextPlayer); // Set the next turn
    setAvailableDice({}); // Reset dice for next turn
    setUsedDice([]); // Reset used dice
    setHasRolled(false); // Allow rolling again
  };

  console.log("availableDice:", availableDice);
  console.log("usedDice:", usedDice);
  console.log("currentPlayer:", currentPlayer);
  console.log("theFuckingProblem:", Object.keys(availableDice), Object.keys(availableDice).length );

  return (
    <div className="flex flex-col justify-center content-center self-center items-center h-screen -mt-12">
      <div className="font-[cursive] text-5xl mb-12">Parcheesi</div>
      <div className="flex flex-row gap-24 justify-center content-center self-center items-center">
        <div className="flex flex-col justify-center items-center">
          <ParcheesiVersion2
            pawns={pawns}
            currentPlayer={currentPlayer}
            setPawns={setPawns}
            selectedPawn={selectedPawn}
            setSelectedPawn={setSelectedPawn}
            setSelectedDice={setSelectedDice}
          />
        </div>

        <div className="flex flex-col justify-center items-center self-center content-center gap-2 w-88 px-32 py-24 border-4 rounded-sm border-black p-10">
          <div className="flex flex-col items-center justify-center self-center content-center">
            {!gameStarted ? (
              <div className="flex flex-col justify-center gap-2">
                <button
                  onClick={rollForTurn}
                  className="bg-blue-500 text-white px-4 py-2 rounded w-full"
                >
                  Press to Start the Game!
                </button>

                {Object.entries(initialRolls).map(
                  ([player, { roll, icon }]) => (
                    <div
                      key={player}
                      className={`text-lg border text-black bg-${player}-200 border-black rounded-md flex flex-row justify-center items-center p-3 ${
                        currentRolling === player ? "animate-pulse" : ""
                      }`}
                    >
                      <div className={`mr-6`}>
                        {player.charAt(0).toUpperCase() + player.slice(1)}:{" "}
                      </div>
                      <div className="text-black">
                        {icon ??
                          (currentRolling === player ? " Rolling..." : "")}
                      </div>
                    </div>
                  )
                )}
              </div>
            ) : (
              <>
                {firstPlayerMessage && (
                  <h2 className="text-xl font-bold">{firstPlayerMessage}</h2> // Display the message for 5 seconds
                )}
              </>
            )}
          </div>

          <div className={`${currentPlayerColor(currentPlayer)} shadow-lg`}>
            {currentPlayer !== null
              ? `${currentPlayer.toUpperCase()}'s turn`
              : ""}
          </div>
          {gameStarted && (
            <div className="flex flex-col gap-2 justify-center items-center">
              <button
                className={`border p-2 bg-gray-200 rounded-md border-black shadow-md ${
                  hasRolled ? "cursor-not-allowed opacity-20" : ""
                }`}
                onClick={rollTwoDice}
                disabled={hasRolled}
              >
                Roll Dice
              </button>
              <Dice
                dice={dice}
                rolling={rolling}
                selectedDice={selectedDice}
                availableDice={availableDice}
                usedDice={usedDice}
              />
              <DiceSelection
                dice={dice}
                selectedDice={selectedDice}
                setSelectedDice={setSelectedDice}
                selectedPawn={selectedPawn}
                availableDice={availableDice}
                rolling={rolling}
                setAvailableDice={setAvailableDice}
              />

              {!selectedPawn && <p>Select a Pawn!</p>}

              {selectedPawn && (
                <div
                  className={`bg-${selectedPawn.color}-200 p-2 text-md rounded-lg flex justify-center items-center gap-2`}
                >
                  Selected Pawn:{" "}
                  <div
                    className={`text-sm bg-${selectedPawn.color}-500 rounded-full px-1 py-0.5`}
                  >
                    {selectedPawn.id}
                  </div>
                </div>
              )}
              {/* {selectedDice && (
              <p className={`bg-${selectedPawn.color}-200 p-2 text-md rounded-lg flex justify-center items-center gap-2`}>
                Selected Dice: {selectedDice} spaces
              </p>
            )} */}

              {selectedPawn && selectedDice && (
                <button
                  onClick={confirmMove}
                  className="bg-green-200 text-black border border-gray-200 shadow-lg px-4 py-2 rounded mt-2"
                >
                  Move Pawn
                </button>
              )}
            </div>
          )}
          <OptionsMenu resetGame={resetGame} />
        </div>
      </div>
    </div>
  );
}

export default ParcheesiPage;

/* <button
    onClick={resetGame}
    className="bg-red-500 text-white px-4 py-2 rounded mt-4"
  >
    Reset Game
  </button> */
