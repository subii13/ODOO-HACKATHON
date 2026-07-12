import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebase";

export default function Navbar({ brand = "App Name" }) {

  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <header className="navbar">
      <Link to="/" className="brand">{brand}</Link>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>

        <button onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </header>
  );
}