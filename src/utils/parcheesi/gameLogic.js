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

// export function movePawn(pawn, selectedDice, pawns, setPawns) {
//   const updatedPawns = [...pawns];
//   const pawnIndex = updatedPawns.findIndex((p) => p.id === pawn.id);

//   const startingSpaces = {
//     red: 39,
//     blue: 22,
//     yellow: 5,
//     green: 56,
//   };

//   const homeColumnStarts = {
//     red: 34,
//     blue: 17,
//     yellow: 68,
//     green: 51,
//   };

//   const finalHomePositions = {
//     red: 108,
//     blue: 308,
//     yellow: 408,
//     green: 208,
//   };

//   if (pawn.location === "nest") {
//     if (selectedDice.value !== 5) {
//       return { success: false, reason: "Must roll a 5 to leave the nest." };
//     }

//     updatedPawns[pawnIndex] = {
//       ...pawn,
//       position: startingSpaces[pawn.color],
//       location: "onTrack",
//     };

//     setPawns(updatedPawns);
//     return { success: true };
//   }

//   if (pawn.location === "onTrack") {
//     let currentPos = pawn.position;
//     let homeStart = homeColumnStarts[pawn.color];
//     let steps = selectedDice.value;

//     while (steps > 0) {
//       currentPos += 1;
//       if (currentPos > 68) currentPos = 1; // wrap around board

//       if (currentPos === homeStart) {
//         if (steps === 1) {
//           // Exact landing on home start — stay on track
//           updatedPawns[pawnIndex] = {
//             ...pawn,
//             position: currentPos,
//             location: "onTrack",
//           };
//           setPawns(updatedPawns);
//           return { success: true };
//         } else {
//           // Passed home start with moves left — enter home column
//           steps--; // Landing on home start consumes 1 move
//           updatedPawns[pawnIndex] = {
//             ...pawn,
//             position: steps, // how far inside home column
//             location: "homeColumn",
//           };
//           setPawns(updatedPawns);
//           return { success: true };
//         }
//       }

//       steps--;
//     }

//     // Still moving normally on track
//     updatedPawns[pawnIndex] = {
//       ...pawn,
//       position: currentPos,
//     };

//     setPawns(updatedPawns);
//     return { success: true };
//   }

//   if (pawn.location === "homeColumn") {
//     let newPosition = pawn.position + selectedDice.value;
  
//     if (newPosition > 8) {
//       return { success: false, reason: "Must land exactly on Home." };
//     }
  
//     if (newPosition === 8) {
//       updatedPawns[pawnIndex] = {
//         ...pawn,
//         position: finalHomePositions[pawn.color],
//         location: "home",
//       };
    
//       setPawns(updatedPawns);
//       return { success: true, bonus10: true }; // ✅
//     }
    
  
//     // ✅ If newPosition is < 8, it's still invalid
//     return { success: false, reason: "Must land exactly on Home." };
//   }  
// }

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
          updatedPawns[pawnIndex] = {
            ...pawn,
            position: currentPos,
            location: "onTrack",
          };
          setPawns(updatedPawns);
          return { success: true };
        } else {
          steps--;
          updatedPawns[pawnIndex] = {
            ...pawn,
            position: steps,
            location: "homeColumn",
          };
          setPawns(updatedPawns);
          return { success: true };
        }
      }

      steps--;
    }

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
      return { success: false, reason: "Must land exactly on Home." };
    }

    if (newPosition === 8) {
      updatedPawns[pawnIndex] = {
        ...pawn,
        position: finalHomePositions[pawn.color],
        location: "home",
      };

      setPawns(updatedPawns);
      return { success: true, bonus10: true }; // 🛠 correctly trigger bonus10
    }

    // ✅ No partial movement inside home column
    return { success: false, reason: "Must land exactly on Home." };
  }
}


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

// export function updateAvailableDice(prevDice, selectedDice, pawns, currentPlayer) {
//   const updated = { ...prevDice };

//   // Handle all special bonus dice
//   // if (
//   //   selectedDice.index === "bonus" ||
//   //   selectedDice.index === "bonus10" ||
//   //   selectedDice.index === "double1" ||
//   //   selectedDice.index === "double2" ||
//   //   selectedDice.index === "opp1" ||
//   //   selectedDice.index === "opp2"
//   // ) {
//   //   delete updated[selectedDice.index];
//   //   return updated;
//   // }
//   if (
//     ["bonus", "bonus10", "bonus20", "double1", "double2", "opp1", "opp2"].includes(
//       selectedDice.index
//     )
//   ) {
//     delete updated[selectedDice.index];
//     return updated;
//   }

//   // Handle both dice used
//   if (selectedDice.index === "both") {
//     return {}; // Using both dice clears all
//   }

//   // Handle individual die used
//   delete updated[selectedDice.index];

//   // Remove 'both' if either single die is used
//   if (updated.both) {
//     delete updated.both;
//   }

//   // === NEW RULE: Disable single dice if player must enter from nest with 5 combo ===
//   const hasNestPawns = pawns.some(
//     (p) => p.color === currentPlayer && p.location === "nest"
//   );

//   const dieOneVal = prevDice.dieOne?.result;
//   const dieTwoVal = prevDice.dieTwo?.result;
//   const comboIsFive =
//     dieOneVal !== undefined &&
//     dieTwoVal !== undefined &&
//     dieOneVal + dieTwoVal === 5 &&
//     dieOneVal !== 5 &&
//     dieTwoVal !== 5;

