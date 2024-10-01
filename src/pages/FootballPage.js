import { useState } from "react";
import { footballData } from "../footballData";
import SortableTable from "../components/SortableTable";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import { IoInformationCircleOutline } from "react-icons/io5";
import React from "react";
import FootballLineup from "../components/FootballLineup";

function FootballPage({ setShowModal }) {
  const posOptions = [
    { label: "All Positions", value: "All Positions" },
    { label: "Quarterback", value: "QB" },
    { label: "Running Back", value: "RB" },
    { label: "Fullback", value: "FB" },
    { label: "Tight End", value: "TE" },
    { label: "Wide Reciever", value: "WR" },
    { label: "Left Tackle", value: "LT" },
    { label: "Left Guard", value: "LG" },
    { label: "Center", value: "C" },
    { label: "Right Guard", value: "RG" },
    { label: "Right Tackle", value: "RT" },
    //
    { label: "Defensive End", value: "DE" },
    { label: "Defensive Tackle", value: "DT" },
    { label: "Outside Linebacker", value: "OLB" },
    { label: "Inside Linebacker", value: "ILB" },
    { label: "Cornerback", value: "CB" },
    { label: "Strong Safety", value: "SS" },
    { label: "Free Safety", value: "FS" },
  ];

  const teamOptions = [
    { label: "All Teams", value: "All Teams" },
    { label: "Dallas Cowboys", value: "DAL" },
    { label: "New England Patriots", value: "NWE" },
    { label: "Pittsburgh Steelers", value: "PIT" },
    { label: "Green Bay Packers", value: "GNB" },
    { label: "Kansas City Chiefs", value: "KAN" },
    { label: "Philadelphia Eagles", value: "PHI" },
    { label: "Miami Dolphins", value: "MIA" },
    { label: "New York Giants", value: "CHI" },
    { label: "Las Vegas Raiders", value: "LV" },
    { label: "Arizona Carindals", value: "ARI" },
    { label: "Baltimore Ravens", value: "BAL" },
    { label: "Washington Redskins", value: "WAS" },
    { label: "Buffalo Bills", value: "BUF" },
    { label: "New York Jets", value: "NYJ" },
    { label: "Los Angeles Rams", value: "LAR" },
    { label: "Los Angeles Chargers", value: "LAC" },
    { label: "Minnesotta Vikings", value: "MIN" },
    { label: "Detroit Lions", value: "DET" },
    { label: "Atlanta Falcons", value: "ATL" },
    { label: "San Fransisco 49ers", value: "SF" },
    { label: "Chicago Bears", value: "CHI" },
    { label: "New Orleans Saints", value: "NO" },
    { label: "Cleveland Browns", value: "CLE" },
    { label: "Seattle Seahawks", value: "SEA" },
    { label: "Houston Texans", value: "HOU" },
    { label: "Indianaplis Colts", value: "IND" },
    { label: "Tennessee Titans", value: "TEN" },
    { label: "Tampa Bay Buccaneers", value: "TB" },
    { label: "Carolina Panthers", value: "CAR" },
    { label: "Denver Broncos", value: "DEN" },
    { label: "Cincinnatti Bengals", value: "CIN" },
    { label: "Jaxsonville Jaguars", value: "JAX" },
  ];

  const [posSelection, setPosSelection] = useState("All Positions");
  const [teamSelection, setTeamSelection] = useState("All Teams");

  const handleClick = () => {
    setShowModal(true);
  };

  const handlePosSelect = (option) => {
    setPosSelection(option);
  };

  const handleTeamSelect = (option) => {
    setTeamSelection(option);
  };

  const [offensiveLine, setOffensiveLine] = useState([
    {
      template: "Select a LT from the list",
    },
    {
      template: "Select a LG from the list",
    },
    {
      template: "Select a C from the list",
    },
    {
      template: "Select a RG from the list",
    },
    {
      template: "Select a RT from the list",
    },
  ]);

  const [reciever1, setReciever1] = useState([
    {
      template: "Select a WR from the list",
    },
  ]);

  const [reciever2, setReciever2] = useState([
    {
      template: "Select a WR from the list",
    },
  ]);

  const [reciever3, setReciever3] = useState([
    {
      template: "Select a WR from the list",
    },
  ]);

  const [reciever4, setReciever4] = useState([
    {
      template: "Select a WR from the list",
    },
  ]);

  const [tightEnd1, setTightEnd1] = useState([
    {
      template: "Select a TE from the list",
    },
  ]);

  const [tightEnd2, setTightEnd2] = useState([
    {
      template: "Select a TE from the list",
    },
  ]);

  const [quarterback, setQuarterback] = useState([
    {
      template: "Select a QB from the list",
    },
  ]);

  const [runningback1, setRunningback1] = useState([
    {
      template: "Select a RB from the list",
    },
  ]);

  const [runningback2, setRunningback2] = useState([
    {
      template: "Select a RB from the list",
    },
  ]);

  const [fullBack, setFullBack] = useState([
    {
      template: "Select a FB from the list",
    },
  ]);

  // const handleRandomLineup = () => {
  //   const pointGuardFilteredLineup = data.filter((player) =>
  //     player.position.includes("PG")
  //   );
  //   const shootingGuardFilteredLineup = data.filter((player) =>
  //     player.position.includes("SG")
  //   );
  //   const smallForwardFilteredLineup = data.filter((player) =>
  //     player.position.includes("SF")
  //   );
  //   const powerForwardFilteredLineup = data.filter((player) =>
  //     player.position.includes("PF")
  //   );
  //   const centerFilteredLineup = data.filter((player) =>
  //     player.position.includes("C")
  //   );
  //   const randomPointGuardIndex = Math.floor(
  //     Math.random() * pointGuardFilteredLineup.length
  //   );
  //   const randomShootingGuardIndex = Math.floor(
  //     Math.random() * shootingGuardFilteredLineup.length
  //   );
  //   const randomSmallForwardIndex = Math.floor(
  //     Math.random() * smallForwardFilteredLineup.length
  //   );
  //   const randomPowerForwardIndex = Math.floor(
  //     Math.random() * powerForwardFilteredLineup.length
  //   );
  //   const randomCenterIndex = Math.floor(
  //     Math.random() * centerFilteredLineup.length
  //   );
  //   const randomPointGuard = pointGuardFilteredLineup[randomPointGuardIndex];
  //   const randomShootingGuard =
  //     shootingGuardFilteredLineup[randomShootingGuardIndex];
  //   const randomSmallForward =
  //     smallForwardFilteredLineup[randomSmallForwardIndex];
  //   const randomPowerForward =
  //     powerForwardFilteredLineup[randomPowerForwardIndex];
  //   const randomCenter = centerFilteredLineup[randomCenterIndex];

  //   setLineup([
  //     randomPointGuard,
  //     randomShootingGuard,
  //     randomSmallForward,
  //     randomPowerForward,
  //     randomCenter,
  //   ]);
  // };

  const handleAddPlayerToLineup = (player) => {
    if (player.position === "QB") {
      const newLineup = [...quarterback];
      newLineup.splice(0, 1, player);
      setQuarterback(newLineup);
    } else if (player.position === "FB") {
      const newLineup = [...fullBack];
      newLineup.splice(0, 1, player);
      setFullBack(newLineup);
    } else if (player.position === "LT") {
      const newLineup = [...offensiveLine];
      newLineup.splice(0, 1, player);
      setOffensiveLine(newLineup);
    } else if (player.position === "LG") {
      const newLineup = [...offensiveLine];
      newLineup.splice(1, 1, player);
      setOffensiveLine(newLineup);
    } else if (player.position === "C") {
      const newLineup = [...offensiveLine];
      newLineup.splice(2, 1, player);
      setOffensiveLine(newLineup);
    } else if (player.position === "RG") {
      const newLineup = [...offensiveLine];
      newLineup.splice(3, 1, player);
      setOffensiveLine(newLineup);
    } else if (player.position === "RT") {
      const newLineup = [...offensiveLine];
      newLineup.splice(4, 1, player);
      setOffensiveLine(newLineup);
    } else if (player.position === "RB") {
      if (
        player.name !== runningback1[0].name &&
        player.name !== runningback2[0].name
      ) {
        if (
          runningback2[0].hasOwnProperty("template") &&
          runningback1[0].hasOwnProperty("template")
        ) {
          const newLineup = [...runningback1];
          newLineup.splice(0, 1, player);
          setRunningback1(newLineup);
        } else if (
          runningback2[0].hasOwnProperty("template") &&
          runningback1[0].hasOwnProperty("name")
        ) {
          const newLineup = [...runningback2];
          newLineup.splice(0, 1, player);
          setRunningback2(newLineup);
        } else if (
          runningback2[0].hasOwnProperty("name") &&
          runningback1[0].hasOwnProperty("template")
        ) {
          const newLineup = [...runningback1];
          newLineup.splice(0, 1, player);
          setRunningback1(newLineup);
        } else if (
          runningback2[0].hasOwnProperty("name") &&
          runningback1[0].hasOwnProperty("name")
        ) {
          const newLineup = [...runningback2];
          newLineup.splice(0, 1, player);
          setRunningback2(newLineup);
        }
      }
    } else if (player.position === "WR") {
      if (
        player.name !== reciever1[0].name &&
        player.name !== reciever2[0].name &&
        player.name !== reciever3[0].name &&
        player.name !== reciever4[0].name
      ) {
        // For 2 WR sets
        // if (((reciever2[0].hasOwnProperty("template")) && (reciever1[0].hasOwnProperty("template")))) {
        //   const newLineup = [...reciever1];
        //   newLineup.splice(0, 1, player);
        //   setReciever1(newLineup);
        // } else if (((reciever2[0].hasOwnProperty("template")) && (reciever1[0].hasOwnProperty("name")))) {
        //   const newLineup = [...reciever2];
        //   newLineup.splice(0, 1, player);
        //   setReciever2(newLineup);
        // } else if (((reciever2[0].hasOwnProperty("name")) && (reciever1[0].hasOwnProperty("template")))) {
        //   const newLineup = [...reciever1];
        //   newLineup.splice(0, 1, player);
        //   setReciever1(newLineup);
        // } else if (((reciever2[0].hasOwnProperty("name")) && (reciever1[0].hasOwnProperty("name")))) {
        //   const newLineup = [...reciever2];
        //   newLineup.splice(0, 1, player);
        //   setReciever2(newLineup);
        // }

        // For 3 WR sets
        // if (((reciever2[0].hasOwnProperty("template")) && (reciever1[0].hasOwnProperty("template")))) {
        //   const newLineup = [...reciever1];
        //   newLineup.splice(0, 1, player);
        //   setReciever1(newLineup);
        // } else if (((reciever2[0].hasOwnProperty("template")) && (reciever1[0].hasOwnProperty("name")))) {
        //   const newLineup = [...reciever2];
        //   newLineup.splice(0, 1, player);
        //   setReciever2(newLineup);
        // } else if (((reciever2[0].hasOwnProperty("name")) && (reciever1[0].hasOwnProperty("name")) && (reciever3[0].hasOwnProperty("template")))) {
        //   const newLineup = [...reciever3];
        //   newLineup.splice(0, 1, player);
        //   setReciever3(newLineup);
        // } else if (((reciever2[0].hasOwnProperty("name")) && (reciever1[0].hasOwnProperty("name")) && (reciever3[0].hasOwnProperty("name")))) {
        //   const newLineup = [...reciever3];
        //   newLineup.splice(0, 1, player);
        //   setReciever3(newLineup);
        // }

        // For 4 WR sets
        if (
          reciever2[0].hasOwnProperty("template") &&
          reciever1[0].hasOwnProperty("template")
        ) {
          const newLineup = [...reciever1];
          newLineup.splice(0, 1, player);
          setReciever1(newLineup);
        } else if (
          reciever2[0].hasOwnProperty("template") &&
          reciever1[0].hasOwnProperty("name")
        ) {
          const newLineup = [...reciever2];
          newLineup.splice(0, 1, player);
          setReciever2(newLineup);
        } else if (
          reciever2[0].hasOwnProperty("name") &&
          reciever1[0].hasOwnProperty("name") &&
          reciever3[0].hasOwnProperty("template")
        ) {
          const newLineup = [...reciever3];
          newLineup.splice(0, 1, player);
          setReciever3(newLineup);
        } else if (
          reciever2[0].hasOwnProperty("name") &&
          reciever1[0].hasOwnProperty("name") &&
          reciever3[0].hasOwnProperty("name") &&
          reciever4[0].hasOwnProperty("template")
        ) {
          const newLineup = [...reciever4];
          newLineup.splice(0, 1, player);
          setReciever4(newLineup);
        } else if (
          reciever2[0].hasOwnProperty("name") &&
          reciever1[0].hasOwnProperty("name") &&
          reciever3[0].hasOwnProperty("name") &&
          reciever4[0].hasOwnProperty("name")
        ) {
          const newLineup = [...reciever4];
          newLineup.splice(0, 1, player);
          setReciever4(newLineup);
        }
      }
    } else if (player.position === "TE") {
      if (
        player.name !== tightEnd1[0].name &&
        player.name !== tightEnd2[0].name
      ) {
        if (
          tightEnd2[0].hasOwnProperty("template") &&
          tightEnd1[0].hasOwnProperty("template")
        ) {
          const newLineup = [...tightEnd1];
          newLineup.splice(0, 1, player);
          setTightEnd1(newLineup);
        } else if (
          tightEnd2[0].hasOwnProperty("template") &&
          tightEnd1[0].hasOwnProperty("name")
        ) {
          const newLineup = [...tightEnd2];
          newLineup.splice(0, 1, player);
          setTightEnd2(newLineup);
        } else if (
          tightEnd2[0].hasOwnProperty("name") &&
          tightEnd1[0].hasOwnProperty("template")
        ) {
          const newLineup = [...tightEnd1];
          newLineup.splice(0, 1, player);
          setTightEnd1(newLineup);
        } else if (
          tightEnd2[0].hasOwnProperty("name") &&
          tightEnd1[0].hasOwnProperty("name")
        ) {
          const newLineup = [...tightEnd2];
          newLineup.splice(0, 1, player);
          setTightEnd2(newLineup);
        }
      }
    }
    // else if (((player.position === 'WR') && (reciever1[0].hasOwnProperty("name")) && (reciever2[0].hasOwnProperty("template")) && (!(player.name === reciever1.name)))) {
    //   const newLineup = [...reciever2];
    //   newLineup.splice(0, 1, player);
    //   setReciever2(newLineup);
    // } else if (((player.position === 'WR') && (reciever1[0].hasOwnProperty("name")) && (reciever2[0].hasOwnProperty("name")) && (!(player.name === reciever1.name)))) {
    //   const newLineup = [...reciever2];
    //   newLineup.splice(0, 1, player);
    //   setReciever2(newLineup);
    // }
  };

  // const handleDelete = (playerData) => {
  //   if (playerData.position === "PG") {
  //     const newLineup = [...lineup];
  //     newLineup.splice(0, 1, {
  //       template: "Select a PG from the list above",
  //     });
  //     setLineup(newLineup);
  //   } else if (playerData.position === "SG") {
  //     const newLineup = [...lineup];
  //     newLineup.splice(1, 1, {
  //       template: "Select a SG from the list above",
  //     });
  //     setLineup(newLineup);
  //   } else if (playerData.position === "SF") {
  //     const newLineup = [...lineup];
  //     newLineup.splice(2, 1, {
  //       template: "Select a SF from the list above",
  //     });
  //     setLineup(newLineup);
  //   } else if (playerData.position === "PF") {
  //     const newLineup = [...lineup];
  //     newLineup.splice(3, 1, {
  //       template: "Select a PF from the list above",
  //     });
  //     setLineup(newLineup);
  //   } else if (playerData.position === "C") {
  //     const newLineup = [...lineup];
  //     newLineup.splice(4, 1, {
  //       template: "Select a C from the list above",
  //     });
  //     setLineup(newLineup);
  //   }
  // };

  // const handleReset = () => {
  //   setLineup([
  //     {
  //       template: "Select a PG from the list above",
  //     },
  //     {
  //       template: "Select a SG from the list above",
  //     },
  //     {
  //       template: "Select a SF from the list above",
  //     },
  //     {
  //       template: "Select a PF from the list above",
  //     },
  //     {
  //       template: "Select a C from the list above",
  //     },
  //   ]);
  //   setSubmitLineup(false);
  // };

  // const handleRandomPointGuard = () => {
  //   const pointGuardFilteredLineup = data.filter((player) =>
  //     player.position.includes("PG")
  //   );
  //   const randomPointGuardIndex = Math.floor(
  //     Math.random() * pointGuardFilteredLineup.length
  //   );
  //   const randomPointGuard = pointGuardFilteredLineup[randomPointGuardIndex];
  //   const newLineup = [...lineup];
  //   newLineup.splice(0, 1, randomPointGuard);
  //   setLineup(newLineup);
  // };

  const config = [
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
            className="rounded-lg max-h-12 max-w-8 mr-2"
            src={player.plyrHeadshotSrc}
            alt={player.name}
          />
          <div className="group relative">
            <div className="text-sm">{player.name}</div>
          </div>
        </div>
      ),
      sortValue: (player) => player.name,
    },
    {
      label: "Position",
      render: (player) => (
        <div className="flex justify-center">
          <div
            className={`w-fit px-1.5 text-sm rounded border border-gray-500`}
          >
            {player.position}
          </div>
        </div>
      ),
      sortValue: (player) => player.position,
    },
    {
      label: "Year",
      render: (player) => <div className="text-sm">{player.year}</div>,
      sortValue: (player) => player.year,
    },
    {
      label: "Team",
      render: (player) => <div className="text-sm">{player.team}</div>,
      sortValue: (player) => player.team,
    },
    {
      label: "AV",
      render: (player) => (
        <div className="text-sm">{player.aproximateValuePeak}</div>
      ),
      sortValue: (player) => player.aproximateValuePeak,
    },
    {
      label: "OVR",
      render: (player) => <div className="text-sm">{player.overallRating}</div>,
      sortValue: (player) => player.overallRating,
    },
  ];

  const keyFn = (player) => {
    return player.name;
  };

  return (
    <div className="flex h-screen justify-between content-between items-between">
      <div className="flex items-center flex-col w-1/3 gap-2 lg:gap-5 lg:flex-col">
        <div className="flex flex-row gap-4 items-center w-full">
          <Dropdown
            onChange={handleTeamSelect}
            value={teamSelection}
            options={teamOptions}
            className="shadow-md"
          />
          <Dropdown
            onChange={handlePosSelect}
            value={posSelection}
            options={posOptions}
            className="shadow-md"
          />
          <Button
            onClick={handleClick}
            className="rounded-lg hover:bg-gray-200 shadow-md flex justify-center"
          >
            <IoInformationCircleOutline className="text-xl mr-1" />
          </Button>
        </div>

        <div className="flex justify-start overflow-y-scroll overflow-x-scroll shadow-lg mb-4 w-full h-full">
          <SortableTable
            config={config}
            data={footballData}
            keyFn={keyFn}
            posSelection={posSelection}
            teamSelection={teamSelection}
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center mx-auto w-full">
        <FootballLineup
          offensiveLine={offensiveLine}
          quarterback={quarterback}
          runningback1={runningback1}
          runningback2={runningback2}
          fullBack={fullBack}
          reciever1={reciever1}
          reciever2={reciever2}
          reciever3={reciever3}
          reciever4={reciever4}
          tightEnd1={tightEnd1}
          tightEnd2={tightEnd2}
        />
      </div>
    </div>
  );
}
export default FootballPage;

// Handle Reset
{
  /* <div className="flex justify-center flex-col">
  <div className="flex flex-row gap-5 justify-center items-center mb-5">
    <button
      className="bg-red-500 rounded-xl p-2 w-fit h-fit text-white shadow-md"
      // onClick={handleReset}
    >
      Reset Lineup
    </button>
  </div>
</div>; */
}

// Random Lineup and Random Positions
{
  /* <div className="flex flex-row gap-2 items-center text-sm">
  <Button
    // onClick={handleRandomLineup}
    className="rounded-lg hover:bg-gray-200 shadow-md"
  >
    Random Lineup
  </Button>
  <Button
    // onClick={handleRandomPointGuard}
    className="rounded-lg hover:bg-gray-200 shadow-md"
  >
    PG
  </Button>
</div>; */
}
