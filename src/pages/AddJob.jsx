import { useState } from "react";
import { useNavigate } from "react-router-dom";
import service from "../services/index.services";

const AddJob = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    company: "",
    position: "",
    status: "Applied",
    location: "",
    salary: "",
    notes: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    await API.post("/jobs", form);
    navigate("/");
  };

  return (
    <div className="p-4 max-w-2xl mx-auto">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow">
        <h1 className="text-2xl font-bold mb-4">Add Job</h1>

        <input
          placeholder="Company"
          className="w-full border p-2 mb-3"
          onChange={(e) => setForm({ ...form, company: e.target.value })}
        />

        <input
          placeholder="Position"
          className="w-full border p-2 mb-3"
          onChange={(e) => setForm({ ...form, position: e.target.value })}
        />

        <input
          placeholder="Location"
          className="w-full border p-2 mb-3"
          onChange={(e) => setForm({ ...form, location: e.target.value })}
        />

        <input
          placeholder="Salary"
          className="w-full border p-2 mb-3"
          onChange={(e) => setForm({ ...form, salary: e.target.value })}
        />

        <textarea
          placeholder="Notes"
          className="w-full border p-2 mb-3"
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
        />

        <select
          className="w-full border p-2 mb-3"
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option>Applied</option>
          <option>Interview</option>
          <option>Offer</option>
          <option>Rejected</option>
        </select>

        <button className="bg-blue-600 text-white px-4 py-2 rounded">
          Save Job
        </button>
      </form>
    </div>
  );
};

export default AddJob;
