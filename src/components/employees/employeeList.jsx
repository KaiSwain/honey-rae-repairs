import { getAllEmployees } from "../../services/employeeServices";
import { useEffect, useState } from "react";
import { User } from "../users/user";
import "./employeeList.css";
import { Link } from "react-router-dom";
export const EmployeeList = () => {
    const [employees, setEmployees] = useState([]); //employees is empty until we set it
    //when we do set, React will rerender the data that changed
    useEffect(() => {
        getAllEmployees().then((employeesArray) => {
        setEmployees(employeesArray);
        });
    }, []); //a loop would happen if i madde employees a dependency array because
    // if dependency gets updated it will run the useeffect again, which will updtate the array 
    //even if its with the same info forever.
    
    return (
        <div className="employees">
        {employees.map((employee) => {
            return <Link to={`/employees/${employee.userId}`} key={employee.id}>
            <User  user={employee} />;
            </Link>
        })}
        </div>
    );
}
