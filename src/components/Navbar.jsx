import { Link } from 'react-router-dom';

export default function Navbar({ brand = 'App Name' }) {
  return (
    <header className="navbar">
      <Link to="/" className="brand">{brand}</Link>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>
    </header>
  );
}
