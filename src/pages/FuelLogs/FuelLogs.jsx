import { useState } from "react";
import { dummyTrips, dummyFuelLogs } from "../../data/dummyData";

export default function FuelLogs() {
  const [logs, setLogs] = useState(dummyFuelLogs);
  const [tripId, setTripId] = useState("");
  const [amount, setAmount] = useState("");
  const [cost, setCost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!tripId || !amount || !cost) {
      alert("Please fill all fields");
      return;
    }
    const newLog = {
      id: Date.now().toString(),
      tripId,
      amountLiters: Number(amount),
      cost: Number(cost),
      loggedAt: new Date().toISOString(),
    };
    setLogs([...logs, newLog]);
    setTripId("");
    setAmount("");
    setCost("");
  };

  return (
    <div className="page">
      <h1>Fuel Logs</h1>

      <div className="card mb-4">
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Trip</label>
            <select value={tripId} onChange={(e) => setTripId(e.target.value)}>
              <option value="">Select Trip</option>
              {dummyTrips.map((t) => (
                <option key={t.id} value={t.id}>{t.id} - {t.status}</option>
              ))}
            </select>
          </div>

          <div className="form-field">
            <label>Amount (Liters)</label>
            <input type="number" placeholder="e.g. 50" value={amount} onChange={(e) => setAmount(e.target.value)} />
          </div>

          <div className="form-field">
            <label>Cost (₹)</label>
            <input type="number" placeholder="e.g. 4500" value={cost} onChange={(e) => setCost(e.target.value)} />
          </div>

          <button type="submit" className="btn btn-primary">Add Fuel Log</button>
        </form>
      </div>

      <h2>Existing Logs</h2>
      {logs.length === 0 ? (
        <div className="empty-state">No fuel logs yet — add your first one above.</div>
      ) : (
        <div className="card">
          <ul>
            {logs.map((log) => (
              <li key={log.id}>Trip {log.tripId}: {log.amountLiters}L, ₹{log.cost}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
