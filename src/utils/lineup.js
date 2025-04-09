// Helper to total lineup values for a specific stat key
export function calculateLineupTotal(lineup, key) {
  return lineup
    .filter((player) => player.hasOwnProperty(key))
    .reduce((acc, player) => acc + player[key], 0);
}

// Convert average (score out of 10) into a letter grade
export function getChemistryLetterGrade(score) {
  if (score >= 9.5) return "A+";
  if (score >= 8.5) return "A";
  if (score >= 7.5) return "B+";
  if (score >= 6.5) return "B";
  if (score >= 5.5) return "C+";
  if (score >= 4.5) return "C";
  if (score >= 3.5) return "D+";
  if (score >= 2.5) return "D";
  return "F";
}

// Assign a color based on average chemistry score
export function getChemistryColor(score) {
  if (score >= 9.5) return "bg-cyan-300";
  if (score >= 8.5) return "bg-green-400";
  if (score >= 7.5) return "bg-lime-400";
  if (score >= 6.5) return "bg-yellow-300";
  if (score >= 5.5) return "bg-yellow-400";
  if (score >= 4.5) return "bg-orange-400";
  if (score >= 3.5) return "bg-orange-500";
  if (score >= 2.5) return "bg-red-400";
  return "bg-red-600";
}

// Returns styled TS% value with color based on efficiency
export function getTSColorDisplay(player) {
  const ts = player.ts;
  if (ts > 0) {
    return <div className="text-green-700">+{ts.toFixed(1)}</div>;
  } else if (ts === 0) {
    return <div className="text-yellow-500">{ts.toFixed(1)}</div>;
  } else {
    return <div className="text-red-600">{ts.toFixed(1)}</div>;
  }
}

// Returns a Tailwind color class based on badge tier
export function getBadgeColor(tier) {
  switch (tier) {
    case "goat":
      return "bg-rose-500";
      // return "bg-cyan-200";
    case "hof":
      return "bg-purple-400";
    case "gold":
      return "bg-yellow-400";
    case "silver":
      return "bg-slate-300";
    case "bronze":
      return "bg-yellow-600";
    default:
      return "bg-gray-200";
  }
}
