import { useState } from "react";
import LineupRating from "./LineupRating";
import { getChemistryLetterGrade, getChemistryColor, calculateLineupTotal } from "../../utils/lineup";

function LineupSection({ lineup, setLineup }) {

  const templateLineup = [
    {
      template: "Select a PG from the list above",
    },
    {
      template: "Select a SG from the list above",
    },
    {
      template: "Select a SF from the list above",
    },
    {
      template: "Select a PF from the list above",
    },
    {
      template: "Select a C from the list above",
    },
  ];

  const [submitLineup, setSubmitLineup] = useState(false);

  const handleSubmitLineup = () => {
    setSubmitLineup(true);
  };

  const handleReset = () => {
    setLineup(templateLineup);
    setSubmitLineup(false);
  };

  const lineupTotalChemistryRatingNumber = calculateLineupTotal(
    lineup,
    "teamTotalChemRating"
  );

  const lineupTotalImpactRatingNumber = calculateLineupTotal(
    lineup,
    "teamTotalImpact"
  );

  console.log("Total Chemistry Score:", lineupTotalChemistryRatingNumber);

  return (
    <div className="flex flex-col mx-auto">
      <div className="flex flex-row gap-5 justify-center items-center mb-5">
        {lineup[0].hasOwnProperty("name") &&
          lineup[1].hasOwnProperty("name") &&
          lineup[2].hasOwnProperty("name") &&
          lineup[3].hasOwnProperty("name") &&
          lineup[4].hasOwnProperty("name") && (
            <button
              className="bg-blue-500 rounded-xl p-2 w-fit h-fit text-white shadow-md"
              onClick={handleSubmitLineup}
            >
              Submit Lineup
            </button>
          )}
        <button
          className="bg-red-500 rounded-xl p-2 w-fit h-fit text-white shadow-md"
          onClick={handleReset}
        >
          Reset Lineup
        </button>
      </div>
      {submitLineup &&
        lineup[0].hasOwnProperty("name") &&
        lineup[1].hasOwnProperty("name") &&
        lineup[2].hasOwnProperty("name") &&
        lineup[3].hasOwnProperty("name") &&
        lineup[4].hasOwnProperty("name") && (
          <div className="flex flex-col items-center gap-5 lg:flex-row lg:justify-center">
            <div className="border border-gray-400 h-fit w-fit rounded-md flex flex-row justify-center items-center content-center py-2 px-3">
              <div className="font-bold underline mr-6">Team Chemistry:</div>
              <div
                className={`px-2.5 py-2 border ${getChemistryColor(
                  lineupTotalChemistryRatingNumber
                )} rounded-lg`}
              >
                {getChemistryLetterGrade(lineupTotalChemistryRatingNumber)}
              </div>
            </div>
            <div className="border border-gray-400 h-fit w-fit rounded-md flex flex-row justify-center items-center content-center py-2 px-3">
              <div className="font-bold underline mr-6">Ovr Lineup Rating:</div>
              <div className="px-2.5 py-2 border bg-green-300 rounded-lg">
                {lineupTotalImpactRatingNumber.toFixed(1)}
              </div>
            </div>
          </div>
        )}
      <LineupRating lineup={lineup} submitLineup={submitLineup} />
    </div>
  );
}

export default LineupSection;
