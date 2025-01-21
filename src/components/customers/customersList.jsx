import { useEffect, useState } from "react";
import { getNoneStaffUsers } from "../../services/userService.jsx";
import { User } from "../users/user";
import "./customers.css";
import { Link } from "react-router-dom";

export const CustomerList = () => { // customer list component to render out customers
  const [customers, setCustomers] = useState([]); // creates a variable and a variable setter function 
  // and sets the initial value of the variable inside the use state

  useEffect(() => { 
    getNoneStaffUsers().then((usersArray) => { //when you call setState(newValue), React re-renders the 
      //component with the updated state. To make sure UI is up to date with current data
      setCustomers(usersArray); //sets customers to the imported array
      console.log(customers)
    });
  }, []); //runs this code on render. this array will be filled with each customer object

  return (
    <div className="customers">
      {customers.map((customer) => { //for ever customer in customer array return a component for each
        return (
          <Link to={`/customers/${customer.id}`} key={customer.id}>
            <User user={customer} />
          </Link>
        );
      })}
    </div>
  );
};
