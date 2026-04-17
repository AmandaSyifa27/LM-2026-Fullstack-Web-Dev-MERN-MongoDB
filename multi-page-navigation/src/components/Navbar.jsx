import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
 return (
  <nav
   style={{
    backgroundColor: "#2c3e50",
    padding: "15px",
    display: "flex",
    gap: "20px",
   }}
  >
   <NavLink
    to="/"
    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
   >
    Beranda
   </NavLink>

   <NavLink
    to="/about"
    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
   >
    Tentang
   </NavLink>

   <NavLink
    to="/contact"
    className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
   >
    Kontak
   </NavLink>
  </nav>
 );
}
