import service from "../services/index.services";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import MySidebar from "../components/MySidebar";

function Dashboard() {
  return (
    <div className="grid-container">
      <div className="side-bar">
        <MySidebar />
      </div>
      <div className="page-area">
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
