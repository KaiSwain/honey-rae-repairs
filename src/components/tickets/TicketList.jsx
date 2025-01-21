import { useState, useEffect } from "react";
import { getAllTickets } from "../../services/ticketService";
import "./Ticket.css";
import { Ticket } from "./ticket";
import { SearchBar } from "./SeachBar";

//ticket list is a large component
export const TicketList = ({ currentUser }) => {
  const [allTickets, setAllTickets] = useState([]);
  const [showEmergencyOnly, setShowEmergencyOnly] = useState(false);
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const getAndSetTickets = () => {
    getAllTickets().then((ticketsArray) => setAllTickets(ticketsArray));
    console.log("ticket set");
  };

  useEffect(() => {
    getAndSetTickets();
  }, []); //all tickets are stored only on render

  useEffect(() => {
    if (showEmergencyOnly) {
      //if its true then run this code
      const emergencyTickets = allTickets.filter(
        //make a new variable filled with
        //all tickets thats emergency propertys are true
        (ticket) => ticket.emergency === true
      );
      setFilteredTickets(emergencyTickets); //fills array with tickets that are emergencys
    } else {
      //if its false set filtered tickets to all tickets
      setFilteredTickets(allTickets); // sets filtered tickets to all tickets
    }
  }, [showEmergencyOnly, allTickets]); //will inevitably change the state showEmergency it true
  //or when there is a change to all tickets

  useEffect(() => {
    const foundTickets = allTickets.filter((ticket) =>
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    ); //storing array of objects of ticket objects that the ticket description
    //includes the search term
    setFilteredTickets(foundTickets); //sets filtered tickets to found tickets
  }, [searchTerm, allTickets]); //will run when search term state changes or all our tickets

  return (
    <div className="tickets-container">
      <h2>Tickets</h2>
      {/* I imported the search bar component
      and gave it 2 functions to use that will update the state of
      showEmergencyOnly and search term
      */}
      <SearchBar
        setShowEmergencyOnly={setShowEmergencyOnly}
        setSearchTerm={{ setSearchTerm }}
      />

      <article className="tickets">
        {filteredTickets.map((ticketObj) => {
          return (
            <Ticket
              ticket={ticketObj}
              currentUser={currentUser}
              key={ticketObj.id}
              getAndSetTickets={getAndSetTickets}
            />
          );
          // imported the ticket component that turns each ticket into its
          // own "component. Giving it filtered tickets to use"`
        })}
      </article>
    </div>
  );
};
