export const getAllTickets = () => {
    return fetch('http://localhost:8000/serviceTickets?_embed=employeeTickets').then((res) => 
    res.json())
}

//getting all our tickets and embed basically is expand but gives you your parent info instead of child