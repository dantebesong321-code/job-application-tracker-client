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
import AddJobPage from "./pages/AddJobPage";
import EditJobPage from "./pages/EditJobPage";
import DocFooter from "./components/DocFooter";
import NotFoundPage from "./pages/NotFoundPage";
import JobTable from "./components/JobTable";
import JobDetail from "./pages/JobDetail";

// components
import Navbar from "./components/Navbar";
import PrivateOnly from "./components/PrivateOnly";
import MyNavbar from "./components/MyNavbar";

function App() {
  return (
    <>
      {/* <MyNavbar /> */}
      <Navbar />

      <div className="min-h-svh">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          //* all pages included in privateOnly
          <Route
            path="/dashboard"
            element={
              <PrivateOnly>
                {" "}
                <Dashboard />
              </PrivateOnly>
            }
          >
            <Route index element={<JobList />} />
            <Route path={"job/jobTable"} element={<JobTable />} />
            <Route path={"job/jobList"} element={<JobList />} />
            <Route path={"job/jobDetail/:jobId"} element={<JobDetail />} />
            <Route path={"user/profilePage"} element={<ProfilePage />} />
            <Route path="job" element={<AddJobPage />} />
            <Route path={"job/:jobId"} element={<EditJobPage />} />
          </Route>
          <Route path={"*"} element={<NotFoundPage />} />
        </Routes>
      </div>

      <DocFooter />
    </>
  );

  // <PrivateOnly>
  //   {" "}
  //   <PrivatePageExample />{" "}
  // </PrivateOnly>;
  {
    /* error FE routes here... */
  }
}

export default App;
