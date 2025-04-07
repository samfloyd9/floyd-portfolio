import { useState } from "react";
import { IoInformationCircleOutline } from "react-icons/io5";

import Button from "../components/shared/Button";
import Dropdown from "../components/shared/Dropdown";
import SortableTable from "../components/shared/SortableTable";
import PlayerCardList from "../components/basketball/PlayerCardList";
import LineupRating from "../components/basketball/LineupRating";

import { data } from "../data/basketballData";
import {
  teamOptions,
  posOptions,
  badgeOptions,
} from "../constants/lineupFilters";
import {
  calculateLineupTotal,
  getChemistryLetterGrade,
  getChemistryColor,
} from "../utils/lineup";

import { config } from "../config/tableConfig";

function TablePage({ setShowModal }) {
  const [posSelection, setPosSelection] = useState({ label: 'All Positions', value: 'All Positions' });
  const [teamSelection, setTeamSelection] = useState({ label: 'All Teams', value: 'All Teams' });
  const [badgeSelection, setBadgeSelection] = useState({ label: 'All Badges', value: 'All Badges' });
  const [submitLineup, setSubmitLineup] = useState(false);
  
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
  
  const [lineup, setLineup] = useState(templateLineup);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleSubmitLineup = () => {
    setSubmitLineup(true);
  };

  const handlePosSelect = (option) => {
    setPosSelection(option);
  };

  const handleTeamSelect = (option) => {
    setTeamSelection(option);
  };

  const handleBadgeSelect = (option) => {
    setBadgeSelection(option);
  };

  const positionIndexMap = {
    PG: 0,
    SG: 1,
    SF: 2,
    PF: 3,
    C: 4,
  };

  function updateLineupSlot(position, player, currentLineup) {
    const newLineup = [...currentLineup];
    const index = positionIndexMap[position];
    if (index !== undefined) {
      newLineup[index] = player;
    }
    return newLineup;
  }

  function clearLineupSlot(position, currentLineup) {
    const newLineup = [...currentLineup];
    const index = positionIndexMap[position];
    const defaultTemplate = {
      template: `Select a ${position} from the list above`,
    };
    if (index !== undefined) {
      newLineup[index] = defaultTemplate;
    }
    return newLineup;
  }

  function getRandomPlayerForPosition(position, dataset) {
    const players = dataset.filter((player) =>
      player.position.includes(position)
    );
    const randomIndex = Math.floor(Math.random() * players.length);
    return players[randomIndex];
  }

  const handleRandomLineup = () => {
    const positions = ["PG", "SG", "SF", "PF", "C"];
    const newLineup = positions.map((pos) =>
      getRandomPlayerForPosition(pos, data)
    );
    setLineup(newLineup);
  };

  const handleAddPlayerToLineup = (player) => {
    setLineup((prev) => updateLineupSlot(player.position, player, prev));
  };

  const handleDelete = (playerData) => {
    setLineup((prev) => clearLineupSlot(playerData.position, prev));
  };

  const handleRandomPosition = (position) => {
    const randomPlayer = getRandomPlayerForPosition(position, data);
    setLineup((prev) => updateLineupSlot(position, randomPlayer, prev));
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

  const keyFn = (player) => `${player.name}-${player.year}`;

  return (
    <div className="flex justify-center content-center mb-5 mt-0 lg:mt-5">
      <div className="flex flex-col">
        <div className="flex flex-row justify-center">
          <div className="flex justify-between mb-4 items-center flex-col gap-2 lg:gap-5 lg:flex-row">
            <div className="flex flex-col sm:flex-row gap-4 items-center">
              <div className="flex gap-2 items-center">
                <Dropdown
                  onChange={handlePosSelect}
                  value={posSelection}
                  options={posOptions}
                  className="shadow-md"
                />
                <Dropdown
                  onChange={handleTeamSelect}
                  value={teamSelection}
                  options={teamOptions}
                  className="shadow-md"
                />
                <Dropdown
                  onChange={handleBadgeSelect}
                  value={badgeSelection}
                  options={badgeOptions}
                  className="shadow-md"
                />
              </div>
              <div className="hidden sm:hidden lg:content xl:content 2xl:content">
                <Button
                  onClick={handleClick}
                  className="rounded-lg hover:bg-gray-200 shadow-md"
                >
                  <IoInformationCircleOutline className="text-xl mr-1" />
                  Stats
                </Button>
              </div>
              <div className="hidden sm:hidden lg:hidden xl:hidden 2xl:hidden">
                <Button
                  onClick={handleClick}
                  className="rounded-lg hover:bg-gray-200 shadow-md"
                >
                  <IoInformationCircleOutline className="text-xl mr-1" />
                </Button>
              </div>
            </div>
            <div className="flex flex-row gap-2 items-center text-sm">
              <Button
                onClick={handleRandomLineup}
                className="rounded-lg hover:bg-gray-200 shadow-md"
              >
                Random Lineup
              </Button>
              <Button
                onClick={() => handleRandomPosition("PG")}
                className="rounded-lg hover:bg-gray-200 shadow-md"
              >
                PG
              </Button>
              <Button
                onClick={() => handleRandomPosition("SG")}
                className="rounded-lg hover:bg-gray-200 shadow-md"
              >
                SG
              </Button>
              <Button
                onClick={() => handleRandomPosition("SF")}
                className="rounded-lg hover:bg-gray-200 shadow-md"
              >
                SF
              </Button>
              <Button
                onClick={() => handleRandomPosition("PF")}
                className="rounded-lg hover:bg-gray-200 shadow-md"
              >
                PF
              </Button>
              <Button
                onClick={() => handleRandomPosition("C")}
                className="rounded-lg hover:bg-gray-200 shadow-md"
              >
                C
              </Button>
            </div>
          </div>
        </div>
        <div className="flex justify-start overflow-y-scroll overflow-x-scroll mx-auto w-[45%] shadow-lg mb-4 h-72 sm:w-3/4 md:w-3/4 lg:h-96 lg:w-fit">
          <div>
            <SortableTable
              config={config(lineup, handleAddPlayerToLineup, badgeSelection)}
              data={data}
              keyFn={keyFn}
              posSelection={posSelection}
              teamSelection={teamSelection}
              badgeSelection={badgeSelection}
            />
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <PlayerCardList data={lineup} handleDelete={handleDelete} />
        </div>
        <div className="flex justify-center flex-col lg:flex-row">
          <div className="flex flex-col mx-auto">
            <div className="flex flex-row gap-5 justify-center items-center mb-5">
              {lineup[0].hasOwnProperty("plyrPictureSrc") &&
                lineup[1].hasOwnProperty("plyrPictureSrc") &&
                lineup[2].hasOwnProperty("plyrPictureSrc") &&
                lineup[3].hasOwnProperty("plyrPictureSrc") &&
                lineup[4].hasOwnProperty("plyrPictureSrc") && (
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
                    <div className="font-bold underline mr-6">
                      Team Chemistry:
                    </div>
                    <div
                      className={`px-2.5 py-2 border ${getChemistryColor(
                        lineupTotalChemistryRatingNumber
                      )} rounded-lg`}
                    >
                      {getChemistryLetterGrade(
                        lineupTotalChemistryRatingNumber
                      )}
                    </div>
                  </div>
                  <div className="border border-gray-400 h-fit w-fit rounded-md flex flex-row justify-center items-center content-center py-2 px-3">
                    <div className="font-bold underline mr-6">
                      Ovr Lineup Rating:
                    </div>
                    <div className="px-2.5 py-2 border bg-green-300 rounded-lg">
                      {lineupTotalImpactRatingNumber.toFixed(1)}
                    </div>
                  </div>
                </div>
              )}
            <LineupRating lineup={lineup} submitLineup={submitLineup} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TablePage;
