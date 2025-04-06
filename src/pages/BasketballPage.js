import { useState } from "react";

import { FaCheck } from "react-icons/fa";
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
  getTSColorDisplay,
  getBadgeColor
} from "../utils/lineup";

function TablePage({ setShowModal }) {
  const [posSelection, setPosSelection] = useState("All Positions");
  const [teamSelection, setTeamSelection] = useState("All Teams");
  const [badgeSelection, setBadgeSelection] = useState("All Badges");
  const [submitLineup, setSubmitLineup] = useState(false);
  const [lineup, setLineup] = useState([
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
  ]);

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
    setLineup([
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
    ]);
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

  const config = [
    {
      label: "",
      render: function (player) {
        const playerPositionArray = (player) => {
          if (player.position === "PG") {
            return lineup[0].name === player.name;
          } else if (player.position === "SG") {
            return lineup[1].name === player.name;
          } else if (player.position === "SF") {
            return lineup[2].name === player.name;
          } else if (player.position === "PF") {
            return lineup[3].name === player.name;
          } else if (player.position === "C") {
            return lineup[4].name === player.name;
          }
        };

        return (
          <>
            {playerPositionArray(player) ? (
              <button
                className="bg-blue-300 rounded-md mx-auto px-1.5 py-1.5 flex items-center border"
                onClick={() => handleAddPlayerToLineup(player)}
              >
                <FaCheck className="text-sm" />
              </button>
            ) : (
              <button
                className="bg-green-200 rounded-md mx-1.5 px-2 py-0.5 flex items-center border"
                onClick={() => handleAddPlayerToLineup(player)}
              >
                +
              </button>
            )}
          </>
        );
      },
    },
    {
      label: "Player",
      render: (player) => (
        <div className="text-start flex flex-row items-center">
          <img
            className="max-h-12 mr-4 rounded-lg"
            src={player.plyrPictureSrc}
            alt={player.name}
          />
          <div className="group relative">
            <div
              // className={`rounded-xl p-2 ${player.teamColor} ${player.teamColor2}`}
              className="text-sm lg:text-lg"
            >
              {player.name}
              {/* <span className="pointer-events-none absolute -bottom-7 z-20 left-0 w-max rounded bg-gray-900 px-2 py-1 text-sm font-medium text-gray-50 opacity-0 shadow transition-opacity group-hover:opacity-100">
                {player.nickname}
              </span> */}
            </div>
          </div>
        </div>
      ),
      sortValue: (player) => player.name,
    },
    {
      label: "Position",
      render: (player) => (
        <div className="flex justify-center">
          <div className={`w-fit px-1.5 rounded border border-gray-500`}>
            {player.position}
          </div>
        </div>
      ),
      sortValue: (player) => player.position,
    },
    {
      label: "Year",
      render: (player) => (
        <div className="text-xs lg:text-lg">{player.year}</div>
      ),
      sortValue: (player) => player.year,
    },
    {
      label: "Team",
      render: (player) => (
        <div
          className={`group pointer relative text-sm p-1.5 m-2 rounded-lg ${player.teamColor} ${player.teamColor2} border-${player.teamColor3}`}
        >
          {player.team}
          <span className="pointer-events-none pointer absolute -bottom-7 z-20 -left-5 w-max rounded bg-gray-900 px-2 py-1 text-sm font-medium text-gray-50 opacity-0 shadow transition-opacity group-hover:opacity-100">
            {player.fullTeamName}
          </span>
        </div>
      ),
      sortValue: (player) => player.team,
    },
    {
      label: "Pts",
      render: (player) => (player.pts75 * 0.75).toFixed(1),
      sortValue: (player) => player.pts75,
    },
    {
      label: "rTS%",
      render: (player) => getTSColorDisplay(player),
      sortValue: (player) => player.ts,
    },
    {
      label: "Reb",
      render: (player) => (player.reb75 * 0.75).toFixed(1),
      sortValue: (player) => player.reb75,
    },
    {
      label: "Ast",
      render: (player) => (player.ast75 * 0.75).toFixed(1),
      sortValue: (player) => player.ast75,
    },
    {
      label: "Stk",
      render: (player) => {
        return player.stk75 === null ? (
          <span className="italic text-gray-300">N/A</span>
        ) : (
          (player.stk75 * 0.75).toFixed(1)
        );
      },
      sortValue: (player) => player.stk75,
    },
    {
      label: "Tov",
      render: (player) => {
        return player.tov75 === null ? (
          <span className="italic text-gray-300">N/A</span>
        ) : (
          (player.tov75 * 0.75).toFixed(1)
        );
      },
      sortValue: (player) => player.tov75,
    },
    {
      label: "BPM",
      render: (player) => {
        return player.bpm === null ? (
          <span className="italic text-gray-300">N/A</span>
        ) : (
          (player.bpm * 0.75).toFixed(1)
        );
      },
      sortValue: (player) => player.bpm,
    },
    {
      label: "Badges (Player Traits)",
      render: function (player) {
        const bunchOfBadges = player.badges.map((badge) => {
          return (
            <div
              className={`group relative rounded m-1.5 p-1 ${getBadgeColor(
                badge.color
              )}`}
              key={Math.round(Math.random() * 987654321)}
            >
              {badge.icon}
              <span className="pointer-events-none absolute z-20 -bottom-7 -left-14 w-max rounded bg-gray-900 px-2 py-1 text-sm font-medium text-gray-50 opacity-0 shadow transition-opacity group-hover:opacity-100 text-ellipsis">
                {badge.explanation}
              </span>
            </div>
          );
        });
    
        return (
          <div key={player.name} className="flex flex-col">
            <div className="flex flex-row justify-center">{bunchOfBadges}</div>
          </div>
        );
      },
    },    
  ];

  const keyFn = (player) => {
    return player.name;
  };

  console.log(lineupTotalChemistryRatingNumber);

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
              config={config}
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
