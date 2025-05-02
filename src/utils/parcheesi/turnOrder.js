export const findMaxRoll = (rolls) => {
  const max = Math.max(...Object.values(rolls).map((r) => r.roll));
  return Object.keys(rolls).filter((p) => rolls[p].roll === max);
};

export const reRollPlayers = async (
  players,
  getDieImage,
  setRolling,
  setInitialRolls
) => {
  let newRolls = {};

  for (let player of players) {
    setRolling(player);
    await new Promise((r) => setTimeout(r, 1000));

    const roll = Math.floor(Math.random() * 6) + 1;
    const icon = getDieImage(roll);

    newRolls[player] = { roll, icon };
    await new Promise((r) => setTimeout(r, 100));
  }

  setRolling(null);
  setInitialRolls((prev) => ({ ...prev, ...newRolls }));

  return newRolls;
};
