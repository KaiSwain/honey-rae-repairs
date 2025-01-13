import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/employeeServices";

export const Ticket = ({ ticket }) => {
  const [employees, setEmployees] = useState([]);
  const [assignedEmployee, setAssignedEmployee] = useState({});

  useEffect(() => {
    getAllEmployees().then((employeesArray) => {
      setEmployees(employeesArray);
    });
    console.log("got all employees");
  }, []);

  useEffect(() => {
    const foundEmployee = employees.find(
      (employee) => employee.id === ticket.employeeTickets[0]?. employeeId
    );
    setAssignedEmployee(foundEmployee);
  }, [employees]);

  return (
    <section className="ticket" key={ticket.id}>
      <header className="ticket-info"># {ticket.id} </header>
      <div>{ticket.description}</div>
      <footer>
        <div>
          <div className="ticket-info">assignee</div>
        </div>
        {assignedEmployee ? assignedEmployee.user?.fullName : "None"}
        <div className="ticket-info"> emergency </div>
        <div>{ticket.emergency ? "yes" : "no"}</div>
      </footer>
    </section>
  );
};



