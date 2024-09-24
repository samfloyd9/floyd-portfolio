import SortableTable from "../components/SortableTable";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import useSort from "../hooks/use-sort";
import { useEffect } from "react";
import { data } from "../basketballData";
import { useState } from "react";
import PlayerCardList from "../components/PlayerCardList";
import LineupRating from "../components/LineupRating";
import { IoInformationCircleOutline } from "react-icons/io5";

// https://blog.logrocket.com/creating-react-sortable-table/ ----> look at this for help

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

  const handleRandomLineup = () => {
    const pointGuardFilteredLineup = data.filter((player) =>
      player.position.includes("PG")
    );
    const shootingGuardFilteredLineup = data.filter((player) =>
      player.position.includes("SG")
    );
    const smallForwardFilteredLineup = data.filter((player) =>
      player.position.includes("SF")
    );
    const powerForwardFilteredLineup = data.filter((player) =>
      player.position.includes("PF")
    );
    const centerFilteredLineup = data.filter((player) =>
      player.position.includes("C")
    );
    const randomPointGuardIndex = Math.floor(
      Math.random() * pointGuardFilteredLineup.length
    );
    const randomShootingGuardIndex = Math.floor(
      Math.random() * shootingGuardFilteredLineup.length
    );
    const randomSmallForwardIndex = Math.floor(
      Math.random() * smallForwardFilteredLineup.length
    );
    const randomPowerForwardIndex = Math.floor(
      Math.random() * powerForwardFilteredLineup.length
    );
    const randomCenterIndex = Math.floor(
      Math.random() * centerFilteredLineup.length
    );
    const randomPointGuard = pointGuardFilteredLineup[randomPointGuardIndex];
    const randomShootingGuard =
      shootingGuardFilteredLineup[randomShootingGuardIndex];
    const randomSmallForward =
      smallForwardFilteredLineup[randomSmallForwardIndex];
    const randomPowerForward =
      powerForwardFilteredLineup[randomPowerForwardIndex];
    const randomCenter = centerFilteredLineup[randomCenterIndex];

    setLineup([
      randomPointGuard,
      randomShootingGuard,
      randomSmallForward,
      randomPowerForward,
      randomCenter,
    ]);
  };

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
      newLineup.splice(0, 1, {
        template: "Select a PG from the list above",
      });
      setLineup(newLineup);
      // console.log(newLineup);
    } else if (playerData.position === "SG") {
      const newLineup = [...lineup];
      newLineup.splice(1, 1, {
        template: "Select a SG from the list above",
      });
      setLineup(newLineup);
      // console.log(newLineup);
    } else if (playerData.position === "SF") {
      const newLineup = [...lineup];
      newLineup.splice(2, 1, {
        template: "Select a SF from the list above",
      });
      setLineup(newLineup);
      // console.log(newLineup);
    } else if (playerData.position === "PF") {
      const newLineup = [...lineup];
      newLineup.splice(3, 1, {
        template: "Select a PF from the list above",
      });
      setLineup(newLineup);
      // console.log(newLineup);
    } else if (playerData.position === "C") {
      const newLineup = [...lineup];
      newLineup.splice(4, 1, {
        template: "Select a C from the list above",
      });
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

  // useEffect(() => {
  //   document.body.addEventListener("click", (event) => {
  //     const composedPath = event.composedPath();
  //     const composedPathCheck = composedPath[3].outerText.slice(0, -2);
  //     console.log(event.composedPath());
  //   });
  // }, []);

  const handleRandomPointGuard = () => {
    const pointGuardFilteredLineup = data.filter((player) =>
      player.position.includes("PG")
    );
    const randomPointGuardIndex = Math.floor(
      Math.random() * pointGuardFilteredLineup.length
    );
    const randomPointGuard = pointGuardFilteredLineup[randomPointGuardIndex];
    const newLineup = [...lineup];
    newLineup.splice(0, 1, randomPointGuard);
    setLineup(newLineup);
    // console.log(newLineup);
  };

  const handleRandomShootingGuard = () => {
    const shootingGuardFilteredLineup = data.filter((player) =>
      player.position.includes("SG")
    );
    const randomShootingGuardIndex = Math.floor(
      Math.random() * shootingGuardFilteredLineup.length
    );
    const randomShootingGuard =
      shootingGuardFilteredLineup[randomShootingGuardIndex];
    const newLineup = [...lineup];
    newLineup.splice(1, 1, randomShootingGuard);
    setLineup(newLineup);
    // console.log(newLineup);
  };

  const handleRandomSmallForward = () => {
    const smallForwardFilteredLineup = data.filter((player) =>
      player.position.includes("SF")
    );
    const randomSmallForwardIndex = Math.floor(
      Math.random() * smallForwardFilteredLineup.length
    );
    const randomSmallForward =
      smallForwardFilteredLineup[randomSmallForwardIndex];
    const newLineup = [...lineup];
    newLineup.splice(2, 1, randomSmallForward);
    setLineup(newLineup);
  };

  const handleRandomPowerForward = () => {
    const powerForwardFilteredLineup = data.filter((player) =>
      player.position.includes("PF")
    );
    const randomPowerForwardIndex = Math.floor(
      Math.random() * powerForwardFilteredLineup.length
    );
    const randomPowerForward =
      powerForwardFilteredLineup[randomPowerForwardIndex];
    const newLineup = [...lineup];
    newLineup.splice(3, 1, randomPowerForward);
    setLineup(newLineup);
  };

  const handleRandomCenter = () => {
    const centerFilteredLineup = data.filter((player) =>
      player.position.includes("C")
    );
    const randomCenterIndex = Math.floor(
      Math.random() * centerFilteredLineup.length
    );
    const randomCenter = centerFilteredLineup[randomCenterIndex];
    const newLineup = [...lineup];
    newLineup.splice(4, 1, randomCenter);
    setLineup(newLineup);
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
      return <div className="text-green-700">+{data.ts.toFixed(1)}</div>;
    } else if (data.ts === 0) {
      return <div className="text-yellow-500">{data.ts.toFixed(1)}</div>;
    } else if (data.ts < 0) {
      return <div className="text-red-600">{data.ts.toFixed(1)}</div>;
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

  // teamOffChemRating: -2,
  // teamDefChemRating: 1.5,
  // teamTotalChemRating: -0.5,
  // teamOffImpact: 5.75,
  // teamDefImpact: 1.65,
  // teamTotalImpact: 7.4,

  const filteredOffChemistryLineupRating = lineup.filter((player) =>
    player.hasOwnProperty("teamOffChemRating")
  );

  const lineupOffChemistryRatingNumber = filteredOffChemistryLineupRating.reduce(
    function (acc, player) {
      return acc + player.teamOffChemRating;
    }, 0);

    //

    const filteredDefChemistryLineupRating = lineup.filter((player) =>
    player.hasOwnProperty("teamDefChemRating")
  );

  const lineupDefChemistryRatingNumber = filteredDefChemistryLineupRating.reduce(
    function (acc, player) {
      return acc + player.teamDefChemRating;
    }, 0);

    //

    const filteredTotalChemistryLineupRating = lineup.filter((player) =>
    player.hasOwnProperty("teamTotalChemRating")
  );

  const lineupTotalChemistryRatingNumber = filteredTotalChemistryLineupRating.reduce(
    function (acc, player) {
      return acc + player.teamTotalChemRating;
    }, 0);

    //

    const filteredOffImpactLineupRating = lineup.filter((player) =>
    player.hasOwnProperty("teamOffImpact")
  );

  const lineupOffImpactRatingNumber = filteredOffImpactLineupRating.reduce(
    function (acc, player) {
      return acc + player.teamOffImpact;
    }, 0);

    //

    const filteredDefImpactLineupRating = lineup.filter((player) =>
    player.hasOwnProperty("teamDefImpact")
  );

  const lineupDefImpactRatingNumber = filteredDefImpactLineupRating.reduce(
    function (acc, player) {
      return acc + player.teamDefImpact;
    }, 0);

    //

    const filteredTotalImpactLineupRating = lineup.filter((player) =>
    player.hasOwnProperty("teamTotalImpact")
  );

  const lineupTotalImpactRatingNumber = filteredTotalImpactLineupRating.reduce(
    function (acc, player) {
      return acc + player.teamTotalImpact;
    }, 0);

    //

  // 18 through -2 
  const lineupChemLogic = (chemRatingNum) => {
    if (chemRatingNum > 6) {
      return "A+";
    } else if (chemRatingNum <= 6 && chemRatingNum > 5.5) {
      return "A";
    } else if (chemRatingNum <= 5.5 && chemRatingNum > 5) {
      return "A-";
    } else if (chemRatingNum <= 5 && chemRatingNum > 4.5) {
      return "B+";
    } else if (chemRatingNum <= 4.5 && chemRatingNum > 4) {
      return "B";
    } else if (chemRatingNum <= 4 && chemRatingNum > 3.5) {
      return "B-";
    } else if (chemRatingNum <= 3.5 && chemRatingNum > 3) {
      return "C+";
    } else if (chemRatingNum <= 3 && chemRatingNum > 2.5) {
      return "C";
    } else if (chemRatingNum <= 2.5 && chemRatingNum > 2) {
      return "C-";
    } else if (chemRatingNum <= 2 && chemRatingNum > 1.5) {
      return "D+";
    } else if (chemRatingNum <= 1.5 && chemRatingNum > 1) {
      return "D";
    } else if (chemRatingNum <= 1 && chemRatingNum > 0.5) {
      return "D-";
    } else if (chemRatingNum <= 0.5) {
      return "F";
    }
  };

  const chemistryColorLogic = (chemRatingNum) => {
    if (chemRatingNum > 6) {
          return "bg-cyan-300";
    } else if (chemRatingNum <= 6 && chemRatingNum > 5.5) {
      return "bg-lime-600";
    } else if (chemRatingNum <= 5.5 && chemRatingNum > 5) {
      return "bg-lime-500";
    } else if (chemRatingNum <= 5 && chemRatingNum > 4.5) {
      return "bg-lime-400";
    } else if (chemRatingNum <= 4.5 && chemRatingNum > 4) {
      return "bg-lime-300";
    } else if (chemRatingNum <= 4 && chemRatingNum > 3.5) {
      return "bg-lime-200";
    } else if (chemRatingNum <= 3.5 && chemRatingNum > 3) {
      return "bg-yellow-200";
    } else if (chemRatingNum <= 3 && chemRatingNum > 2.5) {
      return "bg-yellow-300";
    } else if (chemRatingNum <= 2.5 && chemRatingNum > 2) {
      return "bg-yellow-400";
    } else if (chemRatingNum <= 2 && chemRatingNum > 1.5) {
      return "bg-amber-500";
    } else if (chemRatingNum <= 1.5 && chemRatingNum > 1) {
      return "bg-orange-400";
    } else if (chemRatingNum <= 1 && chemRatingNum > 0.5) {
      return "bg-orange-500-";
    } else if (chemRatingNum <= 0.5) {
      return "bg-red-500";
    }
  };

  // const chemistryColorLogic = (chemRatingNum) => {
  //   if (chemRatingNum >= 9.5) {
  //     return "cyan-300";
  //   } else if (chemRatingNum >= 9 && chemRatingNum < 9.5) {
  //     return "bg-lime-600";
  //   } else if (chemRatingNum >= 8.5 && chemRatingNum < 9) {
  //     return "bg-lime-500";
  //   } else if (chemRatingNum >= 8 && chemRatingNum < 8.5) {
  //     return "bg-lime-400";
  //   } else if (chemRatingNum >= 7.5 && chemRatingNum < 8) {
  //     return "bg-lime-300";
  //   } else if (chemRatingNum >= 7 && chemRatingNum < 7.5) {
  //     return "bg-lime-200";
  //   } else if (chemRatingNum >= 6.5 && chemRatingNum < 7) {
  //     return "bg-yellow-200";
  //   } else if (chemRatingNum >= 6 && chemRatingNum < 6.5) {
  //     return "bg-yellow-300";
  //   } else if (chemRatingNum >= 5.5 && chemRatingNum < 6) {
  //     return "bg-yellow-400";
  //   } else if (chemRatingNum >= 5 && chemRatingNum < 5.5) {
  //     return "bg-amber-500";
  //   } else if (chemRatingNum >= 4.5 && chemRatingNum < 5) {
  //     return "bg-orange-400";
  //   } else if (chemRatingNum >= 4 && chemRatingNum < 4.5) {
  //     return "bg-orange-500";
  //   } else if (chemRatingNum >= 0 && chemRatingNum < 4) {
  //     return "bg-red-500";
  //   }
  // };

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
      label: "",
      render: (player) => (
        <button
          className="bg-green-200 rounded-md mx-1.5 px-2 py-0.5 flex items-center border"
          onClick={() => handleAddPlayerToLineup(player)}
        >
          +
        </button>
      ),
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
      render: (player) => player.year,
      sortValue: (player) => player.year,
    },
    {
      label: "Team",
      render: (player) => (
        <div
          className={`group pointer relative text-sm p-1.5 m-2 rounded-lg ${player.teamColor} ${player.teamColor2}`}
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
      render: (player) => (player.pts75).toFixed(1),
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
    <div className="flex justify-center content-center mt-5 mb-5">
      <div className="flex flex-col">
        <div className="flex flex-row justify-center">
          <div className="flex flex-row justify-between mb-4 items-center gap-5">
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
            <Button onClick={handleClick} className="rounded-lg hover:bg-gray-200 shadow-md">
              <IoInformationCircleOutline className="text-xl mr-1" />
              Stats
            </Button>
            <Button onClick={handleRandomLineup} className="rounded-lg hover:bg-gray-200 shadow-md">
              Random Lineup
            </Button>
            <Button onClick={handleRandomPointGuard} className="rounded-lg hover:bg-gray-200 shadow-md">
              PG
            </Button>
            <Button onClick={handleRandomShootingGuard} className="rounded-lg hover:bg-gray-200 shadow-md">
              SG
            </Button>
            <Button onClick={handleRandomSmallForward} className="rounded-lg hover:bg-gray-200 shadow-md">
              SF
            </Button>
            <Button onClick={handleRandomPowerForward} className="rounded-lg hover:bg-gray-200 shadow-md">
              PF
            </Button>
            <Button onClick={handleRandomCenter} className="rounded-lg hover:bg-gray-200 shadow-md">
              C
            </Button>
          </div>
        </div>
        <div className="overflow-y-scroll overflow-x-scroll h-96 shadow-lg mb-4">
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
            {submitLineup && (
              <div className="flex flex-col items-center gap-5">
                <div className="border border-gray-400 h-fit w-fit rounded-md flex flex-row justify-center items-center content-center py-2 px-3">
                  <div className="font-bold underline mr-6">
                    Team Chemistry:
                  </div>
                  <div
                    className={`px-2.5 py-2 border ${chemistryColorLogic(
                      lineupTotalChemistryRatingNumber
                    )} rounded-lg`}
                  >
                    {lineupChemLogic(lineupTotalChemistryRatingNumber)}
                    {/* {lineupTotalChemistryRatingNumber.toFixed(1)} */}
                  </div>
                </div>
                <div className="border border-gray-400 h-fit w-fit rounded-md flex flex-row justify-center items-center content-center py-2 px-3">
                  <div className="font-bold underline mr-6">
                    Ovr Lineup Rating:
                  </div>
                  <div className="px-2.5 py-2 border bg-green-300 rounded-lg">
                    {/* {lineupChemistryRatingNumber / 5} */}
                    {lineupTotalImpactRatingNumber.toFixed(1)}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TablePage;
