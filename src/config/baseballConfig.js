// import { getTSColorDisplay, getBadgeColor } from "../utils/lineup";
import { FaCheck } from "react-icons/fa";
import { TbSwitchHorizontal } from "react-icons/tb";

export const baseballConfig = (lineup, handleAddPlayerToLineup) => [
  {
    label: "",
    render: function (player) {
      const playerPositionArray = (player) => {
        if (player.position === "C") {
          return lineup[0].name === player.name;
        } else if (player.position === "1B") {
          return lineup[1].name === player.name;
        } else if (player.position === "2B") {
          return lineup[2].name === player.name;
        } else if (player.position === "SS") {
          return lineup[3].name === player.name;
        } else if (player.position === "3B") {
          return lineup[4].name === player.name;
        } else if (player.position === "LF") {
          return lineup[5].name === player.name;
        } else if (player.position === "CF") {
          return lineup[6].name === player.name;
        } else if (player.position === "RF") {
          return lineup[7].name === player.name;
        } else if (player.position === "DH") {
          return lineup[8].name === player.name;
        } else if (player.position === "SP") {
          return lineup[9].name === player.name;
        } else if (player.position === "RP") {
          return lineup[10].name === player.name;
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
      <div className="text-start flex flex-row items-center mr-2 lg:mr-0">
        <img
          className="max-h-12 mr-4 rounded-lg"
          src={player.plyrHeadshot}
          alt={player.name}
        />
        <div className="group relative">
          <div className="text-sm lg:text-lg flex items-center">
            {player.name}
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
      <div className="text-xs lg:text-lg text-nowrap">{player.year}</div>
    ),
    sortValue: (player) => player.year,
  },
  {
    label: "Team",
    render: (player) => (
      <div className={`group pointer relative text-sm p-1.5 m-2 rounded-lg`}>
        {player.team}
        <span className="pointer-events-none pointer absolute -bottom-7 z-20 -left-5 w-max rounded bg-gray-900 px-2 py-1 text-sm font-medium text-gray-50 opacity-0 shadow transition-opacity group-hover:opacity-100">
          {player.fullTeamName}
        </span>
      </div>
    ),
    sortValue: (player) => player.team,
  },
  {
    label: "OPS+",
    render: (player) => player["OPS+"],
    sortValue: (player) => player["OPS+"],
  },
  {
    label: "ERA+",
    render: (player) => player["ERA+"],
    sortValue: (player) => player["ERA+"],
  },
  {
    label: "WAR",
    render: (player) => (player["WAR"]).toFixed(1),
    sortValue: (player) => player["WAR"],
  },
];
