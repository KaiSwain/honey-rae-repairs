

export const getNoneStaffUsers = () => {
    return fetch(`http://localhost:8000/users?isStaff=false`).then((res) =>
      res.json()
    );
  }

  // we are getting our users that have a isStaff key that  is false