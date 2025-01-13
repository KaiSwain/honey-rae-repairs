

import { StrictMode } from "react";
import "./app.css"
import { TicketList } from "./components/tickets/TicketList";
import { CustomerList } from "./components/customers/customersList";

export const App = () => {
  return <>
  <StrictMode>
  {/* <TicketList /> */}
  <CustomerList />
  </StrictMode>
  </>
}
