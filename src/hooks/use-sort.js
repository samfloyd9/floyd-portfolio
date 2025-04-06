import { useState } from "react";

// Custom hook for handling table sorting logic
// Takes in a dataset and config object describing how to sort it
function useSort(data, config) {
  // Track the current sort direction: "asc", "desc", or null (unsorted)
  const [sortOrder, setSortOrder] = useState(null);

  // Track the currently sorted column label
  const [sortBy, setSortBy] = useState(null);

  // Called when a column header is clicked
  const setSortColumn = (label) => {
    // If clicking a different column, start fresh in ascending order
    if (sortBy && label !== sortBy) {
      setSortOrder("asc");
      setSortBy(label);
      return;
    }

    // Cycle through: null -> asc -> desc -> null again
    if (sortOrder === null) {
      setSortOrder("asc");
      setSortBy(label);
    } else if (sortOrder === "asc") {
      setSortOrder("desc");
      setSortBy(label);
    } else if (sortOrder === "desc") {
      setSortOrder(null);
      setSortBy(null);
    }
  };

  // Default to original data unless sorting is active
  let sortedData = data;

  if (sortBy && sortOrder) {
    // Find the matching column config for the active sort column
    const { sortValue } = config.find((column) => column.label === sortBy);

    // Sort a 'shallow' copy of the data based on the selected column and direction
    sortedData = [...data].sort((a, b) => {
      const valueA = sortValue(a);
      const valueB = sortValue(b);

      const reverseOrder = sortOrder === "asc" ? 1 : -1;

      // Handle missing or invalid values by pushing them to the bottom
      const isMissing = (val) => val === null || val === undefined || Number.isNaN(val);

      if (isMissing(valueA) && isMissing(valueB)) return 0;
      if (isMissing(valueA)) return 1;
      if (isMissing(valueB)) return -1;

      // Use localeCompare for string sorting (case aware)
      if (typeof valueA === "string") {
        return valueA.localeCompare(valueB) * reverseOrder;
      } else {
        return (valueA - valueB) * reverseOrder;
      }
    });
  }

  // Expose sorting state and logic to the component
  return {
    sortOrder,       // "asc", "desc", or null
    sortBy,          // the column currently being sorted
    sortedData,      // the sorted (or unsorted) version of the data
    setSortColumn,   // function to trigger a sort change
  };
}

export default useSort;
