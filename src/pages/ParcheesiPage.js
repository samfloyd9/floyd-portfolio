import { useState, useEffect } from "react";

import Dice from "../components/parcheesi/Dice";
import DiceSelection from "../components/parcheesi/DiceSelection";

import {
  GiInvertedDice1,
  GiInvertedDice2,
  GiInvertedDice3,
  GiInvertedDice4,
  GiInvertedDice5,
  GiInvertedDice6,
} from "react-icons/gi";
import ParcheesiVersion2 from "../components/parcheesi/ParcheesiVersion2";
import OptionsMenu from "../components/parcheesi/OptionsMenu";

import {
  movePawn,
  updateUsedDice,
  updateAvailableDice,
  mustExitNest,
  hasAvailableMoves,
  getBlockadeSpaces,
  startingSpaces,
  isSafeSpace,
} from "../utils/gameLogic";

function ParcheesiPage() {
  const [pawns, setPawns] = useState([
    { id: "R1", position: 107, color: "red", location: "home" },
    { id: "R2", position: 106, color: "red", location: "home" },
    { id: "R3", position: 105, color: "red", location: "home" },
    { id: "R4", position: 104, color: "red", location: "home" },

    { id: "B1", position: 303, color: "blue", location: "home" },
    { id: "B2", position: 302, color: "blue", location: "home" },
    { id: "B3", position: 301, color: "blue", location: "home" },
    { id: "B4", position: 308, color: "blue", location: "home" },

    { id: "G1", position: 202, color: "green", location: "home" },
    { id: "G2", position: 208, color: "green", location: "home" },
    { id: "G3", position: 201, color: "green", location: "home" },
    { id: "G4", position: 208, color: "green", location: "home" },

    { id: "Y1", position: 406, color: "yellow", location: "home" },
    { id: "Y2", position: 408, color: "yellow", location: "home" },
    { id: "Y3", position: 404, color: "yellow", location: "home" },
    { id: "Y4", position: 408, color: "yellow", location: "home" },
  ]);

  // const [pawns, setPawns] = useState([
  //   { id: "R1", position: 32, color: "red", location: "onTrack" },
  //   { id: "R2", position: 30, color: "red", location: "onTrack" },
  //   { id: "R3", position: 63, color: "red", location: "onTrack" },
  //   { id: "R4", position: 12, color: "red", location: "onTrack" },

  //   { id: "B1", position: 61, color: "blue", location: "onTrack" },
  //   { id: "B2", position: 67, color: "blue", location: "onTrack" },
  //   { id: "B3", position: 29, color: "blue", location: "onTrack" },
  //   { id: "B4", position: 22, color: "blue", location: "onTrack" },

  //   { id: "G1", position: 44, color: "green", location: "onTrack" },
  //   { id: "G2", position: 2, color: "green", location: "onTrack" },
  //   { id: "G3", position: 7, color: "green", location: "onTrack" },
  //   { id: "G4", position: 58, color: "green", location: "onTrack" },

  //   { id: "Y1", position: 11, color: "yellow", location: "onTrack" },
  //   { id: "Y2", position: 19, color: "yellow", location: "onTrack" },
  //   { id: "Y3", position: 41, color: "yellow", location: "onTrack" },
  //   { id: "Y4", position: 13, color: "yellow", location: "onTrack" },
  // ]);

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
  const [blockades, setBlockades] = useState([]);

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
        dieOne: { result: dieOneResult, dieImg: dieImg(dieOneResult), index: "dieOne" },
        dieTwo: { result: dieTwoResult, dieImg: dieImg(dieTwoResult), index: "dieTwo" },
      });
  
      setAvailableDice({
        dieOne: { result: dieOneResult, index: "dieOne" },
        dieTwo: { result: dieTwoResult, index: "dieTwo" },
        both: { result: dieOneResult + dieTwoResult, index: "both" },
      });
  
      setRolling(false);
      setHasRolled(true);
  
      // === New check after rolling ===
      setTimeout(() => {
        const canMove = hasAvailableMoves(pawns, currentPlayer, {
          dieOne: { result: dieOneResult },
          dieTwo: { result: dieTwoResult },
          both: { result: dieOneResult + dieTwoResult },
        });
  
        if (!canMove) {
          setFirstPlayerMessage(`${currentPlayer.toUpperCase()} has no available moves... skipping turn.`);
          setTimeout(() => {
            setFirstPlayerMessage("");
            endTurn();
          }, 2000);
        } else {
          const forcedOut = mustExitNest(pawns, currentPlayer, {
            dieOne: { result: dieOneResult },
            dieTwo: { result: dieTwoResult },
            both: { result: dieOneResult + dieTwoResult },
          }, blockades);
  
          if (forcedOut) {
            setFirstPlayerMessage(`${currentPlayer.toUpperCase()} must move a pawn out of the nest!`);
            setTimeout(() => {
              setFirstPlayerMessage("");
            }, 3000);
          }
        }
      }, 100);
    }, 2000); // 2s dice animation
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

  // const startingSpaces = {
  //   red: 39,
  //   blue: 22,
  //   yellow: 5,
  //   green: 56,
  // };

  // const homeColumnStarts = {
  //   red: 34,
  //   blue: 17,
  //   yellow: 68,
  //   green: 51,
  // };

  const confirmMove = () => {
    if (!selectedPawn || !selectedDice) return;
  
    // === Must exit nest if rolled a 5 and have pawns in nest ===
    const forcedOut = mustExitNest(pawns, currentPlayer, availableDice, blockades);
    if (
      forcedOut &&
      selectedPawn.location !== "nest" &&
      (selectedDice.value === 5 || selectedDice.index === "both")
    ) {
      alert("You must move a pawn out of the nest with your 5 before any other moves.");
      return;
    }
  
    // === Determine move destination ===
    const destination =
      selectedPawn.location === "onTrack"
        ? (selectedPawn.position + selectedDice.value - 1) % 68 + 1
        : startingSpaces[selectedPawn.color]; // If moving from nest
  
    // === Check for illegal 3-pawn stack ===
    const pawnsOnDestination = pawns.filter(
      (p) => p.position === destination && p.color === selectedPawn.color
    );
    if (pawnsOnDestination.length >= 2) {
      alert("You can't move here — it would create an illegal 3-pawn stack.");
      return;
    }
  
    // === Check if movement is blocked by a blockade ===
    if (selectedPawn.location === "onTrack") {
      const path = [];
      let steps = selectedDice.value;
      let currentPos = selectedPawn.position;
  
      while (steps > 0) {
        currentPos = (currentPos % 68) + 1;
        path.push(currentPos);
        steps--;
      }
  
      const isBlocked = path.some((step) => blockades.includes(step));
      if (isBlocked) {
        alert("Move blocked by a blockade! Choose another move.");
        return;
      }
    }
  
    // === Capture Logic ===
    const occupant = pawns.find(
      (p) => p.position === destination && p.color !== selectedPawn.color
    );
  
    if (occupant && isSafeSpace(destination)) {
      alert("You can't capture a pawn on a safe space!");
      return;
    }
  
    let updatedPawns = [...pawns];
    let captured = false;
  
    if (occupant && !isSafeSpace(destination)) {
      // Capture opponent pawn
      updatedPawns = updatedPawns.map((pawn) =>
        pawn.id === occupant.id
          ? { ...pawn, position: null, location: "nest" }
          : pawn
      );
      captured = true;
    }
  
    // === Perform move ===
    const moveResult = movePawn(selectedPawn, selectedDice, updatedPawns, setPawns);
  
    if (!moveResult.success) {
      alert(moveResult.reason);
      return;
    }
  
    // === Update dice usage ===
    setUsedDice((prev) => updateUsedDice(prev, selectedDice));
    setAvailableDice((prev) => updateAvailableDice(prev, selectedDice));
  
    // === Award Bonus 20 after capture ===
    if (captured) {
      setAvailableDice((prev) => ({
        ...prev,
        bonus20: { result: 20, index: "bonus" },
      }));
    }
  
    // === Cleanup after move ===
    setSelectedPawn(null);
    setSelectedDice(null);
    setHasRolled(true); // Player already rolled this turn
  };
  
  
  
  
  

  const endTurn = () => {
    const currentIndex = playerOrder.indexOf(currentPlayer);
    const nextPlayer = playerOrder[(currentIndex + 1) % playerOrder.length];
  
    setCurrentPlayer(nextPlayer);
    setAvailableDice({});
    setUsedDice([]);
    setSelectedPawn(null);
    setSelectedDice(null);
    setHasRolled(false);
    setDoublesCount(0); // reset doubles unless you handle 3x logic later
  };

  useEffect(() => {
    if (gameStarted && Object.keys(availableDice).length === 0 && hasRolled) {
      endTurn();
    }
  }, [availableDice]);

  // const endTurn = () => {
  //   if (Object.keys(availableDice).length > 0) return;
  //   const currentIndex = playerOrder.indexOf(currentPlayer);
  //   const nextPlayer = playerOrder[(currentIndex + 1) % playerOrder.length]; // Loop to the next player

  //   setCurrentPlayer(nextPlayer); // Set the next turn
  //   setAvailableDice({}); // Reset dice for next turn
  //   setUsedDice([]); // Reset used dice
  //   setHasRolled(false); // Allow rolling again
  // };

  // console.log("availableDice:", availableDice);
  // console.log("usedDice:", usedDice);
  // console.log("currentPlayer:", currentPlayer);
  // console.log(
  //   "theFuckingProblem:",
  //   Object.keys(availableDice),
  //   Object.keys(availableDice).length
  // );

  useEffect(() => {
    const newBlockades = getBlockadeSpaces(pawns);
    setBlockades(newBlockades);
  }, [pawns]);

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
            blockades={blockades}
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
