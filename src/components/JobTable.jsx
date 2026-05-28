import { BiEdit } from "react-icons/bi";
import { BiEditAlt } from "react-icons/bi";
import service from "../services/index.services";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import Chart from "./Chart";
import { Spinner } from "flowbite-react";

import ActivityTab from "./ActivityTab";
import {
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
} from "flowbite-react";

import { HiX } from "react-icons/hi";
import SearchBar from "./SearchBar";

function JobTable() {
  const [allJobs, setAllJobs] = useState(null);
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [status, setStatus] = useState("");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get("/job");
      console.log(response.data);
      setAllJobs(response.data);
      setFilteredJobs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!allJobs) {
    return <Spinner size="xl" aria-label="Loading..." className="me-3" light />;
  }

  const getStatusColor = (status) => {
    switch (status) {
      case "applied":
        return "bg-blue-100 text-blue-700";

      case "interviewing":
        return "bg-yellow-100 text-yellow-700";

      case "offered":
        return "bg-green-100 text-green-700";

      case "accepted":
        return "bg-purple-100 text-purple-700";

      case "rejected":
        return "bg-red-100 text-red-700";

      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center">
        {" "}
        <SearchBar allJobs={allJobs} setFilteredJobs={setFilteredJobs} />
      </div>
      <br />
      <h1>Welcome</h1>
      <br />
      <div>
        <div className="flex  flex-col justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm md:flex-row xl:max-w-9xl dark:border-gray-600 dark:bg-gray-700">
          <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
            <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
              Any new jobs found? Have a go!
            </p>
          </div>

          <Link to={"/dashboard/job"}>
            {" "}
            <button className="lg:text-xs bg-violet-500 hover:bg-violet-600 w-full  text-white p-2 rounded-md font-semibold transition">
              Add job
            </button>
          </Link>
        </div>
      </div>{" "}
      {/* grid layout below  */}
      <br />
      <div className="flex justify-center flex-wrap gap-3 ">
        <div className="flex items-center w-sm text-left p-5 justify-center bg-stone-200 h-20 rounded-2xl ">
          Content here
        </div>
        <div className="flex items-center text-left p-5 justify-center bg-stone-200 h-20 w-30 rounded-2xl "></div>
      </div>
      <br /> <br /> <br />
      {/* {Rendering jobs *} */}
      <div>
        <div>
          {filteredJobs.map((job) => (
            <Link to={`/dashboard/job/jobDetail/${job._id}`}>
              <div
                key={job._id}
                className="flex align-middle justify-between w-full flex-wrap m-1 bg-white rounded-md border border-gray-200 p-3 dark:bg-gray-50 hover:shadow-md col-span-2 row-span-2 h-25"
              >
                {" "}
                <div className="flex-col text-neutral-700  text-left gap-b-0.5">
                  <h5 className="font-bold">{job.jobRole}</h5>
                  <div className="text-sm font-medium">
                    <p>{job.company}</p>

                    <div className="flex text-xs text-neutral-400 mt-3 gap-2.5">
                      <p>{job.location}</p>
                      <p>{job.website}</p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-end text-sm">
                  {" "}
                  <p
                    className={`px-2 py-1 rounded-full text-xs font-semibold w-fit ${getStatusColor(
                      job.status,
                    )}`}
                  >
                    {job.status}
                  </p>{" "}
                  <br />
                  <Link to={`/dashboard/job/${job._id}`}>
                    <button className="flex justify-center items-center gap-0.5 bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-md text-xs font-medium w-20">
                      <BiEdit />
                      Edit
                    </button>
                  </Link>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}

export default JobTable;
