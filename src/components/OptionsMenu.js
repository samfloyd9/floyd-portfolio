import { useState } from "react";
import { FiSettings } from "react-icons/fi"; // Import settings icon

const OptionsMenu = ({ resetGame }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-14 right-4">
      {/* Options Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-gray-800 text-white p-2 rounded-full shadow-lg hover:bg-gray-700 transition"
      >
        <FiSettings size={24} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-10 right-0 bg-white border shadow-md rounded-md p-3 w-48">
          <ul className="space-y-2">
            <li>
              <button
                onClick={resetGame}
                className="w-full text-left px-3 py-2 hover:bg-red-300 rounded"
              >
                Reset Game
              </button>
            </li>
            <li>
              <button className="w-full text-left px-3 py-2 hover:bg-gray-200 rounded">
                View Rules
              </button>
            </li>
            <li>
              <button className="w-full text-left px-3 py-2 hover:bg-gray-200 rounded">
                Future Options...
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default OptionsMenu;