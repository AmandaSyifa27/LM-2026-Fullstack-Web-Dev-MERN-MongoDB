const express = require("express");
const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/success", (req, res) => {
 res.json({
  success: true,
  message: "Aplikasi berjalan dengan sangat normal.",
 });
});

app.get("/error", (req, res) => {
 throw new Error("Dem! Database bermasalah.. (Ini error sengaja)");
});

app.use((req, res) => {
 res.status(404).json({
  success: false,
  message: "Rute tidak ditemukan (404)",
 });
});

app.use((err, req, res, next) => {
 console.error("[ERROR LOG TERTANGKAP]:", err.message);

 res.status(500).json({
  success: false,
  message: err.message || "Terjadi kesalahan internal pada server",
 });
});
app.listen(PORT, () => {
 console.log(`Server Error Middleware berjalan di http://localhost:${PORT}`);
});
