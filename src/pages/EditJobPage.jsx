import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import service from "../services/index.services";

function EditJob() {
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
      const response = await service.get(`/job/${jobId}`);

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
      await service.put(`/job/${jobId}`, body);

      navigate("/job");
    } catch (error) {
      console.log(error);
    }
  };

  const confirmDelete = async () => {
    try {
      await service.delete(`/job/${jobId}`);

      navigate("/job");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-job">
      <h3>Edit Job</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-element">
          <label>Job Role</label>

          <input
            type="text"
            placeholder="Job role"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
          />
        </div>

        <div className="form-element">
          <label>Company</label>

          <input
            type="text"
            placeholder="Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="form-element">
          <label>Location</label>

          <input
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <div className="form-element">
          <label>Salary</label>

          <input
            type="text"
            placeholder="Input salary"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
          />
        </div>

        <div className="form-element">
          <label>Website</label>

          <input
            type="text"
            placeholder="url"
            value={website}
            onChange={(e) => setWebsite(e.target.value)}
          />
        </div>

        <div className="form-element">
          <label>Interview Type</label>

          <select
            value={interviewType}
            onChange={(e) => setInterviewType(e.target.value)}
          >
            <option value="">Select</option>

            <option value="virtual">Virtual</option>

            <option value="in-person">In Person</option>
          </select>
        </div>

        <div className="form-element">
          <label>Status</label>

          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">Pending</option>

            <option value="offered">Offered</option>

            <option value="accepted">Accepted</option>

            <option value="interviewing">Interviewing</option>

            <option value="ghosted">Ghosted</option>

            <option value="rejected">Rejected</option>
          </select>
        </div>

        <div className="form-element">
          <label>
            <input
              type="checkbox"
              checked={favorite}
              onChange={(e) => setFavorite(e.target.checked)}
            />
            Favorite
          </label>
        </div>

        <br />

        <div className="form-btns">
          <button type="submit">Update</button>

          <button
            type="button"
            className="main-delete-btn"
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
  );
}

export default EditJob;
