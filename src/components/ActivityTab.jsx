import service from "../services/index.services";
import { useEffect, useState } from "react";
import Chart from "./Chart";

function ActivityTab() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get("/activity");

      console.log(response.data);

      setActivities(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "applied":
        return "bg-blue-100 text-blue-700";

      case "interviewing":
        return "bg-yellow-100 text-yellow-700";

      case "offered":
        return "bg-purple-100 text-purple-700";

      case "accepted":
        return "bg-green-100 text-green-700";

      case "rejected":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <div className="space-y-3">
      {activities.map((activity) => (
        <div
          key={activity._id}
          className="border rounded-lg p-4 bg-white shadow-sm"
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-semibold">{activity.jobId?.company}</h3>

              <p className="text-sm text-gray-500">{activity.jobId?.jobRole}</p>
            </div>

            <p
              className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                activity.status,
              )}`}
            >
              {activity.status}
            </p>
          </div>

          <p className="text-xs text-gray-400 mt-2">
            {new Date(activity.createdAt).toLocaleDateString()}
          </p>
        </div>
      ))}
    </div>
  );
}

export default ActivityTab;
