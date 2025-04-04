import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
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
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route
            path="/*"
            element={
              <ProtectedRoute>
                <div className="flex flex-col min-h-screen">
                  <Header />
                  <div className="flex flex-1 relative">
                    <Sidebar />
                    <div className="flex-1 w-full mt-0 md:ml-64 md:mt-16 overflow-auto">
                      <Routes>
                        <Route path="/" element={<Portfolio />} />
                        <Route path="/notifications" element={<Notifications />} />
                        <Route path="/notices" element={<Notices />} />
                        <Route path="/auction" element={<Auction />} />
                        <Route path="/data-upload" element={<DataUpload />} />
                        <Route path="/control-panel" element={<ControlPanel />} />
                        <Route path="/user-management" element={<UserManagement />} />
                        <Route path="/permissions" element={<Permissions />} />
                      </Routes>
                    </div>
                  </div>
                </div>
              </ProtectedRoute>
            }
          />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;