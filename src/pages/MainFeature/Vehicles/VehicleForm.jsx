import { useState } from "react";
import { create } from "../../../utils/api";

function VehicleForm({ onAdded }) {
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [maxLoadCapacity, setMaxLoadCapacity] = useState("");
  const [status, setStatus] = useState("Available");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!registrationNumber || !name || !maxLoadCapacity) {
      alert("Please fill all required fields");
      return;
    }
    create("vehicles", {
      registration_number: registrationNumber,
      name,
      type,
      max_load_capacity: Number(maxLoadCapacity),
      status,
    });
    setRegistrationNumber("");
    setName("");
    setType("");
    setMaxLoadCapacity("");
    setStatus("Available");
    if (onAdded) onAdded();
  };

  return (
    <div className="card mb-4">
      <h2>Add Vehicle</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Registration Number</label>
          <input
            type="text"
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
            placeholder="e.g. TN01AB1234"
          />
        </div>
        <div className="form-field">
          <label>Vehicle Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Van-05"
          />
        </div>
        <div className="form-field">
          <label>Vehicle Type</label>
          <input
            type="text"
            value={type}
            onChange={(e) => setType(e.target.value)}
            placeholder="e.g. Van, Truck"
          />
        </div>
        <div className="form-field">
          <label>Maximum Capacity (kg)</label>
          <input
            type="number"
            value={maxLoadCapacity}
            onChange={(e) => setMaxLoadCapacity(e.target.value)}
            placeholder="e.g. 500"
          />
        </div>
        <div className="form-field">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Available</option>
            <option>On Trip</option>
            <option>In Shop</option>
            <option>Retired</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Add Vehicle</button>
      </form>
    </div>
  );
}

export default VehicleForm;
