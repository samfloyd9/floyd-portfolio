import { getTSColorDisplay, getBadgeColor } from "../utils/lineup";
import { FaCheck } from "react-icons/fa";
import { TbSwitchHorizontal } from "react-icons/tb";

export const config = (lineup, handleAddPlayerToLineup, badgeSelection) => [
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
    render: (player, updatePlayerCallback) => (
      <div className="text-start flex flex-row items-center mr-2 lg:mr-0">
        <img
          className="max-h-12 mr-4 rounded-lg"
          src={player.plyrPictureSrc}
          alt={player.name}
        />
        <div className="group relative">
          <div className="text-sm lg:text-lg flex items-center">
            {player.name}
            {player.alt && (
              <button
                onClick={() => updatePlayerCallback(player)}
                className="ml-2.5 border rounded p-1 text-blue-500 hover:text-blue-700 hover:bg-gray-300"
                title="Swap to alternate season"
              >
                <TbSwitchHorizontal />
              </button>
            )}
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
        const isHighlighted =
          badgeSelection?.value !== 0 && badgeSelection?.value === badge.id;

        return (
          <div
            className={`group relative border border-transparent ${
              isHighlighted ? "animate-pulse" : ""
            } rounded m-1.5 p-1 ${getBadgeColor(badge.color)}`}
            key={`${player.name}-${badge.explanation}`}
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
