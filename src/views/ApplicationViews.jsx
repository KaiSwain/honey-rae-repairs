import { Outlet, Route, Routes } from "react-router-dom"
import { CustomerList } from "../components/customers/customersList"
import { EmployeeDetails } from "../components/employees/employeeDetails"
import { NavBar } from "../components/NavBar.jsx/NavBar"
import { TicketList } from "../components/tickets/TicketList"
import { Welcome } from "../components/welcome/Welcome"
import { EmployeeList } from "../components/employees/employeeList"
import { CustomerDetails } from "../components/customers/customerDetails"
import { useEffect, useState } from "react"
import { EmployeeForm } from "../components/form/employeeForm"







export const ApplicationViews = () => {
const [currentUser, setCurrentUser] = useState({})

useEffect(() => {

  const localHoneyUser = localStorage.getItem("honey_user")
  const honeyUserObject = JSON.parse(localHoneyUser)

  setCurrentUser(honeyUserObject)
  console.log(currentUser)

},[])

  return <>
  <Routes>
  <Route
  // "/" is a path for home with the value of element
  // we also a make it a parent route by making the other routes children of this one
  path="/"
  element={
    <>
    {/* Imported NavBar component will render on top of out outlet
      whenever the path starts */}
      <NavBar />
      <Outlet />
      </>
    }
    >
    <Route index element={<Welcome />} />
    {/* when the path is at tickets we want to render this component */}
    <Route path="tickets" element={<TicketList currentUser={currentUser}/>} />
    <Route path="employees">
    <Route index element={<EmployeeList />} />
    <Route path=":employeeId" element={<EmployeeDetails />} />
    </Route>
    <Route path="customers">
    <Route index element={<CustomerList />} />
    <Route path=":id" element={<CustomerDetails />} />
    </Route>
    <Route path="profile" element={<EmployeeForm currentUser={currentUser}/>}/>
    </Route>
    </Routes>
    
  
  
  </>
}
