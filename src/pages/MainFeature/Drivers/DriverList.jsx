import { getAll } from "../../../utils/api";

function DriverList({ refreshKey }) {
  const drivers = getAll("drivers");

  return (
    <div>
      <h2>Driver List</h2>
      {drivers.length === 0 ? (
        <div className="empty-state">No drivers yet — add your first one above.</div>
      ) : (
        <div className="card">
          {drivers.map((d) => (
            <div key={d.id} className="mb-2">
              {d.name} — License: {d.license_number} (exp: {d.license_expiry}) — Status: {d.status}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default DriverList;
