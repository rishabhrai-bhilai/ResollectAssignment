// src/components/Header.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const { theme, toggleTheme } = useTheme();

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="md:block hidden fixed top-0 left-0 right-0 bg-white dark:bg-gray-800 shadow-md z-50">
      <div className="flex justify-between items-center px-6 py-3">
        {/* Logo */}
        <div className="text-esollect-blue font-bold text-xl">
          <p className="text-xs text-gray-500 dark:text-gray-300">
            <span className="text-esollect-blue dark:text-blue-400 text-lg">
              <span className="rounded-2xl px-2 text-white bg-blue-900 mr-1 dark:bg-blue-500">r</span>esollect
            </span>
          </p>
        </div>

        {/* User Info with Dropdown and Theme Toggle */}
        <div className="flex items-center space-x-4 relative">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 focus:outline-none"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 14a6 6 0 110-12 6 6 0 010 12z" clipRule="evenodd" />
              </svg>
            )}
          </button>

          <button
            className="flex items-center space-x-2 focus:outline-none"
            onClick={toggleDropdown}
          >
            <div className="w-8 h-8 rounded-full bg-blue-200 dark:bg-blue-600 flex items-center justify-center">
              <svg
                className="w-6 h-6 text-blue-500 dark:text-blue-200"
                fill="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
              </svg>
            </div>
            <div className="flex flex-col text-left">
              <span className="text-gray-800 dark:text-gray-200 font-medium text-sm">Tushar</span>
              <span className="text-gray-500 dark:text-gray-400 text-xs">tushar@esollect.com</span>
            </div>
            <div className="w-6 h-6 border border-blue-500 dark:border-blue-400 rounded flex items-center justify-center">
              <svg
                className={`w-4 h-4 text-blue-500 dark:text-blue-400 transition-transform ${isDropdownOpen ? "transform rotate-180" : ""}`}
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

          {isDropdownOpen && (
            <div className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-700 rounded-md shadow-lg py-1 z-50">
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-600"
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
                className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-blue-100 dark:hover:bg-blue-600"
                onClick={(e) => {
                  e.preventDefault();
                  navigate("/readme");
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