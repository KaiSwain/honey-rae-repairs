import { useEffect, useState } from "react";
import { getAllEmployees } from "../../services/employeeServices";
import { assignTicket, updateTicket } from "../../services/ticketService";

export const Ticket = ({ ticket, currentUser, getAndSetTickets }) => {
  //this is our service ticket component for each ticket
  const [employees, setEmployees] = useState([]);
  const [assignedEmployee, setAssignedEmployee] = useState({});

  useEffect(() => {
    getAllEmployees().then((employeesArray) => {
      setEmployees(employeesArray);
    });
    console.log("got all employees");
  }, []); //on render we set employees with our fetched employees array

  useEffect(() => {
    // we are finding the first employee that matches
    // the assigned filtered service ticket
    const foundEmployee = employees.find(
      (employee) => employee.id === ticket.employeeTickets[0]?.employeeId
    );
    setAssignedEmployee(foundEmployee);
  }, [employees, ticket]); //runs when employees is updated

  const handleClaim = () => {
    const currentEmployee = employees.find((emp) => emp.userId === currentUser.id);


    const newEmployeeTicket = {
      employeeId: currentEmployee.id,
      serviceTicketId: ticket.id,
    };


    assignTicket(newEmployeeTicket).then(() => {

      getAndSetTickets()
    }
    );
  };

  const handleClose = () => {
    const closedTicket = {
      id: ticket.id,
      userId: ticket.userId,
      description: ticket.description,
      emergency: ticket.emergency,
      dateCompleted: new Date()
    }
    updateTicket(closedTicket).then(() => {
      getAndSetTickets()
    })
  }

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
        <div className="btn-container">
          {currentUser.isStaff && !assignedEmployee ? (
            <button className="btn btn-secondary" onClick={handleClaim}>
              claim
            </button>
          ) : (
            ""
          )}
          {assignedEmployee?.userId === currentUser.id &&
          !ticket.dateCompleted ? (
            <button className="btn btn-warning" onClick={handleClose}>Close:</button>
          ) : (
            ""
          )}
        </div>
      </footer>
    </section>
  );
};
