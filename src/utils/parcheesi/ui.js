// utils/ui.js
export const getPlayerBgColor = (player) => {
  switch (player) {
    case "yellow": return "bg-yellow-200/[0.35]";
    case "blue": return "bg-blue-200/[0.35]";
    case "red": return "bg-red-200/[0.35]";
    case "green": return "bg-green-200/[0.35]";
    default: return "bg-white";
  }
};
