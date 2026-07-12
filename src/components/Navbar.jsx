import { Link } from 'react-router-dom';

export default function Navbar({ brand = 'App Name' }) {
  return (
    <header className="navbar">
      <Link to="/" className="brand">{brand}</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/vehicles">Vehicles</Link>
        <Link to="/drivers">Drivers</Link>
        <Link to="/trips">Trips</Link>
        <Link to="/fuel-logs">Fuel Logs</Link>
        <Link to="/maintenance">Maintenance</Link>
      </nav>
    </header>
  );
}
