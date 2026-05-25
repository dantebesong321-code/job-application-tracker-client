import service from "../services/index.services";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import Table from "../components/Table";

function Dashboard() {
  const [dataOnlyForLoggedUsers, setData] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      // call a private route here...
      const response = await service.get("/job");
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // loading handler here
  if (!dataOnlyForLoggedUsers) {
    return <h3>loading...</h3>;
  }

  return (
    <div className="bg-gray-50 min-h-svh">
      <div>
        <h3>Welcome </h3>
        <div className="page-area">
          <Outlet />
        </div>
        {dataOnlyForLoggedUsers.username}
      </div>
    </div>
  );
}

export default Dashboard;
