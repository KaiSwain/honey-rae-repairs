import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getClickedEmployee } from "../../services/employeeServices";

export const EmployeeDetails = () => {
  const [employee, setEmployee] = useState({});

  const { employeeId } = useParams();

  console.log(employeeId);

  useEffect(() => {
    getClickedEmployee(employeeId).then((data) => setEmployee(data[0]));
  }, [employeeId]);











//   if (clickedEmployee) {
//     const clickedEmployeeDetails = clickedEmployee.filter(
//       (employee) => employee.id == id
//     );

return <div className="employee">
<header className="employees-header">{employee.user?.fullName}</header>
<div>
    <span className="employee-info">Email : </span>
    {employee.user?.email}
</div>
<div>
    <span className="employee-info">Specialty :</span>
    {employee.specialty}
</div>

</div>
  }

