import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../services/index.services";

function AddJobPage() {
  const navigate = useNavigate();

  const [jobRole, setJobRole] = useState("");
  const [company, setCompany] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [website, setWebsite] = useState("");
  const [interviewType, setInterviewType] = useState("");
  const [status, setStatus] = useState("");
  const [favorite, setFavorite] = useState(false);

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
      const response = await service.post("/job", body);

      console.log(response.data);

      navigate("/job");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="create-job">
      <h3>Add Job</h3>

      <form onSubmit={handleSubmit}>
        <div className="form-element">
          <label>Job Role</label>

          <input
            type="text"
            placeholder="Job role here"
            value={jobRole}
            onChange={(e) => setJobRole(e.target.value)}
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
          <label>Status</label>

          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option value="pending">Pending</option>
            <option value="offered">Offered</option>
            <option value="accepted">Accepted</option>
            <option value="interviewing">Interviewing</option>
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
          <button type="submit">Add Job</button>
        </div>
      </form>
    </div>
  );
}

export default AddJobPage;
