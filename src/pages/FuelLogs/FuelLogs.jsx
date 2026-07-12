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
    <div>
      <h2>Fuel Logs</h2>
      <form onSubmit={handleSubmit}>
        <select value={tripId} onChange={(e) => setTripId(e.target.value)}>
          <option value="">Select Trip</option>
          {dummyTrips.map((t) => (
            <option key={t.id} value={t.id}>{t.id} - {t.status}</option>
          ))}
        </select>
        <input type="number" placeholder="Amount (Liters)" value={amount} onChange={(e) => setAmount(e.target.value)} />
        <input type="number" placeholder="Cost" value={cost} onChange={(e) => setCost(e.target.value)} />
        <button type="submit">Add Fuel Log</button>
      </form>

      <h3>Existing Logs</h3>
      {logs.length === 0 ? (
        <p>No fuel logs yet — add your first one above.</p>
      ) : (
        <ul>
          {logs.map((log) => (
            <li key={log.id}>Trip {log.tripId}: {log.amountLiters}L, ₹{log.cost}</li>
          ))}
        </ul>
      )}
    </div>
  );
}