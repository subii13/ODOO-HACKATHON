import { useState } from "react";
import VehicleForm from "./VehicleForm";
import VehicleList from "./VehicleList";

function Vehicles() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="page">
      <h1>Vehicles</h1>
      <VehicleForm onAdded={() => setRefreshKey((k) => k + 1)} />
      <VehicleList key={refreshKey} />
    </div>
  );
}

export default Vehicles;
