import "./user.css";

export const User = ({ user }) => { //these are the user cards if the user
  // is an employee acsessing their info will look different that a customer
  return (
    <div className="user">
      <div>
        <div className="user-info">name</div>
        <div>{user.fullName ? user.fullName : user.user.fullName}</div>
      </div>
      <div>
        <div className="user-info">Email</div>
        <div>{user.email ? user.email : user.user.email}</div>
      </div>
    </div>
  );
};
