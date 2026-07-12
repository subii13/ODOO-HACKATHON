import { useState } from "react";
import { dummyVehicles, dummyMaintenance } from "../../data/dummyData";

export default function Maintenance() {
  const [records, setRecords] = useState(dummyMaintenance);
  const [vehicleId, setVehicleId] = useState("");
  const [description, setDescription] = useState("");
  const [scheduledAt, setScheduledAt] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!vehicleId || !description || !scheduledAt) {
      alert("Please fill all fields");
      return;
    }
    const newRecord = {
      id: Date.now().toString(),
      vehicleId,
      description,
      status: "pending",
      scheduledAt,
    };
    setRecords([...records, newRecord]);
    setVehicleId("");
    setDescription("");
    setScheduledAt("");
  };

  return (
    <div className="page">
      <h1>Maintenance Records</h1>

      <div className="card mb-4">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Vehicle</label>
            <select value={vehicleId} onChange={(e) => setVehicleId(e.target.value)}>
              <option value="">Select Vehicle</option>
              {dummyVehicles.map((v) => (
                <option key={v.id} value={v.id}>{v.registrationNumber} - {v.type}</option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label>Description</label>
            <input
              type="text"
              placeholder="e.g. Oil change"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="form-field">
            <label>Scheduled Date</label>
            <input
              type="date"
              value={scheduledAt}
              onChange={(e) => setScheduledAt(e.target.value)}
            />
          </div>

          <button type="submit" className="btn btn-primary">Add Maintenance Record</button>
        </form>
      </div>

      <h2>Existing Records</h2>
      {records.length === 0 ? (
        <div className="empty-state">No maintenance records yet — add your first one above.</div>
      ) : (
        <div className="card">
          <ul>
            {records.map((r) => (
              <li key={r.id}>
                {r.description} — Vehicle {r.vehicleId} — Status: {r.status} — Scheduled: {r.scheduledAt}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
