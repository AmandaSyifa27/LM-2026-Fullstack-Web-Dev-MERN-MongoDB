import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
 const [tasks, setTasks] = useState([]);
 const [newTask, setNewTask] = useState("");

 useEffect(() => {
  fetchTasks();
 }, []);

 const fetchTasks = async () => {
  try {
   const response = await axios.get("http://localhost:5000/tasks");
   setTasks(response.data);
  } catch (error) {
   console.error("Error fetching tasks:", error);
  }
 };

 const addTask = async () => {
  if (!newTask.trim()) return;
  try {
   await axios.post("http://localhost:5000/tasks/add", {
    description: newTask,
   });
   setNewTask("");
   fetchTasks();
  } catch (error) {
   console.error("Error adding task:", error);
  }
 };

 const deleteTask = async (id) => {
  try {
   await axios.delete(`http://localhost:5000/tasks/${id}`);
   fetchTasks();
  } catch (error) {
   console.error("Error deleting task:", error);
  }
 };

 return (
  <div className="App">
   <h1>MERN Task Manager</h1>
   <div>
    <input
     type="text"
     value={newTask}
     onChange={(e) => setNewTask(e.target.value)}
     placeholder="Add a new task"
    />
    <button onClick={addTask}>Add Task</button>
   </div>
   <ul>
    {tasks.map((task) => (
     <li key={task._id}>
      <span>{task.description}</span>
      <button className="delete-btn" onClick={() => deleteTask(task._id)}>
       Delete
      </button>
     </li>
    ))}
   </ul>
  </div>
 );
}

export default App;
