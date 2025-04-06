import ReactDOM from "react-dom";
import { useEffect } from "react";

function Modal({ onClose, children, actionBar }) {
  useEffect(() => {
    // Prevent scrolling while modal is open
    document.body.classList.add("overflow-hidden");

    // Handle Escape key press to close modal
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    // Attach keydown listener
    document.addEventListener("keydown", handleEscape);

    // Cleanup listeners and re-enable scrolling when modal unmounts
    return () => {
      document.body.classList.remove("overflow-hidden");
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  return ReactDOM.createPortal(
    <div className="z-50">
      {/* Modal backdrop (gray overlay) */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-gray-300 opacity-80 z-50"
      ></div>

      {/* Modal content wrapper */}
      <div
        className="fixed inset-40 p-10 bg-white z-50"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <div className="flex flex-col justify-between h-full z-50">
          {/* Modal content */}
          {children}

          {/* Action bar (usually buttons) */}
          <div className="flex justify-end z-50">{actionBar}</div>
        </div>
      </div>
    </div>,

    // Render modal into a dedicated container outside root
    document.querySelector(".modal-container")
  );
}

export default Modal;
