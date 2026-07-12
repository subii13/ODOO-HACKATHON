import { useState, useEffect } from 'react';
import { getAll, create, update } from '../../utils/api';
import { compose, required, number, min } from '../../utils/validate';

function canDispatchTrip(vehicle, driver, cargoWeight) {
  if (!vehicle) return 'Select a vehicle';
  if (!driver) return 'Select a driver';
  if (vehicle.status !== 'Available') return `Vehicle is currently ${vehicle.status}`;
  if (driver.status !== 'Available') return `Driver is currently ${driver.status}`;
  if (new Date(driver.license_expiry) < new Date()) return 'Driver license has expired';
  if (cargoWeight > vehicle.max_load_capacity) {
    return `Cargo weight exceeds vehicle capacity (${vehicle.max_load_capacity}kg)`;
  }
  return '';
}

export default function MainFeature() {
  const [vehicles, setVehicles] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [trips, setTrips] = useState([]);

  const [form, setForm] = useState({
    source: '',
    destination: '',
    vehicle_id: '',
    driver_id: '',
    cargo_weight: '',
    planned_distance: '',
  });
  const [error, setError] = useState('');

  function loadData() {
    setVehicles(getAll('vehicles').filter((v) => v.status === 'Available'));
    setDrivers(getAll('drivers').filter((d) => d.status === 'Available'));
    setTrips(getAll('trips'));
  }

  useEffect(() => {
    loadData();
  }, []);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleCreateAndDispatch(e) {
    e.preventDefault();
    setError('');

    const fieldErrors = {
      source: compose(required)(form.source),
      destination: compose(required)(form.destination),
      vehicle_id: compose(required)(form.vehicle_id),
      driver_id: compose(required)(form.driver_id),
      cargo_weight: compose(required, number, min(1))(form.cargo_weight),
    };
    const firstFieldError = Object.values(fieldErrors).find((e) => e);
    if (firstFieldError) {
      setError(firstFieldError);
      return;
    }

    const vehicle = vehicles.find((v) => v.id === form.vehicle_id);
    const driver = drivers.find((d) => d.id === form.driver_id);
    const cargoWeight = Number(form.cargo_weight);

    const ruleError = canDispatchTrip(vehicle, driver, cargoWeight);
    if (ruleError) {
      setError(ruleError);
      return;
    }

    create('trips', {
      source: form.source,
      destination: form.destination,
      vehicle_id: form.vehicle_id,
      driver_id: form.driver_id,
      cargo_weight: cargoWeight,
      planned_distance: form.planned_distance ? Number(form.planned_distance) : null,
      status: 'Dispatched',
    });

    update('vehicles', vehicle.id, { status: 'On Trip' });
    update('drivers', driver.id, { status: 'On Trip' });

    setForm({
      source: '',
      destination: '',
      vehicle_id: '',
      driver_id: '',
      cargo_weight: '',
      planned_distance: '',
    });
    loadData();
  }

  function handleComplete(trip) {
    update('trips', trip.id, { status: 'Completed' });
    update('vehicles', trip.vehicle_id, { status: 'Available' });
    update('drivers', trip.driver_id, { status: 'Available' });
    loadData();
  }

  function handleCancel(trip) {
    update('trips', trip.id, { status: 'Cancelled' });
    update('vehicles', trip.vehicle_id, { status: 'Available' });
    update('drivers', trip.driver_id, { status: 'Available' });
    loadData();
  }

  return (
    <div className="trips-page">
      <h1>Trip Management</h1>

      <form onSubmit={handleCreateAndDispatch} className="trip-form">
        <input
          name="source"
          placeholder="Source"
          value={form.source}
          onChange={handleChange}
        />
        <input
          name="destination"
          placeholder="Destination"
          value={form.destination}
          onChange={handleChange}
        />

        <select name="vehicle_id" value={form.vehicle_id} onChange={handleChange}>
          <option value="">Select vehicle</option>
          {vehicles.map((v) => (
            <option key={v.id} value={v.id}>
              {v.registration_number} — {v.name} (max {v.max_load_capacity}kg)
            </option>
          ))}
        </select>

        <select name="driver_id" value={form.driver_id} onChange={handleChange}>
          <option value="">Select driver</option>
          {drivers.map((d) => (
            <option key={d.id} value={d.id}>
              {d.name} (license exp: {d.license_expiry})
            </option>
          ))}
        </select>

        <input
          name="cargo_weight"
          type="number"
          placeholder="Cargo weight (kg)"
          value={form.cargo_weight}
          onChange={handleChange}
        />
        <input
          name="planned_distance"
          type="number"
          placeholder="Planned distance (km)"
          value={form.planned_distance}
          onChange={handleChange}
        />

        {error && <p className="form-error">{error}</p>}

        <button type="submit">Create &amp; Dispatch</button>
      </form>

      <h2>Trips</h2>
      <table className="trips-table">
        <thead>
          <tr>
            <th>Route</th>
            <th>Vehicle</th>
            <th>Driver</th>
            <th>Cargo</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {trips.map((t) => {
            const vehicle = getAll('vehicles').find((v) => v.id === t.vehicle_id);
            const driver = getAll('drivers').find((d) => d.id === t.driver_id);
            return (
              <tr key={t.id}>
                <td>{t.source} → {t.destination}</td>
                <td>{vehicle ? vehicle.registration_number : '—'}</td>
                <td>{driver ? driver.name : '—'}</td>
                <td>{t.cargo_weight}kg</td>
                <td>
                  <span className={'status-badge status-' + t.status.toLowerCase()}>
                    {t.status}
                  </span>
                </td>
                <td>
                  {t.status === 'Dispatched' ? (
                    <>
                      <button onClick={() => handleComplete(t)}>Complete</button>
                      <button onClick={() => handleCancel(t)}>Cancel</button>
                    </>
                  ) : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}