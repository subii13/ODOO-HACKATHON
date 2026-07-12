import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import FuelLogs from './pages/FuelLogs/FuelLogs';
import Maintenance from './pages/Maintenance/Maintenance';

export default function App() {
  return (
    <>
      <Navbar brand="Team Name" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/fuel-logs" element={<FuelLogs />} />
        <Route path="/maintenance" element={<Maintenance />} />
      </Routes>
    </>
  );
}
