import { Fragment } from "react";

function Table({
  data,
  config,
  keyFn,
  posSelection,
  teamSelection,
  unitSelection,
}) {
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }
    return (
      <th className="mx-2" key={column.label}>
        {column.label}
      </th>
    );
  });

  const offFilteredData = data.filter((player) => player.unit.includes("OFF"));

  const defFilteredData = data.filter((player) => player.unit.includes("DEF"));

  console.log(defFilteredData);

  const offPosFilteredData = offFilteredData.filter((player) =>
    player.position.includes(posSelection.value)
  );

  const defPosFilteredData = defFilteredData.filter((player) =>
    player.position.includes(posSelection.value)
  );

  const offTeamFilteredData = offFilteredData.filter((player) =>
    player.team.includes(teamSelection.value)
  );

  const defTeamFilteredData = defFilteredData.filter((player) =>
    player.team.includes(teamSelection.value)
  );

  const offTeamFilteredFirst = offFilteredData.filter((player) =>
    player.team.includes(teamSelection.value)
  );

  const offPosFilteredSecond = offTeamFilteredFirst.filter((player) =>
    player.position.includes(posSelection.value)
  );

  const defTeamFilteredFirst = defFilteredData.filter((player) =>
    player.team.includes(teamSelection.value)
  );

  const defPosFilteredSecond = defTeamFilteredFirst.filter((player) =>
    player.position.includes(posSelection.value)
  );

  // console.log(posFilteredData);
  // console.log(teamFilteredData);
  // console.log(posFilteredSecond);
  // console.log(posSelection, teamSelection)
  // console.log(posSelection.value, teamSelection.value)

  // const renderedRows = data.map((rowData) => {
  //   const renderedCells = config.map((column) => {
  //     return (
  //       <td className="text-center" key={column.label}>
  //         {column.render(rowData)}
  //       </td>
  //     );
  //   });

  //   return (
  //     <tr key={keyFn(rowData)} className="border-b">
  //       {renderedCells}
  //     </tr>
  //   );
  // });

  const renderedOffensiveRows = offFilteredData.map((rowData) => {
    const renderedOffensiveCells = config.map((column) => {
      return (
        <td className="text-center" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedOffensiveCells}
      </tr>
    );
  });

  const renderedDefensiveRows = defFilteredData.map((rowData) => {
    const renderedDefensiveCells = config.map((column) => {
      return (
        <td className="text-center" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedDefensiveCells}
      </tr>
    );
  });

  // ---------------------------------------------------------------------------------------------------------

  const renderedOffPositionRows = offPosFilteredData.map((rowData) => {
    const renderedPosCells = config.map((column) => {
      return (
        <td className="text-center" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedPosCells}
      </tr>
    );
  });

  const renderedDefPositionRows = defPosFilteredData.map((rowData) => {
    const renderedPosCells = config.map((column) => {
      return (
        <td className="text-center" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedPosCells}
      </tr>
    );
  });

  // ---------------------------------------------------------------------------------------------------------

  const renderedOffTeamRows = offTeamFilteredData.map((rowData) => {
    const renderedTeamCells = config.map((column) => {
      return (
        <td className="text-center" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedTeamCells}
      </tr>
    );
  });

  const renderedDefTeamRows = defTeamFilteredData.map((rowData) => {
    const renderedTeamCells = config.map((column) => {
      return (
        <td className="text-center" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedTeamCells}
      </tr>
    );
  });

  // ---------------------------------------------------------------------------------------------------------

  const renderedOffTeamAndPosRows = offPosFilteredSecond.map((rowData) => {
    const renderedTeamandPosCells = config.map((column) => {
      return (
        <td className="text-center" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedTeamandPosCells}
      </tr>
    );
  });

  const renderedDefTeamAndPosRows = defPosFilteredSecond.map((rowData) => {
    const renderedTeamandPosCells = config.map((column) => {
      return (
        <td className="text-center" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedTeamandPosCells}
      </tr>
    );
  });

  // ---------------------------------------------------------------------------------------------------------

  return (
    <>
      {(unitSelection.value === "OFF") && (
        <table className="table-auto">
          <thead className="bg-gray-200">
            <tr className="border-b-2  border-black">{renderedHeaders}</tr>
          </thead>
          <tbody>
            <>
              {teamSelection.value === "All Teams" &&
                !(posSelection.value === "All Positions") &&
                renderedOffPositionRows}

              {teamSelection.value === undefined &&
                !(posSelection.value === "All Positions") &&
                renderedOffPositionRows}

              {!(teamSelection.value === "All Teams") &&
                posSelection.value === "All Positions" &&
                renderedOffTeamRows}
              {!(teamSelection.value === "All Teams") &&
                posSelection.value === undefined &&
                renderedOffTeamRows}

              {!(teamSelection.value === "All Teams") &&
                !(posSelection.value === "All Positions") &&
                renderedOffTeamAndPosRows}

              {teamSelection.value === "All Teams" &&
                posSelection.value === "All Positions" &&
                renderedOffensiveRows}
              {teamSelection.value === undefined &&
                posSelection.value === undefined &&
                renderedOffensiveRows}
              {teamSelection.value === "All Teams" &&
                posSelection.value === undefined &&
                renderedOffensiveRows}
              {teamSelection.value === undefined &&
                posSelection.value === "All Positions" &&
                renderedOffensiveRows}
            </>
          </tbody>
        </table>
      )}

      {(unitSelection.value === "DEF") && (
        <table className="table-auto">
          <thead className="bg-gray-200">
            <tr className="border-b-2  border-black">{renderedHeaders}</tr>
          </thead>
          <tbody>
            <>
              {teamSelection.value === "All Teams" &&
                !(posSelection.value === "All Positions") &&
                renderedDefPositionRows}

              {teamSelection.value === undefined &&
                !(posSelection.value === "All Positions") &&
                renderedDefPositionRows}

              {!(teamSelection.value === "All Teams") &&
                posSelection.value === "All Positions" &&
                renderedDefTeamRows}
              {!(teamSelection.value === "All Teams") &&
                posSelection.value === undefined &&
                renderedDefTeamRows}

              {!(teamSelection.value === "All Teams") &&
                !(posSelection.value === "All Positions") &&
                renderedDefTeamAndPosRows}

              {teamSelection.value === "All Teams" &&
                posSelection.value === "All Positions" &&
                renderedDefensiveRows}
              {teamSelection.value === undefined &&
                posSelection.value === undefined &&
                renderedDefensiveRows}
              {teamSelection.value === "All Teams" &&
                posSelection.value === undefined &&
                renderedDefensiveRows}
              {teamSelection.value === undefined &&
                posSelection.value === "All Positions" &&
                renderedDefensiveRows}
            </>
          </tbody>
        </table>
      )}
    </>
  );
}

export default Table;
