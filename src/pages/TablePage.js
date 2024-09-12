import SortableTable from "../components/SortableTable";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import useSort from "../hooks/use-sort";
import { data } from "../basketballData";
import { useState } from "react";
import PlayerCardList from "../components/PlayerCardList";
import LineupRating from "../components/LineupRating";
import { IoInformationCircleOutline } from "react-icons/io5";

// https://blog.logrocket.com/creating-react-sortable-table/ ----> look at this for help

// create a dropdown that stores a team or position value
// filter the big data array
// copy the function from cars project

// give each player a team rating object
// go through each and add up the total for the lineup and give it a grade

// make the numbers next to each player the actual order

function TablePage({ setShowModal }) {
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
    { label: "Boston Celtics", value: "BOS" },
    { label: "Golden State Warriors", value: "GSW" },
    { label: "Cleveland Cavaliers", value: "CLE" },
    { label: "San Antonio Spurs", value: "SAS" },
    { label: "Philadelphia 76ers", value: "PHI" },
    { label: "Miami Heat", value: "MIA" },
    { label: "Chicago Bulls", value: "CHI" },
    { label: "Detroit Pistons", value: "DET" },
    { label: "Phoenix Suns", value: "PHX" },
    { label: "Houston Rockets", value: "HOU" },
    { label: "New York Knicks", value: "NYK" },
    { label: "Dallas Mavericks", value: "DAL" },
    { label: "Oklahoma City Thunder", value: "OKC" },
    { label: "Utah Jazz", value: "UTA" },
    { label: "Los Angeles Clippers", value: "LAC" },
    { label: "Milwaukee Bucks", value: "MIL" },
    { label: "Atlanta Hawks", value: "ATL" },
    { label: "Denver Nuggets", value: "DEN" },
    { label: "Toronto Raptors", value: "TOR" },
    { label: "Portland Trailblazers", value: "POR" },
    { label: "Indiana Pacers", value: "IND" },
    { label: "New Orleans Pelicans", value: "NOP" },
    { label: "Washington Wizards", value: "WAS" },
    { label: "Memphis Grizzlies", value: "MEM" },
    { label: "Orlando Magic", value: "ORL" },
    { label: "Sacramento Kings", value: "SAC" },
    { label: "Minnesotta Timberwolves", value: "MIN" },
    { label: "Charlotte Hornets", value: "CHA" },
    { label: "Brooklyn Nets", value: "BRK" },
  ];

  const [posSelection, setPosSelection] = useState("All Positions");
  const [teamSelection, setTeamSelection] = useState("All Teams");
  const [submitLineup, setSubmitLineup] = useState(false);

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

  // const handleRandomLineup = (player) => {
    
  // };

  const handleAddPlayerToLineup = (player) => {
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
    setSubmitLineup(false);
  };

  // const positionColorLogic = (data) => {
  //   switch (data.position) {
  //     case "PG":
  //       return "bg-blue-200";
  //     case "SG":
  //       return "bg-red-200";
  //     case "SF":
  //       return "bg-green-200";
  //     case "PF":
  //       return "bg-purple-200";
  //     case "C":
  //       return "bg-yellow-200";
  //     default:
  //       return "bg-gray-200";
  //   }
  // };

  // const bgImageLogic = (data) => {
  //   switch (data.position) {
  //     case "PG":
  //       return "bg-[url('https://t3.ftcdn.net/jpg/01/80/42/34/360_F_180423436_zNNzuzuXFr8v2uzyurYoNdpVOnkCjUyY.jpg')] text-white";
  //     case "SG":
  //       return "bg-[url('https://t3.ftcdn.net/jpg/02/83/50/58/360_F_283505879_AAiyGlpN2HGT4g7kvdGkhavhhRSPiswi.jpg')] text-white";
  //     case "SF":
  //       return "bg-[url('https://t4.ftcdn.net/jpg/03/03/85/23/360_F_303852309_PnDlqRxgiNbOzBJqF28NY6BVLVPOmPr1.jpg')] text-white";
  //     case "PF":
  //       return "bg-[url('https://t4.ftcdn.net/jpg/03/07/23/93/360_F_307239339_H1NCevU1LdJ37VEpslZuZOCZhJssljJt.jpg')] text-white";
  //     case "C":
  //       return "bg-[url('https://t4.ftcdn.net/jpg/01/61/68/99/360_F_161689955_EpKC0KL9j377yZPjRrmm4mc1sXxuKG9P.jpg')] bold text-lg";
  //     default:
  //       return "bg-gray-200";
  //   }
  // };

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
            alt={player.name}
          />
          <div className="group relative">
            <div
            // className={`rounded-xl p-2 ${player.teamColor} ${player.teamColor2}`}
            >
              {player.name}
              <span className="pointer-events-none absolute -bottom-7 left-0 w-max rounded bg-gray-900 px-2 py-1 text-sm font-medium text-gray-50 opacity-0 shadow transition-opacity group-hover:opacity-100">
                {player.nickname}
              </span>
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
          <div className="flex flex-row justify-between mb-4 items-center gap-5">
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
            <Button onClick={handleClick} className="rounded-lg" primary>
              <IoInformationCircleOutline className="text-xl mr-1" />
              Stats
            </Button>
            <Button onClick="" className="rounded-lg" primary>
              Generate Random Lineup
            </Button>
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
        <div className="flex flex-row justify-between">
          <LineupRating lineup={lineup} submitLineup={submitLineup} />
          <div className="flex flex-col">
            <div className="flex flex-row gap-5 ">
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
                className="bg-red-500 rounded-xl p-2 w-fit h-fit text-white shadow-md mb-5"
                onClick={handleReset}
              >
                Reset Lineup
              </button>
            </div>
            { submitLineup && 
            <div className="flex flex-col items-center gap-5">
              <div className="border border-gray-400 h-fit w-fit rounded-md flex flex-row justify-center items-center content-center py-2 px-3">
                <div className="font-bold underline mr-6">Team Chemistry:</div>
                <div className="px-2.5 py-2 border bg-green-300 rounded-lg">
                  A+
                </div>
              </div>
              <div className="border border-gray-400 h-fit w-fit rounded-md flex flex-row justify-center items-center content-center py-2 px-3">
                <div className="font-bold underline mr-6">Ovr Lineup Rating:</div>
                <div className="px-2.5 py-2 border bg-green-300 rounded-lg">
                  {/* {lineupChemistryRatingNumber / 5} */}
                  9.9
                </div>
              </div>
            </div>
            }
          </div>
        </div>
      </div>
    </div>
  );
}

export default TablePage;
