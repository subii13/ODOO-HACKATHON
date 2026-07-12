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
    <div>
      <h2>Maintenance Records</h2>
      <form onSubmit={handleSubmit}>
        <select value={vehicleId} onChange={(e) => setVehicleId(e.target.value)}>
          <option value="">Select Vehicle</option>
          {dummyVehicles.map((v) => (
            <option key={v.id} value={v.id}>{v.registrationNumber} - {v.type}</option>
          ))}
        </select>
        <input
          type="text"
          placeholder="Description (e.g. Oil change)"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="date"
          value={scheduledAt}
          onChange={(e) => setScheduledAt(e.target.value)}
        />
        <button type="submit">Add Maintenance Record</button>
      </form>

      <h3>Existing Records</h3>
      {records.length === 0 ? (
        <p>No maintenance records yet — add your first one above.</p>
      ) : (
        <ul>
          {records.map((r) => (
            <li key={r.id}>
              {r.description} — Vehicle {r.vehicleId} — Status: {r.status} — Scheduled: {r.scheduledAt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
