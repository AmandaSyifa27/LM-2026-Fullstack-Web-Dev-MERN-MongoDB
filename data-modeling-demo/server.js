require("dotenv").config(); // Menyalakan pembaca file .env
const express = require("express");
const connectDB = require("./config/db.js");
const demoRoutes = require("./routes/demo.route.js");

const app = express();

app.use(express.json());

connectDB();

app.use("/api", demoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
 console.log(`Server Database Model berjalan di http://localhost:${PORT}`);
});
