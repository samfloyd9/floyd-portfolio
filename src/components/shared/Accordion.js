import { useState } from "react";
import { GoChevronDown, GoChevronLeft } from "react-icons/go";

// Accordion displays a list of collapsible items.
// Only one item can be expanded at a time.
// (Props) - items: array of objects with `id`, `label`, and `content`
function Accordion({ items }) {
  // Track the index of the currently expanded item (-1 means none are open)
  const [expandedIndex, setExpandedIndex] = useState(-1);

  // Handles click on a header row
  const handleClick = (nextIndex) => {
    // Collapse the current item if it's already open, otherwise open the clicked one
    if (expandedIndex === nextIndex) {
      setExpandedIndex(-1);
    } else {
      setExpandedIndex(nextIndex);
    }
  };

  // Loop through each item and render its header and if expanded render content
  const renderedItems = items.map((item, index) => {
    const isExpanded = index === expandedIndex;

    // Only show the content section if the current item is expanded
    const content = isExpanded && (
      <div className="border-b p-5">{item.content}</div>
    );

    // Toggle between chevron icons based on expanded state
    const icon = (
      <span>{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
    );

    return (
      <div key={item.id}>
        {/* Accordion header */}
        <div
          className="flex p-3 justify-between bg-gray-50 border-b items-center cursor-pointer"
          onClick={() => handleClick(index)}
        >
          {item.label}
          {icon}
        </div>

        {/* Accordion body (if expanded) */}
        {content}
      </div>
    );
  });

  // Outer container with rounded top and borders
  return <div className="border-x border-t rounded">{renderedItems}</div>;
}

export default Accordion;
