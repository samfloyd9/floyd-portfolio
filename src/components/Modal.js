import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal({ onClose, children, actionBar }) {

  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);


  return ReactDOM.createPortal(
    <div className="z-50">
      <div onClick={onClose} className="fixed inset-0 bg-gray-300 opacity-80 z-50"></div>
      <div className="fixed inset-40 p-10 bg-white z-50">
        <div className="flex flex-col justify-between h-full z-50">
          {children}
          <div className="flex justify-end z-50">
          {actionBar}
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;