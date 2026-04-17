import { useState, useEffect } from "react";

function App() {
 const [count, setCount] = useState(0);

 useEffect(() => {
  document.title = `Anda klik ${count} kali`;

  console.log(`useEffect berjalan: Nilai count saat ini adalah ${count}`);

  return () => {
   console.log("Membersihkan useEffect sebelumnya...");
  };
 }, [count]);

 const handleIncrement = () => {
  setCount(count + 1);
 };

 return (
  <div
   style={{ textAlign: "center", padding: "40px", fontFamily: "sans-serif" }}
  >
   <h1>Demo React Hooks</h1>
   <p>Mengelola state dan side-effects dalam Functional Component</p>

   <div
    style={{
     padding: "30px",
     border: "2px dashed #007bff",
     borderRadius: "10px",
     display: "inline-block",
     marginTop: "20px",
    }}
   >
    <h2>
     Jumlah Klik: <span style={{ color: "#007bff" }}>{count}</span>
    </h2>

    <button
     onClick={handleIncrement}
     style={{
      padding: "10px 20px",
      fontSize: "16px",
      cursor: "pointer",
      backgroundColor: "#007bff",
      color: "white",
      border: "none",
      borderRadius: "5px",
     }}
    >
     Tambah Angka!
    </button>
   </div>
  </div>
 );
}

export default App;
