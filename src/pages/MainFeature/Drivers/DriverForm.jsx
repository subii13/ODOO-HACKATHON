import { useState } from "react";
import { create } from "../../../utils/api";

function DriverForm({ onAdded }) {
  const [name, setName] = useState("");
  const [licenseNumber, setLicenseNumber] = useState("");
  const [licenseExpiry, setLicenseExpiry] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [status, setStatus] = useState("Available");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !licenseNumber || !licenseExpiry) {
      alert("Please fill all required fields");
      return;
    }
    create("drivers", {
      name,
      license_number: licenseNumber,
      license_expiry: licenseExpiry,
      contact_number: contactNumber,
      status,
    });
    setName("");
    setLicenseNumber("");
    setLicenseExpiry("");
    setContactNumber("");
    setStatus("Available");
    if (onAdded) onAdded();
  };

  return (
    <div className="card mb-4">
      <h2>Add Driver</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-field">
          <label>Driver Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="e.g. Ravi Kumar"
          />
        </div>
        <div className="form-field">
          <label>License Number</label>
          <input
            type="text"
            value={licenseNumber}
            onChange={(e) => setLicenseNumber(e.target.value)}
            placeholder="e.g. TN-DL-2024-001"
          />
        </div>
        <div className="form-field">
          <label>License Expiry Date</label>
          <input
            type="date"
            value={licenseExpiry}
            onChange={(e) => setLicenseExpiry(e.target.value)}
          />
        </div>
        <div className="form-field">
          <label>Contact Number</label>
          <input
            type="text"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
            placeholder="e.g. 9876543210"
          />
        </div>
        <div className="form-field">
          <label>Status</label>
          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Available</option>
            <option>On Trip</option>
            <option>Off Duty</option>
            <option>Suspended</option>
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Add Driver</button>
      </form>
    </div>
  );
}

export default DriverForm;
