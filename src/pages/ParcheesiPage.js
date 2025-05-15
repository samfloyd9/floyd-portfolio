import { useState, useEffect } from "react";

import Dice from "../components/parcheesi/Dice";
import DiceSelection from "../components/parcheesi/DiceSelection";
import ParcheesiVersion2 from "../components/parcheesi/ParcheesiVersion2";
import OptionsMenu from "../components/parcheesi/OptionsMenu";

import { getDieImg } from "../utils/parcheesi/diceIcons";
import { getPlayerBgColor } from "../utils/parcheesi/ui";
import { findMaxRoll, reRollPlayers } from "../utils/parcheesi/turnOrder";

import {
  movePawn,
  mustExitNest,
  hasAvailableMoves,
  getBlockadeSpaces,
  startingSpaces,
  isSafeSpace,
} from "../utils/parcheesi/gameLogic";

import {
  determineDestination,
  isNestEntryBlocked,
  isValidCapture,
  awardBonus20,
  getAvailableDiceOptions,
  cleanUpAfterMove,
  validateChunkMove,
} from "../utils/parcheesi/moveHelpers";

import {
  shouldForceLargerDie,
  shouldUseOriginalBeforeBonus,
} from "../utils/parcheesi/gameRules";

function ParcheesiPage() {
  // All pawns in home or homeColumn -----> Testing: Exact number and Bonus +10
  // const [pawns, setPawns] = useState([
  //   { id: "R1", position: 108, color: "red", location: "home" },
  //   { id: "R2", position: 1, color: "red", location: "homeColumn" },
  //   { id: "R3", position: 2, color: "red", location: "homeColumn" },
  //   { id: "R4", position: 3, color: "red", location: "homeColumn" },
  //   // { id: "R4", position: 4, color: "red", location: "homeColumn" },

  //   { id: "B1", position: 1, color: "blue", location: "homeColumn" },
  //   { id: "B2", position: 2, color: "blue", location: "homeColumn" },
  //   { id: "B3", position: 3, color: "blue", location: "homeColumn" },
  //   { id: "B4", position: 4, color: "blue", location: "homeColumn" },

  //   { id: "G1", position: 208, color: "green", location: "home" },
  //   { id: "G2", position: 6, color: "green", location: "homeColumn" },
  //   { id: "G3", position: 208, color: "green", location: "home" },
  //   { id: "G4", position: 208, color: "green", location: "home" },

  //   { id: "Y1", position: 408, color: "yellow", location: "home" },
  //   { id: "Y2", position: 6, color: "yellow", location: "homeColumn" },
  //   { id: "Y3", position: 7, color: "yellow", location: "homeColumn" },
  //   { id: "Y4", position: 7, color: "yellow", location: "homeColumn" },
  // ]);

  // Pawns in each 'Section' -----> Testing: General Play - Captures Bonus +20 and Blockades
  // const [pawns, setPawns] = useState([
  //   { id: "R1", position: 6, color: "red", location: "homeColumn" },
  //   { id: "R2", position: 3, color: "red", location: "homeColumn" },
  //   { id: "R3", position: 63, color: "red", location: "onTrack" },
  //   { id: "R4", position: 33, color: "red", location: "onTrack" },

  //   { id: "B1", position: 5, color: "blue", location: "homeColumn" },
  //   { id: "B2", position: 4, color: "blue", location: "homeColumn" },
  //   { id: "B3", position: 29, color: "blue", location: "onTrack" },
  //   { id: "B4", position: 48, color: "blue", location: "onTrack" },

  //   { id: "G1", position: 4, color: "green", location: "homeColumn" },
  //   { id: "G2", position: 2, color: "green", location: "homeColumn" },
  //   { id: "G3", position: 7, color: "green", location: "onTrack" },
  //   { id: "G4", position: 25, color: "green", location: "onTrack" },

  //   { id: "Y1", position: 1, color: "yellow", location: "homeColumn" },
  //   { id: "Y2", position: 5, color: "yellow", location: "homeColumn" },
  //   { id: "Y3", position: 41, color: "yellow", location: "onTrack" },
  //   { id: "Y4", position: 6, color: "yellow", location: "onTrack" },
  // ]);

  // All Pawns Start in Nest -----> Testing: The '5' Rule
  const [pawns, setPawns] = useState([
    { id: "R1", position: null, color: "red", location: "nest" },
    { id: "R2", position: null, color: "red", location: "nest" },
    { id: "R3", position: null, color: "red", location: "nest" },
    { id: "R4", position: null, color: "red", location: "nest" },

    { id: "B1", position: null, color: "blue", location: "nest" },
    { id: "B2", position: null, color: "blue", location: "nest" },
    { id: "B3", position: null, color: "blue", location: "nest" },
    { id: "B4", position: null, color: "blue", location: "nest" },

    { id: "G1", position: null, color: "green", location: "nest" },
    { id: "G2", position: null, color: "green", location: "nest" },
    { id: "G3", position: null, color: "green", location: "nest" },
    { id: "G4", position: null, color: "green", location: "nest" },

    { id: "Y1", position: null, color: "yellow", location: "nest" },
    { id: "Y2", position: null, color: "yellow", location: "nest" },
    { id: "Y3", position: null, color: "yellow", location: "nest" },
    { id: "Y4", position: null, color: "yellow", location: "nest" },
  ]);

  const [dice, setDice] = useState({
    dieOne: {
      result: 1,
      dieImg: getDieImg(1),
      index: 1,
    },
    dieTwo: {
      result: 1,
      dieImg: getDieImg(1),
      index: 2,
    },
  });

  const [availableDice, setAvailableDice] = useState({}); // Stores dice values that can still be used
  const [rolling, setRolling] = useState(false);
  const [tiedPlayers, setTiedPlayers] = useState([]);
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
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState(null);

  const [initialRolls, setInitialRolls] = useState({
    red: { roll: null, icon: null },
    blue: { roll: null, icon: null },
    yellow: { roll: null, icon: null },
    green: { roll: null, icon: null },
  });

  const rollTwoDice = () => {
    if (gameOver) return;
    if (hasRolled) return;

    setRolling(true);

    setTimeout(() => {
      const dieOneResult = Math.floor(Math.random() * 6) + 1;
      const dieTwoResult = Math.floor(Math.random() * 6) + 1;

      setDice({
        dieOne: {
          result: dieOneResult,
          dieImg: getDieImg(dieOneResult),
          index: 1,
        },
        dieTwo: {
          result: dieTwoResult,
          dieImg: getDieImg(dieTwoResult),
          index: 2,
        },
      });

      const isDouble = dieOneResult === dieTwoResult;

      const playerPawns = pawns.filter((p) => p.color === currentPlayer);
      const allOutOfNest = playerPawns.every((p) => p.location !== "nest");

      const isTripleDouble = isDouble && doublesCount === 3;

      if (isTripleDouble) {
        // Handle triple doubles penalty (closest pawn to homeColumn or home)
        const candidates = playerPawns.filter(
          (p) => p.location === "onTrack" || p.location === "homeColumn"
        );

        if (candidates.length > 0) {
          const pawnToSendBack = candidates.reduce(
            (closest, p) => {
              const score =
                p.location === "homeColumn"
                  ? 100 - (p.position + 68)
                  : 100 - p.position;
              return score < closest.score ? { pawn: p, score } : closest;
            },
            { pawn: candidates[0], score: 100 - candidates[0].position }
          ).pawn;

          setPawns((prev) =>
            prev.map((p) =>
              p.id === pawnToSendBack.id
                ? { ...p, position: null, location: "nest" }
                : p
            )
          );

          setFirstPlayerMessage(
            `Triple doubles! ${pawnToSendBack.id} sent back to the nest.`
          );
          setTimeout(() => {
            setFirstPlayerMessage("");
            endTurn();
          }, 2500);
          return; // Triple doubles ends turn immediately!
        } else {
          // No candidates (should be extremely rare), just end turn
          setFirstPlayerMessage(`Triple doubles! No pawn to send back.`);
          setTimeout(() => {
            setFirstPlayerMessage("");
            endTurn();
          }, 2500);
          return;
        }
      }

      const newDoublesCount = isDouble ? doublesCount + 1 : 0;
      setDoublesCount(newDoublesCount);

      const available = getAvailableDiceOptions(
        dieOneResult,
        dieTwoResult,
        pawns,
        currentPlayer
      );
      setAvailableDice(available);

      setRolling(false);
      setHasRolled(true);

      // hasAvailableMoves(pawns, currentPlayer, availableDice, blockades);
      // Check if player has no moves (like usual)
      setTimeout(() => {
        const canMove = hasAvailableMoves(
          pawns,
          currentPlayer,
          {
            dieOne: { result: dieOneResult },
            dieTwo: { result: dieTwoResult },
            both: { result: dieOneResult + dieTwoResult },
          },
          blockades
        );

        if (!canMove) {
          setFirstPlayerMessage(
            `${currentPlayer.toUpperCase()} has no available moves... skipping turn.`
          );
          setTimeout(() => {
            setFirstPlayerMessage("");
            endTurn();
          }, 2000);
        }
      }, 100);
    }, 2000);
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
        icon: getDieImg(roll), // Get the corresponding die icon
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

  const determineWinner = async (rolls) => {
    const highestPlayers = findMaxRoll(rolls);

    if (highestPlayers.length === 1) {
      setTiedPlayers([]);
      setCurrentPlayer(highestPlayers[0]);
      setGameStarted(true);
      setFirstPlayerMessage(`${highestPlayers[0].toUpperCase()} goes first!`);

      setTimeout(() => {
        setFirstPlayerMessage("");
      }, 5000);
    } else {
      setTiedPlayers(highestPlayers);
      setFirstPlayerMessage(
        "Tie! Re-rolling for: " + highestPlayers.join(", ")
      );
      const rerolled = await reRollPlayers(
        highestPlayers,
        getDieImg,
        setCurrentRolling,
        setInitialRolls
      );
      determineWinner(rerolled); // Recurse
    }
  };

  const resetGame = () => {
    // Reset pawns to their nest positions
    const resetPawns = pawns.map((pawn) => ({
      ...pawn,
      position: null,
      location: "nest",
    }));

    setAvailableDice({});
    setRolling(false);
    setSelectedPawn(null);
    setSelectedDice(null);
    setUsedDice([]);
    setHasRolled(false);
    setGameOver(false); // Ensure game isn't over
    setWinner(null); // Clear any previous winner
    setCurrentPlayer(null);
    setCurrentRolling(null);
    setGameStarted(false);
    setFirstPlayerMessage("");
    setPawns(resetPawns);

    setInitialRolls({
      red: { roll: null, icon: null },
      blue: { roll: null, icon: null },
      yellow: { roll: null, icon: null },
      green: { roll: null, icon: null },
    });

    setDice({
      dieOne: { result: 1, dieImg: getDieImg(1) },
      dieTwo: { result: 1, dieImg: getDieImg(1) },
    });
  };

  const checkTurnEndConditions = () => {
    const playerPawns = pawns.filter((p) => p.color === currentPlayer);

    const isMoveLegal = (pawn, dieValue) => {
      if (pawn.location === "home") return false;
      if (pawn.location === "nest") return dieValue === 5;

      if (pawn.location === "onTrack") {
        let steps = dieValue;
        let currentPos = pawn.position;

        while (steps > 0) {
          currentPos = (currentPos % 68) + 1;
          if (blockades.includes(currentPos)) return false;
          steps--;
        }
        return true;
      }

      if (pawn.location === "homeColumn") {
        const pos = pawn.position + dieValue;
        return pos === 8;
      }

      return false;
    };

    const usableDice = Object.entries(availableDice).filter(([key, die]) =>
      playerPawns.some((p) => isMoveLegal(p, die.result))
    );

    if (usableDice.length === 0) {
      setFirstPlayerMessage(
        `${currentPlayer.toUpperCase()} has no available moves.`
      );
      setTimeout(() => {
        setFirstPlayerMessage("");
        endTurn();
      }, 1500);
      return;
    }

    if (
      shouldForceLargerDie(availableDice, pawns, currentPlayer, isMoveLegal)
    ) {
      setFirstPlayerMessage(
        `${currentPlayer.toUpperCase()} must use the larger die.`
      );
      setTimeout(() => {
        setFirstPlayerMessage("");
        endTurn();
      }, 1500);
      return;
    }

    // If only bonus is usable but original dice are available → must use original
    if (shouldUseOriginalBeforeBonus(availableDice, selectedDice)) {
      setFirstPlayerMessage(
        `${currentPlayer.toUpperCase()} cannot skip original dice.`
      );
      setTimeout(() => {
        setFirstPlayerMessage("");
        endTurn();
      }, 1500);
    }
  };

  const confirmMove = () => {
    if (!selectedPawn || !selectedDice || gameOver) return;
  
    const forcedOut = mustExitNest(
      pawns,
      currentPlayer,
      availableDice,
      blockades
    );
    if (
      forcedOut &&
      selectedPawn.location !== "nest" &&
      (selectedDice.value === 5 || selectedDice.index === "both")
    ) {
      alert("You must move a pawn out of the nest first!");
      return;
    }
  
    const playerPawns = pawns.filter((p) => p.color === currentPlayer);
    let updatedPawns = [...pawns];
    let captured = false;
  
    const isMoveLegal = (pawn, dieValue) => {
      if (pawn.location === "home") return false;
      if (pawn.location === "nest") return dieValue === 5;
  
      if (pawn.location === "onTrack") {
        let steps = dieValue;
        let currentPos = pawn.position;
  
        while (steps > 0) {
          currentPos = (currentPos % 68) + 1;
          if (blockades.includes(currentPos)) return false;
          steps--;
        }
        return true;
      }
  
      if (pawn.location === "homeColumn") {
        const pos = pawn.position + dieValue;
        return pos === 8;
      }
  
      return false;
    };
  
    // === Priority Rule: original dice must be used before bonuses
    const usableRegular = ["dieOne", "dieTwo", "both"].filter((key) => {
      const die = availableDice[key];
      return die && playerPawns.some((p) => isMoveLegal(p, die.result));
    });
  
    const isBonusOrChunk =
      selectedDice.index.startsWith("bonus") ||
      selectedDice.index.startsWith("double") ||
      selectedDice.index.startsWith("opp") ||
      selectedDice.index.startsWith("combo_");
  
    if (
      isBonusOrChunk &&
      usableRegular.length > 0 &&
      Object.keys(availableDice).length === 1
    ) {
      alert("You must use original dice before using a bonus or combo.");
      return;
    }
  
    let destination = determineDestination(
      selectedPawn,
      selectedDice.value,
      startingSpaces
    );
  
    // ✅ If the move is based on chunked dice (14-move mode), validate it step-by-step
    if (selectedDice.chunks) {
      const isValid = validateChunkMove(
        selectedPawn,
        selectedDice.chunks
          .map((key) => availableDice[key]?.result)
          .filter(Boolean),
        pawns,
        blockades
      );
  
      if (!isValid) {
        alert("This move crosses a blockade or enters an invalid space.");
        return;
      }
    }
  
    if (selectedPawn.location === "nest") {
      const { blocked, reason } = isNestEntryBlocked(
        selectedPawn,
        destination,
        pawns,
        blockades
      );
  
      if (blocked) {
        alert(reason);
        return;
      }
    }
  
    // ✅ Prevent captures if pawn is moving into homeColumn
    let occupant = null;
    if (
      selectedPawn.location === "onTrack" &&
      typeof destination === "number"
    ) {
      occupant = pawns.find(
        (p) =>
          p.position === destination &&
          p.color !== selectedPawn.color &&
          p.location === "onTrack"
      );
    }
  
    // ✅ Do not allow capturing on safe space
    if (occupant && isSafeSpace(destination)) {
      alert("You can't capture a pawn on a safe space!");
      return;
    }
  
    // ✅ Do not allow capturing a blockade
    if (occupant && blockades.includes(destination)) {
      alert("You can't capture a blockade!");
      return;
    }
  
    if (
      occupant &&
      isValidCapture(occupant, destination, selectedPawn.color, isSafeSpace)
    ) {
      updatedPawns = updatedPawns.map((pawn) =>
        pawn.id === occupant.id
          ? { ...pawn, position: null, location: "nest" }
          : pawn
      );
      captured = true;
    }
  
    const moveResult = movePawn(
      selectedPawn,
      selectedDice,
      updatedPawns,
      setPawns
    );
  
    if (!moveResult.success) {
      alert(moveResult.reason);
      return;
    }
  
    cleanUpAfterMove(
      selectedDice,
      pawns,
      currentPlayer,
      setUsedDice,
      setAvailableDice
    );
  
    if (captured) {
      setAvailableDice((prev) => awardBonus20(prev));
    }
  
    if (moveResult.bonus10) {
      setAvailableDice((prev) => {
        const bonusKeys = Object.keys(prev).filter((k) =>
          k.startsWith("bonus10")
        );
        const next = bonusKeys.length + 1;
        return {
          ...prev,
          [`bonus10_${next}`]: { result: 10, index: `bonus10_${next}` },
        };
      });
    }
  
    checkWinCondition();
  
    // === Check if all 14-move chunks used AND no pawns are in the nest
    const isFourteenMove =
      selectedDice.chunks &&
      ["double1", "double2", "opp1", "opp2"].every((chunk) =>
        selectedDice.chunks.includes(chunk)
      );
  
    const allOutOfNest = playerPawns.every((p) => p.location !== "nest");
  
    if (isFourteenMove && allOutOfNest) {
      setFirstPlayerMessage(
        `${currentPlayer.toUpperCase()} gets a bonus roll for using all 14!`
      );
      setTimeout(() => {
        setFirstPlayerMessage("");
        rollTwoDice(); // reroll right away
      }, 1500);
      return; // prevent ending turn
    }
  
    setSelectedPawn(null);
    setSelectedDice(null);
    setHasRolled(true);
  };
  
  

  const endTurn = () => {
    const order = ["yellow", "green", "red", "blue"];
    const currentIndex = order.indexOf(currentPlayer);
    const nextIndex = (currentIndex + 1) % order.length;
    const nextPlayer = order[nextIndex];

    setCurrentPlayer(nextPlayer);
    setSelectedPawn(null);
    setSelectedDice(null);
    setAvailableDice({});
    setUsedDice([]);
    // setDice({});
    setHasRolled(false);
    setDoublesCount(0); // Reset doubles chain
  };

  useEffect(() => {
    const newBlockades = getBlockadeSpaces(pawns);
    setBlockades(newBlockades);
  }, [pawns]);

  useEffect(() => {
    if (!gameOver && hasRolled) {
      checkTurnEndConditions();
    }
  }, [availableDice]);

  const checkWinCondition = () => {
    const playerPawns = pawns.filter((p) => p.color === currentPlayer);
    const homed = playerPawns.filter((p) => p.location === "home");

    if (homed.length === 4) {
      setWinner(currentPlayer);
      setGameOver(true);
    }
  };

  const currentPlayerColor = (currentPlayer) => {
    if (currentPlayer === "red") {
      return "bg-red-300";
    } else if (currentPlayer === "blue") {
      return "bg-blue-300";
    } else if (currentPlayer === "green") {
      return "bg-green-300";
    } else if (currentPlayer === "yellow") {
      return "bg-yellow-300";
    }
  };

  return (
    <div className="flex flex-col min-h-screen xl:h-screen items-center xl:justify-around bg-purple-200 sm:bg-white overflow-auto">
      {/* <div className="font-[cursive] text-5xl">Parcheesi</div> */}

      <div className="flex flex-col mt-5 gap-5 xl:gap-0 xl:mt-0 xl:flex-row xl:justify-around items-center w-full overflow-auto">
        <ParcheesiVersion2
          pawns={pawns}
          currentPlayer={currentPlayer}
          setPawns={setPawns}
          selectedPawn={selectedPawn}
          setSelectedPawn={setSelectedPawn}
          setSelectedDice={setSelectedDice}
          blockades={blockades}
        />

        <div
          className={`flex flex-col justify-center items-center gap-2 border-4 rounded-sm border-black py-5 px-2 xl:py-10 xl:px-5 w-[550px] ${getPlayerBgColor(
            currentPlayer
          )}`}
        >
          {gameOver && winner && (
            <div className="text-3xl font-bold text-green-600 mb-4">
              🎉 {winner.toUpperCase()} WINS THE GAME! 🎉
            </div>
          )}
          {!gameStarted ? (
            <div className="flex flex-col justify-center gap-2">
              <button
                onClick={rollForTurn}
                className="bg-blue-500 text-white px-4 py-2 rounded w-full"
              >
                Press to Start the Game!
              </button>

              {Object.entries(initialRolls).map(([player, { roll, icon }]) => {
                const isTied = tiedPlayers.includes(player);
                const isInTieBreaker = tiedPlayers.length > 0;

                return (
                  <div
                    key={player}
                    className={`text-lg border border-black rounded-md flex justify-center items-center p-3
        bg-${player}-200
        ${currentRolling === player ? "animate-pulse" : ""}
        ${isInTieBreaker && !isTied ? "opacity-30 grayscale" : ""}`}
                  >
                    <div className="mr-6">
                      {player.charAt(0).toUpperCase() + player.slice(1)}:
                    </div>
                    <div className="text-black">
                      {icon ?? (currentRolling === player ? " Rolling..." : "")}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <>
              {firstPlayerMessage && (
                <h2 className="text-xl font-bold">{firstPlayerMessage}</h2> // Display the message for 5 seconds
              )}
            </>
          )}
          {gameStarted && (
            <div className="flex flex-col gap-2 justify-center items-center">
              <div
                className={`${currentPlayerColor(
                  currentPlayer
                )} border border-black p-2 rounded-md shadow-lg`}
              >
                {currentPlayer !== null
                  ? `${currentPlayer.toUpperCase()}'s turn`
                  : ""}
              </div>
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
              {doublesCount > 1 && (
                <div className="text-lg font-semibold text-purple-600">
                  Doubles Rolled in a Row: {doublesCount}
                </div>
              )}
              <DiceSelection
                dice={dice}
                selectedDice={selectedDice}
                setSelectedDice={setSelectedDice}
                selectedPawn={selectedPawn}
                availableDice={availableDice}
                rolling={rolling}
                setAvailableDice={setAvailableDice}
                pawns={pawns}
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
