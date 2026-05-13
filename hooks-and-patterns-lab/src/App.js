import React from "react";
import useFetch from "./hooks/useFetch";
import withLoading from "./hocs/withLoading";
import TodoList from "./TodoList";
import MouseTracker from "./renderprops/MouseTracker";

// Menggabungkan TodoList dengan HOC withLoading
const EnhancedTodoList = withLoading(TodoList);

function App() {
 const { data, loading, error } = useFetch(
  "https://jsonplaceholder.typicode.com/todos",
 );

 if (error) return <div style={{ color: "red" }}>Error: {error.message}</div>;

 return (
  <div
   style={{
    maxWidth: "800px",
    margin: "0 auto",
    padding: "20px",
    fontFamily: "sans-serif",
   }}
  >
   <h1>Hooks and Patterns Lab</h1>
   <hr />

   <div
    style={{
     backgroundColor: "#f0f8ff",
     padding: "20px",
     borderRadius: "8px",
     marginBottom: "20px",
    }}
   >
    <h2>Render Props Pattern</h2>
    <MouseTracker
     render={(mousePosition) => (
      <p style={{ fontSize: "18px", fontWeight: "bold", color: "#333" }}>
       Mouse Position: [ X: {mousePosition.x}, Y: {mousePosition.y} ]
      </p>
     )}
    />
   </div>

   <div
    style={{ backgroundColor: "#fff8dc", padding: "20px", borderRadius: "8px" }}
   >
    <h2>Custom Hook & HOC Pattern</h2>
    <h3>Todo List</h3>
    <EnhancedTodoList isLoading={loading} todos={data} />
   </div>
  </div>
 );
}

export default App;
