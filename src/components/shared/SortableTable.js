import { IoMdArrowDropup, IoMdArrowDropdown } from "react-icons/io";
import Table from "./Table";
import useSort from "../../hooks/use-sort";

// SortableTable enhances a regular Table component by enabling sortable columns.
function SortableTable(props) {
  const { config, data } = props;

  // useSort manages sorting logic and returns sorted data and the current sort state
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  // Create a new version of config that includes sortable headers
  const updatedConfig = config.map((column) => {
    // Skip non-sortable columns
    if (!column.sortValue) {
      return column;
    }

    // Inject a custom header that handles sorting
    return {
      ...column,
      header: () => (
        <th
          // Highlight the sorted column
          className={`${column.label === sortBy && 'bg-gray-400'} cursor-pointer hover:bg-gray-400`}
          onClick={() => setSortColumn(column.label)} // Trigger sort on click
        >
          <div className="flex items-center justify-center">
            {getIcons(column.label, sortBy, sortOrder)} {/* Up/down arrows */}
            {column.label}
          </div>
        </th>
      ),
    };
  });

  // Render the table with the updated config and sorted data
  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

// Return appropriate arrow icons based on sort state
function getIcons(label, sortBy, sortOrder) {
  // Column is not currently sorted
  if (label !== sortBy || sortOrder === null) {
    return (
      <div>
        <IoMdArrowDropup />
        <IoMdArrowDropdown />
      </div>
    );
  }

  // Sorted in ascending order
  if (sortOrder === "asc") {
    return (
      <div>
        <IoMdArrowDropup />
      </div>
    );
  }

  // Sorted in descending order
  if (sortOrder === "desc") {
    return (
      <div>
        <IoMdArrowDropdown />
      </div>
    );
  }
}

export default SortableTable;
