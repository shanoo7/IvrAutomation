import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { IoMdClose } from "react-icons/io";

const RightSidebar = ({ isOpen, toggleSidebar }) => {
  return (
    <div
      className={`fixed inset-y-0 right-0 transform dark:text-gray-900 bg-slate-400 sm:bg-slate-500  dark:bg-dark text-light"  ${
        isOpen ? "translate-x-0" : "translate-x-full"
      } transition-transform duration-300 ease-in-out w-64 p-4 z-50`}
    >
      <div className="flex items-center justify-between mb-4 ">
        <h2 className="text-black font-bold text-lg">Menu</h2>
        <button
          onClick={toggleSidebar}
          className="text-gray-700 hover:text-black"
        >
          <IoMdClose className="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <nav className="space-y-2 text-black">
        <Link
          to="/Admin"
          className="block  hover:bg-gray-700  px-3 py-2 rounded-md text-base font-medium"
        >
          Admin
        </Link>
        <Link
          to="/Info"
          className="block  hover:bg-gray-700 px-3 py-2 rounded-md text-base font-medium"
        >
          Info
        </Link>
      </nav>
    </div>
  );
};

// PropTypes validation
RightSidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  toggleSidebar: PropTypes.func.isRequired,
};

export default RightSidebar;
