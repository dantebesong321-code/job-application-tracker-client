import service from "../services/index.services";
import { useState } from "react";

function SearchBar({ allJobs, setFilteredJobs }) {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (value) => {
    setSearchQuery(value);

    const filteredArr = allJobs.filter((job) =>
      (job.jobRole || "").toLowerCase().includes(value.toLowerCase()),
    );

    setFilteredJobs(filteredArr);
  };

  return (
    <div className="search-bar container">
      <form className="search-box" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
        />{" "}
      </form>{" "}
    </div>
  );
}
export default SearchBar;
