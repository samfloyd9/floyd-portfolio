import {
  teamOptions,
  positionOptions,
} from "../../constants/baseballFilters";

import { IoInformationCircleOutline } from "react-icons/io5";
import Button from "../shared/Button";

import Dropdown from "../shared/Dropdown";

function FilteringOptions({
  // handleRandomPosition,
  // handleRandomLineup,
  handleTeamSelect,
  handlePosSelect,
  posSelection,
  teamSelection,
}) {

  return (
    <div className="flex justify-between mb-4 items-center flex-col gap-2 lg:gap-4 lg:flex-row">
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <div className="flex gap-2 items-center">
          <Dropdown
            onChange={handlePosSelect}
            value={posSelection}
            options={positionOptions}
            className="shadow-md bg-white"
          />
          <Dropdown
            onChange={handleTeamSelect}
            value={teamSelection}
            options={teamOptions}
            className="shadow-md bg-white"
          />
        </div>
      </div>
    </div>
  );
}

export default FilteringOptions;
