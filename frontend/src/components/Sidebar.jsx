// src/components/Sidebar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { HomeIcon, BellIcon, EnvelopeIcon, ShoppingBagIcon, CloudArrowUpIcon, CogIcon, UserGroupIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import LogoutButton from "./LogoutButton";

function Sidebar() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isClosed, setIsClosed] = useState(false);


  const sidebarLinks = [
    { text: "Portfolio", route: "/", icon: "HomeIcon" },
    { text: "Notifications", route: "/notifications", icon: "BellIcon" },
    { text: "Notices", route: "/notices", icon: "EnvelopeIcon" },
    { text: "Auction", route: "/auction", icon: "ShoppingBagIcon" },
    { text: "Data Upload", route: "/data-upload", icon: "CloudArrowUpIcon" },
    { text: "Control Panel", route: "/control-panel", icon: "CogIcon" },
    { text: "User Management", route: "/user-management", icon: "UserGroupIcon" },
    { text: "Permissions", route: "/permissions", icon: "LockClosedIcon" },
    { text: "Readme", route: "/Readme", icon: "LockClosedIcon" },
  ];

  const iconMap = {
    HomeIcon, BellIcon, EnvelopeIcon, ShoppingBagIcon, CloudArrowUpIcon, CogIcon, UserGroupIcon, LockClosedIcon,
  };

  const toggleSidebar = () => setIsClosed(!isClosed);
  const toggleMobileSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  const closeMenuOnOutsideClick = (e) => {
    if (isSidebarOpen && !e.target.closest("aside") && !e.target.closest("nav")) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("click", closeMenuOnOutsideClick);
    } else {
      document.removeEventListener("click", closeMenuOnOutsideClick);
    }
    return () => document.removeEventListener("click", closeMenuOnOutsideClick);
  }, [isSidebarOpen]);

  return (
    <>
      <nav className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={toggleMobileSidebar}
          className="text-gray-700 dark:text-gray-200 focus:outline-none p-2 rounded-md shadow-md bg-white dark:bg-gray-700"
        >
          <i className={`bx ${isSidebarOpen ? "bx-x" : "bx-menu"} text-3xl`}></i>
        </button>
      </nav>

      <aside
        className={`fixed top-0 left-0 h-screen bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col z-40 shadow-lg
          ${isSidebarOpen ? "translate-x-0 w-64" : "-translate-x-full"}
          md:translate-x-0 md:w-64
          ${isClosed ? "md:w-20" : "md:w-64"}
          transition-all duration-200 ease-in-out`}
      >
        <header className="relative">
          <div className="flex items-center w-full px-4 pt-4 mt-4 pb-3">
            <svg
              className="w-8 h-8 fill-current flex-shrink-0 text-gray-900 dark:text-gray-200"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
            <span
              className={`ml-2 text-lg font-bold text-gray-800 dark:text-gray-200 ${isClosed ? "hidden" : "block"}`}
            >
              resollect
            </span>
          </div>
          <button
            onClick={toggleSidebar}
            className="hidden md:flex absolute top-6 -right-3 w-6 h-6 bg-blue-600 dark:bg-blue-500 text-white rounded-full items-center justify-center shadow-md"
          >
            <i className={`bx bx-chevron-left text-lg ${isClosed ? "rotate-180" : ""}`}></i>
          </button>
        </header>

        <div className="flex-1 overflow-y-auto py-4 mt-4 px-2">
          <ul className="space-y-1">
            {sidebarLinks.map((link) => {
              const IconComponent = iconMap[link.icon];
              return (
                <li key={link.route}>
                  <Link
                    to={link.route}
                    className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                      location.pathname === link.route
                        ? "bg-blue-100 dark:bg-blue-700 text-blue-600 dark:text-blue-200"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                    }`}
                    onClick={() => setIsSidebarOpen(false)}
                  >
                    <IconComponent className="w-6 h-6 min-w-[24px]" />
                    <span className={`ml-3 font-medium ${isClosed ? "hidden" : "block"}`}>
                      {link.text}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="p-4">
          <LogoutButton className="w-full" />
        </div>

        <div className={`hidden md:block p-4 border-t border-gray-200 dark:border-gray-700 text-center ${isClosed ? "hidden" : "block"}`}>
          <p className="text-xs text-gray-500 dark:text-gray-400">
            Powered by <span className="text-blue-800 dark:text-blue-300 font-medium">resollect</span>
          </p>
        </div>
      </aside>

      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" onClick={() => setIsSidebarOpen(false)} />
      )}
    </>
  );
}

export default Sidebar;