function LineupRating({ lineup, submitLineup }) {
  // Offense
  const filteredScoringLineupRating = lineup.filter((player) =>
    player.hasOwnProperty("teamScoring")
  );
  const filteredEfficiencyLineupRating = lineup.filter((player) =>
    player.hasOwnProperty("teamEfficiency")
  );
  const filteredSpacingLineupRating = lineup.filter((player) =>
    player.hasOwnProperty("teamSpacing")
  );
  const filteredFinishingLineupRating = lineup.filter((player) =>
    player.hasOwnProperty("teamFinishing")
  );
  const filteredPassingLineupRating = lineup.filter((player) =>
    player.hasOwnProperty("teamPassing")
  );
  const filteredCreationLineupRating = lineup.filter((player) =>
    player.hasOwnProperty("teamCreation")
  );
  const filteredOffReboundingLineupRating = lineup.filter((player) =>
    player.hasOwnProperty("teamOffRebounding")
  );
  // Defense
  const filteredInteriorDefLineupRating = lineup.filter((player) =>
    player.hasOwnProperty("teamInteriorDef")
  );
  const filteredPerimeterDefLineupRating = lineup.filter((player) =>
    player.hasOwnProperty("teamPerimeterDef")
  );
  const filteredSwitchabilityLineupRating = lineup.filter((player) =>
    player.hasOwnProperty("teamSwitchability")
  );
  const filteredDefIntangiblesLineupRating = lineup.filter((player) =>
    player.hasOwnProperty("teamDefIntangibles")
  );
  const filteredDefPlaymakingLineupRating = lineup.filter((player) =>
    player.hasOwnProperty("teamDefPlaymaking")
  );
  const filteredDefReboundingLineupRating = lineup.filter((player) =>
    player.hasOwnProperty("teamDefRebounding")
  );

  const lineupScoringRatingNumber = filteredScoringLineupRating.reduce(
    function (acc, player) {
      return acc + player.teamScoring;
    },
    0
  );

  const lineupEfficiencyRatingNumber = filteredEfficiencyLineupRating.reduce(
    function (acc, player) {
      return acc + player.teamEfficiency;
    },
    0
  );

  const lineupSpacingRatingNumber = filteredSpacingLineupRating.reduce(
    function (acc, player) {
      return acc + player.teamSpacing;
    },
    0
  );

  const lineupFinishingRatingNumber = filteredFinishingLineupRating.reduce(
    function (acc, player) {
      return acc + player.teamFinishing;
    },
    0
  );

  const lineupPassingRatingNumber = filteredPassingLineupRating.reduce(
    function (acc, player) {
      return acc + player.teamPassing;
    },
    0
  );

  const lineupCreationRatingNumber = filteredCreationLineupRating.reduce(
    function (acc, player) {
      return acc + player.teamCreation;
    },
    0
  );

  const lineupOffReboundingRatingNumber =
    filteredOffReboundingLineupRating.reduce(function (acc, player) {
      return acc + player.teamOffRebounding;
    }, 0);

  //

  const lineupInteriorDefRatingNumber = filteredInteriorDefLineupRating.reduce(
    function (acc, player) {
      return acc + player.teamInteriorDef;
    },
    0
  );

  const lineupPerimeterDefRatingNumber =
    filteredPerimeterDefLineupRating.reduce(function (acc, player) {
      return acc + player.teamPerimeterDef;
    }, 0);

  const lineupSwitchabilityRatingNumber =
    filteredSwitchabilityLineupRating.reduce(function (acc, player) {
      return acc + player.teamSwitchability;
    }, 0);

  const lineupDefIntangiblesRatingNumber =
    filteredDefIntangiblesLineupRating.reduce(function (acc, player) {
      return acc + player.teamDefIntangibles;
    }, 0);

  const lineupDefPlaymakingRatingNumber =
    filteredDefPlaymakingLineupRating.reduce(function (acc, player) {
      return acc + player.teamDefPlaymaking;
    }, 0);

  const lineupDefReboundingRatingNumber =
    filteredDefReboundingLineupRating.reduce(function (acc, player) {
      return acc + player.teamDefRebounding;
    }, 0);

  //

  const teamRatingColor = (data) => {
    if ((data / 5).toFixed(1) >= 9.5) {
      return "bg-cyan-300";
    } else if ((data / 5).toFixed(1) <= 9.4 && (data / 5).toFixed(1) >= 7.5) {
      return "bg-green-500";
    } else if ((data / 5).toFixed(1) <= 7.4 && (data / 5).toFixed(1) >= 5.6) {
      return "bg-lime-400";
    } else if ((data / 5).toFixed(1) <= 5.5 && (data / 5).toFixed(1) >= 4.5) {
      return "bg-yellow-300";
    } else if ((data / 5).toFixed(1) <= 4.4 && (data / 5).toFixed(1) >= 2.6) {
      return "bg-orange-400";
    } else if ((data / 5).toFixed(1) <= 2.5) {
      return "bg-red-500";
    }
  };

  const widthLogic = (data) => {
    switch ((data / 5).toFixed(1)) {
      case "0":
        return "w-[0%]";
      case "0.1":
        return "w-[1%]";
      case "0.2":
        return "w-[2%]";
      case "0.3":
        return "w-[3%]";
      case "0.4":
        return "w-[4%]";
      case "0.5":
        return "w-[5%]";
      case "0.6":
        return "w-[6%]";
      case "0.7":
        return "w-[7%]";
      case "0.8":
        return "w-[8%]";
      case "0.9":
        return "w-[9%]";
      // **********************************************
      case "1.0":
        return "w-[10%]";
      case "1.1":
        return "w-[11%]";
      case "1.2":
        return "w-[12%]";
      case "1.3":
        return "w-[13%]";
      case "1.4":
        return "w-[14%]";
      case "1.5":
        return "w-[15%]";
      case "1.6":
        return "w-[16%]";
      case "1.7":
        return "w-[17%]";
      case "1.8":
        return "w-[18%]";
      case "1.9":
        return "w-[19%]";
      // **********************************************
      case "2.0":
        return "w-[20%]";
      case "2.1":
        return "w-[21%]";
      case "2.2":
        return "w-[22%]";
      case "2.3":
        return "w-[23%]";
      case "2.4":
        return "w-[24%]";
      case "2.5":
        return "w-[25%]";
      case "2.6":
        return "w-[26%]";
      case "2.7":
        return "w-[27%]";
      case "2.8":
        return "w-[28%]";
      case "2.9":
        return "w-[29%]";
      // **********************************************
      case "3.0":
        return "w-[30%]";
      case "3.1":
        return "w-[31%]";
      case "3.2":
        return "w-[32%]";
      case "3.3":
        return "w-[33%]";
      case "3.4":
        return "w-[34%]";
      case "3.5":
        return "w-[35%]";
      case "3.6":
        return "w-[36%]";
      case "3.7":
        return "w-[37%]";
      case "3.8":
        return "w-[38%]";
      case "3.9":
        return "w-[39%]";
      // **********************************************
      case "4.0":
        return "w-[40%]";
      case "4.1":
        return "w-[41%]";
      case "4.2":
        return "w-[42%]";
      case "4.3":
        return "w-[43%]";
      case "4.4":
        return "w-[44%]";
      case "4.5":
        return "w-[45%]";
      case "4.6":
        return "w-[46%]";
      case "4.7":
        return "w-[47%]";
      case "4.8":
        return "w-[48%]";
      case "4.9":
        return "w-[49%]";
      // **********************************************
      case "5.0":
        return "w-[50%]";
      case "5.1":
        return "w-[51%]";
      case "5.2":
        return "w-[52%]";
      case "5.3":
        return "w-[53%]";
      case "5.4":
        return "w-[54%]";
      case "5.5":
        return "w-[55%]";
      case "5.6":
        return "w-[56%]";
      case "5.7":
        return "w-[57%]";
      case "5.8":
        return "w-[58%]";
      case "5.9":
        return "w-[59%]";
      // *********************************************
      case "6.0":
        return "w-[60%]";
      case "6.1":
        return "w-[61%]";
      case "6.2":
        return "w-[62%]";
      case "6.3":
        return "w-[63%]";
      case "6.4":
        return "w-[64%]";
      case "6.5":
        return "w-[65%]";
      case "6.6":
        return "w-[66%]";
      case "6.7":
        return "w-[67%]";
      case "6.8":
        return "w-[68%]";
      case "6.9":
        return "w-[69%]";
      // *********************************************
      case "7.0":
        return "w-[70%]";
      case "7.1":
        return "w-[71%]";
      case "7.2":
        return "w-[72%]";
      case "7.3":
        return "w-[73%]";
      case "7.4":
        return "w-[74%]";
      case "7.5":
        return "w-[75%]";
      case "7.6":
        return "w-[76%]";
      case "7.7":
        return "w-[77%]";
      case "7.8":
        return "w-[78%]";
      case "7.9":
        return "w-[79%]";
      // **********************************************
      case "8.0":
        return "w-[80%]";
      case "8.1":
        return "w-[81%]";
      case "8.2":
        return "w-[82%]";
      case "8.3":
        return "w-[83%]";
      case "8.4":
        return "w-[84%]";
      case "8.5":
        return "w-[85%]";
      case "8.6":
        return "w-[86%]";
      case "8.7":
        return "w-[87%]";
      case "8.8":
        return "w-[88%]";
      case "8.9":
        return "w-[89%]";
      // **********************************************
      case "9.0":
        return "w-[90%]";
      case "9.1":
        return "w-[91%]";
      case "9.2":
        return "w-[92%]";
      case "9.3":
        return "w-[93%]";
      case "9.4":
        return "w-[94%]";
      case "9.5":
        return "w-[95%]";
      case "9.6":
        return "w-[96%]";
      case "9.7":
        return "w-[97%]";
      case "9.8":
        return "w-[98%]";
      case "9.9":
        return "w-[99%]";
      case "10":
        return "w-[100%]";
      // **********************************************
      default:
        return "w-[0%]";
    }
  };

  return (
    <div className="mt-5">
      {submitLineup ? (
        <div className="flex flex-col">
          <div className="flex justify-start flex-col w-fit lg:flex-row lg:w-full lg:gap-10">
            <div className="mb-8">
              <div className="font-bold underline text-lg">Offense</div>
              <div className="flex flex-col">
                <div className="flex flex-row content-center">
                  <div className="mr-5">Scoring:</div>
                  <div className="bg-gray-200 w-48 h-5 ml-auto rounded-md">
                    <div
                      className={`${widthLogic(
                        lineupScoringRatingNumber
                      )} h-5 ${teamRatingColor(
                        lineupScoringRatingNumber
                      )} rounded-md`}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-row content-center">
                  <div className="mr-5">Efficiency:</div>
                  <div className="bg-gray-200 w-48 h-5 ml-auto rounded-md">
                    <div
                      className={`${widthLogic(
                        lineupEfficiencyRatingNumber
                      )} h-5 ${teamRatingColor(
                        lineupEfficiencyRatingNumber
                      )} rounded-md`}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-row content-center">
                  <div>Spacing:</div>
                  <div className="bg-gray-200 w-48 h-5 ml-auto rounded-md">
                    <div
                      className={`${widthLogic(
                        lineupSpacingRatingNumber
                      )} h-5 ${teamRatingColor(
                        lineupSpacingRatingNumber
                      )} rounded-md`}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-row content-center">
                  <div className="mr-5">Finishing:</div>
                  <div className="bg-gray-200 w-48 h-5 ml-auto rounded-md">
                    <div
                      className={`${widthLogic(
                        lineupFinishingRatingNumber
                      )} h-5 ${teamRatingColor(
                        lineupFinishingRatingNumber
                      )} rounded-md`}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-row content-center">
                  <div className="mr-5">Passing:</div>
                  <div className="bg-gray-200 w-48 h-5 ml-auto rounded-md">
                    <div
                      className={`${widthLogic(
                        lineupPassingRatingNumber
                      )} h-5 ${teamRatingColor(
                        lineupPassingRatingNumber
                      )} rounded-md`}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-row content-center">
                  <div className="mr-5">Creation:</div>
                  <div className="bg-gray-200 w-48 h-5 ml-auto rounded-md">
                    <div
                      className={`${widthLogic(
                        lineupCreationRatingNumber
                      )} h-5 ${teamRatingColor(
                        lineupCreationRatingNumber
                      )} rounded-md`}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-row content-center">
                  <div className="mr-5">Off Rebounding:</div>
                  <div className="bg-gray-200 w-48 h-5 ml-auto rounded-md">
                    <div
                      className={`${widthLogic(
                        lineupOffReboundingRatingNumber
                      )} h-5 ${teamRatingColor(
                        lineupOffReboundingRatingNumber
                      )} rounded-md`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <div className="font-bold underline text-lg">Defense</div>
              <div className="flex flex-col">
                <div className="flex flex-row content-center">
                  <div className="mr-5">Interior Def:</div>
                  <div className="bg-gray-200 w-48 h-5 ml-auto rounded-md">
                    <div
                      className={`${widthLogic(
                        lineupInteriorDefRatingNumber
                      )} h-5 ${teamRatingColor(
                        lineupInteriorDefRatingNumber
                      )} rounded-md`}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-row content-center">
                  <div className="mr-5">Perimeter Def:</div>
                  <div className="bg-gray-200 w-48 h-5 ml-auto rounded-md">
                    <div
                      className={`${widthLogic(
                        lineupPerimeterDefRatingNumber
                      )} h-5 ${teamRatingColor(
                        lineupPerimeterDefRatingNumber
                      )} rounded-md`}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-row content-center">
                  <div className="mr-5">Switchability:</div>
                  <div className="bg-gray-200 w-48 h-5 ml-auto rounded-md">
                    <div
                      className={`${widthLogic(
                        lineupSwitchabilityRatingNumber
                      )} h-5 ${teamRatingColor(
                        lineupSwitchabilityRatingNumber
                      )} rounded-md`}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-row content-center">
                  <div className="mr-5">Def Intangibles:</div>
                  <div className="bg-gray-200 w-48 h-5 ml-auto rounded-md">
                    <div
                      className={`${widthLogic(
                        lineupDefIntangiblesRatingNumber
                      )} h-5 ${teamRatingColor(
                        lineupDefIntangiblesRatingNumber
                      )} rounded-md`}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-row content-center">
                  <div className="mr-5">Def Playmaking:</div>
                  <div className="bg-gray-200 w-48 h-5 ml-auto rounded-md">
                    <div
                      className={`${widthLogic(
                        lineupDefPlaymakingRatingNumber
                      )} h-5 ${teamRatingColor(
                        lineupDefPlaymakingRatingNumber
                      )} rounded-md`}
                    ></div>
                  </div>
                </div>
                <div className="flex flex-row content-center">
                  <div className="mr-5">Def Rebounding:</div>
                  <div className="bg-gray-200 w-48 h-5 ml-auto rounded-md">
                    <div
                      className={`${widthLogic(
                        lineupDefReboundingRatingNumber
                      )} h-5 ${teamRatingColor(
                        lineupDefReboundingRatingNumber
                      )} rounded-md`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default LineupRating;
