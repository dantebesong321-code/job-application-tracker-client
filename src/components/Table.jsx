import service from "../services/index.services";
import { useEffect, useState } from "react";

function Table() {
  return (
    <div className="overflow-auto">
      <table className="w-full rounded-2xl border border-b-stone-100">
        <thead className="bg-gray-50 border-b-2 border-gray-200">
          <th className="p-3 text-sm font-medium tracking-wide text-neutral-700 text-left">
            No.
          </th>
          <th className="p-3 text-sm font-medium tracking-wide text-neutral-700 text-left">
            Company Name
          </th>
          <th className="p-3 text-sm font-medium tracking-wide text-neutral-700 text-left">
            Job Title
          </th>
          <th className="p-3 text-sm font-medium tracking-wide text-neutral-700 text-left">
            Date Applied
          </th>
          <th className="p-3 text-sm font-medium tracking-wide text-neutral-700 text-left">
            Link
          </th>
          <th className="p-3 text-sm font-medium tracking-wide text-neutral-700 text-left">
            Status
          </th>
        </thead>

        <tbody>
          <tr className="bg-white">
            <td className="p-3 text-sm text-olive-700 font-light">
              {jobs.jobRole}
            </td>
          </tr>
          <tr className="bg-olive-50">
            <td className="p-3 text-sm text-olive-700 font-light">
              {activity.applied}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default Table;
