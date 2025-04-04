import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="md:block hidden fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="text-esollect-blue font-bold text-xl">
          <p className="text-xs text-gray-500">
            <span className="text-esollect-blue text-lg">
              <span className="rounded-2xl px-2 text-white bg-blue-900 mr-1">r</span>esollect
            </span>
          </p>
        </div>

        {/* User Info with Dropdown */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 focus:outline-none"
            onClick={toggleDropdown}
          >
            {/* Avatar */}
            <div className="w-8 h-8 rounded-full bg-blue-200 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-500"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>

            {/* User Name and Email */}
            <div className="flex flex-col text-left">
              <span className="text-gray-800 font-medium text-sm">Tushar</span>
              <span className="text-gray-500 text-xs">tushar@esollect.com</span>
            </div>

            {/* Dropdown Icon */}
            <div className="w-6 h-6 border border-blue-500 rounded flex items-center justify-center">
              <svg
                className={`w-4 h-4 text-blue-500 transition-transform ${isDropdownOpen ? "transform rotate-180" : ""}`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/");
                  setIsDropdownOpen(false);
                }}
              >
                Portfolio
              </a>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/settings");
                  setIsDropdownOpen(false);
                }}
              >
                Read Me
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;