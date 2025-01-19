export const getAllEmployees = () => {
  return fetch(`http://localhost:8000/employees?_expand=user`).then((res) =>
    res.json()
  );
};

//getting al our employees and expanding on the userId

export const getClickedEmployee =(userId) => {

  return fetch(`http://localhost:8000/employees?userId=${userId}&_expand=user&_embed=employeeTickets`).then((res) => res.json())
  
}