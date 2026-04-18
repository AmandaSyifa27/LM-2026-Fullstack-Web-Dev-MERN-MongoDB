const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());
const validateRegisterInput = (req, res, next) => {
 const { name, email, password } = req.body;
 let errors = [];

 const nameRegex = /^[a-zA-Z\s]+$/;
 if (!name) {
  errors.push("Nama wajib diisi.");
 } else if (!nameRegex.test(name)) {
  errors.push("Nama hanya boleh berisi huruf dan spasi.");
 }

 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 if (!email) {
  errors.push("Email wajib diisi.");
 } else if (!emailRegex.test(email)) {
  errors.push("Format email tidak valid.");
 }

 const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;
 if (!password) {
  errors.push("Password wajib diisi.");
 } else if (password.length < 8) {
  errors.push("Password minimal harus 8 karakter.");
 } else if (!specialCharRegex.test(password)) {
  errors.push(
   "Password harus mengandung setidaknya satu karakter spesial (!@#$% dll).",
  );
 }

 if (errors.length > 0) {
  return res.status(400).json({
   success: false,
   message: "Validasi input gagal",
   errors: errors,
  });
 }

 next();
};

app.post("/register", validateRegisterInput, (req, res) => {
 // Subtask 5.2: Jika kode sampai ke baris ini, berarti input sudah dijamin 100% valid & aman!
 const { name, email } = req.body;

 // Logika controller utama (Misal: simpan ke database)
 res.status(201).json({
  success: true,
  message: "Registrasi berhasil! Data Anda aman dari serangan.",
  data: {
   name: name,
   email: email,
  },
 });
});

app.listen(PORT, () => {
 console.log(`Server Input Validation berjalan di http://localhost:${PORT}`);
});
