import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { IoMdClose, IoMdArrowDropdown } from "react-icons/io";
import { FaBarsStaggered } from "react-icons/fa6";
import image from "../assets/logo.jpg";

const Navbar = ({ isSidebarOpen, handleToggleSidebar }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    if (isSidebarOpen) {
      handleToggleSidebar(); 
    }
    setIsOpen(!isOpen);
  };

  const toggleDropdown = (e) => {
    e.preventDefault(); 
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 sticky top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex">
              <img
                className="h-8 w-8 m-3 rounded"
                src={image}
                alt="Ten-Automation"
              />
              <Link to="/" className="text-white font-bold text-xl m-3">
                TEN-Automation
              </Link>
            </div>
          </div>
          <div className="hidden md:flex items-center ml-auto space-x-4">
            <Link
              to="/Info"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Info
            </Link>
            <Link
              to="/CoursesData"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              Courses
            </Link>
            <Link
              to="/pap"
              className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
            >
              PAP
            </Link>
            <div className="relative flex items-center">
              <Link
                to="/Admin"
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
              >
                Admin
              </Link>
              <button
                onClick={toggleDropdown}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium focus:outline-none"
              >
                <IoMdArrowDropdown
                  className={`transition-transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
              {isDropdownOpen && (
                <div
                  className="absolute top-full right-0 mt-1 w-48 bg-gray-700 rounded-md shadow-lg"
                  
                >
                  <Link
                    to="/Admin/Call"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                  >
                    Call
                  </Link>
                  <Link
                    to="/Admin/Message"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                  >
                    Message
                  </Link>
                  <Link
                    to="/Admin/Details"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                  >
                    Details
                  </Link>
                  <Link
                    to="/Admin/acceptance-page"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                  >
                    AcceptancePage
                  </Link>
                  <Link
                    to="/Admin/StudentData"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                  >
                    Student Data
                  </Link>
                  <Link
                    to="/Admin/DocumentUpload"
                    className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                  >
                    DocumentUpload
                  </Link>
                </div>
              )}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <IoMdClose className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <FaBarsStaggered className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-gray-800 transform ${
          isOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-40`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-white font-bold text-lg">Menu</h2>
            <button
              onClick={toggleMenu}
              className="text-gray-400 hover:text-white"
            >
              <IoMdClose className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Link
            to="/Info"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Info
          </Link>
          <Link
            to="/CoursesData"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Courses
          </Link>
          <Link
            to="/pap"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            PAP
          </Link>
          <div className="relative" >
            <div className="flex items-center justify-between">
              <Link
                to="/Admin"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Admin
              </Link>
              <button
                onClick={toggleDropdown}
                className="text-gray-300 hover:bg-gray-700 hover:text-white px-2 py-2 rounded-md text-sm font-medium focus:outline-none"
              >
                <IoMdArrowDropdown
                  className={`transition-transform ${
                    isDropdownOpen ? "rotate-180" : "rotate-0"
                  }`}
                  aria-hidden="true"
                />
              </button>
            </div>
            {isDropdownOpen && (
              <div className="mt-2 space-y-1">
                <Link
                  to="/Admin/Call"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                >
                  Call
                </Link>
                <Link
                  to="/Admin/Message"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                >
                  Message
                </Link>
                <Link
                  to="/Admin/Details"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                >
                  Details
                </Link>
                <Link
                  to="/Admin/AcceptancePage"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                >
                  AcceptancePage
                </Link>
                <Link
                  to="/Admin/StudentData"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                >
                  Student Data
                </Link>
                <Link
                  to="/Admin/DocumentUpload"
                  className="block px-4 py-2 text-sm text-gray-300 hover:bg-gray-600 hover:text-white"
                >
                  DocumentUpload
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-30 md:hidden"
          onClick={toggleMenu}
        />
      )}
    </nav>
  );
};

export default Navbar;
