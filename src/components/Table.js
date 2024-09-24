import { Fragment } from "react";

function Table({ data, config, keyFn, posSelection, teamSelection }) {
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

  const posFilteredData = data.filter((player) =>
    player.position.includes(posSelection.value));

  const teamFilteredData = data.filter((player) =>
    player.team.includes(teamSelection.value));

  const teamFilteredFirst = data
    .filter((player) =>
      player.team.includes(teamSelection.value));

  const posFilteredSecond = teamFilteredFirst.filter((player) =>
      player.position.includes(posSelection.value))

  console.log(posFilteredData);
  console.log(teamFilteredData);
  console.log(posFilteredSecond);
  console.log(posSelection, teamSelection)
  console.log(posSelection.value, teamSelection.value)

  const renderedRows = data.map((rowData) => {
    const renderedCells = config.map((column) => {
      return (
        <td className="text-center" key={column.label}>
          {column.render(rowData)}
        </td>
      );
    });

    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedCells}
      </tr>
    );
  });

  const renderedPositionRows = posFilteredData.map((rowData) => {
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

  const renderedTeamRows = teamFilteredData.map((rowData) => {
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

  const renderedTeamAndPosRows = posFilteredSecond.map((rowData) => {
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

  // const renderedPosAndTeamRows = posFilteredSecond.map((rowData) => {
  //   const renderedPosandTeamCells = config.map((column) => {
  //     return (
  //       <td className="pr-2 text-center" key={column.label}>
  //         {column.render(rowData)}
  //       </td>
  //     );
  //   });

  //   return (
  //     <tr key={keyFn(rowData)} className="border-b">
  //       {renderedPosandTeamCells}
  //     </tr>
  //   );
  // });

  return (
    <table className="table-auto">
      <thead className="bg-gray-200">
        <tr className="border-b-2  border-black">{renderedHeaders}</tr>
      </thead>
      <tbody>
        { ((teamSelection.value === "All Teams") && !(posSelection.value === "All Positions")) && renderedPositionRows }
        { ((teamSelection.value === undefined) && !(posSelection.value === "All Positions")) && renderedPositionRows }


        { (!(teamSelection.value === "All Teams") && (posSelection.value === "All Positions")) && renderedTeamRows }
        { (!(teamSelection.value === "All Teams") && (posSelection.value === undefined)) && renderedTeamRows }


        { (!(teamSelection.value === "All Teams") && !(posSelection.value === "All Positions")) && renderedTeamAndPosRows }


        { ((teamSelection.value === "All Teams") && (posSelection.value === "All Positions")) && renderedRows }
        { ((teamSelection.value === undefined) && (posSelection.value === undefined)) && renderedRows }
        { ((teamSelection.value === "All Teams") && (posSelection.value === undefined)) && renderedRows }
        { ((teamSelection.value === undefined) && (posSelection.value ===  "All Positions")) && renderedRows }
      </tbody>
    </table>
  );
}

export default Table;
