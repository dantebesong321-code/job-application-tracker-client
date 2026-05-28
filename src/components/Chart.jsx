import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";

function Chart({ activities = [] }) {
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

  return (
    <div>
      <div className="flex-col justify-center flex-wrap gap-3">
        <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm md:flex-row dark:border-gray-600  dark:bg-gray-700">
          <Doughnut
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

                  borderWidth: 2,
                },
              ],
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Chart;
