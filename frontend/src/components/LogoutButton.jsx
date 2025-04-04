import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

function LogoutButton({ onClick }) {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
    if (onClick) onClick(); // Close the sidebar on mobile if onClick is provided
  };

  return (
    <button
      onClick={handleLogout}
      className="flex items-center w-full h-full  transition-all duration-400 ease-in-out"
    >
      <svg
        className="w-5 h-5 min-w-[60px]  text-red-500 flex items-center justify-center"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
        />
      </svg>
      <span className="text-base  text-red-500 font-medium whitespace-nowrap">Logout</span>
    </button>
  );
}

export default LogoutButton;