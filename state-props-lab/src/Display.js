import React from "react";

function Display({ value }) {
 return (
  <div
   style={{
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#e9ecef",
    borderRadius: "5px",
   }}
  >
   <h2>The counter value is: {value}</h2>
  </div>
 );
}

export default Display;
