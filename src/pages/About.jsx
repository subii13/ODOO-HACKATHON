export default function About() {
  return (
    <div className="page">
      <h1>About TransitOps</h1>

      <div className="card mb-4">
        <h2>The Problem</h2>
        <p>
          Logistics companies struggle to track vehicles, drivers, and trips in real time,
          leading to double-bookings, license violations, and poor maintenance tracking.
          Fleet managers feel this pain most directly.
        </p>
      </div>

      <div className="card mb-4">
        <h2>Who It's For</h2>
        <p>
          Fleet managers who need to assign drivers and vehicles to trips, track their
          status live, and stay compliant with maintenance and license rules — without
          relying on manual spreadsheets.
        </p>
      </div>

      <div className="card">
        <h2>Built For</h2>
        <p>Odoo Hackathon 2026</p>
      </div>
    </div>
  );
}
