// Import up/down arrow icons for sorting indicators
import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";

// Import the table component and custom sorting hook
import FootballTable from "./FootballTable";
import useSort from "../../hooks/use-sort";

// Main component that wraps a sortable table
function SortableTable(props) {
  // Destructure config and data from props
  const { config, data } = props;

  // Pull sorting logic and state from the custom hook
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  // Map through each column config to add custom sortable header rendering
  const updatedConfig = config.map((column) => {
    // Skip columns that aren't sortable
    if (!column.sortValue) {
      return column;
    }

    // Return updated column with a clickable header that triggers sorting
    return {
      ...column,
      header: () => (
        <th
          className={`${
            column.label === sortBy && "bg-gray-400"
          } cursor-pointer hover:bg-gray-400`}
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex items-center justify-center">
            {/* Display sorting icons next to the label */}
            {getIcons(column.label, sortBy, sortOrder)}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  // Render the base table using sorted data and updated column config
  return <FootballTable {...props} data={sortedData} config={updatedConfig} />;
}

// Helper function that determines which icons to show based on current sort state
function getIcons(label, sortBy, sortOrder) {
  // If the current column isn't the one being sorted, show both faded icons
  if (label !== sortBy) {
    return (
      <div>
        <IoMdArrowDropup />
        <IoMdArrowDropdown />
      </div>
    );
  }

  // If no sort order is currently applied, show both icons
  if (sortOrder === null) {
    return (
      <div>
        <IoMdArrowDropup />
        <IoMdArrowDropdown />
      </div>
    );
  }

  // If sorting ascending, show only up arrow
  if (sortOrder === "asc") {
    return (
      <div>
        <IoMdArrowDropup />
      </div>
    );
  }

  // If sorting descending, show only down arrow
  if (sortOrder === "desc") {
    return (
      <div>
        <IoMdArrowDropdown />
      </div>
    );
  }
}

export default SortableTable;
