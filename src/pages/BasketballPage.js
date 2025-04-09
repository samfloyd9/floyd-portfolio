import { useState } from "react";
import SortableTable from "../components/basketball/SortableTable";
import PlayerCardList from "../components/basketball/PlayerCardList";
import LineupSection from "../components/basketball/LineupSection";
import { data as playerData } from "../data/basketballData";
import { config } from "../config/tableConfig";
import FilterOptions from "../components/basketball/FilterOptions";

function TablePage({ setShowModal }) {
  const [data, setData] = useState(playerData);

  const [posSelection, setPosSelection] = useState({
    label: "All Positions",
    value: "All Positions",
  });
  const [teamSelection, setTeamSelection] = useState({
    label: "All Teams",
    value: "All Teams",
  });
  const [badgeSelection, setBadgeSelection] = useState({
    label: "All Badges",
    value: 0,
  });

  const templateLineup = [
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
  ];

  const [lineup, setLineup] = useState(templateLineup);

  const positionIndexMap = {
    PG: 0,
    SG: 1,
    SF: 2,
    PF: 3,
    C: 4,
  };

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
      template: `Select a ${position} from the list above`,
    };
    if (index !== undefined) {
      newLineup[index] = defaultTemplate;
    }
    return newLineup;
  }

  function getRandomPlayerForPosition(position, dataset) {
    const players = dataset.filter((player) =>
      player.position.includes(position)
    );
    const randomIndex = Math.floor(Math.random() * players.length);
    return players[randomIndex];
  }

  const handleAddPlayerToLineup = (player) => {
    setLineup((prev) => updateLineupSlot(player.position, player, prev));
  };

  const handleDelete = (playerData) => {
    setLineup((prev) => clearLineupSlot(playerData.position, prev));
  };

  const handleClick = () => {
    setShowModal(true);
  };

  const handlePosSelect = (option) => {
    setPosSelection(option);
  };

  const handleTeamSelect = (option) => {
    setTeamSelection(option);
  };

  const handleBadgeSelect = (option) => {
    setBadgeSelection(option);
  };

  const handleRandomLineup = () => {
    const positions = ["PG", "SG", "SF", "PF", "C"];
    const newLineup = positions.map((pos) =>
      getRandomPlayerForPosition(pos, data)
    );
    setLineup(newLineup);
  };

  const handleRandomPosition = (position) => {
    const randomPlayer = getRandomPlayerForPosition(position, data);
    setLineup((prev) => updateLineupSlot(position, randomPlayer, prev));
  };

  const keyFn = (player) => `${player.name}-${player.year}`;

  const handleSwapAltVersion = (playerToSwap) => {
    setData((prev) =>
      prev.map((plyr) => {
        if (
          plyr.name === playerToSwap.name &&
          plyr.year === playerToSwap.year
        ) {
          return {
            ...playerToSwap.alt, // Swap to the alt version
            alt: { ...playerToSwap }, // Store the current version as the new alt
          };
        }
        return plyr;
      })
    );
  };

  return (
    <div className="flex justify-center content-center mb-5 mt-0 lg:mt-5">
      <div className="flex flex-col">
        <div className="flex flex-row justify-center">
          <FilterOptions
            handleRandomPosition={handleRandomPosition}
            handleRandomLineup={handleRandomLineup}
            handleBadgeSelect={handleBadgeSelect}
            handleTeamSelect={handleTeamSelect}
            handlePosSelect={handlePosSelect}
            handleClick={handleClick}
            badgeSelection={badgeSelection}
            posSelection={posSelection}
            teamSelection={teamSelection}
          />
        </div>
        <div className="flex justify-start overflow-y-scroll overflow-x-scroll mx-auto w-[45%] shadow-lg mb-4 h-72 sm:w-3/4 md:w-3/4 lg:h-96 lg:w-fit">
          <div>
            <SortableTable
              config={config(lineup, handleAddPlayerToLineup, badgeSelection)}
              data={data}
              keyFn={keyFn}
              posSelection={posSelection}
              teamSelection={teamSelection}
              badgeSelection={badgeSelection}
              updatePlayerCallback={handleSwapAltVersion}
            />
          </div>
        </div>
        <div className="flex justify-center mb-8">
          <PlayerCardList data={lineup} handleDelete={handleDelete} />
        </div>
        <div className="flex justify-center flex-col lg:flex-row">
          <LineupSection lineup={lineup} setLineup={setLineup} />
        </div>
      </div>
    </div>
  );
}

export default TablePage;
