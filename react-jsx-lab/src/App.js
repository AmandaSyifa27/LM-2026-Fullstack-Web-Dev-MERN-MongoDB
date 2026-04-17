import React from "react";
import Item from "./Item";

function App() {
 const items = ["Satu", "Dua", "Tiga"];
 const name = "Amanda";

 return (
  <div>
   {/* basic react & dynamic data */}
   <div>
    <h1>Hello, {name}!</h1>
    <p>Welcome to React with JSX</p>
   </div>
   {/* list of items */}
   <div>
    <h2>Items:</h2>
    <ul>
     {items.map((item, index) => (
      <li key={index}>{item}</li>
     ))}
    </ul>
   </div>
   {/* component composition */}
   <div>
    <h2>Items(1):</h2>
    <ul>
     {items.map((item, index) => (
      <Item key={index} name={item} />
     ))}
    </ul>
   </div>
  </div>
 );
}

export default App;
