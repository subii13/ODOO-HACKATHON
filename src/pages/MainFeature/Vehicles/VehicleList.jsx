import { getAll } from "../../../utils/api";

function VehicleList({ refreshKey }) {
  const vehicles = getAll("vehicles");

  return (
    <div>
      <h2>Vehicle List</h2>
      {vehicles.length === 0 ? (
        <div className="empty-state">No vehicles yet — add your first one above.</div>
      ) : (
        <div className="card">
          {vehicles.map((v) => (
            <div key={v.id} className="mb-2">
              {v.registration_number} — {v.name} ({v.type}, max {v.max_load_capacity}kg) — Status: {v.status}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default VehicleList;
