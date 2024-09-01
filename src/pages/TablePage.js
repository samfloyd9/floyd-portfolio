import SortableTable from "../components/SortableTable";
import Button from "../components/Button";
import useSort from "../hooks/use-sort";
import { data } from "../basketballData";
import { useState } from "react";
import PlayerCardList from "../components/PlayerCardList";

// https://blog.logrocket.com/creating-react-sortable-table/ ----> look at this for help

function TablePage() {
  const [lineup, setLineup] = useState([
  {
    name: "Select a PG from the list above"
  },
  {
    name: "Select a SG from the list above"
  },
  {
    name: "Select a SF from the list above"
  },
  {
    name: "Select a PF from the list above"
  },
  {
    name: "Select a C from the list above"
  },
  ]);

  const handleAddPlayerToLineup = (player) => {
    // let filteredLineup = lineup.filter(
    //   (playerData) => playerData.name !== player.name
    // );
    // const updatedLineup = [player, ...filteredLineup];
    // setLineup(updatedLineup);

    if (player.position === "PG") {
      const newLineup = [...lineup];
      newLineup.splice(0, 1, player);
      setLineup(newLineup);
      console.log(newLineup);
    } else if (player.position === "SG") {
      const newLineup = [...lineup];
      newLineup.splice(1, 1, player);
      setLineup(newLineup);
      console.log(newLineup);
    } else if (player.position === "SF") {
      const newLineup = [...lineup];
      newLineup.splice(2, 1, player);
      setLineup(newLineup);
      console.log(newLineup);
    } else if (player.position === "PF") {
      const newLineup = [...lineup];
      newLineup.splice(3, 1, player);
      setLineup(newLineup);
      console.log(newLineup);
    } else if (player.position === "C") {
      const newLineup = [...lineup];
      newLineup.splice(4, 1, player);
      setLineup(newLineup);
      console.log(newLineup);
    }
  };

  const handleDelete = (playerData) => {
    if (playerData.position === "PG") {
      const newLineup = [...lineup];
      newLineup.splice(0, 1, { name: "Select a PG from the list above" });
      setLineup(newLineup);
      console.log(newLineup);
    } else if (playerData.position === "SG") {
      const newLineup = [...lineup];
      newLineup.splice(1, 1, { name: "Select a SG from the list above" });
      setLineup(newLineup);
      console.log(newLineup);
    } else if (playerData.position === "SF") {
      const newLineup = [...lineup];
      newLineup.splice(2, 1, { name: "Select a SF from the list above" });
      setLineup(newLineup);
      console.log(newLineup);
    } else if (playerData.position === "PF") {
      const newLineup = [...lineup];
      newLineup.splice(3, 1, { name: "Select a PF from the list above" });
      setLineup(newLineup);
      console.log(newLineup);
    } else if (playerData.position === "C") {
      const newLineup = [...lineup];
      newLineup.splice(4, 1, { name: "Select a C from the list above" });
      setLineup(newLineup);
      console.log(newLineup);
    }
  }

  const handleReset = () => {
    setLineup([
      {
        name: "Select a PG from the list above"
      },
      {
        name: "Select a SG from the list above"
      },
      {
        name: "Select a SF from the list above"
      },
      {
        name: "Select a PF from the list above"
      },
      {
        name: "Select a C from the list above"
      },
      ]);
  }

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
      render: () => <div>{data.length - 3}</div>,
    },
    {
      label: "Player",
      render: (player) => (
        <div className="text-start flex flex-row items-center">
          <img
            className="max-h-12 mr-4 rounded-lg"
            src={player.plyrPictureSrc}
          />
          <div
          // className={`rounded-xl p-2 ${player.teamColor} ${player.teamColor2}`}
          >
            {player.name}
          </div>
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
              key={Math.round(Math.random() * 99999)}
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
    {
      label: "Lineup",
      render: (player) => (
        <Button className="bg-green-300" onClick={() => handleAddPlayerToLineup(player)}>+</Button>
      ),
    },
  ];

  const keyFn = (player) => {
    return player.name;
  };

  // const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(data, config);

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
        <PlayerCardList data={lineup} handleDelete={handleDelete} />
        <button className="bg-red-500 rounded-xl p-1.5 w-fit" onClick={handleReset}>Reset Linup</button>
      </div>
    </div>
  );
}

export default TablePage;
