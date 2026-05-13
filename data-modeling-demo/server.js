require("dotenv").config();
const express = require("express");
const connectDB = require("./config/db");
const demoRoutes = require("./routes/demo.route");

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(express.json());
app.use("/api", demoRoutes);

app.listen(PORT, () => {
 console.log(`Server running on port ${PORT}`);
});
