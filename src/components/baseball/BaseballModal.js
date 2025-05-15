// components/Modal.js
import ReactDOM from 'react-dom';

const BaseballModal = ({ onClose, actionBar, children }) => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl shadow-xl relative max-w-3xl w-full">
        {children}
        <div className="mt-4">{actionBar}</div>
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
        >
          ✕
        </button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default BaseballModal;