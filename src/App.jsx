import "./App.css";
import { Routes, Route } from "react-router";
import { Outlet } from "react-router-dom";

// pages
import HomePage from "./pages/HomePage";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import JobList from "./pages/JobList";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import PrivatePageExample from "./pages/PrivatePageExample";

// components
import Navbar from "./components/Navbar";
import PrivateOnly from "./components/PrivateOnly";

function App() {
  return (
    <div className="min-h-svh">
      <Navbar />

      <br />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profilePage" element={<ProfilePage />} />
        <Route path="/jobList" element={<JobList />} />

        <Route
          path="/dashboard"
          element={
            <PrivateOnly>
              <Dashboard />
            </PrivateOnly>
          }
        />
        <Route
          path="/private-page-example"
          element={
            <PrivateOnly>
              {" "}
              <PrivatePageExample />{" "}
            </PrivateOnly>
          }
        />
        {/* error FE routes here... */}
      </Routes>
    </div>
  );
}

export default App;
