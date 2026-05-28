import service from "../services/index.services";
import { useEffect, useState } from "react";
import { Spinner } from "flowbite-react";

function ActivityCard() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

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
    } finally {
      setLoading(false);
    }
  };

  const appliedCount = activities.filter(
    (activity) => activity.status === "applied",
  ).length;

  const interviewingCount = activities.filter(
    (activity) => activity.status === "interviewing",
  ).length;

  const offeredCount = activities.filter(
    (activity) => activity.status === "offered",
  ).length;

  const acceptedCount = activities.filter(
    (activity) => activity.status === "accepted",
  ).length;

  const rejectedCount = activities.filter(
    (activity) => activity.status === "rejected",
  ).length;

  if (loading) {
    return <Spinner size="xl" aria-label="Loading..." className="me-3" light />;
  }
  // grid grid-cols-2 md:grid-cols-5
  return (
    <div className=" grid grid-cols-2 md:grid-cols-5 gap-4">
      <div className=" bg-white shadow-sm p-4 rounded-xl">
        <h3 className="text-xs text-gray-500">Applied</h3>

        <p className="text-2xl font-bold">{appliedCount}</p>
      </div>

      <div className=" bg-white shadow-sm p-4 rounded-xl">
        <h3 className="text-xs text-gray-500">Interviewing</h3>

        <p className="text-2xl font-bold">{interviewingCount}</p>
      </div>

      <div className=" bg-white shadow-sm  p-4 rounded-xl">
        <h3 className="text-xs text-gray-500">Offered</h3>

        <p className="text-2xl font-bold">{offeredCount}</p>
      </div>

      <div className=" bg-white p-4 shadow-sm rounded-xl">
        <h3 className="text-xs text-gray-500">Accepted</h3>

        <p className="text-2xl font-bold">{acceptedCount}</p>
      </div>

      <div className=" bg-white shadow-sm p-4 rounded-xl">
        <h3 className="text-xs  text-gray-500">Rejected</h3>

        <p className="text-xl font-bold">{rejectedCount}</p>
      </div>
    </div>
  );
}

export default ActivityCard;
