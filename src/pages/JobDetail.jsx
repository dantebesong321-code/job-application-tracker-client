import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import service from "../services/index.services";

function JobDetail() {
  const { jobId } = useParams();

  const [job, setJob] = useState(null);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get(`/job/${jobId}`);
      console.log(response.data);
      setJob(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // single job activities
  const getActivities = async () => {
    try {
      const response = await service.get(`/activity/job/${jobId}`);

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

  if (!job) {
    // single job activities TBD
    return <h2>Loading...</h2>;
  }

  return (
    <div className="min-h-screen p-5 bg-gray-100">
      <div className="flex justify-between items-start flex-wrap gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">{job.jobRole}</h1>

          <p className="text-lg text-gray-600 mt-1">{job.company}</p>

          <div className="flex gap-4 mt-4 text-sm text-gray-500">
            <p>{job.location}</p>

            <p>{job.salary}</p>
          </div>

          <a
            href={job.website}
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 text-sm mt-3 inline-block"
          >
            Visit Website
          </a>
        </div>

        <div>
          <p
            className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
              job.status,
            )}`}
          >
            {job.status}
          </p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6">
        <h2 className="text-2xl font-bold mb-5">Activity Timeline</h2>

        {activities.length === 0 ? (
          <p>No activities yet.</p>
        ) : (
          <div className="space-y-4">
            {activities.map((activity) => (
              <div
                key={activity._id}
                className="border-l-4 border-violet-400 pl-4 py-2"
              >
                <div className="flex items-center justify-between flex-wrap gap-3">
                  <p
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusColor(
                      activity.status,
                    )}`}
                  >
                    {activity.status}
                  </p>

                  <p className="text-xs text-gray-400">
                    {new Date(activity.createdAt).toLocaleDateString()}
                  </p>
                </div>

                {activity.favorite && (
                  <p className="text-sm text-yellow-600 mt-2">★ Favorite Job</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="mt-5 flex gap-3">
        <Link to={`/dashboard/job/${job._id}`}>
          <button className="bg-violet-500 hover:bg-violet-600 text-white px-4 py-2 rounded-lg">
            Edit Job
          </button>
        </Link>
      </div>
    </div>
  );
}
export default JobDetail;
