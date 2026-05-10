import React, { useState, useEffect } from "react";

function App() {
 const [students, setStudents] = useState([]);
 const [name, setName] = useState("");
 const [course, setCourse] = useState("");

 const fetchStudents = async () => {
  try {
   const response = await fetch("http://localhost:5000/students");
   const data = await response.json();

   // Cek apakah data yang diterima benar-benar array
   if (Array.isArray(data)) {
    setStudents(data);
   } else {
    console.error(
     "Peringatan: Backend tidak mengirimkan array. Isi balasan:",
     data,
    );
    setStudents([]); // Set ke array kosong biar .map() nggak nge-crash
   }
  } catch (error) {
   console.error("Error fetching data:", error);
   setStudents([]);
  }
 };

 useEffect(() => {
  fetchStudents();
 }, []);

 const handleSubmit = async (e) => {
  e.preventDefault();
  try {
   const response = await fetch("http://localhost:5000/students", {
    method: "POST",
    headers: {
     "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, course }),
   });
   if (response.ok) {
    setName("");
    setCourse("");
    fetchStudents();
   }
  } catch (error) {
   console.error("Error submitting data:", error);
  }
 };

 return (
  <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
   <h1>Student Registration</h1>
   <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
    <div style={{ marginBottom: "10px" }}>
     <label style={{ marginRight: "10px" }}>Name: </label>
     <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      required
     />
    </div>
    <div>
     <label style={{ marginRight: "10px" }}>Course: </label>
     <input
      type="text"
      value={course}
      onChange={(e) => setCourse(e.target.value)}
      required
     />
    </div>
    <button type="submit" style={{ marginTop: "15px" }}>
     Submit
    </button>
   </form>

   <h2>Student List</h2>
   <ul>
    {students.map((student) => (
     <li key={student._id}>
      <strong>{student.name}</strong> - {student.course}
     </li>
    ))}
   </ul>
  </div>
 );
}

export default App;
