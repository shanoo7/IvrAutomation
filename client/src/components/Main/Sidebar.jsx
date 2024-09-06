import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

const Sidebar = ({ isSidebarOpen, handleToggleSidebar, isRightSidebarOpen, handleToggleRightSidebar }) => {
  const [clickedLink, setClickedLink] = useState('');
  const handleClick = (link) => {
    setClickedLink(link);
  };


  return (
    <div className="flex antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 mt-16 z-10 flex w-80 transform transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} sm:w-64`}
      >
        {/* Sidebar content */}
        <div className="z-10 flex flex-col flex-2 bg-slate-400 sm:bg-slate-500">
          <div className="flex items-center justify-between flex-shrink-0 w-64 p-4">
            {/* Logo */}
            <a href="#">
              <span className="sr-only">Sidebar</span>
              <img src='https://cdn-icons-png.flaticon.com/512/10106/10106515.png' width={"30px"} alt="logo" />
            </a>
            {/* Close btn */}
            <button
              onClick={() => handleToggleSidebar()}
              className="p-1 rounded-lg focus:outline-none focus:ring"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              <span className="sr-only">Close sidebar</span>
            </button>
          </div>
          <nav className="flex flex-col flex-1 w-64 p-4 mt-4">
            <Link
              to={"/promotion-letter"}
              className={`flex items-center space-x-2 mb-5 font-bold text-sm sm:text-base transition-all duration-200 ${clickedLink === 'promotion-letter' ? 'transform scale-105 text-gray-50 bg-green-300 p-1 rounded' : 'bg-transparent'}`}
              onClick={() => handleClick('promotion-letter')}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Letter of Promotion</span>
            </Link>
            <Link
              to={"/offer-letter"}
              className={`flex items-center space-x-2 mb-5 font-bold text-sm sm:text-base transition-all duration-200 ${clickedLink === 'offer-letter' ? 'transform scale-105 text-gray-50 bg-green-300 p-1 rounded' : 'bg-transparent'}`}
              onClick={() => handleClick('offer-letter')}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Offer Letter</span>
            </Link>
            <Link
              to={"/recommendation-form"}
              className={`flex items-center space-x-2 mb-5 font-bold text-sm sm:text-base transition-all duration-200 ${clickedLink === 'recommendation-form' ? 'transform scale-105 text-gray-50 bg-green-300 p-1 rounded' : 'bg-transparent'}`}
              onClick={() => handleClick('recommendation-form')}
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              <span>Recommendation Form</span>
            </Link>
          </nav>
          {/* <div className="flex-shrink-0 p-4">
            <button className="flex items-center space-x-2 text-sm sm:text-base">
              <svg
                aria-hidden="true"
                className="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                />
              </svg>
              <span>Logout</span>
            </button>
          </div> */}
        </div>
      </div>
      {/* sidebar button */}
      <button
        onClick={handleToggleSidebar}
        className="fixed"
      >
        <img src='https://cdn-icons-png.flaticon.com/512/10106/10106515.png' width={"30px"} alt="menu icon" />
        <span className="sr-only">Open menu</span>
      </button>
      <main className="flex-1 text-sm sm:text-base" onClick={() => {
        if (isSidebarOpen) handleToggleSidebar();
        if (isRightSidebarOpen) handleToggleRightSidebar();
      }}>
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;
