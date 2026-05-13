import { useState } from "react";

const Child = ({ onUpdateState }) => {
 const [inputValue, setInputValue] = useState("");

 const handleSubmit = (e) => {
  e.preventDefault(); // Mencegah page reload
  if (inputValue.trim()) {
   onUpdateState(inputValue); // Mengirim data ke Parent
   setInputValue(""); // Mengosongkan input setelah dikirim
  }
 };

 return (
  <div className="box child-box">
   <h3>Child Component</h3>
   <p>Send data back to Parent:</p>
   <form onSubmit={handleSubmit} className="form-control">
    <input
     type="text"
     value={inputValue}
     onChange={(e) => setInputValue(e.target.value)}
     placeholder="Type new state here..."
    />
    <button type="submit">Update State</button>
   </form>
  </div>
 );
};

export default Child;
