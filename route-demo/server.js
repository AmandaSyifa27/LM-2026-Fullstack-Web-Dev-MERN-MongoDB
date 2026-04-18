const express = require("express");
const app = express();
const PORT = 3000;

app.use((req, res, next) => {
 console.log(
  `[LOG] Waktu: ${new Date().toISOString()} | Method: ${req.method} | URL: ${req.url}`,
 );
 next();
});
app.get("/", (req, res) => {
 res.send("Welcome to Route Handling!");
});

app.get("/about", (req, res) => {
 res.send("<h1>About Us</h1><p>Ini adalah halaman About Us.</p>");
});

app.get("/products/:id", (req, res) => {
 const productId = req.params.id;
 res.send(`Viewing Product ID: ${productId}`);
});
app.get("/search", (req, res) => {
 const searchTerm = req.query.q;

 if (!searchTerm) {
  return res.send(
   "Silakan masukkan kata kunci pencarian. Contoh: /search?q=laptop",
  );
 }

 res.send(`Searching for: ${searchTerm}`);
});

app.use((req, res) => {
 res.status(404).send("Page Not Found...");
});

app.listen(PORT, () => {
 console.log(`Server Express sedang berjalan di http://localhost:${PORT}`);
});
