import { useEffect, useState } from "react";
import { getNoneStaffUsers } from "../../services/userService";
import { User } from "../../users/user";
import "./customers.css";

export const CustomerList = () => {

    const [customers, setCustomers] = useState([]);
    
    useEffect(() => {
        getNoneStaffUsers().then((usersArray) => {
            setCustomers(usersArray);
        });
    },[]);

    return (
        <div className="customers">
            {customers.map((customer) => {
                return <User key={customer.id} user={customer} />;
            })}
             

             
             </div>
    )
}