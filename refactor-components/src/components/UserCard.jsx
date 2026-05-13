import "react";

const UserCard = ({ user, onDelete }) => {
 return (
  <div className="user-card">
   <div className="user-info">
    <h3>{user.name}</h3>
    <p>
     <strong>Role:</strong> {user.role}
    </p>
    <p>
     <strong>Email:</strong> {user.email}
    </p>
   </div>
   <button className="delete-btn" onClick={() => onDelete(user.id)}>
    Delete User
   </button>
  </div>
 );
};

export default UserCard;
