import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../services/index.services";

function AddJobPage() {
  const navigate = useNavigate();

  // State fields
  const [jobRole, setJobRole] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [website, setWebsite] = useState("");
  const [interviewType, setInterviewType] = useState("");
  const [favorite, setFavorite] = useState(false);

  // FIXED: Added missing state for the delete modal
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submit triggered!");

    const body = {
      jobRole,
      company,
      location,
      salary,
      website,
      interviewType,
      favorite,
    };

    console.log("Request Body:", body);

    try {
      const response = await service.post("/job", body);
      console.log("Server Response:", response.data);
      navigate("/dashboard/job/jobTable");
    } catch (error) {
      console.error("Submission Error:", error);
    }
  };

  const confirmDelete = async () => {
    try {
      await service.delete(`/job/${jobId}`);
      setShowConfirm(false);
      navigate("/job");
    } catch (error) {
      console.error("Delete Error:", error);
    }
  };

  return (
    <div className="create-job min-h-svh">
      <h3>Add Job</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-element">
          <label>Job Role</label>
          <input
            type="text"
            placeholder="Job role here"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
            required // Optional: prevents empty submissions
          />
        </div>

        <div className="form-element">
          <label>Company</label>
          <input
            type="text"
            placeholder="company name"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </div>

        <div className="form-element">
          <label>Location</label>
          <input
            type="text"
            placeholder="location"
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

        <div className="form-btns">
          <button type="submit">Add Job</button>
        </div>
      </form>

      <button onClick={() => setShowConfirm(true)} className="btn-danger">
        Test Delete Trigger
      </button>

      {showConfirm && (
        <div className="modal-overlay">
          <div className="modal-box">
            <h3>Delete job?</h3>
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

export default AddJobPage;
