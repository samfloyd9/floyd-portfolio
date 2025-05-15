import ReactDOM from "react-dom";
import { useEffect } from "react";

/** Modal component — displays over entire screen **/
function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
    // Prevent scrolling while modal is open
    document.body.classList.add("overflow-hidden");

    // Close modal when user presses Escape
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // Attach keydown listener
    document.addEventListener("keydown", handleEscape);

    // Cleanup on unmount
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    // Outer wrapper: full screen, centers modal using flex
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose} // Close when clicking on backdrop
    >
      {/* Backdrop: semi-transparent background */}
      <div className="absolute inset-0 bg-gray-300 opacity-80 z-40"></div>

      {/* Modal content container */}
      <div
        className="relative z-50 w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl max-h-[90vh] overflow-auto bg-white p-6 rounded-md shadow-xl"
        onClick={(e) => e.stopPropagation()} // Prevent closing on inner click
      >
        {/* Modal content */}
        <div className="flex flex-col justify-between h-full">
          {children}

          {/* Action buttons */}
          {actionBar && <div className="flex justify-end mt-4">{actionBar}</div>}
        </div>
      </div>
    </div>,
    document.querySelector(".modal-container") // Portal target
  );
}

export default Modal;
