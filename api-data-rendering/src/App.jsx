import React, { useState, useEffect } from "react";
import DataList from "./components/DataList";
import Loader from "./components/Loader";

function App() {
 const [users, setUsers] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [error, setError] = useState(null);

 useEffect(() => {
  const fetchUsers = async () => {
   try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
     throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const result = await response.json();
    setUsers(result);
   } catch (err) {
    setError(err.message);
   } finally {
    setIsLoading(false);
   }
  };

  fetchUsers();
 }, []);

 return (
  <div
   style={{
    maxWidth: "600px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "sans-serif",
   }}
  >
   <h2>User Directory (API Data Rendering)</h2>

   {isLoading && <Loader />}

   {error && (
    <div
     style={{
      color: "red",
      padding: "10px",
      border: "1px solid red",
      borderRadius: "5px",
     }}
    >
     <strong>Error:</strong> {error}
    </div>
   )}

   {!isLoading && !error && <DataList data={users} />}
  </div>
 );
}

export default App;
