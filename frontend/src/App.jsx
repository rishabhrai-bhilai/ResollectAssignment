import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider, useAuth } from "./context/AuthContext";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Login from "./pages/Login";
import Portfolio from "./pages/Portfolio";
import Notifications from "./pages/Notifications";
import Notices from "./pages/Notices";
import Auction from "./pages/Auction";
import DataUpload from "./pages/DataUpload";
import ControlPanel from "./pages/ControlPanel";
import UserManagement from "./pages/UserManagement";
import Permissions from "./pages/Permissions";
import Readme from "./pages/Readme";
import ProtectedRoute from "./components/ProtectedRoute";
import Loading from "./components/Loading";

function AppContent() {
  const { isLoading } = useAuth();

  if (isLoading) {
    return <Loading />;
  }

  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route
        path="/*"
        element={
          <ProtectedRoute>
            <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900">
              <Header />
              <div className="flex items-center md:hidden sticky top-0 z-40 bg-white dark:bg-gray-800 px-4 py-6 shadow-md">
                <svg
                  className="w-8 h-8 fill-current flex-shrink-0 text-gray-800 dark:text-gray-200"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z" />
                </svg>
                <span className="ml-2 text-lg font-bold text-gray-800 dark:text-gray-200">
                  resollect
                </span>
              </div>
              <div className="flex flex-1 relative">
                <Sidebar />
                <div className="flex-1 w-full bg-blue-50 dark:bg-gray-800 md:bg-gray-50 dark:md:bg-gray-900 mt-0 md:ml-64 md:mt-16 overflow-auto">
                  <Routes>
                    <Route path="/" element={<Portfolio />} />
                    <Route path="/notifications" element={<Notifications />} />
                    <Route path="/notices" element={<Notices />} />
                    <Route path="/auction" element={<Auction />} />
                    <Route path="/data-upload" element={<DataUpload />} />
                    <Route path="/control-panel" element={<ControlPanel />} />
                    <Route path="/user-management" element={<UserManagement />} />
                    <Route path="/permissions" element={<Permissions />} />
                    <Route path="/readme" element={<Readme />} />
                  </Routes>
                </div>
              </div>
            </div>
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppContent />
      </AuthProvider>
    </Router>
  );
}

export default App;