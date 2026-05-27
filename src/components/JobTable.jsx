import { BiEditAlt } from "react-icons/bi";
import service from "../services/index.services";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";
import {
  Dropdown,
  DropdownDivider,
  DropdownHeader,
  DropdownItem,
} from "flowbite-react";
import { Banner, BannerCollapseButton } from "flowbite-react";
import { HiX } from "react-icons/hi";
import SearchBar from "./SearchBar";

function JobTable() {
  const [allJobs, setAllJobs] = useState(null);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.get("/job");
      console.log(response.data);
      setAllJobs(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!allJobs) {
    return <h3>loading...</h3>;
    <Spinner />;
  }

  return (
    <>
      <div className="flex flex-wrap gap-3 justify-center">
        {" "}
        <SearchBar />
      </div>
      <br />
      <div className="flex items-center justify-center bg-stone-200 h-50 rounded-2xl ">
        <h1>Welcome</h1>
      </div>{" "}
      <br />
      <Banner>
        <div className="flex  flex-col justify-between rounded-lg border border-gray-100 bg-white p-4 shadow-sm md:flex-row xl:max-w-9xl dark:border-gray-600 dark:bg-gray-700">
          <div className="mb-3 mr-4 flex flex-col items-start md:mb-0 md:flex-row md:items-center">
            <p className="flex items-center text-sm font-normal text-gray-500 dark:text-gray-400">
              Any new jobs found? Have a go!
            </p>
          </div>

          <Link to={"/dashboard/job"}>
            {" "}
            <button className=" lg:text-xs bg-violet-500 hover:bg-violet-600 w-full  text-white p-2 rounded-md font-semibold transition">
              Add job
            </button>
          </Link>
        </div>
      </Banner>
      <br />
      <div>
        {allJobs.map((job) => (
          <div
            key={job._id}
            className="flex align-middle justify-between w-full flex-wrap m-1 bg-white rounded-md border border-gray-200 p-3 dark:bg-gray-50 hover:shadow-md text-neutral-700"
          >
            <div className="flex-col text-left gap-b-0.5">
              <h5 className="font-bold">{job.jobRole}</h5>
              <div className="text-sm">
                <p>{job.company}</p>
                <div className="flex text-xs mt-3 gap-2.5">
                  <p>{job.location}</p>
                  <p>{job.website}</p>
                </div>
              </div>
            </div>

            <div className=" flex-col justify-between text-sm">
              {" "}
              <p>{job.status}</p> <br />
              <Button className="flex h-8 w-4 text-xs" color="light">
                {" "}
                <Link to={`/dashboard/job/${job._id}`}> {<BiEditAlt />}</Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default JobTable;
