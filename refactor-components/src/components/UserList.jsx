import "react";
import UserCard from "./UserCard";

const UserList = ({ users, onDeleteUser }) => {
 if (users.length === 0) {
  return <p className="empty-msg">No users available. The list is empty.</p>;
 }

 return (
  <div className="user-list">
   {users.map((user) => (
    <UserCard key={user.id} user={user} onDelete={onDeleteUser} />
   ))}
  </div>
 );
};

export default UserList;
