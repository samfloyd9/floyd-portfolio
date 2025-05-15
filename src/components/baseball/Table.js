import { Fragment } from "react";

// Table is a table component with filtering and dynamic rendering
function Table({
  data, // Array of player data to display
  config, // Column configuration array
  keyFn, // Function to generate unique keys for rows
  posSelection, // Selected position filter (optional)
  teamSelection, // Selected team filter (optional)
}) {
  // Render the table headers
  const renderedHeaders = config.map((column) => {
    if (column.header) {
      // Use custom header renderer if provided
      return <Fragment key={column.label}>{column.header()}</Fragment>;
    }

    // Default column header
    return (
      <th className="mx-2" key={column.label}>
        {column.label}
      </th>
    );
  });

  // Fallbacks for filter values (normalize to safe defaults)
  const selectedTeam = teamSelection?.value ?? "All Teams";
  const selectedPos = posSelection?.value ?? "All Positions";

  // Apply all filters (team, position, badge) in a single pass
  const filteredData = data.filter((player) => {
    const teamMatches =
      selectedTeam === "All Teams" || selectedTeam === undefined
        ? true
        : player.franchise.includes(selectedTeam);

    const posMatches =
      selectedPos === "All Positions" || selectedPos === undefined
        ? true
        : player.position.includes(selectedPos);

    // Only include player if they match both selected filters
    return teamMatches && posMatches;
  });

  // Render table rows based on the filtered data
  const renderedRows = filteredData.map((rowData) => {
    const renderedCells = config.map((column) => (
      <td className="text-center bg-white" key={column.label}>
        {column.render(rowData)}
      </td>
    ));

    return (
      <tr key={keyFn(rowData)} className="border-b">
        {renderedCells}
      </tr>
    );
  });

  return (
    <table className="table-auto">
      <thead className="bg-gray-200">
        <tr className="border-b-2 border-black">{renderedHeaders}</tr>
      </thead>
      <tbody>{renderedRows}</tbody>
    </table>
  );
}

export default Table;
