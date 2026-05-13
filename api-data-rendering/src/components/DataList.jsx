// import React from 'react';

const DataList = ({ data }) => {
 return (
  <ul style={{ listStyleType: "none", padding: 0 }}>
   {data.map((item) => (
    <li
     key={item.id}
     style={{
      padding: "15px",
      marginBottom: "10px",
      border: "1px solid #ddd",
      borderRadius: "5px",
      backgroundColor: "#f9f9f9",
     }}
    >
     <h3 style={{ margin: "0 0 5px 0" }}>{item.name}</h3>
     <p style={{ margin: 0, color: "#555" }}>Email: {item.email}</p>
     <p style={{ margin: 0, color: "#555" }}>Company: {item.company.name}</p>
    </li>
   ))}
  </ul>
 );
};

export default DataList;
