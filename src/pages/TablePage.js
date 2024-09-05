import SortableTable from "../components/SortableTable";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import useSort from "../hooks/use-sort";
import { data } from "../basketballData";
import { useState } from "react";
import PlayerCardList from "../components/PlayerCardList";
import LineupRating from "../components/LineupRating";

// https://blog.logrocket.com/creating-react-sortable-table/ ----> look at this for help

// create a dropdown that stores a team or position value
// filter the big data array
// copy the function from cars project

// give each player a team rating object
// go through each and add up the total for the lineup and give it a grade

// make the numbers next to each player the actual order

function TablePage() {
  const posOptions = [
    { label: "All Positions", value: "All Positions" },
    { label: "Point Guards", value: "PG" },
    { label: "Shooting Guards", value: "SG" },
    { label: "Small Forwards", value: "SF" },
    { label: "Power Forwards", value: "PF" },
    { label: "Centers", value: "C" },
  ];

  const teamOptions = [
    { label: "All Teams", value: "All Teams" },
    { label: "Los Angeles Lakers", value: "LAL" },
    { label: "Cleveland Cavaliers", value: "CLE" },
    { label: "Boston Celtics", value: "BOS" },
    { label: "Utah Jazz", value: "UTA" },
    { label: "Los Angeles Clippers", value: "LAC" },
    { label: "Dallas Mavericks", value: "DAL" },
    { label: "San Antonio Spurs", value: "SAS" },
    { label: "Charlotte Hornets", value: "CHA" },
    { label: "Golden State Warriors", value: "GSW" },
    { label: "Phoenix Suns", value: "PHX" },
    { label: "Detroit Pistons", value: "DET" },
    { label: "Philadelphia 76ers", value: "PHI" },
    { label: "New York Knicks", value: "NYK" },
    { label: "Houston Rockets", value: "HOU" },
    { label: "Brooklyn Nets", value: "BRK" },
    { label: "Atlanta Hawks", value: "ATL" },
    { label: "Minnesotta Timberwolves", value: "MIN" },
    { label: "Toronto Raptors", value: "TOR" },
    { label: "Portland Trailblazers", value: "POR" },
    { label: "Memphis Grizzlies", value: "MEM" },
    { label: "Orlando Magic", value: "ORL" },
    { label: "Oklahoma City Thunder", value: "OKC" },
    { label: "Sacramento Kings", value: "SAC" },
    { label: "Chicago Bulls", value: "CHI" },
    { label: "Milwaukee Bucks", value: "MIL" },
    { label: "Indiana Pacers", value: "IND" },
    { label: "New Orleans Pelicans", value: "NOP" },
    { label: "Denver Nuggets", value: "DEN" },
    { label: "Washington Wizards", value: "WAS" },
    { label: "Miami Heat", value: "MIA" },
  ];

  const [posSelection, setPosSelection] = useState("All Positions");
  const [teamSelection, setTeamSelection] = useState("All Teams");

  const handlePosSelect = (option) => {
    setPosSelection(option);
  };

  const handleTeamSelect = (option) => {
    setTeamSelection(option);
  };

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
      newLineup.splice(0, 1, { template: "Select a PG from the list above" });
      setLineup(newLineup);
      // console.log(newLineup);
    } else if (playerData.position === "SG") {
      const newLineup = [...lineup];
      newLineup.splice(1, 1, { template: "Select a SG from the list above" });
      setLineup(newLineup);
      // console.log(newLineup);
    } else if (playerData.position === "SF") {
      const newLineup = [...lineup];
      newLineup.splice(2, 1, { template: "Select a SF from the list above" });
      setLineup(newLineup);
      // console.log(newLineup);
    } else if (playerData.position === "PF") {
      const newLineup = [...lineup];
      newLineup.splice(3, 1, { template: "Select a PF from the list above" });
      setLineup(newLineup);
      // console.log(newLineup);
    } else if (playerData.position === "C") {
      const newLineup = [...lineup];
      newLineup.splice(4, 1, { template: "Select a C from the list above" });
      setLineup(newLineup);
      // console.log(newLineup);
    }
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
  };

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
    // {
    //   label: "Rnk",
    //   render: function (player) {

    //     // Cant pass in sortedData array cause it takes in config array

    //     return (
    //       <div>{data.indexOf(player) + 1}</div>
    //     );
    //   }
    // },
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
          className={`group relative text-sm p-1.5 m-2 rounded-lg ${player.teamColor} ${player.teamColor2}`}
        >
          {player.team}
        <span className="pointer-events-none absolute -top-7 left-0 w-max rounded bg-gray-900 px-2 py-1 text-sm font-medium text-gray-50 opacity-0 shadow transition-opacity group-hover:opacity-100">
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
              className={`group relative rounded m-1.5 p-1 ${badgeColorLogic(
                badge.color
              )}`}
              key={Math.round(Math.random() * 987654321)}
            >
              {badge.icon}
              <span className="pointer-events-none absolute -top-7 left-0 w-max rounded bg-gray-900 px-2 py-1 text-sm font-medium text-gray-50 opacity-0 shadow transition-opacity group-hover:opacity-100">
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
    {
      label: "Lineup",
      render: (player) => (
        <Button
          className="bg-green-300 rounded-md"
          onClick={() => handleAddPlayerToLineup(player)}
        >
          +
        </Button>
      ),
    },
  ];

  const keyFn = (player) => {
    return player.name;
  };

  return (
    <div className="flex justify-center content-center mt-5 mb-5">
      <div className="flex flex-col">
        <div className="flex flex-row">
          <div className="flex flex-row gap-5 mb-4">
            <Dropdown
              onChange={handlePosSelect}
              value={posSelection}
              options={posOptions}
            />
            <Dropdown
              onChange={handleTeamSelect}
              value={teamSelection}
              options={teamOptions}
            />
          </div>
        </div>
        <div className="overflow-scroll h-96 shadow-lg mb-4">
          <SortableTable
            config={config}
            data={data}
            keyFn={keyFn}
            posSelection={posSelection}
            teamSelection={teamSelection}
          />
        </div>
        <div className="flex justify-center mb-8">
          <PlayerCardList data={lineup} handleDelete={handleDelete} />
        </div>
        <div className="flex flex-row gap-5 justify-end">
          <button
            className="bg-blue-500 rounded-xl p-2 w-fit text-white shadow-md"
            onClick=""
          >
            Submit Linup
          </button>
          <button className="bg-red-500 rounded-xl p-2 w-fit text-white shadow-md" onClick={handleReset}>
            Reset Linup
          </button>
        </div>
        <LineupRating lineup={lineup} />
      </div>
    </div>
  );
}

export default TablePage;
