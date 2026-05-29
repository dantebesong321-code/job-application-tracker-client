import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../services/index.services";
import BackButton from "../components/BackButton";

function AddJobPage() {
  const navigate = useNavigate();

  const [jobRole, setJobRole] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [contractType, setContractType] = useState("");
  const [website, setWebsite] = useState("");
  const [note, setNote] = useState("");
  const [interviewType, setInterviewType] = useState("virtual");
  const [status, setStatus] = useState("applied");

  const [favorite, setFavorite] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      jobRole: jobRole,
      company: company,
      location: location,
      contractType: contractType,
      salary: salary,
      website: website,
      status: status,
      favorite: favorite,
    };
    if (interviewType) {
      body.interviewType = interviewType;
    }

    try {
      const response = await service.post("/job", body);
      console.log(response.data);
      navigate("/dashboard/job/jobTable");
    } catch (error) {
      console.log(error.response.data);
    }
  };

  return (
    <div>
      <BackButton />
      <h3 className="mb-5">Add Job</h3>
      <div className="flex justify-center text-md xl:text-sm m-5 min-h-svh">
        <div className="flex flex-col items-center justify-center lg:h-160 xl:h-150 w-100 bg-gray-50 rounded-2xl text-left gap-3">
          <div>
            <br />
          </div>{" "}
          <form onSubmit={handleSubmit}>
            <div className="form-element">
              <label className="font-medium text-gray-600 mt-2">Job Role</label>
              <input
                className="w-full px-2 py-1 border border-stone-400 focus:outline-none focus:bg-gray-100 focus:ring-1 focus:ring-blue-500 rounded-md mb-4"
                type="text"
                placeholder="Job role here"
                value={jobRole}
                onChange={(e) => setJobRole(e.target.value)}
                required
              />
            </div>
            <div className="font-medium text-gray-600 mt-2">
              <label>Company</label>
              <input
                className="w-full px-2 py-1 border border-stone-400 focus:outline-none focus:bg-gray-100 focus:ring-1 focus:ring-blue-500 rounded-md mb-4"
                type="text"
                placeholder="company name"
                value={company}
                onChange={(e) => setCompany(e.target.value)}
              />
            </div>
            <div className="font-medium text-gray-600 mt-2">
              <label>Location</label>
              <input
                className="w-full px-2 py-1 border border-stone-400 focus:outline-none focus:bg-gray-100 focus:ring-1 focus:ring-blue-500 rounded-md mb-4"
                type="text"
                placeholder="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="font-medium text-gray-600 mt-2">
              <label>Salary</label>
              <input
                className="w-full px-2 py-1 border border-stone-400 focus:outline-none focus:bg-gray-100 focus:ring-1 focus:ring-blue-500 rounded-md mb-4"
                type="text"
                placeholder="Input salary"
                value={salary}
                onChange={(e) => setSalary(e.target.value)}
              />
            </div>
            <div className="font-medium text-gray-600 mt-2">
              <label>Website</label>
              <input
                className="w-full px-2 py-1 border border-stone-400 focus:outline-none focus:bg-gray-100 focus:ring-1 focus:ring-blue-500 rounded-md mb-4"
                type="text"
                placeholder="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </div>{" "}
            <hr />
            <br />{" "}
            <div className="flex gap-1  form-element">
              <label>Interview Type</label>
              <select
                className="border border-stone-400 mb-4 rounded-xs"
                value={interviewType}
                onChange={(e) => setInterviewType(e.target.value)}
              >
                <option value="">Select</option>

                <option value="virtual">Virtual</option>

                <option value="in-person">In Person</option>
              </select>{" "}
            </div>{" "}
            <div className="flex gap-1  form-element">
              <label>Contract Type</label>
              <select
                className="border border-stone-400 mb-4 rounded-xs"
                value={contractType}
                onChange={(e) => setContractType(e.target.value)}
              >
                <option value="">Select</option>

                <option value="Permanent contract">Permanent contract</option>

                <option value="Temporal contract">Temporal contract</option>
              </select>{" "}
            </div>{" "}
            <div className="flex gap-1 mb-1 form-element">
              <label>Status</label>
              <select
                className="border border-stone-400 rounded-xs"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <option value="applied">Applied</option>

                <option value="offered">Offered</option>

                <option value="accepted">Accepted</option>

                <option value="interviewing">Interviewing</option>

                <option value="rejected">Rejected</option>
              </select>{" "}
            </div>{" "}
            <div className="form-element">
              <label>
                <input
                  type="checkbox"
                  checked={favorite}
                  onChange={(e) => setFavorite(e.target.checked)}
                />{" "}
                Favorite
              </label>
            </div>
            <br />
            <button
              type="submit"
              className=" text-center bg-violet-500 hover:bg-violet-600 w-full  text-white p-2 rounded-md font-semibold transition mb-7"
            >
              {" "}
              Add Job
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddJobPage;
