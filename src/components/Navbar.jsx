import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';

export default function Navbar({ brand = 'App Name' }) {
  const { currentUser, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <header className="navbar">
      <Link to="/" className="brand">{brand}</Link>
      <nav style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/vehicles">Vehicles</Link>
        <Link to="/drivers">Drivers</Link>
        <Link to="/trips">Trips</Link>
        <Link to="/fuel-logs">Fuel Logs</Link>
        <Link to="/maintenance">Maintenance</Link>
        <button onClick={toggleTheme} className="btn btn-secondary">
          {theme === 'dark' ? '☀️ Light' : '🌙 Dark'}
        </button>
        {currentUser && (
          <button onClick={handleLogout} className="btn btn-secondary">Logout</button>
        )}
      </nav>
    </header>
  );
}
