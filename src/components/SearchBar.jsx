import { GoSearch } from "react-icons/go";
import service from "../services/index.services";
import { useState } from "react";
import { Label, TextInput } from "flowbite-react";

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
    <div className="max-w-md border bg-neutral-200 hover:border-fuchsia-900 rounded-3xl">
      <form
        className="flex focus:bg-zinc-200 rounded-3xl justify-around items-center focus:outline-none focus:ring-0 p-1"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="w-10"></div>
        <GoSearch />
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
