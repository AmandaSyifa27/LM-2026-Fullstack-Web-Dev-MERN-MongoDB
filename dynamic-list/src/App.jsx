import React, { useState } from "react";
import "./App.css";

function App() {
 // Step 2: Define Initial Data & Store Data in State
 const [items, setItems] = useState([
  { id: 1, text: "Complete React Lab" },
  { id: 2, text: "Review Dynamic List Rendering" },
 ]);
 const [inputValue, setInputValue] = useState("");

 // Step 4.1 & 5.2: Add Item to List & Validate User Input
 const handleAddItem = () => {
  // Validation: Prevent empty items
  if (!inputValue.trim()) {
   alert("Input cannot be empty!");
   return;
  }

  const newItem = {
   id: Date.now(), // Generate a unique key based on timestamp
   text: inputValue,
  };

  setItems([...items, newItem]);
  setInputValue(""); // Clear input after adding
 };

 // Step 4.2: Remove Item from List
 const handleRemoveItem = (idToRemove) => {
  setItems(items.filter((item) => item.id !== idToRemove));
 };

 return (
  <div className="app-container">
   <h1>Dynamic List Manager</h1>

   <div className="input-section">
    <input
     type="text"
     placeholder="Add a new item..."
     value={inputValue}
     onChange={(e) => setInputValue(e.target.value)}
     onKeyDown={(e) => e.key === "Enter" && handleAddItem()} // Allow pressing Enter
    />
    <button onClick={handleAddItem} className="add-btn">
     Add
    </button>
   </div>

   {/* Step 5.1: Handle Empty List Scenario */}
   {items.length === 0 ? (
    <p className="empty-message">The list is empty. Add some items above!</p>
   ) : (
    <ul className="item-list">
     {/* Step 3: Use map() for Rendering & Add Key Prop */}
     {items.map((item) => (
      <li key={item.id} className="item-row">
       <span>{item.text}</span>
       <button onClick={() => handleRemoveItem(item.id)} className="remove-btn">
        Remove
       </button>
      </li>
     ))}
    </ul>
   )}
  </div>
 );
}

export default App;
