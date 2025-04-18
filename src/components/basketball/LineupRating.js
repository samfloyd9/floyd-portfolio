// RatingBar is a reusable component that shows a colored bar representing the strength of a 
// given team attribute like scoring or defense.
import RatingBar from "./RatingBar";

// This component takes a 5 player lineup and displays average scores for offensive and defensive attributes 
// based on each players ratings.
function LineupRating({ lineup, submitLineup }) {
  // function to calculate the total score across the lineup for a specific attribute key (e.g., 'teamScoring').
  const getLineupTotal = (key) =>
    lineup.reduce((acc, player) => {
      return acc + player[key];
    }, 0);

  // List of offensive attributes to display mapped to their respective keys.
  const offensiveStats = [
    { label: "Scoring", key: "teamScoring" },
    { label: "Efficiency", key: "teamEfficiency" },
    { label: "Spacing", key: "teamSpacing" },
    { label: "Finishing", key: "teamFinishing" },
    { label: "Passing", key: "teamPassing" },
    { label: "Creation", key: "teamCreation" },
    { label: "Off Rebounding", key: "teamOffRebounding" },
  ];

  // List of defensive attributes to display mapped to their respective keys.
  const defensiveStats = [
    { label: "Interior Def", key: "teamInteriorDef" },
    { label: "Perimeter Def", key: "teamPerimeterDef" },
    { label: "Switchability", key: "teamSwitchability" },
    { label: "Def Intangibles", key: "teamDefIntangibles" },
    { label: "Def Playmaking", key: "teamDefPlaymaking" },
    { label: "Def Rebounding", key: "teamDefRebounding" },
  ];

  return (
    <div className="mt-5">
      {/* Only render ratings if submitLineup is true AND all 5 lineup slots are filled. */}
      {submitLineup &&
        lineup[0].hasOwnProperty("name") &&
        lineup[1].hasOwnProperty("name") &&
        lineup[2].hasOwnProperty("name") &&
        lineup[3].hasOwnProperty("name") &&
        lineup[4].hasOwnProperty("name") && (
          <div className="">
            {/* OFFENSIVE STATS */}
            <div className="font-bold underline text-lg">Offense</div>
            {offensiveStats.map(({ label, key }) => (
              <RatingBar key={key} label={label} value={getLineupTotal(key)} />
            ))}

            {/* DEFENSIVE STATS */}
            <div className="font-bold underline text-lg mt-8">Defense</div>
            {defensiveStats.map(({ label, key }) => (
              <RatingBar key={key} label={label} value={getLineupTotal(key)} />
            ))}
          </div>
        )}
    </div>
  );
}

export default LineupRating;
