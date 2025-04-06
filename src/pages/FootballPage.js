import { useState } from "react";
import { footballData } from "../data/footballData";
import SortableFootballTable from "../components/football/SortableFootballTable";
import Button from "../components/shared/Button";
import Dropdown from "../components/shared/Dropdown";
import React from "react";
import FootballLineup from "../components/football/FootballLineup";
import { FaCheck } from "react-icons/fa";

function FootballPage({ setShowModal }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleSidebarView = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseSidebar = () => {
    setIsOpen(false);
  };

  const [unitSelection, setUnitSelection] = useState({
    label: "Offense",
    value: "OFF",
  });

  const unit = [
    { label: "Offense", value: "OFF" },
    { label: "Defense", value: "DEF" },
  ];

  // posOptions

  const offPosOptions = [
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
  ];

  const defPosOptions = [
    { label: "All Positions", value: "All Positions" },

    { label: "Right Defensive End", value: "RDE" },
    { label: "Left Defensive End", value: "LDE" },
    { label: "Right Defensive Tackle", value: "RDT" },
    { label: "Left Defensive Tackle", value: "LDT" },

    { label: "Left Outside Linebacker", value: "LOLB" },
    { label: "Right Outside Linebacker", value: "ROLB" },
    { label: "Middle Linebacker", value: "MLB" },

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
    { label: "New York Giants", value: "NYG" },
    { label: "Las Vegas Raiders", value: "LV" },
    { label: "Arizona Cardinals", value: "ARI" },
    { label: "Baltimore Ravens", value: "BAL" },
    { label: "Washington Redskins", value: "WAS" },
    { label: "Buffalo Bills", value: "BUF" },
    { label: "New York Jets", value: "NYJ" },
    { label: "Los Angeles Rams", value: "LAR" },
    { label: "Los Angeles Chargers", value: "LAC" },
    { label: "Minnesota Vikings", value: "MIN" },
    { label: "Detroit Lions", value: "DET" },
    { label: "Atlanta Falcons", value: "ATL" },
    { label: "San Fransisco 49ers", value: "SF" },
    { label: "Chicago Bears", value: "CHI" },
    { label: "New Orleans Saints", value: "NO" },
    { label: "Cleveland Browns", value: "CLE" },
    { label: "Seattle Seahawks", value: "SEA" },
    { label: "Houston Texans", value: "HOU" },
    { label: "Indianapolis Colts", value: "IND" },
    { label: "Tennessee Titans", value: "TEN" },
    { label: "Tampa Bay Buccaneers", value: "TB" },
    { label: "Carolina Panthers", value: "CAR" },
    { label: "Denver Broncos", value: "DEN" },
    { label: "Cincinnati Bengals", value: "CIN" },
    { label: "Jacksonville Jaguars", value: "JAX" },
  ];

  const [offPlaySelection, setOffPlaySelection] = useState({
    label: "I Formation Pro",
    rbTotal: 1,
    teTotal: 1,
    wrTotal: 2,
  });
  const [defPlaySelection, setDefPlaySelection] = useState({
    label: "3-4",
    mlbTotal: 2,
    cbTotal: 2,
  });

  const offPlays = [
    { label: "I Formation Pro", rbTotal: 1, teTotal: 1, wrTotal: 2 },
    { label: "I Formation Tight", rbTotal: 1, teTotal: 2, wrTotal: 1 },
    { label: "I Formation Slot", rbTotal: 1, wrTotal: 3 },
    { label: "I Formation Hulk", rbTotal: 1, teTotal: 3 },

    { label: "Full House", rbTotal: 2, wrTotal: 2 },

    // { label: "Wing-T Wide", rbTotal: 2, wrTotal: 2 },
    // { label: "Wing-T Tight", rbTotal: 2, teTotal: 2 },

    // { label: "Pistol Spread", rbTotal: 1, wrTotal: 4 },
    // { label: "Pistol Bunch", rbTotal: 1, teTotal: 1, wrTotal: 3 },
    // { label: "Pistol Strong", rbTotal: 2, wrTotal: 3 },
    // { label: "Pistol Ace", rbTotal: 1, teTotal: 2, wrTotal: 2 },
    // { label: "Pistol Full House", rbTotal: 2, teTotal: 1, wrTotal: 2 },
    // { label: "Pistol Strong Tight", rbTotal: 2, teTotal: 1, wrTotal: 2 },
    // { label: "Pistol Wing Tight", rbTotal: 2, teTotal: 2, wrTotal: 1 },

    { label: "Power I", rbTotal: 2, teTotal: 1, wrTotal: 1 },

    { label: "Strong I Wide", rbTotal: 1, teTotal: 1, wrTotal: 2 },
    { label: "Strong I Tight", rbTotal: 1, teTotal: 2, wrTotal: 1 },

    { label: "Wildcat Pro", rbTotal: 2, teTotal: 1, wrTotal: 2 },
    { label: "Wildcat Unbalanced", rbTotal: 2, teTotal: 2, wrTotal: 1 },

    // Single Back and Shotgun
  ];

  const defPlays = [
    { label: "3-4", value: "3-4", mlbTotal: 2, cbTotal: 2 },
    { label: "4-3", value: "4-3", mlbTotal: 1, cbTotal: 2},
    { label: "3-3-5", value: "3-3-5", mlbTotal: 1, cbTotal: 3},
    { label: "4-4", value: "4-4", mlbTotal: 2, cbTotal: 2},
    { label: "46", value: "46", mlbTotal: 1, cbTotal: 2},
    { label: "5-2", value: "5-2", mlbTotal: 2, cbTotal: 2},
    { label: "Nickle", value: "Nickle", mlbTotal: 0, cbTotal: 3},
    { label: "Dime", value: "Dime", mlbTotal: 1, cbTotal: 4},
  ];

  const [posSelection, setPosSelection] = useState({
    label: "All Positions",
    value: "All Positions",
  });
  const [teamSelection, setTeamSelection] = useState({
    label: "All Teams",
    value: "All Teams",
  });

  // const handleClick = () => {
  //   setShowModal(true);
  // };

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

  const [tightEnd3, setTightEnd3] = useState([
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

  // ------------------------------------------------------------------------------------
  // --------------------------       Defense         ----------------------------------
  // ------------------------------------------------------------------------------------

  const [noseTackle, setNoseTackle] = useState([
    {
      template: "Select a NT from the list",
    },
  ]);

  const [leftDefensiveTackle, setLeftDefensiveTackle] = useState([
    {
      template: "Select a LDT from the list",
    },
  ]);

  const [rightDefensiveTackle, setRightDefensiveTackle] = useState([
    {
      template: "Select a RDT from the list",
    },
  ]);

  const [leftDefensiveEnd, setLeftDefensiveEnd] = useState([
    {
      template: "Select a LDE from the list",
    },
  ]);

  const [rightDefensiveEnd, setRightDefensiveEnd] = useState([
    {
      template: "Select a RDE from the list",
    },
  ]);

  const [rightOutsideLinebacker, setRightOutsideLinebacker] = useState([
    {
      template: "Select a ROLB from the list",
    },
  ]);

  const [leftOutsideLinebacker, setLeftOutsideLinebacker] = useState([
    {
      template: "Select a LOLB from the list",
    },
  ]);

  const [middleLinebacker1, setMiddleLinebacker1] = useState([
    {
      template: "Select a MLB from the list",
    },
  ]);

  const [middleLinebacker2, setMiddleLinebacker2] = useState([
    {
      template: "Select a MLB from the list",
    },
  ]);

  const [freeSafety, setFreeSafety] = useState([
    {
      template: "Select a FS from the list",
    },
  ]);

  const [strongSafety, setStrongSafety] = useState([
    {
      template: "Select a SS from the list",
    },
  ]);

  const [cornerback1, setCornerback1] = useState([
    {
      template: "Select a CB from the list",
    },
  ]);

  const [cornerback2, setCornerback2] = useState([
    {
      template: "Select a CB from the list",
    },
  ]);

  const [cornerback3, setCornerback3] = useState([
    {
      template: "Select a CB from the list",
    },
  ]);

  const [cornerback4, setCornerback4] = useState([
    {
      template: "Select a CB from the list",
    },
  ]);

  const handleRandomLineup = () => {
    const quarterbackFilteredLineup = footballData.filter((player) =>
      player.position.includes("QB")
    );

    const runningbackFilteredLineup = footballData.filter((player) =>
      player.position.includes("RB")
    );

    const fullBackFilteredLineup = footballData.filter((player) =>
      player.position.includes("FB")
    );
    const tightEndFilteredLineup = footballData.filter((player) =>
      player.position.includes("TE")
    );
    const receiverFilteredLineup = footballData.filter((player) =>
      player.position.includes("WR")
    );
    const leftTackleFilteredLineup = footballData.filter((player) =>
      player.position.includes("LT")
    );
    const leftGuardFilteredLineup = footballData.filter((player) =>
      player.position.includes("LG")
    );

    const centerFilteredLineup = footballData.filter(function (player) {
      return player.position === "C";
    });
    // const centerFilteredLineup = footballData.filter((player) =>
    //   player.position.includes("C")
    // );

    const rightGuardFilteredLineup = footballData.filter((player) =>
      player.position.includes("RG")
    );
    const rightTackleFilteredLineup = footballData.filter((player) =>
      player.position.includes("RT")
    );
    const noseTackleFilteredLineup = footballData.filter((player) =>
      player.position.includes("NT")
    );
    const rightDefensiveTackleFilteredLineup = footballData.filter((player) =>
      player.position.includes("RDT")
    );
    const leftDefensiveTackleFilteredLineup = footballData.filter((player) =>
      player.position.includes("LDT")
    );
    const rightDefensiveEndFilteredLineup = footballData.filter((player) =>
      player.position.includes("RDE")
    );
    const leftDefensiveEndFilteredLineup = footballData.filter((player) =>
      player.position.includes("LDE")
    );
    const leftOutsideLinebackerFilteredLineup = footballData.filter((player) =>
      player.position.includes("LOLB")
    );
    const rightOutsideLinebackerFilteredLineup = footballData.filter((player) =>
      player.position.includes("ROLB")
    );
    const middleLinebackerFilteredLineup = footballData.filter((player) =>
      player.position.includes("MLB")
    );
    const strongSafetyFilteredLineup = footballData.filter((player) =>
      player.position.includes("SS")
    );
    const freeSafetyFilteredLineup = footballData.filter((player) =>
      player.position.includes("FS")
    );
    const cornerbackFilteredLineup = footballData.filter((player) =>
      player.position.includes("CB")
    );

    const randomQuarterbackIndex = Math.floor(
      Math.random() * quarterbackFilteredLineup.length
    );
    const randomRunningbackIndex = Math.floor(
      Math.random() * runningbackFilteredLineup.length
    );
    const randomFullBackIndex = Math.floor(
      Math.random() * fullBackFilteredLineup.length
    );
    const randomTightEndIndex = Math.floor(
      Math.random() * tightEndFilteredLineup.length
    );
    const randomReceiverIndex = Math.floor(
      Math.random() * receiverFilteredLineup.length
    );
    const randomLeftTackleIndex = Math.floor(
      Math.random() * leftTackleFilteredLineup.length
    );
    const randomLeftGuardIndex = Math.floor(
      Math.random() * leftGuardFilteredLineup.length
    );
    const randomCenterIndex = Math.floor(
      Math.random() * centerFilteredLineup.length
    );
    const randomRightGuardIndex = Math.floor(
      Math.random() * rightGuardFilteredLineup.length
    );
    const randomRightTackleIndex = Math.floor(
      Math.random() * rightTackleFilteredLineup.length
    );
    const randomNoseTackleIndex = Math.floor(
      Math.random() * noseTackleFilteredLineup.length
    );
    const randomRightDefensiveTackleIndex = Math.floor(
      Math.random() * rightDefensiveTackleFilteredLineup.length
    );
    const randomLeftDefensiveTackleIndex = Math.floor(
      Math.random() * leftDefensiveTackleFilteredLineup.length
    );
    const randomLeftDefensiveEndIndex = Math.floor(
      Math.random() * leftDefensiveEndFilteredLineup.length
    );
    const randomRightDefensiveEndIndex = Math.floor(
      Math.random() * rightDefensiveEndFilteredLineup.length
    );
    const randomRightOutsideLinebackerIndex = Math.floor(
      Math.random() * rightOutsideLinebackerFilteredLineup.length
    );
    const randomLeftOutsideLinebackerIndex = Math.floor(
      Math.random() * leftOutsideLinebackerFilteredLineup.length
    );
    const randomMiddleLinebackerIndex = Math.floor(
      Math.random() * middleLinebackerFilteredLineup.length
    );
    const randomFreeSafetyIndex = Math.floor(
      Math.random() * freeSafetyFilteredLineup.length
    );
    const randomStrongSafetyIndex = Math.floor(
      Math.random() * strongSafetyFilteredLineup.length
    );
    const randomCornerbackIndex = Math.floor(
      Math.random() * cornerbackFilteredLineup.length
    );

    const randomQuarterback = quarterbackFilteredLineup[randomQuarterbackIndex];
    const randomRunningback = runningbackFilteredLineup[randomRunningbackIndex];
    const randomFullBack = fullBackFilteredLineup[randomFullBackIndex];
    const randomTightEnd = tightEndFilteredLineup[randomTightEndIndex];
    const randomReceiver = receiverFilteredLineup[randomReceiverIndex];
    const randomLeftTackle = leftTackleFilteredLineup[randomLeftTackleIndex];
    const randomLeftGuard = leftGuardFilteredLineup[randomLeftGuardIndex];
    const randomCenter = centerFilteredLineup[randomCenterIndex];
    const randomRightGuard = rightGuardFilteredLineup[randomRightGuardIndex];
    const randomRightTackle = rightTackleFilteredLineup[randomRightTackleIndex];

    const randomNoseTackle = noseTackleFilteredLineup[randomNoseTackleIndex];
    const randomRightDefensiveTackle =
      rightDefensiveTackleFilteredLineup[randomRightDefensiveTackleIndex];
    const randomLeftDefensiveTackle =
      leftDefensiveTackleFilteredLineup[randomLeftDefensiveTackleIndex];
    const randomRightDefensiveEnd =
      rightDefensiveEndFilteredLineup[randomRightDefensiveEndIndex];
    const randomLeftDefensiveEnd =
      leftDefensiveEndFilteredLineup[randomLeftDefensiveEndIndex];
    const randomRightOutsideLinebacker =
      rightOutsideLinebackerFilteredLineup[randomRightOutsideLinebackerIndex];
    const randomLeftOutsideLinebacker =
      leftOutsideLinebackerFilteredLineup[randomLeftOutsideLinebackerIndex];
    const randomMiddleLinebacker =
      middleLinebackerFilteredLineup[randomMiddleLinebackerIndex];
    const randomFreeSafety = freeSafetyFilteredLineup[randomFreeSafetyIndex];
    const randomStrongSafety =
      strongSafetyFilteredLineup[randomStrongSafetyIndex];
    const randomCornerback = cornerbackFilteredLineup[randomCornerbackIndex];

    // ---------------------------------
    const runningbackAltFilteredLineup = runningbackFilteredLineup.filter(
      function (player) {
        return player.name !== randomRunningback.name;
      }
    );
    const randomRunningbackAltIndex = Math.floor(
      Math.random() * runningbackAltFilteredLineup.length
    );
    const randomAltRunningback =
      runningbackAltFilteredLineup[randomRunningbackAltIndex];
    // ---------------------------------
    const middleLinebackerAltFilteredLineup = middleLinebackerFilteredLineup.filter(
      function (player) {
        return player.name !== randomMiddleLinebacker.name;
      }
    );
    // console.log(middleLinebackerAltFilteredLineup);
    const randomMiddleLinebackerAltIndex = Math.floor(
      Math.random() * middleLinebackerAltFilteredLineup.length
    );
    const randomAltMiddleLinebacker =
    middleLinebackerAltFilteredLineup[randomMiddleLinebackerAltIndex];
    // ---------------------------------
    const tightEndAltFilteredLineup = tightEndFilteredLineup.filter(
      function (player) {
        return player.name !== randomTightEnd.name;
      }
    );

    // console.log(middleLinebackerAltFilteredLineup);
    const randomTightEndAltIndex = Math.floor(
      Math.random() * tightEndAltFilteredLineup.length
    );
    const randomAltTightEnd = tightEndAltFilteredLineup[randomTightEndAltIndex]; // IMPORTANT

    const tightEndThirdFilteredLineup = tightEndAltFilteredLineup.filter(
      function (player) {
        return player.name !== randomAltTightEnd.name;
      }
    );

    const randomTightEndThirdIndex = Math.floor(
      Math.random() * tightEndThirdFilteredLineup.length
    );
    const randomThirdTightEnd = tightEndThirdFilteredLineup[randomTightEndThirdIndex]; // IMPORTANT

    // ---------------------------------

    const receiverAltFilteredLineup = receiverFilteredLineup.filter(
      function (player) {
        return player.name !== randomReceiver.name;
      }
    );

    // console.log(middleLinebackerAltFilteredLineup);
    const randomReceiverAltIndex = Math.floor(
      Math.random() * receiverAltFilteredLineup.length
    );
    const randomAltReceiver = receiverAltFilteredLineup[randomReceiverAltIndex]; // IMPORTANT





    const receiverThirdFilteredLineup = receiverAltFilteredLineup.filter(
      function (player) {
        return player.name !== randomAltReceiver.name;
      }
    );

    const randomReceiverThirdIndex = Math.floor(
      Math.random() * receiverThirdFilteredLineup.length
    );
    const randomThirdReceiver = receiverThirdFilteredLineup[randomReceiverThirdIndex]; // IMPORTANT





    const receiverFourthFilteredLineup = receiverThirdFilteredLineup.filter(
      function (player) {
        return player.name !== randomThirdReceiver.name;
      }
    );

    const randomReceiverFourthIndex = Math.floor(
      Math.random() * receiverFourthFilteredLineup.length
    );
    const randomFourthReceiver = receiverFourthFilteredLineup[randomReceiverFourthIndex]; // IMPORTANT

    // ---------------------------------


    const cornerbackAltFilteredLineup = cornerbackFilteredLineup.filter(
      function (player) {
        return player.name !== randomCornerback.name;
      }
    );

    // console.log(middleLinebackerAltFilteredLineup);
    const randomCornerbackAltIndex = Math.floor(
      Math.random() * cornerbackAltFilteredLineup.length
    );
    const randomAltCornerback = cornerbackAltFilteredLineup[randomCornerbackAltIndex]; // IMPORTANT





    const cornerbackThirdFilteredLineup = cornerbackAltFilteredLineup.filter(
      function (player) {
        return player.name !== randomAltCornerback.name;
      }
    );

    const randomCornerbackThirdIndex = Math.floor(
      Math.random() * cornerbackThirdFilteredLineup.length
    );
    const randomThirdCornerback = cornerbackThirdFilteredLineup[randomCornerbackThirdIndex]; // IMPORTANT





    const cornerbackFourthFilteredLineup = cornerbackThirdFilteredLineup.filter(
      function (player) {
        return player.name !== randomThirdCornerback.name;
      }
    );

    const randomCornerbackFourthIndex = Math.floor(
      Math.random() * cornerbackFourthFilteredLineup.length
    );
    const randomFourthCornerback = cornerbackFourthFilteredLineup[randomCornerbackFourthIndex]; // IMPORTANT

    // ---------------------------------

    if (unitSelection.value === "OFF") {
      setQuarterback([randomQuarterback]);

      setRunningback1([randomRunningback]);
      setRunningback2([randomAltRunningback]);

      setFullBack([randomFullBack]);

      setReciever1([randomReceiver]);
      setReciever2([randomAltReceiver]);
      setReciever3([randomThirdReceiver]);
      setReciever4([randomFourthReceiver]);

      setTightEnd1([randomTightEnd]);
      setTightEnd2([randomAltTightEnd]);
      setTightEnd3([randomThirdTightEnd]);

      setOffensiveLine([
        randomLeftTackle,
        randomLeftGuard,
        randomCenter,
        randomRightGuard,
        randomRightTackle,
      ]);
    } else if (unitSelection.value === "DEF") {
      setNoseTackle([randomNoseTackle]);
      setRightDefensiveTackle([randomRightDefensiveTackle]);
      setLeftDefensiveTackle([randomLeftDefensiveTackle]);
      setRightDefensiveEnd([randomRightDefensiveEnd]);
      setLeftDefensiveEnd([randomLeftDefensiveEnd]);
      setRightOutsideLinebacker([randomRightOutsideLinebacker]);
      setLeftOutsideLinebacker([randomLeftOutsideLinebacker]);

      setMiddleLinebacker1([randomMiddleLinebacker]);
      setMiddleLinebacker2([randomAltMiddleLinebacker]);

      setFreeSafety([randomFreeSafety]);
      setStrongSafety([randomStrongSafety]);

      setCornerback1([randomCornerback]);
      setCornerback2([randomAltCornerback]);
      setCornerback3([randomThirdCornerback]);
      setCornerback4([randomFourthCornerback]);
    }
  };

  const handleAddPlayerToLineup = (player) => {
    if (player.position === "QB") {
      const newLineup = [...quarterback];
      newLineup.splice(0, 1, player);
      setQuarterback(newLineup);
    }
    // -----------------------------------------------
    else if (player.position === "FB") {
      const newLineup = [...fullBack];
      newLineup.splice(0, 1, player);
      setFullBack(newLineup);
    }
    // -----------------------------------------------
    else if (player.position === "LT") {
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
    }
    // -----------------------------------------------
    else if (player.position === "RB") {
      if (offPlaySelection.rbTotal === 1) {
        const newLineup = [...runningback1];
        newLineup.splice(0, 1, player);
        setRunningback1(newLineup);
      } else if (offPlaySelection.rbTotal === 2) {
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
      }
    }
    // -----------------------------------------------
    else if (player.position === "WR") {
      if (offPlaySelection.wrTotal === 1) {
        const newLineup = [...reciever1];
        newLineup.splice(0, 1, player);
        setReciever1(newLineup);
      } else if (offPlaySelection.wrTotal === 2) {
        if (
          player.name !== reciever1[0].name &&
          player.name !== reciever2[0].name
        ) {
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
            reciever1[0].hasOwnProperty("template")
          ) {
            const newLineup = [...reciever1];
            newLineup.splice(0, 1, player);
            setReciever1(newLineup);
          } else if (
            reciever2[0].hasOwnProperty("name") &&
            reciever1[0].hasOwnProperty("name")
          ) {
            const newLineup = [...reciever2];
            newLineup.splice(0, 1, player);
            setReciever2(newLineup);
          }
        }
      } else if (offPlaySelection.wrTotal === 3) {
        if (
          player.name !== reciever1[0].name &&
          player.name !== reciever2[0].name &&
          player.name !== reciever3[0].name
        ) {
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
            reciever3[0].hasOwnProperty("name")
          ) {
            const newLineup = [...reciever3];
            newLineup.splice(0, 1, player);
            setReciever4(newLineup);
          }
        }
      } else if (offPlaySelection.wrTotal === 4) {
        if (
          player.name !== reciever1[0].name &&
          player.name !== reciever2[0].name &&
          player.name !== reciever3[0].name &&
          player.name !== reciever4[0].name
        ) {
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
      }
    }

    // -----------------------------------------------
    else if (player.position === "TE") {
      if (offPlaySelection.teTotal === 1) {
        const newLineup = [...tightEnd1];
        newLineup.splice(0, 1, player);
        setTightEnd1(newLineup);
      } else if (offPlaySelection.teTotal === 2) {
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
      } else if (offPlaySelection.teTotal === 3) {
        if (
          player.name !== tightEnd1[0].name &&
          player.name !== tightEnd2[0].name &&
          player.name !== tightEnd3[0].name
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
            tightEnd1[0].hasOwnProperty("name") &&
            tightEnd3[0].hasOwnProperty("template")
          ) {
            const newLineup = [...tightEnd3];
            newLineup.splice(0, 1, player);
            setTightEnd3(newLineup);
          } else if (
            tightEnd2[0].hasOwnProperty("name") &&
            tightEnd1[0].hasOwnProperty("name") &&
            tightEnd3[0].hasOwnProperty("name")
          ) {
            const newLineup = [...tightEnd3];
            newLineup.splice(0, 1, player);
            setTightEnd3(newLineup);
          }
        }
      }
    }

    // -----------------------------------------------
    // -----------------------------------------------
    // -----------------------------------------------
    else if (player.position === "NT") {
      const newLineup = [...noseTackle];
      newLineup.splice(0, 1, player);
      setNoseTackle(newLineup);
    } else if (player.position === "RDT") {
      const newLineup = [...rightDefensiveTackle];
      newLineup.splice(0, 1, player);
      setRightDefensiveTackle(newLineup);
    } else if (player.position === "LDT") {
      const newLineup = [...leftDefensiveTackle];
      newLineup.splice(0, 1, player);
      setLeftDefensiveTackle(newLineup);
    } else if (player.position === "RDE") {
      const newLineup = [...rightDefensiveEnd];
      newLineup.splice(0, 1, player);
      setRightDefensiveEnd(newLineup);
    } else if (player.position === "LDE") {
      const newLineup = [...leftDefensiveEnd];
      newLineup.splice(0, 1, player);
      setLeftDefensiveEnd(newLineup);
    } else if (player.position === "ROLB") {
      const newLineup = [...rightOutsideLinebacker];
      newLineup.splice(0, 1, player);
      setRightOutsideLinebacker(newLineup);
    } else if (player.position === "LOLB") {
      const newLineup = [...leftOutsideLinebacker];
      newLineup.splice(0, 1, player);
      setLeftOutsideLinebacker(newLineup);
    } else if (player.position === "MLB") {
      if (defPlaySelection.mlbTotal === 1) {
        const newLineup = [...middleLinebacker1];
        newLineup.splice(0, 1, player);
        setMiddleLinebacker1(newLineup);
      } else if (defPlaySelection.mlbTotal === 2) {
        if (
          player.name !== middleLinebacker1[0].name &&
          player.name !== middleLinebacker2[0].name
        ) {
          if (
            middleLinebacker2[0].hasOwnProperty("template") &&
            middleLinebacker1[0].hasOwnProperty("template")
          ) {
            const newLineup = [...middleLinebacker1];
            newLineup.splice(0, 1, player);
            setMiddleLinebacker1(newLineup);
          } else if (
            middleLinebacker2[0].hasOwnProperty("template") &&
            middleLinebacker1[0].hasOwnProperty("name")
          ) {
            const newLineup = [...middleLinebacker2];
            newLineup.splice(0, 1, player);
            setMiddleLinebacker2(newLineup);
          } else if (
            middleLinebacker2[0].hasOwnProperty("name") &&
            middleLinebacker1[0].hasOwnProperty("template")
          ) {
            const newLineup = [...middleLinebacker1];
            newLineup.splice(0, 1, player);
            setMiddleLinebacker1(newLineup);
          } else if (
            middleLinebacker2[0].hasOwnProperty("name") &&
            middleLinebacker1[0].hasOwnProperty("name")
          ) {
            const newLineup = [...middleLinebacker2];
            newLineup.splice(0, 1, player);
            setMiddleLinebacker2(newLineup);
          }
        }
      }
    } else if (player.position === "FS") {
      const newLineup = [...freeSafety];
      newLineup.splice(0, 1, player);
      setFreeSafety(newLineup);
    } else if (player.position === "SS") {
      const newLineup = [...strongSafety];
      newLineup.splice(0, 1, player);
      setStrongSafety(newLineup);
    } else if (player.position === "CB") {
      if (defPlaySelection.cbTotal === 1) {
        const newLineup = [...cornerback1];
        newLineup.splice(0, 1, player);
        setCornerback1(newLineup);
      } else if (defPlaySelection.cbTotal === 2) {
        if (
          player.name !== cornerback1[0].name &&
          player.name !== cornerback2[0].name
        ) {
          if (
            cornerback2[0].hasOwnProperty("template") &&
            cornerback1[0].hasOwnProperty("template")
          ) {
            const newLineup = [...cornerback1];
            newLineup.splice(0, 1, player);
            setCornerback1(newLineup);
          } else if (
            cornerback2[0].hasOwnProperty("template") &&
            cornerback1[0].hasOwnProperty("name")
          ) {
            const newLineup = [...cornerback2];
            newLineup.splice(0, 1, player);
            setCornerback2(newLineup);
          } else if (
            cornerback2[0].hasOwnProperty("name") &&
            cornerback1[0].hasOwnProperty("template")
          ) {
            const newLineup = [...cornerback1];
            newLineup.splice(0, 1, player);
            setCornerback1(newLineup);
          } else if (
            cornerback2[0].hasOwnProperty("name") &&
            cornerback1[0].hasOwnProperty("name")
          ) {
            const newLineup = [...cornerback2];
            newLineup.splice(0, 1, player);
            setCornerback2(newLineup);
          }
        }
      } else if (defPlaySelection.cbTotal === 3) {
        if (
          player.name !== cornerback1[0].name &&
          player.name !== cornerback2[0].name &&
          player.name !== cornerback3[0].name
        ) {
          if (
            cornerback2[0].hasOwnProperty("template") &&
            cornerback1[0].hasOwnProperty("template")
          ) {
            const newLineup = [...cornerback1];
            newLineup.splice(0, 1, player);
            setCornerback1(newLineup);
          } else if (
            cornerback2[0].hasOwnProperty("template") &&
            cornerback1[0].hasOwnProperty("name")
          ) {
            const newLineup = [...cornerback2];
            newLineup.splice(0, 1, player);
            setCornerback2(newLineup);
          } else if (
            cornerback2[0].hasOwnProperty("name") &&
            cornerback1[0].hasOwnProperty("name") &&
            cornerback3[0].hasOwnProperty("template")
          ) {
            const newLineup = [...cornerback3];
            newLineup.splice(0, 1, player);
            setCornerback3(newLineup);
          } else if (
            cornerback2[0].hasOwnProperty("name") &&
            cornerback1[0].hasOwnProperty("name") &&
            cornerback3[0].hasOwnProperty("name")
          ) {
            const newLineup = [...cornerback3];
            newLineup.splice(0, 1, player);
            setCornerback3(newLineup);
          }
        }
      } else if (defPlaySelection.cbTotal === 4) {
        if (
          player.name !== cornerback1[0].name &&
          player.name !== cornerback2[0].name &&
          player.name !== cornerback3[0].name &&
          player.name !== cornerback4[0].name
        ) {
          if (
            cornerback2[0].hasOwnProperty("template") &&
            cornerback1[0].hasOwnProperty("template")
          ) {
            const newLineup = [...cornerback1];
            newLineup.splice(0, 1, player);
            setCornerback1(newLineup);
          } else if (
            cornerback2[0].hasOwnProperty("template") &&
            cornerback1[0].hasOwnProperty("name")
          ) {
            const newLineup = [...cornerback2];
            newLineup.splice(0, 1, player);
            setCornerback2(newLineup);
          } else if (
            cornerback2[0].hasOwnProperty("name") &&
            cornerback1[0].hasOwnProperty("name") &&
            cornerback3[0].hasOwnProperty("template")
          ) {
            const newLineup = [...cornerback3];
            newLineup.splice(0, 1, player);
            setCornerback3(newLineup);
          } else if (
            cornerback2[0].hasOwnProperty("name") &&
            cornerback1[0].hasOwnProperty("name") &&
            cornerback3[0].hasOwnProperty("name") &&
            cornerback4[0].hasOwnProperty("template")
          ) {
            const newLineup = [...cornerback4];
            newLineup.splice(0, 1, player);
            setCornerback4(newLineup);
          } else if (
            cornerback2[0].hasOwnProperty("name") &&
            cornerback1[0].hasOwnProperty("name") &&
            cornerback3[0].hasOwnProperty("name") &&
            cornerback4[0].hasOwnProperty("name")
          ) {
            const newLineup = [...cornerback4];
            newLineup.splice(0, 1, player);
            setCornerback4(newLineup);
          }
        }
      }
    }
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

  const handleReset = () => {
    if (unitSelection.value === "OFF") {
      setQuarterback([{ template: "Select a QB from the list" }]);
      setRunningback1([{ template: "Select a RB from the list" }]);
      setRunningback2([{ template: "Select a RB from the list" }]);
      setFullBack([{ template: "Select a FB from the list" }]);
      setReciever1([{ template: "Select a WR from the list" }]);
      setReciever2([{ template: "Select a WR from the list" }]);
      setReciever3([{ template: "Select a WR from the list" }]);
      setReciever4([{ template: "Select a WR from the list" }]);
      setTightEnd1([{ template: "Select a TE from the list" }]);
      setTightEnd2([{ template: "Select a TE from the list" }]);
      setTightEnd3([{ template: "Select a TE from the list" }]);
      setOffensiveLine([
        { template: "Select a LT from the list" },
        { template: "Select a LG from the list" },
        { template: "Select a C from the list" },
        { template: "Select a RG from the list" },
        { template: "Select a RT from the list" },
      ]);
    } else if (unitSelection.value === "DEF") {
      setNoseTackle([{ template: "Select a NT from the list" }]);
      setRightDefensiveTackle([{ template: "Select a RDT from the list" }]);
      setLeftDefensiveTackle([{ template: "Select a LDT from the list" }]);
      setRightDefensiveEnd([{ template: "Select a RDE from the list" }]);
      setLeftDefensiveEnd([{ template: "Select a LDE from the list" }]);
      setRightOutsideLinebacker([{ template: "Select a ROLB from the list" }]);
      setLeftOutsideLinebacker([{ template: "Select a LOLB from the list" }]);
      setMiddleLinebacker1([{ template: "Select a MLB from the list" }]);
      setMiddleLinebacker2([{ template: "Select a MLB from the list" }]);
      setFreeSafety([{ template: "Select a FS from the list" }]);
      setStrongSafety([{ template: "Select a SS from the list" }]);
      setCornerback1([{ template: "Select a CB from the list" }]);
      setCornerback2([{ template: "Select a CB from the list" }]);
      setCornerback3([{ template: "Select a CB from the list" }]);
      setCornerback4([{ template: "Select a CB from the list" }]);
    }
  };

  const config = [
    {
      label: "",
      render: function (player) {
        const playerPositionArray = (player) => {
          if (player.position === "QB") {
            return quarterback[0].name === player.name;
          } else if (player.position === "FB") {
            return fullBack[0].name === player.name;
          } else if (player.position === "LT") {
            return offensiveLine[0].name === player.name;
          } else if (player.position === "LG") {
            return offensiveLine[1].name === player.name;
          } else if (player.position === "C") {
            return offensiveLine[2].name === player.name;
          } else if (player.position === "RG") {
            return offensiveLine[3].name === player.name;
          } else if (player.position === "RT") {
            return offensiveLine[4].name === player.name;
          } else if (player.position === "RB") {
            if (runningback1[0].name === player.name) {
              return true;
            } else if (runningback2[0].name === player.name) {
              return true;
            }
          } else if (player.position === "TE") {
            if (tightEnd1[0].name === player.name) {
              return true;
            } else if (tightEnd2[0].name === player.name) {
              return true;
            } else if (tightEnd3[0].name === player.name) {
              return true;
            }
          } else if (player.position === "WR") {
            if (reciever1[0].name === player.name) {
              return true;
            } else if (reciever2[0].name === player.name) {
              return true;
            } else if (reciever3[0].name === player.name) {
              return true;
            } else if (reciever4[0].name === player.name) {
              return true;
            }
          } else if (player.position === "RDT") {
            return rightDefensiveTackle[0].name === player.name;
          } else if (player.position === "LDT") {
            return leftDefensiveTackle[0].name === player.name;
          } else if (player.position === "RDE") {
            return rightDefensiveEnd[0].name === player.name;
          } else if (player.position === "LDE") {
            return leftDefensiveEnd[0].name === player.name;
          } else if (player.position === "NT") {
            return noseTackle[0].name === player.name;
          } else if (player.position === "LOLB") {
            return leftOutsideLinebacker[0].name === player.name;
          } else if (player.position === "ROLB") {
            return rightOutsideLinebacker[0].name === player.name;
          } else if (player.position === "FS") {
            return freeSafety[0].name === player.name;
          } else if (player.position === "SS") {
            return strongSafety[0].name === player.name;
          } else if (player.position === "MLB") {
            if (middleLinebacker1[0].name === player.name) {
              return true;
            } else if (middleLinebacker2[0].name === player.name) {
              return true;
            }
          } else if (player.position === "CB") {
            if (cornerback1[0].name === player.name) {
              return true;
            } else if (cornerback2[0].name === player.name) {
              return true;
            } else if (cornerback3[0].name === player.name) {
              return true;
            } else if (cornerback4[0].name === player.name) {
              return true;
            }
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

  const handleOffPlay = (option) => {
    setOffPlaySelection(option);

    if (offPlaySelection.label === 'I Formation Pro') {
      setTightEnd2([{ template: "Select a TE from the list" }]);
      setTightEnd3([{ template: "Select a TE from the list" }]);
      setReciever3([{ template: "Select a WR from the list" }]);
      setReciever4([{ template: "Select a WR from the list" }]);
      setRunningback2([{ template: "Select a RB from the list" }]);
    } 
  };

  const handleDefPlay = (option) => {
    setDefPlaySelection(option);

    if (defPlaySelection.label === '3-4') {
      setCornerback3([{ template: "Select a CB from the list" }]);
      setCornerback4([{ template: "Select a CB from the list" }]);
      setRightDefensiveTackle([{ template: "Select a RDT from the list" }]);
      setLeftDefensiveTackle([{ template: "Select a LDT from the list" }]);
    }
  };

  return (
    <div className="flex h-screen justify-between content-between items-between">
      {isOpen && (
        <div className="absolute top-0 left-0 lg:w-1/3 w-screen gap-2 pt-4 bg-white z-50">
          <div className="flex flex-row gap-3 items-center w-full mb-4 px-4">
            <Dropdown
              onChange={handleTeamSelect}
              value={teamSelection}
              options={teamOptions}
              className="shadow-md"
            />

            {unitSelection.value === "OFF" ||
            unitSelection.value === undefined ? (
              <Dropdown
                onChange={handlePosSelect}
                value={posSelection}
                options={offPosOptions}
                className="shadow-md"
              />
            ) : (
              <Dropdown
                onChange={handlePosSelect}
                value={posSelection}
                options={defPosOptions}
                className="shadow-md"
              />
            )}

            <Button
              danger
              className="rounded-md hover:bg-red-400"
              onClick={handleCloseSidebar}
            >
              x
            </Button>
          </div>

          <div className="overflow-y-scroll overflow-x-scroll h-screen shadow-lg bg-white">
            <SortableFootballTable
              config={config}
              data={footballData}
              keyFn={keyFn}
              posSelection={posSelection}
              teamSelection={teamSelection}
              unitSelection={unitSelection}
            />
          </div>
        </div>
      )}

      <div
        className={`flex items-start mt-11 justify-center content-center w-full lg:bg-white`}
      >
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
          tightEnd3={tightEnd3}
          //
          noseTackle={noseTackle}
          rightDefensiveTackle={rightDefensiveTackle}
          leftDefensiveTackle={leftDefensiveTackle}
          leftDefensiveEnd={leftDefensiveEnd}
          rightDefensiveEnd={rightDefensiveEnd}
          rightOutsideLinebacker={rightOutsideLinebacker}
          leftOutsideLinebacker={leftOutsideLinebacker}
          middleLinebacker1={middleLinebacker1}
          middleLinebacker2={middleLinebacker2}
          freeSafety={freeSafety}
          strongSafety={strongSafety}
          cornerback1={cornerback1}
          cornerback2={cornerback2}
          cornerback3={cornerback3}
          cornerback4={cornerback4}
          //
          offPlaySelection={offPlaySelection}
          setOffPlaySelection={setOffPlaySelection}
          offPlays={offPlays}
          defPlaySelection={defPlaySelection}
          setDefPlaySelection={setDefPlaySelection}
          defPlays={defPlays}
          //
          handleSidebarView={handleSidebarView}
          handleReset={handleReset}
          handleRandomLineup={handleRandomLineup}
          unitSelection={unitSelection}
          setUnitSelection={setUnitSelection}
          unit={unit}
          handleOffPlay={handleOffPlay}
          handleDefPlay={handleDefPlay}
        />
      </div>
    </div>
  );
}
export default FootballPage;
