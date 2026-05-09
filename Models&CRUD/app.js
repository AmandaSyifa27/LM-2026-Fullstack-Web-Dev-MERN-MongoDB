const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bookRoutes = require("./routes/books");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const dbURI = "mongodb://127.0.0.1:27017/express-crud-db";

mongoose
 .connect(dbURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 })
 .then(() => console.log("Connected to MongoDB"))
 .catch((err) => console.error("MongoDB connection error:", err));

app.use("/books", bookRoutes);

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});
