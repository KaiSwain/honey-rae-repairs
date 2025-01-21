import { useEffect, useState } from "react";
import "./form.css";
import { getClickedEmployee } from "../../services/employeeServices";

export const EmployeeForm = ({ currentUser }) => {
  const [employee, setEmployee] = useState({});

  useEffect(() => {
    getClickedEmployee(currentUser.id).then((data) => {
      setEmployee(data[0]);
    });
  }, [currentUser]);

  const handleSave = (event) => {
    event.preventDefault();
    console.log("YO");
  };

  return (
    <form className="profile">
      <h2>Update Profile</h2>
      <fieldset>
        <div className="from-group">
          <label>Specialty:</label>
          <input
            type="text"
            value={employee.specialty}
            onChange={(event) => {
              const copy = { ...employee };
              
              copy.specialty = event.target.value;
              setEmployee(copy);
            }}
            required
            className="form-control"
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="from-group">
          <label>Hourly Rate:</label>
          <input
            type="number"
            value={employee.rate}
            onChange={(event) => {
              const copy = { ...employee };
              copy.rate = event.target.value;
              setEmployee(copy);
            }}
            required
            className="form-control"
          />
        </div>
      </fieldset>

      <fieldset>
        <div className="from-group">
          <button className="btn-form btn-primary" onClick={handleSave}>
            Save Profile
          </button>
        </div>
      </fieldset>
    </form>
  );
};
