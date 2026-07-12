import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";

import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";

import ProtectedRoute from "./routes/ProtectedRoute";

import MainFeature from "./pages/MainFeature/MainFeature";
import FuelLogs from "./pages/FuelLogs/FuelLogs";
import Maintenance from "./pages/Maintenance/Maintenance";

import Vehicles from "./pages/MainFeature/Vehicles/Vehicles";
import Drivers from "./pages/MainFeature/Drivers/Drivers";

export default function App() {
  return (
    <>
      <Navbar brand="Team Name" />

      <Routes>
        {/* Public Routes */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Protected Routes */}
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />

        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />

        <Route
          path="/trips"
          element={
            <ProtectedRoute>
              <MainFeature />
            </ProtectedRoute>
          }
        />

        <Route
          path="/vehicles"
          element={
            <ProtectedRoute>
              <Vehicles />
            </ProtectedRoute>
          }
        />

        <Route
          path="/drivers"
          element={
            <ProtectedRoute>
              <Drivers />
            </ProtectedRoute>
          }
        />

        <Route
          path="/fuel-logs"
          element={
            <ProtectedRoute>
              <FuelLogs />
            </ProtectedRoute>
          }
        />

        <Route
          path="/maintenance"
          element={
            <ProtectedRoute>
              <Maintenance />
            </ProtectedRoute>
          }
        />
      </Routes>
    </>
  );
}