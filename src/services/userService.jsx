

export const getNoneStaffUsers = () => {
    return fetch(`http://localhost:8000/users?isStaff=false`).then((res) =>
      res.json()
    );
  }
