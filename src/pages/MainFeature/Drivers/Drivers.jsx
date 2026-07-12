import { useState } from "react";
import DriverForm from "./DriverForm";
import DriverList from "./DriverList";

function Drivers() {
  const [refreshKey, setRefreshKey] = useState(0);

  return (
    <div className="page">
      <h1>Drivers</h1>
      <DriverForm onAdded={() => setRefreshKey((k) => k + 1)} />
      <DriverList key={refreshKey} />
    </div>
  );
}

export default Drivers;
