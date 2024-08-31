import SortableTable from "../components/SortableTable";
import useSort from '../hooks/use-sort';
import { data } from "../basketballData";
import { useState } from "react";
import PlayerCard from "../components/PlayerCard";

// https://blog.logrocket.com/creating-react-sortable-table/ ----> look at this for help

function TablePage() {
  const positionColorLogic = (data) => {
    switch (data.position) {
      case "PG":
        return "bg-blue-200";
      case "SG":
        return "bg-red-200";
      case "SF":
        return "bg-green-200";
      case "PF":
        return "bg-purple-200";
      case "C":
        return "bg-yellow-200";
      default:
        return "bg-gray-200";
    }
  };

  const tsColorLogic = (data) => {
    if (data.ts > 0) {
      return <div className="text-green-700">+{data.ts}</div>;
    } else if (data.ts === 0) {
      return <div className="text-yellow-500">{data.ts}</div>;
    } else if (data.ts < 0) {
      return <div className="text-red-600">{data.ts}</div>;
    }
  };

  const badgeColorLogic = (data) => {
    switch (data) {
      case "hof":
        return "bg-purple-400";
      case "gold":
        return "bg-yellow-400";
      case "silver":
        return "bg-slate-300";
      case "bronze":
        return "bg-yellow-600";
      default:
        return "bg-gray-200";
    }
  };

  const config = [
    {
      label: "Rnk",
      render: () => <div>{(data.length) - 3}</div>,
    },
    {
      label: "Player",
      render: (player) => (
        <div className="text-start flex flex-row items-center">
          <img
            className="max-h-12 mr-4 rounded-lg"
            src={player.plyrPictureSrc}
            alt={`Picture of ${player.name}`}
          />
          <div 
            // className={`rounded-xl p-2 ${player.teamColor} ${player.teamColor2}`}
          >
            {player.name}</div>
        </div>
      ),
      sortValue: (player) => player.name,
    },
    {
      label: "Position",
      render: (player) => (
        <div className="flex justify-center">
          <div className={`w-fit px-1.5 rounded ${positionColorLogic(player)}`}>
            {player.position}
          </div>
        </div>
      ),
      sortValue: (player) => player.position,
    },
    {
      label: "Year",
      render: (player) => player.year,
      sortValue: (player) => player.year,
    },
    {
      label: "Team",
      render: (player) => (
        <div
          className={`text-sm p-1.5 m-2 rounded-lg flex justify-center ${player.teamColor} ${player.teamColor2}`}
        >
          {player.team}
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
      render: (player) => tsColorLogic(player),
      sortValue: (player) => player.ts,
    },
    {
      label: "Rebs",
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
      render: (player) => (player.stk75 * 0.75).toFixed(1),
      sortValue: (player) => player.stk75,
    },
    {
      label: "Tov",
      render: (player) => (player.tov75 * 0.75).toFixed(1),
      sortValue: (player) => player.tov75,
    },
    {
      label: "BPM",
      render: (player) => player.bpm,
      sortValue: (player) => player.bpm,
    },
    {
      label: "Badges (Player Traits)",
      render: function (player) {
        const bunchOfBadges = player.badges.map((badge) => {
          return (
            <div
              className={`rounded m-1.5 p-1 ${badgeColorLogic(badge.color)}`}
            >
              {badge.icon}
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

  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(data, config);

  const fakePlayerData = [
    {
      name: "Magic Johnson",
      position: "PG",
      year: "1986-87",
      team: "LAL",
      teamColor: "bg-purple-500",
      teamColor2: "text-yellow-500",
      pts75: 19,
      ts: +3.1,
      reb75: 9,
      ast75: 12,
      stk75: 3.1,
      tov75: 4.3,
      bpm: 9.2,
      badges: [
        {
          icon: "",
          color: "gold",
        },
        {
          icon: "",
          color: "silver",
        },
        {
          icon: "",
          color: "hof",
        },
        {
          icon: "",
          color: "bronze",
        },
        {
          icon: "",
          color: "gold",
        },
      ],
      plyrPictureSrc:
        "https://www.basketball-reference.com/req/202106291/images/headshots/johnsma02.jpg",
    },
  ]

  return (
    <div className="flex justify-center content-center mt-5 mb-5">
      <div className="flex flex-col">
      <div className="flex flex-row">
        <div>Position</div>
        <div>Team</div>
        <div>Team</div>
      </div>
      <div className="overflow-scroll h-96">
        <SortableTable config={config} data={data} keyFn={keyFn} />
      </div>
        <PlayerCard data={fakePlayerData} />
      </div>
    </div>
  );
}

export default TablePage;
