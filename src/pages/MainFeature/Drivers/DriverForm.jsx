function DriverForm() {
  return (
    <div>
      <h2>Add Driver</h2>

      <input type="text" placeholder="Driver Name" />
      <br /><br />

      <input type="text" placeholder="License Number" />
      <br /><br />

      <input type="text" placeholder="License Category" />
      <br /><br />

      <input type="date" />
      <br /><br />

      <input type="text" placeholder="Contact Number" />
      <br /><br />

      <input type="number" placeholder="Safety Score" />
      <br /><br />

      <select>
        <option>Available</option>
        <option>On Trip</option>
        <option>Off Duty</option>
        <option>Suspended</option>
      </select>

      <br /><br />

      <button>Add Driver</button>
    </div>
  );
}

export default DriverForm;