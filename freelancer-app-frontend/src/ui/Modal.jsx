import { HiOutlineX } from "react-icons/hi";

const Modal = ({ open, onClose, title, children }) => {
  return (
    open && (
      <div className="w-full h-screen fixed top-0 left-0 backdrop-blur-sm bg-secondary-800 bg-opacity-30 z-50">
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-secondary-0 p-4 shadow-lg transition-all duration-300 ease-out w-64">
          <div className="flex items-center justify-center border-b border-b-secondary-300 pb-2 mb-6">
            <p className="text-secondary-700 font-bold text-base">{title}</p>
            <button onClick={onClose}>
              <HiOutlineX className="w-5 h-5 text-secondary-500" />
            </button>
          </div>
          {children}
        </div>
      </div>
    )
  );
};

export default Modal;
