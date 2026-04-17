import { useNavigate } from "react-router-dom";

export default function Home() {
 const navigate = useNavigate();

 return (
  <div style={{ padding: "20px" }}>
   <h1>Ini Beranda</h1>
   <p>Selamat Amanda! ini adalah aplikasi Multi-Page</p>

   <button
    onClick={() => navigate("/contact")}
    style={{
     padding: "10px",
     cursor: "pointer",
     backgroundColor: "#2ecc71",
     color: "white",
     border: "none",
     borderRadius: "5px",
    }}
   >
    Hubungi Kami (Programmatic)
   </button>
  </div>
 );
}
