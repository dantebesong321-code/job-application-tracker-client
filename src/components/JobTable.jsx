import service from "../services/index.services";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

function JobTable(props) {
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
  }

  return (
    <>
      <div className="overflow-auto h-svh">
        <Table className="rounded-b-xl h-1 shadow-2xs border-gray-400">
          <TableHead>
            <TableRow>
              <TableHeadCell>Company</TableHeadCell>
              <TableHeadCell>Role</TableHeadCell>
              <TableHeadCell>Location</TableHeadCell>
              <TableHeadCell>Website</TableHeadCell>
              <TableHeadCell>status</TableHeadCell>
              <TableHeadCell></TableHeadCell>
            </TableRow>
          </TableHead>

          <TableBody className="divide-y">
            {allJobs.map((job) => (
              <TableRow
                key={job._id}
                className="bg-white border-gray-200 dark:bg-gray-50 text-neutral-900"
              >
                <TableCell>{job.company}</TableCell>
                <TableCell>{job.jobRole}</TableCell>
                <TableCell>{job.location}</TableCell>
                <TableCell>{job.website}</TableCell>
                <TableCell>{job.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default JobTable;
