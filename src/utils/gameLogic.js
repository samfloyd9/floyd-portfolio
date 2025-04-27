// utils/gameLogic.js

export const startingSpaces = {
  red: 39,
  blue: 22,
  yellow: 5,
  green: 56,
};

export const homeColumnStarts = {
  red: 34,
  blue: 17,
  yellow: 68,
  green: 51,
};

export const finalHomePositions = {
  red: 108,
  blue: 308,
  yellow: 408,
  green: 208,
};

export const safeSpaces = [5, 12, 17, 22, 29, 34, 39, 46, 51, 56, 63, 68];

export function movePawn(pawn, selectedDice, pawns, setPawns) {
  const updatedPawns = [...pawns];
  const pawnIndex = updatedPawns.findIndex((p) => p.id === pawn.id);

  const startingSpaces = {
    red: 39,
    blue: 22,
    yellow: 5,
    green: 56,
  };

  const homeColumnStarts = {
    red: 34,
    blue: 17,
    yellow: 68,
    green: 51,
  };

  const finalHomePositions = {
    red: 108,
    blue: 308,
    yellow: 408,
    green: 208,
  };

  if (pawn.location === "nest") {
    if (selectedDice.value !== 5) {
      return { success: false, reason: "Must roll a 5 to leave the nest." };
    }

    updatedPawns[pawnIndex] = {
      ...pawn,
      position: startingSpaces[pawn.color],
      location: "onTrack",
    };

    setPawns(updatedPawns);
    return { success: true };
  }

  if (pawn.location === "onTrack") {
    let currentPos = pawn.position;
    let homeStart = homeColumnStarts[pawn.color];
    let steps = selectedDice.value;

    while (steps > 0) {
      currentPos += 1;
      if (currentPos > 68) currentPos = 1; // wrap around board

      if (currentPos === homeStart) {
        if (steps === 1) {
          // Exact landing on home start — stay on track
          updatedPawns[pawnIndex] = {
            ...pawn,
            position: currentPos,
            location: "onTrack",
          };
          setPawns(updatedPawns);
          return { success: true };
        } else {
          // Passed home start with moves left — enter home column
          steps--; // Landing on home start consumes 1 move
          updatedPawns[pawnIndex] = {
            ...pawn,
            position: steps, // how far inside home column
            location: "homeColumn",
          };
          setPawns(updatedPawns);
          return { success: true };
        }
      }

      steps--;
    }

    // Still moving normally on track
    updatedPawns[pawnIndex] = {
      ...pawn,
      position: currentPos,
    };

    setPawns(updatedPawns);
    return { success: true };
  }

  if (pawn.location === "homeColumn") {
    let newPosition = pawn.position + selectedDice.value;
  
    if (newPosition > 8) {
      // 🛑 Block the move — overshoot Home
      return { success: false, reason: "Must land exactly on Home." };
    }
  
    if (newPosition === 8) {
      updatedPawns[pawnIndex] = {
        ...pawn,
        position: finalHomePositions[pawn.color],
        location: "home",
      };
    } else {
      updatedPawns[pawnIndex] = {
        ...pawn,
        position: newPosition,
      };
    }
  
    setPawns(updatedPawns);
    return { success: true };
  }  
};


export function updateUsedDice(prevUsed, selectedDice) {
  const updated = [...prevUsed, { index: selectedDice.index }];

  const usedIndexes = updated.map((d) => d.index);
  if (usedIndexes.includes("dieOne") && usedIndexes.includes("dieTwo")) {
    return [{ index: "dieOne" }, { index: "dieTwo" }, { index: "both" }];
  }

  if (usedIndexes.includes("both")) {
    return [{ index: "dieOne" }, { index: "dieTwo" }, { index: "both" }];
  }

  return updated;
}

export function updateAvailableDice(prevDice, selectedDice) {
  const updated = { ...prevDice };

  if (selectedDice.index === "both") {
    // Both dice used — clear everything
    return {};
  } else if (selectedDice.index === "bonus") {
    // Bonus used — remove bonus die only
    delete updated.bonus20;
    return updated;
  } else {
    // Single die used
    delete updated[selectedDice.index];

    // If using one die, remove 'both' option too
    if (updated.both) {
      delete updated.both;
    }
    return updated;
  }
};


export function mustExitNest(pawns, currentPlayer, availableDice, blockades) {
  const playerPawns = pawns.filter((pawn) => pawn.color === currentPlayer);
  const hasNestPawns = playerPawns.some((pawn) => pawn.location === "nest");

  if (!hasNestPawns) return false;

  const startingSpaces = {
    red: 39,
    blue: 22,
    yellow: 5,
    green: 56,
  };

  const startSpace = startingSpaces[currentPlayer];
  const pawnsAtStart = pawns.filter(p => p.position === startSpace);

  const isBlocked =
    blockades.includes(startSpace) ||
    pawnsAtStart.length >= 2; // if starting space is blockaded

  if (isBlocked) {
    return false; // Can't leave nest if start blocked
  }

  // Check if 5 can be made
  const hasFive =
    (availableDice.dieOne && availableDice.dieOne.result === 5) ||
    (availableDice.dieTwo && availableDice.dieTwo.result === 5) ||
    (availableDice.both && availableDice.both.result === 5);

  return hasFive;
};



export function hasAvailableMoves(pawns, currentPlayer, availableDice) {
  const playerPawns = pawns.filter((pawn) => pawn.color === currentPlayer);

  const hasNestPawns = playerPawns.some((pawn) => pawn.location === "nest");
  const hasOnBoardPawns = playerPawns.some((pawn) => pawn.location !== "nest");

  const hasFive =
    (availableDice.dieOne && availableDice.dieOne.result === 5) ||
    (availableDice.dieTwo && availableDice.dieTwo.result === 5) ||
    (availableDice.both && availableDice.both.result === 5);

  // Rule: If all pawns in nest and no 5 → no moves available
  if (!hasOnBoardPawns && hasNestPawns && !hasFive) return false;

  // In future: you can expand this to check for blockades, home entry, etc

  return true;
}

export function getBlockadeSpaces(pawns) {
  const spaceCounts = {};

  // Count how many pawns are on each space by color
  for (const pawn of pawns) {
    if (pawn.location === "onTrack") {
      const key = `${pawn.position}-${pawn.color}`;
      spaceCounts[key] = (spaceCounts[key] || 0) + 1;
    }
  }

  // Find any space where 2+ same-colored pawns are present
  const blockades = [];

  for (const key in spaceCounts) {
    if (spaceCounts[key] >= 2) {
      const [position] = key.split("-");
      blockades.push(Number(position));
    }
  }

  return blockades;
}

export function isSafeSpace(position) {
  return safeSpaces.includes(position);
}
