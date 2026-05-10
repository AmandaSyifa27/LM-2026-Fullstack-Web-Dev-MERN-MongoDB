const express = require("express");
const mongoose = require("mongoose");
// const transactionRoutes = require("./routes/transactionRoutes");
const transactionRoutes = require("./routes/Amanda-MongoDBTransactions-transactionRoutes");

const app = express();
const port = 3000;

app.use(express.json());

const dbURI = "mongodb://127.0.0.1:27017/bankingApp";

// mongoose
//  .connect(dbURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//  })
//  .then(() => {
//   console.log("Connected to MongoDB");
//   app.listen(port, () => {
//    console.log(`Server is running on port ${port}`);
//   });
//  })
//  .catch((err) => {
//   console.error("MongoDB connection error:", err);
//  });

mongoose
 .connect(dbURI)
 .then(() => {
  console.log("Connected to MongoDB");
  app.listen(port, () => {
   console.log(`Server is running on port ${port}`);
  });
 })
 .catch((err) => {
  console.error("MongoDB connection error:", err);
 });

app.use("/api/transactions", transactionRoutes);
