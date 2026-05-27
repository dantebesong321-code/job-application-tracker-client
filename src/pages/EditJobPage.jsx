import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import service from "../services/index.services";
import { Badge } from "flowbite-react";

function EditJobPage() {
  const navigate = useNavigate();
  const { jobId } = useParams();

  const [jobRole, setJobRole] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [website, setWebsite] = useState("");
  const [interviewType, setInterviewType] = useState("");
  const [status, setStatus] = useState("");
  const [favorite, setFavorite] = useState(false);

  const [showConfirm, setShowConfirm] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const response = await service.patch(`/job/${jobId}`);

      console.log(response.data);

      setJobRole(response.data.jobRole);
      setCompany(response.data.company);
      setLocation(response.data.location);
      setSalary(response.data.salary);
      setWebsite(response.data.website);
      setInterviewType(response.data.interviewType);
      setStatus(response.data.status);
      setFavorite(response.data.favorite);
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const body = {
      jobRole,
      company,
      location,
      salary,
      website,
      interviewType,
      status,
      favorite,
    };

    try {
      await service.patch(`/job/${jobId}`, body);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };

  const confirmDelete = async () => {
    try {
      await service.delete(`/job/${jobId}`);

      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  //  lg:rounded-tr-none lg:rounded-br-none

  return (
    <div className=" flex justify-center xl:text-sm m-5 min-h-svh">
      <div className="flex flex-col items-center justify-center lg:m-h-150 xl:m-h-160 w-100 bg-gray-50 rounded-2xl text-left gap-3">
        <h2>Edit Job</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-element">
            <label className="font-medium text-gray-600 mt-2">Job Role</label>

            <input
              className="w-full px-2 py-1 border border-stone-400 focus:outline-none focus:bg-gray-100 focus:ring-1 focus:ring-blue-500 rounded-md mb-4"
              type="text"
              placeholder="Job role"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
            />
          </div>
          <div className="form-element">
            <label className="font-medium text-gray-600 mt-2">Company</label>

            <input
              className="w-full px-2 py-1 border border-stone-400 focus:outline-none focus:bg-gray-100 focus:ring-1 focus:ring-blue-500 rounded-md mb-4"
              type="text"
              placeholder="Company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
            />
          </div>
          <div className="form-element">
            <label className="font-medium text-gray-600 mt-2">Location</label>

            <input
              className="w-full px-2 py-1 border border-stone-400 focus:outline-none focus:bg-gray-100 focus:ring-1 focus:ring-blue-500 rounded-md mb-4"
              type="text"
              placeholder="Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="form-element">
            <label className="font-medium text-gray-600 mt-2">Salary</label>

            <input
              className="w-full px-2 py-1 border border-stone-400 focus:outline-none focus:bg-gray-100 focus:ring-1 focus:ring-blue-500 rounded-md mb-4"
              type="text"
              placeholder="Input salary"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
            />
          </div>
          <div className="form-element">
            <label className="font-medium text-gray-600 mt-2">Website</label>

            <input
              className="w-full px-2 py-1 border border-stone-400 focus:outline-none focus:bg-gray-100 focus:ring-1 focus:ring-blue-500 rounded-md mb-4"
              type="text"
              placeholder="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
            />
          </div>{" "}
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
          <div className="flex gap-1 mb-1 form-element">
            <label>Status</label>
            <select
              className="border border-stone-400 rounded-xs"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
            >
              <Badge color="info">
                <option value="applied">Applied</option>
              </Badge>

              <option value="offered">Offered</option>

              <option value="accepted">Accepted</option>

              <option value="interviewing">Interviewing</option>

              <option value="ghosted">Ghosted</option>

              <option value="rejected">Rejected</option>
            </select>{" "}
          </div>{" "}
          <div className="form-element flex gap-1">
            <label className="form-element flex gap-3">
              <input
                type="checkbox"
                checked={favorite}
                onChange={(e) => setFavorite(e.target.checked)}
              />
              Favorite
            </label>
          </div>
          <br />
          <div className="flex gap-2 ">
            <button
              className="bg-neutral-400 hover:bg-zinc-500 w-full  text-white p-2 rounded-md font-semibold transition mb-3"
              type="submit"
            >
              Update
            </button>

            <button
              type="button"
              className="main-delete-btn w-full text-white p-2 rounded-md font-semibold transition mb-3"
              onClick={() => setShowConfirm(true)}
            >
              Delete
            </button>
          </div>
        </form>

        {showConfirm && (
          <div className="modal-overlay">
            <div className="modal-box">
              <h3>Delete Job?</h3>

              <p>This action cannot be undone.</p>

              <div className="modal-actions">
                <button
                  className="cancel-btn"
                  onClick={() => setShowConfirm(false)}
                >
                  Cancel
                </button>

                <button className="confirm-delete-btn" onClick={confirmDelete}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default EditJobPage;
