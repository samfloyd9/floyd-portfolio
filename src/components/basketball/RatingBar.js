// RatingBar is a reusable component for visualizing lineup stats.
// It shows a label and a colored bar whose width and color reflect how strong that
// particular attribute is.
function RatingBar({ label, value }) {
  // Calculates the width of the inner bar based on a 0–10 scale average
  const widthLogic = (data) => {
    const average = data / 5;
    const percent = Math.min((average / 10) * 100, 100); // e.g., 80
    return `${percent}%`; // returns a string like "80%"
  };

  // Returns a Tailwind background color class based on performance
  // Lowerer scores --> (red/orange)
  // Average scores --> (yellow)
  // Higher scores --> (green/blue)
  const teamRatingColor = (data) => {
    const average = (data / 5).toFixed(1);

    if (average >= 9.0) {
      return "bg-cyan-400"; // elite
    } else if (average >= 7.5) {
      return "bg-green-500"; // great
    } else if (average >= 6.0) {
      return "bg-lime-400"; // good
    } else if (average >= 4.5) {
      return "bg-yellow-300"; // average
    } else if (average >= 2.6) {
      return "bg-orange-400"; // weak
    } else {
      return "bg-red-500"; // very weak
    }
  };

  return (
    <div className="flex flex-row content-center">
      {/* Stat label (ex. "Scoring") */}
      <div className="mr-5">{label}:</div>

      <div className="bg-gray-200 w-48 h-5 ml-auto rounded-md">
        {/* Inner colored bar */}
        <div
          style={{ width: widthLogic(value) }} // ✅ Dynamic style for width
          className={`${teamRatingColor(value)} h-5 rounded-md`}
        />
      </div>
    </div>
  );
}

export default RatingBar;
