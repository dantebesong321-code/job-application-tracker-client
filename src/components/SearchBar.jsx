import service from "../services/index.services";
import { useEffect, useState } from "react";

function SearchBar() {
  const [allJobs, setAllJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

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

  const filteredJobs = allJobs.filter((job) => {
    const search = searchTerm.toLowerCase();

    return (
      job.company.toLowerCase().includes(search) ||
      job.jobRole.toLowerCase().includes(search)
    );
  });

  if (!allJobs.length) {
    return <h3>loading...</h3>;
  }

  return (
    <div className="overflow-auto w-80">
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="border p-1 rounded-lg w-full"
        />
      </div>
    </div>
  );
}

export default SearchBar;
