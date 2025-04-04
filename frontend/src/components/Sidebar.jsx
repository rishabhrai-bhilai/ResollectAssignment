import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  HomeIcon,
  BellIcon,
  EnvelopeIcon,
  ShoppingBagIcon,
  CloudArrowUpIcon,
  CogIcon,
  UserGroupIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import LogoutButton from "./LogoutButton";

function Sidebar() {
  const location = useLocation();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile sidebar toggle
  const [isClosed, setIsClosed] = useState(false); // For larger screen sidebar toggle

  // Static variable for sidebar links
  const sidebarLinks = [
    { text: "Portfolio", route: "/", icon: "HomeIcon" },
    { text: "Notifications", route: "/notifications", icon: "BellIcon" },
    { text: "Notices", route: "/notices", icon: "EnvelopeIcon" },
    { text: "Auction", route: "/auction", icon: "ShoppingBagIcon" },
    { text: "Data Upload", route: "/data-upload", icon: "CloudArrowUpIcon" },
    { text: "Control Panel", route: "/control-panel", icon: "CogIcon" },
    { text: "User Management", route: "/user-management", icon: "UserGroupIcon" },
    { text: "Permissions", route: "/permissions", icon: "LockClosedIcon" },
  ];

  // Mapping of icon names to their respective components
  const iconMap = {
    HomeIcon,
    BellIcon,
    EnvelopeIcon,
    ShoppingBagIcon,
    CloudArrowUpIcon,
    CogIcon,
    UserGroupIcon,
    LockClosedIcon,
  };

  const toggleSidebar = () => {
    setIsClosed(!isClosed);
  };

  const toggleMobileSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

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
      {/* Hamburger Menu Button (Visible only on mobile) */}
      <nav className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={toggleMobileSidebar}
          className="text-gray-700 focus:outline-none"
        >
          <i className={`bx ${isSidebarOpen ? "bx-x" : "bx-menu"} text-3xl`}></i>
        </button>
      </nav>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen bg-white border-r border-gray-200 flex flex-col transform transition-transform duration-200 ease-in-out z-40
          ${isSidebarOpen ? "translate-x-0 w-3/4" : "-translate-x-full w-0"}
          md:translate-x-0 md:w-64 md:p-2
          ${isClosed ? "md:w-[88px] md:px-2.5" : "md:w-64 md:px-3.5"}`} // Tailwind classes for width and padding
      >
        {/* Header with Logo */}
        <header className="relative md:hidden">
          <div className="flex items-center w-full px-3 mt-3">
            <svg
              className="w-8 h-8 fill-current flex-shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
            </svg>
            <span
              className={`ml-2 text-sm font-bold transition-opacity duration-200 ${
                isClosed ? "opacity-100" : "opacity-100"
              } md:opacity-100`} // Tailwind for text and opacity
            >
              resollect
            </span>
          </div>
          <i
            className="bx bx-chevron-right hidden md:block absolute top-1/2 -right-[25px] transform -translate-y-1/2 rotate-180 w-[25px] h-[25px] bg-blue-600 text-white flex items-center justify-center rounded-full text-base cursor-pointer"
            onClick={toggleSidebar}
            style={{
              transform: isClosed ? "translateY(-50%)" : "translateY(-50%) rotate(180deg)",
            }}
          ></i>
        </header>

        {/* Menu Bar */}
        <div className="flex-1 overflow-y-auto mt-16">
          <div className="menu">
            <ul className="menu-links">
              {sidebarLinks.map((link) => {
                const IconComponent = iconMap[link.icon];
                return (
                  <li key={link.route} className="h-[45px] mt-[12px] text-gray-700 rounded-md hover:bg-blue-500 hover:text-white flex items-center">
                    <Link
                      to={link.route}
                      className={`flex items-center w-full h-full rounded  transition-all duration-400 ease-in-out`} // Tailwind for link styling
                      onClick={() => {
                        if (isSidebarOpen) setIsSidebarOpen(false);
                      }}
                    >
                      <IconComponent className="w-5 h-5 min-w-[60px] flex items-center justify-center" />
                      <span
                        className={`text-base font-medium  whitespace-nowrap transition-opacity duration-300 ease-in-out ${
                          isClosed ? "opacity-0" : "opacity-100"
                        } md:opacity-100 `} // Tailwind for text
                      >
                        {link.text}
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="bottom-content  text-gray-700 hover:bg-blue-500 hover:text-white mt-auto">
            <li className="h-[50px] mt-[15px] flex items-center">
              <LogoutButton onClick={() => setIsSidebarOpen(false)} />
            </li>
          </div>
        </div>

        {/* Footer */}
        <div className=" hidden md:block px-4 py-4 border-t border-gray-200 flex justify-center items-center">
          <p className="text-xs text-gray-500">
            Powered by{" "}
            <span className="text-esollect-blue text-lg">
              <span className="rounded-2xl px-2 text-white bg-blue-900 mx-1">r</span>esollect
            </span>
          </p>
        </div>
      </aside>

      {/* Overlay for Mobile (when sidebar is open) */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}
    </>
  );
}

export default Sidebar;