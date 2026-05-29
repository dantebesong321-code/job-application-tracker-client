import React, { useEffect, useState } from "react";
import { Bar, Line, Radar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import { Spinner } from "flowbite-react";
import service from "../services/index.services";

function ActivityChart() {
  const [activitiesChart, setActivitiesChart] = useState([]);
  const [loading, setLoading] = useState(true);

  const [dateFilter, setDateFilter] = useState("all");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get("/activity");

      setActivitiesChart(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const filterActivitiesByDate = () => {
    const now = new Date();

    return activitiesChart.filter((activity) => {
      const activityDate = new Date(activity.createdAt);

      const diffInDays = (now - activityDate) / (1000 * 60 * 60 * 24);

      if (dateFilter === "7") return diffInDays <= 7;

      if (dateFilter === "30") return diffInDays <= 30;

      if (dateFilter === "90") return diffInDays <= 90;

      return true;
    });
  };

  const filteredActivities = filterActivitiesByDate();

  const appliedCount = filteredActivities.filter(
    (activity) => activity.status === "applied",
  ).length;

  const interviewingCount = filteredActivities.filter(
    (activity) => activity.status === "interviewing",
  ).length;

  const offeredCount = filteredActivities.filter(
    (activity) => activity.status === "offered",
  ).length;

  const acceptedCount = filteredActivities.filter(
    (activity) => activity.status === "accepted",
  ).length;

  const rejectedCount = filteredActivities.filter(
    (activity) => activity.status === "rejected",
  ).length;

  if (loading) {
    return <Spinner size="xl" aria-label="Loading..." className="me-3" light />;
  }

  return (
    <div className="rounded-lg border-gray-100 p-4 overflow-hidden w-lg">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold text-gray-700">Activity Analytics</h3>

        <select
          value={dateFilter}
          onChange={(e) => setDateFilter(e.target.value)}
          className="border border-gray-300 rounded-md px-3 py-1 text-xs"
        >
          <option value="all">All Time</option>
          <option value="7">Last 7 Days</option>
          <option value="30">Last 30 Days</option>
          <option value="90">Last 90 Days</option>
        </select>
      </div>

      <Line
        data={{
          labels: [
            "Applied",
            "Interviewing",
            "Offered",
            "Accepted",
            "Rejected",
          ],

          datasets: [
            {
              label: "Applications",

              data: [
                appliedCount,
                interviewingCount,
                offeredCount,
                acceptedCount,
                rejectedCount,
              ],

              backgroundColor: "rgba(139, 92, 246, 0.2)",

              borderColor: "rgb(139, 92, 246)",

              borderWidth: 2,
            },
          ],
        }}
        options={{
          responsive: true,

          plugins: {
            legend: {
              display: true,
            },
          },

          scales: {
            r: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
}

export default ActivityChart;
