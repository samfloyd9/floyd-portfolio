import Button from "./Button";
import { useState } from "react";

// SearchBar is a reusable input form with a label, placeholder, and built-in "clear" button.
// It calls onSubmit(term) when submitted, and resets the input after submission.
function SearchBar({ onSubmit, label, placeholder }) {
  const [term, setTerm] = useState(""); // Track the input value

  // Submit handler — triggered by form submit or search button
  const handleFormSubmit = (event) => {
    event.preventDefault();        // Prevent page reload
    onSubmit(term);                // Pass search term to parent
    setTerm("");                   // Clear input field
  };

  // Input change handler — update state on user input
  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  return (
    <div className="flex flex-row">
      <form onSubmit={handleFormSubmit} className="flex flex-col w-full">
        {/* Search label - customizable via props */}
        <label className="font-bold">
          {label}
        </label>

        {/* Input and button row */}
        <div className="flex flex-row gap-2 items-center">
          {/* Input container with X-clear button positioned inside */}
          <div className="relative w-full">
            <input
              value={term}
              onChange={handleChange}
              className="border border-solid border-gray-300 rounded-lg p-2 pr-8 w-full"
              placeholder={placeholder}
              aria-label={label}
            />

            {/* "X" button (clear) — only shows when there's input */}
            {term && (
              <button
                type="button"
                onClick={() => setTerm("")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-black text-sm"
                aria-label="Clear search input"
              >
                ✖
              </button>
            )}
          </div>

          {/* Search button — disabled when input is empty or just whitespace */}
          <Button
            className="w-fit mt-2"
            onClick={handleFormSubmit}
            primary
            disabled={term.trim() === ""}
          >
            Search
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
