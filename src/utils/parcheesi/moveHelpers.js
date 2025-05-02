import { updateAvailableDice, updateUsedDice } from "./gameLogic";

export const determineDestination = (pawn, dieValue, startingSpaces) => {
  if (pawn.location === "onTrack") {
    return ((pawn.position + dieValue - 1) % 68) + 1;
  }

  if (pawn.location === "nest") {
    return startingSpaces[pawn.color];
  }

  if (pawn.location === "homeColumn") {
    return pawn.position + dieValue;
  }

  return null;
};

export const isNestEntryBlocked = (pawn, destination, pawns, blockades) => {
  const sameColorOnStart = pawns.filter(
    (p) =>
      p.position === destination &&
      p.color === pawn.color &&
      p.location === "onTrack"
  );

  if (sameColorOnStart.length >= 2) {
    return { blocked: true, reason: "You can't enter — it would create a 3-pawn stack." };
  }

  if (blockades.includes(destination)) {
    return { blocked: true, reason: "You can't enter — your start space is blockaded." };
  }

  return { blocked: false };
};

export const isValidCapture = (occupant, destination, pawnColor, isSafeSpace) => {
  return (
    occupant &&
    occupant.color !== pawnColor &&
    occupant.location === "onTrack" &&
    !isSafeSpace(destination)
  );
};

export const awardBonus20 = (prevAvailable) => {
  const bonusKeys = Object.keys(prevAvailable).filter((k) => k.startsWith("bonus20"));
  const next = bonusKeys.length + 1;
  return {
    ...prevAvailable,
    [`bonus20_${next}`]: { result: 20, index: `bonus20_${next}` },
  };
};

export const getAvailableDiceOptions = (dieOne, dieTwo, pawns, currentPlayer) => {
  const isDouble = dieOne === dieTwo;
  const allOutOfNest = pawns
    .filter((p) => p.color === currentPlayer)
    .every((p) => p.location !== "nest");

  const hasNestPawns = pawns
    .filter((p) => p.color === currentPlayer)
    .some((p) => p.location === "nest");

  const comboIsFive = dieOne + dieTwo === 5 && dieOne !== 5 && dieTwo !== 5;

  if (isDouble && allOutOfNest) {
    return {
      double1: { result: dieOne, index: "double1" },
      double2: { result: dieTwo, index: "double2" },
      opp1: { result: 7 - dieOne, index: "opp1" },
      opp2: { result: 7 - dieTwo, index: "opp2" },
    };
  }

  if (hasNestPawns && comboIsFive) {
    return {
      both: { result: dieOne + dieTwo, index: "both" },
    };
  }

  return {
    dieOne: { result: dieOne, index: "dieOne" },
    dieTwo: { result: dieTwo, index: "dieTwo" },
    both: { result: dieOne + dieTwo, index: "both" },
  };
};

export const cleanUpAfterMove = (
  selectedDice,
  pawns,
  currentPlayer,
  setUsedDice,
  setAvailableDice
) => {
  if (selectedDice.chunks) {
    setAvailableDice((prev) => {
      const updated = { ...prev };
      selectedDice.chunks.forEach((chunkKey) => delete updated[chunkKey]);
      return updated;
    });
  } else {
    setUsedDice((prev) => updateUsedDice(prev, selectedDice));
    setAvailableDice((prev) =>
      updateAvailableDice(prev, selectedDice, pawns, currentPlayer)
    );
  }
};

export const validateChunkMove = (pawn, chunks, pawns, blockades) => {
  if (pawn.location !== "onTrack") return false;

  let currentPos = pawn.position;

  for (const chunk of chunks) {
    let steps = chunk;

    while (steps > 0) {
      currentPos = (currentPos % 68) + 1;
      if (blockades.includes(currentPos)) {
        return false;
      }
      steps--;
    }
  }

  return true;
};
