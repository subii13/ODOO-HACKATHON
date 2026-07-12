import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function Home() {
  return (
    <div className="page">
      <h1>TransitOps</h1>
      <p>Real-time fleet operations management for logistics companies — from dispatch to delivery.</p>

      <div className="card mb-4">
        <h2>Get Started</h2>
        <p>Manage your fleet from one place: register vehicles and drivers, dispatch trips, and track fuel and maintenance in real time.</p>
        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
          <Link to="/vehicles" className="btn btn-primary">Manage Vehicles</Link>
          <Link to="/drivers" className="btn btn-primary">Manage Drivers</Link>
          <Link to="/trips" className="btn btn-primary">Dispatch a Trip</Link>
        </div>
      </div>

      <div className="card">
        <h2>What TransitOps Does</h2>
        <ul>
          <li>Register and track vehicles and drivers</li>
          <li>Create and dispatch trips with automatic business rule checks</li>
          <li>Prevents double-booking, overweight cargo, and expired-license assignments</li>
          <li>Log fuel usage and maintenance per vehicle</li>
        </ul>
      </div>
    </div>
  );
}