//   // Enforce that only "both" can be used if combo == 5 and nest pawns exist
//   if (hasNestPawns && comboIsFive) {
//     delete updated.dieOne;
//     delete updated.dieTwo;
//     // If the player already used one die, and it broke the combo, that's fine
//     // But if they used nothing yet, only "both" should remain
//   }

//   return updated;
// }

// export function updateAvailableDice(prevDice, selectedDice, pawns, currentPlayer) {
//   const updated = { ...prevDice };

//   // === Skip entirely if selectedDice.chunks exists
//   // We expect confirmMove() to handle deletion in that case
//   if (selectedDice.chunks) {
//     return updated;
//   }

//   // === Remove any special bonus die
//   if (
//     [
//       "bonus",
//       "bonus10",
//       "bonus20",
//       "double1",
//       "double2",
//       "opp1",
//       "opp2",
//     ].includes(selectedDice.index)
//   ) {
//     delete updated[selectedDice.index];
//     return updated;
//   }

//   // === If both dice were used together
//   if (selectedDice.index === "both") {
//     // Both dice consumed
//     delete updated.dieOne;
//     delete updated.dieTwo;
//     delete updated.both;
//     return updated;
//   }

//   // === If a single die was used, remove it and invalidate "both"
//   if (selectedDice.index === "dieOne" || selectedDice.index === "dieTwo") {
//     delete updated[selectedDice.index];
//     if (updated.both) {
//       delete updated.both;
//     }
//   }

//   // === Handle special nest-entry enforcement (combo of 5 must be used)
//   const hasNestPawns = pawns.some(
//     (p) => p.color === currentPlayer && p.location === "nest"
//   );

//   const dieOneVal = prevDice.dieOne?.result;
//   const dieTwoVal = prevDice.dieTwo?.result;
//   const comboIsFive =
//     dieOneVal !== undefined &&
//     dieTwoVal !== undefined &&
//     dieOneVal + dieTwoVal === 5 &&
//     dieOneVal !== 5 &&
//     dieTwoVal !== 5;

//   if (hasNestPawns && comboIsFive) {
//     delete updated.dieOne;
//     delete updated.dieTwo;
//   }

//   return updated;
// }




export function updateAvailableDice(prevDice, selectedDice, pawns, currentPlayer) {
  const updated = { ...prevDice };

  // === Skip entirely if selectedDice.chunks exists
  // confirmMove() will manually remove used chunks
  if (selectedDice.chunks) {
    return updated;
  }

  // === Remove any dynamic bonus or chunk dice (e.g., bonus20_1, double1, opp2, etc.)
  if (
    selectedDice.index.startsWith("bonus") ||
    selectedDice.index.startsWith("double") ||
    selectedDice.index.startsWith("opp")
  ) {
    delete updated[selectedDice.index];
    return updated;
  }

  // === If both dice were used together, remove all base dice
  if (selectedDice.index === "both") {
    delete updated.dieOne;
    delete updated.dieTwo;
    delete updated.both;
    return updated;
  }

  // === If a single die was used, remove it and "both" if it exists
  if (selectedDice.index === "dieOne" || selectedDice.index === "dieTwo") {
    delete updated[selectedDice.index];
    if (updated.both) {
      delete updated.both;
    }
  }

  // === Enforce combo-of-5 rule for nest entry
  const hasNestPawns = pawns.some(
    (p) => p.color === currentPlayer && p.location === "nest"
  );

  const dieOneVal = prevDice.dieOne?.result;
  const dieTwoVal = prevDice.dieTwo?.result;
  const comboIsFive =
    dieOneVal !== undefined &&
    dieTwoVal !== undefined &&
    dieOneVal + dieTwoVal === 5 &&
    dieOneVal !== 5 &&
    dieTwoVal !== 5;

  if (hasNestPawns && comboIsFive) {
    delete updated.dieOne;
    delete updated.dieTwo;
  }

  return updated;
}



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
    pawnsAtStart.length >= 2; // Start space is blockaded

  if (isBlocked) {
    return false;
  }

  // === Check if 5 can be made from available dice
  const dieOne = availableDice.dieOne?.result;
  const dieTwo = availableDice.dieTwo?.result;
  const both = availableDice.both?.result;

  if ((dieOne === 5) || (dieTwo === 5) || (both === 5)) {
    return true;
  }

  if ((dieOne && dieTwo) && (dieOne + dieTwo === 5)) {
    return true;
  }

  // If no way to make 5, player not forced
  return false;
}


// export function hasAvailableMoves(pawns, currentPlayer, availableDice) {
//   const playerPawns = pawns.filter((pawn) => pawn.color === currentPlayer);

//   const hasNestPawns = playerPawns.some((pawn) => pawn.location === "nest");
//   const hasOnBoardPawns = playerPawns.some((pawn) => pawn.location !== "nest");

//   const hasFive =
//     (availableDice.dieOne && availableDice.dieOne.result === 5) ||
//     (availableDice.dieTwo && availableDice.dieTwo.result === 5) ||
//     (availableDice.both && availableDice.both.result === 5);

//   // Rule: If all pawns in nest and no 5 → no moves available
//   if (!hasOnBoardPawns && hasNestPawns && !hasFive) return false;

//   // In future: you can expand this to check for blockades, home entry, etc

//   return true;
// }

export function hasAvailableMoves(pawns, currentPlayer, availableDice, blockades) {
  const playerPawns = pawns.filter(p => p.color === currentPlayer);

  const isMoveLegal = (pawn, dieValue) => {
    if (pawn.location === "home") return false;

    if (pawn.location === "nest") {
      return dieValue === 5;
    }

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

  return Object.entries(availableDice).some(([_, die]) =>
    playerPawns.some((pawn) => isMoveLegal(pawn, die.result))
  );
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
