import {
  teamOptions,
  posOptions,
  badgeOptions,
} from "../../constants/lineupFilters";

import { IoInformationCircleOutline } from "react-icons/io5";

import Button from "../shared/Button";
import Dropdown from "../shared/Dropdown";

function FilterOptions({
  handleRandomPosition,
  handleRandomLineup,
  handleBadgeSelect,
  handleTeamSelect,
  handlePosSelect,
  handleClick,
  posSelection,
  badgeSelection,
  teamSelection,
}) {
  return (
    <div className="flex justify-between mb-4 items-center flex-col gap-2 lg:gap-4 lg:flex-row">
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="flex gap-2 items-center">
          <Dropdown
            onChange={handlePosSelect}
            value={posSelection}
            options={posOptions}
            className="shadow-md bg-white"
          />
          <Dropdown
            onChange={handleTeamSelect}
            value={teamSelection}
            options={teamOptions}
            className="shadow-md bg-white"
          />
          <Dropdown
            onChange={handleBadgeSelect}
            value={badgeSelection}
            options={badgeOptions}
            className="shadow-md bg-white"
          />
        </div>
        <div className="content sm:content lg:content xl:content 2xl:content">
          <Button
            onClick={handleClick}
            className="rounded-lg hover:bg-gray-200 shadow-md bg-white"
          >
            <IoInformationCircleOutline className="text-xl mr-1" />
            Stats
          </Button>
        </div>
      </div>
      <div className="flex flex-row gap-2 items-center text-sm">
        <Button
          onClick={handleRandomLineup}
          className="bg-white px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base rounded-lg hover:bg-gray-200 shadow-md whitespace-nowrap"
        >
          Random Lineup
        </Button>
        <Button
          onClick={() => handleRandomPosition("PG")}
          className="rounded-lg hover:bg-gray-200 shadow-md bg-white"
        >
          PG
        </Button>
        <Button
          onClick={() => handleRandomPosition("SG")}
          className="rounded-lg hover:bg-gray-200 shadow-md bg-white"
        >
          SG
        </Button>
        <Button
          onClick={() => handleRandomPosition("SF")}
          className="rounded-lg hover:bg-gray-200 shadow-md bg-white"
        >
          SF
        </Button>
        <Button
          onClick={() => handleRandomPosition("PF")}
          className="rounded-lg hover:bg-gray-200 shadow-md bg-white"
        >
          PF
        </Button>
        <Button
          onClick={() => handleRandomPosition("C")}
          className="rounded-lg hover:bg-gray-200 shadow-md bg-white"
        >
          C
        </Button>
      </div>
    </div>
  );
}

export default FilterOptions;
