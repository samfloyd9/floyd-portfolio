export const shouldForceLargerDie = (availableDice, pawns, currentPlayer, isMoveLegal) => {
  const dieOne = availableDice.dieOne?.result;
  const dieTwo = availableDice.dieTwo?.result;

  if (!dieOne || !dieTwo) return false;

  const larger = dieOne > dieTwo ? dieOne : dieTwo;

  const playerPawns = pawns.filter((p) => p.color === currentPlayer);
  const canUseLarger = playerPawns.some((p) => isMoveLegal(p, larger));

  return !canUseLarger;
};

export const shouldUseOriginalBeforeBonus = (availableDice, selectedDice) => {
  if (!selectedDice) return false; // ✅ prevent crash

  const isBonus =
    selectedDice.index.startsWith("bonus") ||
    selectedDice.index.startsWith("double") ||
    selectedDice.index.startsWith("opp") ||
    selectedDice.index.startsWith("combo_");

  const hasOriginalDice = ["dieOne", "dieTwo", "both"].some((key) =>
    Object.keys(availableDice).includes(key)
  );

  return isBonus && hasOriginalDice && Object.keys(availableDice).length === 1;
};
