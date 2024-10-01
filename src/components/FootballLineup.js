import { useState } from "react";
import Dropdown from "./Dropdown";
import FootballPlayerCardList from "./FootballPlayerCardList";

function FootballLineup({ offensiveLine, quarterback, runningback1, runningback2, fullBack, tightEnd1, tightEnd2, reciever1, reciever2, reciever3, reciever4 }) {
  const [unitSelection, setUnitSelection] = useState("Offense");
  const [offPlaySelection, setOffPlaySelection] = useState("I Formation Close");
  const [defPlaySelection, setDefPlaySelection] = useState("Defensive Play");
  
  const offPlays = [
    { label: "I Formation Close" },
  ];

  const defPlays = [
    { label: "All Teams", value: "All Teams" },
  ];

  const unit = [
    { label: "Offense", value: "OFF" },
    { label: "Defense", value: "DEF" },
  ];
  
  const handleUnitSelect = (option) => {
    setUnitSelection(option);
    console.log(unitSelection);
  };

  const handleOffPlay = (option) => {
    setOffPlaySelection(option);
  };

  const handleDefPlay = (option) => {
    setDefPlaySelection(option);
  };

  return (
    <div>
      <div className="absolute top-24 right-64">
        <div className="flex flex-row justify-center gap-5">
        {(unitSelection.label === 'Offense' || unitSelection.label === undefined )&& (
          <Dropdown
            onChange={handleOffPlay}
            value={offPlaySelection}
            options={offPlays}
          />
        )}
          {(unitSelection.label === 'Defense' || undefined) && (
            <Dropdown
            onChange={handleDefPlay}
            value={defPlaySelection}
            options={defPlays}
          />
          )} 
          <Dropdown
            onChange={handleUnitSelect}
            value={unitSelection}
            options={unit}
          />
        </div>
      </div>

      <div className="flex justify-center flex-col items-center content-center">
        <div className="absolute top-48">
          <FootballPlayerCardList
            data={offensiveLine}
            // handleDelete={handleDelete}
          />
        </div>

        <div className="absolute top-48 right-2">
          <FootballPlayerCardList
            data={reciever1}
            // handleDelete={handleDelete}
          />
        </div>
        <div className="absolute top-48 left-[480px]">
          <FootballPlayerCardList
            data={reciever2}
            // handleDelete={handleDelete}
          />
        </div>
        <div className="absolute top-[425px] left-[550px]">
          <FootballPlayerCardList
            data={reciever3}
            // handleDelete={handleDelete}
          />
        </div>
        <div className="absolute top-[425px] right-10">
          <FootballPlayerCardList
            data={reciever4}
            // handleDelete={handleDelete}
          />
        </div>

        <div className="absolute top-[325px]">
          <FootballPlayerCardList
            data={quarterback}
            // handleDelete={handleDelete}
          />
        </div>

        <div className="absolute top-[595px]">
          <FootballPlayerCardList
            data={runningback1}
            // handleDelete={handleDelete}
          />
        </div>
        <div className="absolute top-[595px] right-72">
          <FootballPlayerCardList
            data={runningback2}
            // handleDelete={handleDelete}
          />
        </div>

        <div className="absolute top-64 right-32">
          <FootballPlayerCardList
            data={tightEnd1}
            // handleDelete={handleDelete}
          />
        </div>
        <div className="absolute top-64 left-[603px]">
          <FootballPlayerCardList
            data={tightEnd2}
            // handleDelete={handleDelete}
          />
        </div>

        <div className="absolute top-[460px]">
          <FootballPlayerCardList
            data={fullBack}
            // handleDelete={handleDelete}
          />
        </div>
      </div>
    </div>
  );
}

export default FootballLineup;
