function VehicleList() {
  const vehicles = [
    {
      registrationNumber: "TN01AB1234",
      vehicleName: "Van-05",
      type: "Van",
      capacity: 500
    }
  ];

  return (
    <div>
      <h2>Vehicle List</h2>

      {vehicles.map((vehicle, index) => (
        <div key={index}>
          {vehicle.registrationNumber} - {vehicle.vehicleName}
        </div>
      ))}
    </div>
  );
}

export default VehicleList;