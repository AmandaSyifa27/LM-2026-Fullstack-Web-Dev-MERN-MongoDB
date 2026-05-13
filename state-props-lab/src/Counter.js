import { useState } from "react";

function Counter({ label, onCountChange }) {
 const [count, setCount] = useState(0);

 const increment = () => {
  const newCount = count + 1;
  setCount(newCount);
  onCountChange(newCount); // Lifts state up to App.js
 };

 const decrement = () => {
  const newCount = count - 1;
  setCount(newCount);
  onCountChange(newCount); // Lifts state up to App.js
 };

 return (
  <div
   style={{
    marginTop: "20px",
    padding: "15px",
    border: "1px solid #ccc",
    borderRadius: "5px",
   }}
  >
   <h3>{label}</h3>
   <button
    onClick={increment}
    style={{ marginRight: "10px", padding: "5px 15px" }}
   >
    Increment
   </button>
   <button onClick={decrement} style={{ padding: "5px 15px" }}>
    Decrement
   </button>
  </div>
 );
}

export default Counter;
