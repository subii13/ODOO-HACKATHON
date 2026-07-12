function DriverList() {
  const drivers = [
    {
      name: "Alex",
      licenseNumber: "DL123456"
    }
  ];

  return (
    <div>
      <h2>Driver List</h2>

      {drivers.map((driver, index) => (
        <div key={index}>
          {driver.name} - {driver.licenseNumber}
        </div>
      ))}
    </div>
  );
}

export default DriverList;