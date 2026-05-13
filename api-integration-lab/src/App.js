import React, { useState, useEffect } from "react";
import User from "./User";
import "./App.css"; // Pastikan kita import CSS-nya

function App() {
 const [users, setUsers] = useState([]);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  const fetchData = async () => {
   try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
     // Penulisan template literal diperbaiki di sini
     throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    setUsers(data);
   } catch (e) {
    setError(e);
   } finally {
    setLoading(false);
   }
  };

  fetchData();
 }, []); // Empty dependency array ensures this effect runs only once on mount

 if (loading) {
  return (
   <div className="App">
    <h2>Loading users...</h2>
   </div>
  );
 }

 if (error) {
  return (
   <div className="App">
    <h2 style={{ color: "red" }}>Error: {error.message}</h2>
   </div>
  );
 }

 return (
  <div className="App">
   <h1>User List</h1>
   <div className="user-grid">
    {users.map((user) => (
     <User key={user.id} user={user} />
    ))}
   </div>
  </div>
 );
}

export default App;
