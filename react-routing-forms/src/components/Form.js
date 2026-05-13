import React, { useState } from "react";

function Form() {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [message, setMessage] = useState("");
 const [errors, setErrors] = useState({});

 const handleSubmit = (e) => {
  e.preventDefault();
  const validationErrors = {};

  if (!name) {
   validationErrors.name = "Name is required";
  }

  if (!email) {
   validationErrors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
   validationErrors.email = "Invalid email format";
  }

  if (!message) {
   validationErrors.message = "Message is required";
  }

  setErrors(validationErrors);

  if (Object.keys(validationErrors).length === 0) {
   console.log("Form submitted", { name, email, message });
   // Logic to send data to server would go here
   alert("Form submitted successfully! Check the console.");

   // Clear form after successful submit (optional but good practice)
   setName("");
   setEmail("");
   setMessage("");
  }
 };

 return (
  <div>
   <h2>Form</h2>
   <form onSubmit={handleSubmit}>
    <div style={{ marginBottom: "10px" }}>
     <label htmlFor="name">Name: </label>
     <br />
     <input
      type="text"
      id="name"
      value={name}
      onChange={(e) => setName(e.target.value)}
     />
     {errors.name && (
      <p style={{ color: "red", margin: "5px 0" }}>{errors.name}</p>
     )}
    </div>

    <div style={{ marginBottom: "10px" }}>
     <label htmlFor="email">Email: </label>
     <br />
     <input
      type="email"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
     />
     {errors.email && (
      <p style={{ color: "red", margin: "5px 0" }}>{errors.email}</p>
     )}
    </div>

    <div style={{ marginBottom: "10px" }}>
     <label htmlFor="message">Message: </label>
     <br />
     <textarea
      id="message"
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      rows="4"
     />
     {errors.message && (
      <p style={{ color: "red", margin: "5px 0" }}>{errors.message}</p>
     )}
    </div>

    <button type="submit">Submit</button>
   </form>
  </div>
 );
}

export default Form;
