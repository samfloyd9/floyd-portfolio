import { useState } from "react";
import OffFormations from "./OffFormations";
import DefFormations from "./DefFormations";
import Dropdown from "./Dropdown";
import { IoInformationCircleOutline } from "react-icons/io5";
import Button from "./Button";
import { GrPowerReset } from "react-icons/gr";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";

function FootballLineup({
  offPlaySelection,
  offPlays,
  defPlaySelection,
  defPlays,
  handleSidebarView,
  handleReset,
  handleRandomLineup,
  unitSelection,
  setUnitSelection,
  unit,
  handleOffPlay,
  handleDefPlay,
  // --------------
  offensiveLine,
  quarterback,
  runningback1,
  runningback2,
  fullBack,
  tightEnd1,
  tightEnd2,
  tightEnd3,
  reciever1,
  reciever2,
  reciever3,
  reciever4,
  // --------------
  noseTackle,
  rightDefensiveTackle,
  leftDefensiveTackle,
  leftDefensiveEnd,
  rightDefensiveEnd,
  rightOutsideLinebacker,
  leftOutsideLinebacker,
  middleLinebacker1,
  middleLinebacker2,
  freeSafety,
  strongSafety,
  cornerback1,
  cornerback2,
  cornerback3,
  cornerback4,
  // ---------------
}) {
  const handleUnitSelect = (option) => {
    setUnitSelection(option);
  };

  // const unitStyleLogic = () => {
  //   if ((unitSelection.label  === 'Offense') || (unitSelection.label  === undefined)) {
  //     return 'items-start'
  //   } else if ( unitSelection.label  === 'Defense' ) {
  //     return 'items-end'
  //   }
  // }

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-row mb-11 justify-center items-center z-30">
        <div className="flex flex-col gap-5 lg:flex-row items-center">
          <div className="flex flex-row gap-5">
            {(unitSelection.label === "Offense" ||
              unitSelection.label === undefined) && (
              <Dropdown
                onChange={handleOffPlay}
                value={offPlaySelection}
                options={offPlays}
              />
            )}
            {unitSelection.label === "Defense" && (
              <Dropdown
                onChange={handleDefPlay}
                value={defPlaySelection}
                options={defPlays}
              />
            )}
            <Dropdown
              onChange={handleUnitSelect}
              value={unitSelection}
              options={unit}
            />
          </div>
        <div className="flex flex-row gap-5">
          <Button
            onClick={handleSidebarView}
            className="rounded-lg hover:bg-green-300 bg-green-200 shadow-md flex justify-center"
          >
            + Add Player
          </Button>

          <div className="group pointer relative rounded-lg">
            <Button
              onClick={handleRandomLineup}
              className="rounded-lg text-3xl hover:bg-gray-200 bg-white shadow-md flex justify-center"
            >
              <GiPerspectiveDiceSixFacesRandom />
            </Button>
            <span className="pointer-events-none pointer absolute -bottom-7 z-20 -left-9 w-max rounded bg-gray-900 px-2 py-1 text-sm font-medium text-gray-50 opacity-0 shadow transition-opacity group-hover:opacity-100">
              Random Lineup
            </span>
          </div>

          <div className="group pointer relative rounded-lg">
            <Button
              onClick={handleReset}
              className="rounded-lg hover:bg-gray-200 text-2xl bg-white shadow-md flex justify-center"
            >
              <GrPowerReset />
            </Button>
            <span className="pointer-events-none pointer absolute -bottom-7 z-20 -left-7 w-max rounded bg-gray-900 px-2 py-1 text-sm font-medium text-gray-50 opacity-0 shadow transition-opacity group-hover:opacity-100">
              Reset Lineup
            </span>
          </div>
        </div>
        </div>
      </div>

      <div className={`w-full`}>
        {(unitSelection.label === "Offense" ||
          unitSelection.label === undefined) &&
          (offPlaySelection.label === "I Formation Pro" ||
            offPlaySelection.label === undefined) && (
            <OffFormations
              offensiveLine={offensiveLine}
              quarterback={quarterback}
              runningback1={runningback1}
              fullBack={fullBack}
              reciever1={reciever1}
              reciever2={reciever2}
              tightEnd1={tightEnd1}
              offPlaySelection={offPlaySelection}
            />
          )}

        {(unitSelection.label === "Offense" ||
          unitSelection.label === undefined) &&
          offPlaySelection.label === "I Formation Tight" && (
            <OffFormations
              offensiveLine={offensiveLine}
              quarterback={quarterback}
              runningback1={runningback1}
              fullBack={fullBack}
              reciever1={reciever1}
              tightEnd1={tightEnd1}
              tightEnd2={tightEnd2}
              offPlaySelection={offPlaySelection}
            />
          )}

        {(unitSelection.label === "Offense" ||
          unitSelection.label === undefined) &&
          offPlaySelection.label === "I Formation Slot" && (
            <OffFormations
              offensiveLine={offensiveLine}
              quarterback={quarterback}
              runningback1={runningback1}
              fullBack={fullBack}
              reciever1={reciever1}
              reciever2={reciever2}
              reciever3={reciever3}
              offPlaySelection={offPlaySelection}
            />
          )}

        {(unitSelection.label === "Offense" ||
          unitSelection.label === undefined) &&
          offPlaySelection.label === "I Formation Hulk" && (
            <OffFormations
              offensiveLine={offensiveLine}
              quarterback={quarterback}
              runningback1={runningback1}
              runningback2={runningback2}
              fullBack={fullBack}
              tightEnd1={tightEnd1}
              tightEnd2={tightEnd2}
              tightEnd3={tightEnd3}
              offPlaySelection={offPlaySelection}
            />
          )}

        {(unitSelection.label === "Offense" ||
          unitSelection.label === undefined) &&
          offPlaySelection.label === "Full House Wide" && (
            <OffFormations
              offensiveLine={offensiveLine}
              quarterback={quarterback}
              runningback1={runningback1}
              runningback2={runningback2}
              fullBack={fullBack}
              reciever1={reciever1}
              reciever2={reciever2}
              offPlaySelection={offPlaySelection}
            />
          )}

        {(unitSelection.label === "Offense" ||
          unitSelection.label === undefined) &&
          offPlaySelection.label === "Full House Tight" && (
            <OffFormations
              offensiveLine={offensiveLine}
              quarterback={quarterback}
              runningback1={runningback1}
              runningback2={runningback2}
              fullBack={fullBack}
              tightEnd1={tightEnd1}
              tightEnd2={tightEnd2}
              offPlaySelection={offPlaySelection}
            />
          )}

        {(unitSelection.label === "Offense" ||
          unitSelection.label === undefined) &&
          offPlaySelection.label === "Wing-T Wide" && (
            <OffFormations
              offensiveLine={offensiveLine}
              quarterback={quarterback}
              runningback1={runningback1}
              runningback2={runningback2}
              reciever1={reciever1}
              reciever2={reciever2}
              tightEnd1={tightEnd1}
              offPlaySelection={offPlaySelection}
            />
          )}

        {(unitSelection.label === "Offense" ||
          unitSelection.label === undefined) &&
          offPlaySelection.label === "Wing-T Tight" && (
            <OffFormations
              offensiveLine={offensiveLine}
              quarterback={quarterback}
              runningback1={runningback1}
              runningback2={runningback2}
              reciever1={reciever1}
              tightEnd1={tightEnd1}
              tightEnd2={tightEnd2}
              offPlaySelection={offPlaySelection}
            />
          )}

        {(unitSelection.label === "Offense" ||
          unitSelection.label === undefined) &&
          offPlaySelection.label === "Pistol Spread" && (
            <OffFormations
              offensiveLine={offensiveLine}
              quarterback={quarterback}
              runningback1={runningback1}
              reciever1={reciever1}
              reciever2={reciever2}
              reciever3={reciever3}
              reciever4={reciever4}
              offPlaySelection={offPlaySelection}
            />
          )}

        {(unitSelection.label === "Offense" ||
          unitSelection.label === undefined) &&
          offPlaySelection.label === "Pistol Bunch" && (
            <OffFormations
              offensiveLine={offensiveLine}
              quarterback={quarterback}
              runningback1={runningback1}
              reciever1={reciever1}
              reciever2={reciever2}
              reciever3={reciever3}
              tightEnd1={tightEnd1}
              offPlaySelection={offPlaySelection}
            />
          )}

        {(unitSelection.label === "Offense" ||
          unitSelection.label === undefined) &&
          offPlaySelection.label === "Pistol Strong" && (
            <OffFormations
              offensiveLine={offensiveLine}
              quarterback={quarterback}
              runningback1={runningback1}
              runningback2={runningback2}
              reciever1={reciever1}
              reciever2={reciever2}
              reciever3={reciever3}
              offPlaySelection={offPlaySelection}
            />
          )}

        {(unitSelection.label === "Offense" ||
          unitSelection.label === undefined) &&
          offPlaySelection.label === "Pistol Ace" && (
            <OffFormations
              offensiveLine={offensiveLine}
              quarterback={quarterback}
              runningback1={runningback1}
              reciever1={reciever1}
              reciever2={reciever2}
              tightEnd1={tightEnd1}
              tightEnd2={tightEnd2}
              offPlaySelection={offPlaySelection}
            />
          )}

        {(unitSelection.label === "Offense" ||
          unitSelection.label === undefined) &&
          offPlaySelection.label === "Pistol Full House" && (
            <OffFormations
              offensiveLine={offensiveLine}
              quarterback={quarterback}
              runningback1={runningback1}
              runningback2={runningback2}
              reciever1={reciever1}
              reciever2={reciever2}
              tightEnd1={tightEnd1}
              offPlaySelection={offPlaySelection}
            />
          )}

        {(unitSelection.label === "Offense" ||
          unitSelection.label === undefined) &&
          offPlaySelection.label === "Pistol Strong Tight" && (
            <OffFormations
              offensiveLine={offensiveLine}
              quarterback={quarterback}
              runningback1={runningback1}
              runningback2={runningback2}
              reciever1={reciever1}
              reciever2={reciever2}
              tightEnd1={tightEnd1}
              offPlaySelection={offPlaySelection}
            />
          )}

        {(unitSelection.label === "Offense" ||
          unitSelection.label === undefined) &&
          offPlaySelection.label === "Pistol Wing Tight" && (
            <OffFormations
              offensiveLine={offensiveLine}
              quarterback={quarterback}
              runningback1={runningback1}
              runningback2={runningback2}
              reciever1={reciever1}
              tightEnd1={tightEnd1}
              tightEnd2={tightEnd2}
              offPlaySelection={offPlaySelection}
            />
          )}

        {(unitSelection.label === "Offense" ||
          unitSelection.label === undefined) &&
          offPlaySelection.label === "Power I" && (
            <OffFormations
              offensiveLine={offensiveLine}
              quarterback={quarterback}
              fullBack={fullBack}
              runningback1={runningback1}
              runningback2={runningback2}
              reciever1={reciever1}
              tightEnd1={tightEnd1}
              tightEnd2={tightEnd2}
              offPlaySelection={offPlaySelection}
            />
          )}

        {(unitSelection.label === "Offense" ||
          unitSelection.label === undefined) &&
          offPlaySelection.label === "Strong I Wide" && (
            <OffFormations
              offensiveLine={offensiveLine}
              quarterback={quarterback}
              fullBack={fullBack}
              runningback1={runningback1}
              reciever1={reciever1}
              reciever2={reciever2}
              tightEnd1={tightEnd1}
              offPlaySelection={offPlaySelection}
            />
          )}

        {(unitSelection.label === "Offense" ||
          unitSelection.label === undefined) &&
          offPlaySelection.label === "Strong I Tight" && (
            <OffFormations
              offensiveLine={offensiveLine}
              quarterback={quarterback}
              fullBack={fullBack}
              runningback1={runningback1}
              reciever1={reciever1}
              tightEnd1={tightEnd1}
              tightEnd2={tightEnd2}
              offPlaySelection={offPlaySelection}
            />
          )}

        {(unitSelection.label === "Offense" ||
          unitSelection.label === undefined) &&
          offPlaySelection.label === "Wildcat Pro" && (
            <OffFormations
              offensiveLine={offensiveLine}
              quarterback={quarterback}
              runningback1={runningback1}
              runningback2={runningback2}
              reciever1={reciever1}
              reciever2={reciever2}
              tightEnd1={tightEnd1}
              offPlaySelection={offPlaySelection}
            />
          )}

        {(unitSelection.label === "Offense" ||
          unitSelection.label === undefined) &&
          offPlaySelection.label === "Wildcat Unbalanced" && (
            <OffFormations
              offensiveLine={offensiveLine}
              runningback1={runningback1}
              runningback2={runningback2}
              reciever1={reciever1}
              tightEnd1={tightEnd1}
              tightEnd2={tightEnd2}
              offPlaySelection={offPlaySelection}
              fullBack={fullBack}
            />
          )}

        {unitSelection.label === "Defense" &&
          (defPlaySelection.label === "3-4" ||
            defPlaySelection.label === undefined) && (
            <DefFormations
              noseTackle={noseTackle}
              rightDefensiveTackle={rightDefensiveTackle}
              leftDefensiveTackle={leftDefensiveTackle}
              leftDefensiveEnd={leftDefensiveEnd}
              rightDefensiveEnd={rightDefensiveEnd}
              rightOutsideLinebacker={rightOutsideLinebacker}
              leftOutsideLinebacker={leftOutsideLinebacker}
              middleLinebacker1={middleLinebacker1}
              middleLinebacker2={middleLinebacker2}
              freeSafety={freeSafety}
              strongSafety={strongSafety}
              cornerback1={cornerback1}
              cornerback2={cornerback2}
              cornerback3={cornerback3}
              cornerback4={cornerback4}
              defPlaySelection={defPlaySelection}
            />
          )}
      </div>
    </div>
  );
}

export default FootballLineup;
