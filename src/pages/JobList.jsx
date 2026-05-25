import service from "../services/index.services";
import { useEffect, useState } from "react";

function JobList() {
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get("/job");
      console.log(response.data);

      // you might need to do something here
    } catch (error) {
      console.log(error);
    }
  };

  //spinner TBD
  //     <h3>loading...</h3>
  //   );
  // }

  return (
    <div>
      <h3>Job list</h3>

      <div className="overflow-auto p-2 rounded-2xl">
        <table className="w-full rounded-2xl border border-b-stone-100">
          <th className="bg-gray-50 border-b-2 border-gray-200 p-3 text-sm font-medium tracking-wide text-neutral-700 text-left">
            No.
          </th>
          <th className=" bg-gray-50 border-b-2 border-gray-200 p-3 text-sm font-medium tracking-wide text-neutral-700 text-left">
            Company Name
          </th>
          <th className=" bg-gray-50 border-b-2 border-gray-200 p-3 text-sm font-medium tracking-wide text-neutral-700 text-left">
            Job Title
          </th>
          <th className="bg-gray-50 border-b-2 border-gray-200  p-3 text-sm font-medium tracking-wide text-neutral-700 text-left">
            Date Applied
          </th>
          <th className="bg-gray-50 border-b-2 border-gray-200 p-3 text-sm font-medium tracking-wide text-neutral-700 text-left">
            Link
          </th>
          <th className="bg-gray-50 border-b-2 border-gray-200 p-3 text-sm font-medium tracking-wide text-neutral-700 text-left">
            Status
          </th>

          <tbody>
            <tr className="bg-white">
              <td className="p-3 text-sm text-olive-700 font-light"></td>
            </tr>
            <tr className="bg-olive-50">
              <td className="p-3 text-sm text-olive-700 font-light"></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default JobList;
