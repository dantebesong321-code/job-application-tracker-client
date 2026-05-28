import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import service from "../services/index.services";
import ActivityTab from "../components/ActivityTab";
import BackButton from "../components/BackButton";

function EditJobPage() {
  const navigate = useNavigate();
  const { jobId } = useParams();

  const [jobRole, setJobRole] = useState("");
  const [company, setCompany] = useState("");
  const [contractType, setContractType] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [website, setWebsite] = useState("");
  const [interviewType, setInterviewType] = useState("");
  const [note, setNote] = useState("");
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
      setContractType(response.data.contractType);
      setLocation(response.data.location);
      setSalary(response.data.salary);
      setWebsite(response.data.website);
      setInterviewType(response.data.interviewType);
      setNote(response.data.note);
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
      contractType,
      location,
      salary,
      website,
      interviewType,
      note,
      status,
      favorite,
    };

    try {
      await service.patch(`/job/${jobId}`, body);
      await service.post("/activity", {
        status: status,
        favorite: favorite,
        jobId: jobId,
      });

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

  return (
    <div className="xl:text-sm m-5 min-h-svh">
      <div className="mb-5 flex flex-wrap">
        <BackButton />
      </div>{" "}
      <h3 className="mb-5">Edit job entry</h3>
      <div className="flex mt-5 flex-col text-md items-center justify-center lg:h-160 xl:h-150 bg-gray-50 rounded-2xl text-left gap-3">
        <form className="p-10 mt-5" onSubmit={handleSubmit}>
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
          <div className="flex gap-1  form-element">
            <label>Contract Type</label>
            <select
              className="border border-stone-400 mb-4 rounded-xs"
              value={interviewType}
              onChange={(e) => setContractType(e.target.value)}
            >
              <option value="">Select</option>

              <option value="Permanent contract">Permanent</option>

              <option value="Temporal contract">Temporal</option>
            </select>{" "}
          </div>{" "}
          <div className="form-element">
            <label className="font-medium text-gray-600 mt-2">note</label>

            <input
              className="w-full px-2 py-1 border border-stone-400 focus:outline-none focus:bg-gray-100 focus:ring-1 focus:ring-blue-500 rounded-md mb-4"
              type="text"
              placeholder="Write something (optional)"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            />
          </div>
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
