import { useState } from "react";
import "./Form.css";

export default function Form() {
 const [formData, setFormData] = useState({
  name: "",
  email: "",
  password: "",
 });

 const [errors, setErrors] = useState({});

 const [successMsg, setSuccessMsg] = useState("");

 const handleChange = (event) => {
  const { name, value } = event.target;
  setFormData({
   ...formData,
   [name]: value,
  });

  setErrors({
   ...errors,
   [name]: "",
  });
  setSuccessMsg("");
 };
 const handleSubmit = (event) => {
  event.preventDefault();

  let validationErrors = {};

  if (!formData.name.trim()) {
   validationErrors.name = "Nama wajib diisi!";
  }

  if (!formData.email.trim()) {
   validationErrors.email = "Email wajib diisi!";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
   // Subtask 3.2: Format Validation (Regex Email)
   validationErrors.email = "Format email tidak valid!";
  }

  if (!formData.password) {
   validationErrors.password = "Password wajib diisi!";
  } else if (formData.password.length < 6) {
   validationErrors.password = "Password minimal 6 karakter!";
  }
  if (Object.keys(validationErrors).length > 0) {
   setErrors(validationErrors);
  } else {
   setErrors({});
   setSuccessMsg("Pendaftaran berhasil! ✅");

   setFormData({ name: "", email: "", password: "" });
  }
 };

 return (
  <div className="form-container">
   <h2>Pendaftaran Akun</h2>

   {successMsg && <div className="success-box">{successMsg}</div>}

   <form onSubmit={handleSubmit}>
    <div className="input-group">
     <label>Nama Lengkap</label>
     <input
      type="text"
      name="name"
      value={formData.name}
      onChange={handleChange}
      placeholder="Masukkan nama Anda"
     />
     {errors.name && <span className="error-text">{errors.name}</span>}
    </div>

    <div className="input-group">
     <label>Email</label>
     <input
      type="text"
      name="email"
      value={formData.email}
      onChange={handleChange}
      placeholder="contoh@email.com"
     />
     {errors.email && <span className="error-text">{errors.email}</span>}
    </div>

    <div className="input-group">
     <label>Password</label>
     <input
      type="password"
      name="password"
      value={formData.password}
      onChange={handleChange}
      placeholder="Minimal 6 karakter"
     />
     {errors.password && <span className="error-text">{errors.password}</span>}
    </div>

    <button type="submit" className="submit-btn">
     Daftar Sekarang
    </button>
   </form>
  </div>
 );
}
