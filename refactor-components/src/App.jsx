import { useState } from "react";
import Header from "./components/Header";
import UserList from "./components/UserList";
import Footer from "./components/Footer";
import "./App.css";

function App() {
 // State management remains in the parent
 const [users, setUsers] = useState([
  { id: 1, name: "Alice Johnson", role: "Admin", email: "alice@example.com" },
  { id: 2, name: "Bob Smith", role: "Editor", email: "bob@example.com" },
  {
   id: 3,
   name: "Charlie Davis",
   role: "Viewer",
   email: "charlie@example.com",
  },
 ]);

 const handleDeleteUser = (id) => {
  setUsers(users.filter((user) => user.id !== id));
 };

 return (
  <div className="app-container">
   <Header
    title="Admin Dashboard"
    subtitle="Manage your team members easily."
   />

   <main className="main-content">
    <UserList users={users} onDeleteUser={handleDeleteUser} />
   </main>

   <Footer />
  </div>
 );
}

export default App;
