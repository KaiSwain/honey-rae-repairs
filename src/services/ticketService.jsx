export const getAllTickets = () => {
    return fetch('http://localhost:8000/serviceTickets?_embed=employeeTickets').then((res) => 
    res.json())
}

//getting all our tickets and embed basically is expand but gives you your parent info instead of child

export const assignTicket = (employeeTicket) => {
    return fetch(`http://localhost:8000/employeeTickets`, {
        method: "Post",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(employeeTicket)
    })
}

export const updateTicket = (ticket) => {
    return fetch(`http://localhost:8000/serviceTickets/${ticket.id}`, {
        method: "PUT",
        headers: {
           "Content-Type" : "application/json"
        },
        body: JSON.stringify(ticket)
    })
}