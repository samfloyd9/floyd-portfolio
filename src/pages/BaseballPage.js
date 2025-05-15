import { useState } from "react";

import { playerData } from "../data/baseballData";
import { baseballConfig } from "../config/baseballConfig";
import SortableTable from "../components/baseball/SortableTable";
import FilteringOptions from "../components/baseball/FilteringOptions";
import PlayerCard from "../components/baseball/PlayerCard";
import BaseballModal from "../components/baseball/BaseballModal";
import Button from "../components/shared/Button";

function BaseballPage() {
  // State that manages the large playerData object
  const [data, setData] = useState(playerData);

  const [posSelection, setPosSelection] = useState({
    label: "All Positions",
    value: "All Positions",
  });
  const [teamSelection, setTeamSelection] = useState({
    label: "All Teams",
    value: "All Teams",
  });

  const templateLineup = [
    {
      template: "Select a C",
      position: "C",
    },
    {
      template: "Select a 1B",
      position: "1B",
    },
    {
      template: "Select a 2B",
      position: "2B",
    },
    {
      template: "Select a SS",
      position: "SS",
    },
    {
      template: "Select a 3B",
      position: "3B",
    },
    {
      template: "Select a LF",
      position: "LF",
    },
    {
      template: "Select a CF",
      position: "CF",
    },
    {
      template: "Select a RF",
      position: "RF",
    },
    {
      template: "Select a DH",
      position: "DH",
    },
    {
      template: "Select a SP",
      position: "SP",
    },
    // {
    //   template: "Select a SP",
    //   name: "Select a SP2",
    // },
    // {
    //   template: "Select a SP",
    //   name: "Select a SP3",
    // },
    {
      template: "Select a RP",
      position: "RP",
    },
  ];

  const [lineup, setLineup] = useState(templateLineup);

  const getPlayerByPosition = (position) =>
    lineup.find((p) => p.position === position);

  const positionIndexMap = {
    C: 0,
    "1B": 1,
    "2B": 2,
    SS: 3,
    "3B": 4,
    LF: 5,
    CF: 6,
    RF: 7,
    DH: 8,
    SP: 9,
    RP: 10,
  };

  function getRandomPlayerForPosition(position, data) {
    const eligiblePlayers = data.filter((player) => player.position === position);
    if (eligiblePlayers.length === 0) return { template: `Select a ${position}`, position };
    const randomIndex = Math.floor(Math.random() * eligiblePlayers.length);
    return eligiblePlayers[randomIndex];
  }

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
      template: `Select a ${position}`,
      position,
    };
    if (index !== undefined) {
      newLineup[index] = defaultTemplate;
    }
    return newLineup;
  }

  const handleAddPlayerToLineup = (player) => {
    setLineup((prev) => updateLineupSlot(player.position, player, prev));
  };

  const handleDelete = (playerData) => {
    setLineup((prev) => clearLineupSlot(playerData.position, prev));
  };

  const handlePosSelect = (option) => {
    setPosSelection(option);
  };

  const handleTeamSelect = (option) => {
    setTeamSelection(option);
  };

  const handleRandomLineup = () => {
    const positions = Object.keys(positionIndexMap);
    const newLineup = positions.map((pos) =>
      getRandomPlayerForPosition(pos, data)
    );
    setLineup(newLineup);
  };
  

  const keyFn = (player) =>
    player.name ? `player-${player.name}` : `template-${player.template}`;

  const [showBaseballModal, setShowBaseballModal] = useState(false);

  const handleCloseBaseball = () => {
    setShowBaseballModal(false);
  };

  const actionBarBaseball = (
    <div>
      <Button primary onClick={handleCloseBaseball}>
        Close
      </Button>
    </div>
  );

  const plyrCardList = lineup.map((player) => {
    return (
      <div key={keyFn(player)}>
        <PlayerCard handleDelete={handleDelete} playerData={player} />
      </div>
    );
  });

  const handleClick = () => {
    setShowBaseballModal(true);
  };

  // Baseball Field Diagram
  // https://www.conceptdraw.com/How-To-Guide/picture/Sport-Baseball-Corner-View-Baseball-Field-Template.png

  // Baseball stadium (w/ lights OG)
  // https://t3.ftcdn.net/jpg/00/99/27/36/360_F_99273600_5YHOAmYmhZQdSS3Cba1vVnG1KJ9VxH8t.jpg

  return (
    <div className="flex flex-col items-center w-full bg-[url('https://www.conceptdraw.com/How-To-Guide/picture/Sport-Baseball-Corner-View-Baseball-Field-Template.png')] bg-cover bg-no-repeat bg-top">
      <div className="absolute bottom-1 right-1 text-center flex gap-4">
        <button
          onClick={handleClick}
          className="text-black bg-green-200 p-2 w-fit rounded-md"
        >
          Add a Player
        </button>
        <button
          onClick={handleRandomLineup}
          className="text-black bg-green-200 p-2 w-fit rounded-md"
        >
          Random Lineup
        </button>
      </div>
      {showBaseballModal && (
        <BaseballModal
          onClose={handleCloseBaseball}
          actionBar={actionBarBaseball}
        >
          <FilteringOptions
            handleTeamSelect={handleTeamSelect}
            handlePosSelect={handlePosSelect}
            posSelection={posSelection}
            teamSelection={teamSelection}
          />
          <SortableTable
            config={baseballConfig(lineup, handleAddPlayerToLineup)}
            data={data}
            keyFn={keyFn}
            posSelection={posSelection}
            teamSelection={teamSelection}
          />
        </BaseballModal>
      )}
      {/* <div className="bg-white w-full p-5">{plyrCardList}</div> */}
      <div className="flex flex-col items-center w-full h-screen">
        {/* Outfield */}
        <div className="flex justify-around w-full">
          {["LF", "CF", "RF"].map((pos) => {
            const isCorner = pos === "RF" || pos === "LF";
            const isCenter = pos === "CF";
            return (
              <div
                key={pos}
                className={`${isCorner ? "mt-8" : ""} ${
                  isCenter ? "mt-2" : ""
                }`}
              >
                <PlayerCard
                  playerData={getPlayerByPosition(pos)}
                  handleDelete={handleDelete}
                />
              </div>
            );
          })}
        </div>

        {/* Infield */}
        <div className="flex justify-center gap-8 w-full">
          {["3B", "SS", "SP", "2B", "1B"].map((pos) => {
            const isCorner = pos === "3B" || pos === "1B";
            const isPitcher = pos === "SP";
            const isMiddle = pos === "2B" || pos === "SS";
            return (
              <div
                key={pos}
                className={`${isCorner ? "mt-6" : ""} ${
                  isPitcher ? "mt-10" : ""
                } ${isMiddle ? "-mt-16" : ""}`}
              >
                <PlayerCard
                  playerData={getPlayerByPosition(pos)}
                  handleDelete={handleDelete}
                />
              </div>
            );
          })}
        </div>

        {/* Catcher */}
        <div className="flex flex-row justify-between w-full">
          {["DH", "C", "RP"].map((pos) => {
            return (
              <div key={pos} className={``}>
                <PlayerCard
                  playerData={getPlayerByPosition(pos)}
                  handleDelete={handleDelete}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default BaseballPage;
