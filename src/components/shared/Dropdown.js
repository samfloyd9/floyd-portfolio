import { useState, useEffect, useRef } from "react";
import { GoChevronDown } from "react-icons/go"; // Dropdown arrow
import Panel from "./Panel"; // Custom wrapper for dropdown styling/layout

// Dropdown is a custom component that lets users pick from a list of options.
// It closes when clicking outside and shows the selected label.
function Dropdown({ options, value, onChange }) {
  const [isOpen, setIsOpen] = useState(false); // Track dropdown open state
  const divElement = useRef(); // Reference to the root div for outside click detection

  // Close dropdown when clicking outside of it
  useEffect(() => {
    const handler = (event) => {
      if (!divElement.current) return;

      // If the click target is outside the dropdown, close it
      if (!divElement.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Attach the event listener in capture phase (true)
    document.addEventListener("click", handler, true);

    // Cleanup function to remove event listener
    return () => {
      document.removeEventListener("click", handler, true);
    };
  }, []);

  // Toggle dropdown open/closed
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  // Handle selecting an option
  const handleOptionClick = (option) => {
    setIsOpen(false);
    onChange(option);
  };

  // Render each dropdown option
  const renderedOptions = options.map((option) => {
    return (
      <div
        className="hover:bg-sky-100 rounded cursor-pointer p-1"
        onClick={() => handleOptionClick(option)}
        key={option.value || option.label} // Safe fallback if value is missing
      >
        {option.label}
      </div>
    );
  });

  return (
    <div
      ref={divElement}
      className="relative z-10 w-full text-nowrap lg:w-52"
    >
      {/* Button that toggles the dropdown */}
      <Panel
        className="flex justify-between items-center cursor-pointer w-fit"
        onClick={handleClick}
      >
        {value?.label || options[0].label}
        <GoChevronDown className="text-lg" />
      </Panel>

      {/* Dropdown menu panel */}
      {isOpen && (
        <Panel className="absolute top-full max-h-60 overflow-scroll w-fit">
          {renderedOptions}
        </Panel>
      )}
    </div>
  );
}

export default Dropdown;
