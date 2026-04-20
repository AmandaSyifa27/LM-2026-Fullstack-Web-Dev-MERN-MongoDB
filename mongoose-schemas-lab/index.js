const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const dbURI = "mongodb://127.0.0.1:27017/bookstore";

mongoose
 .connect(dbURI)
 .then(() => console.log("Connected to MongoDB"))
 .catch((err) => console.error("MongoDB connection error:", err));

const bookSchema = new mongoose.Schema({
 title: {
  type: String,
  required: true,
  trim: true,
  maxlength: 100,
 },
 author: {
  type: String,
  required: true,
  trim: true,
 },
 genre: {
  type: String,
  enum: ["Fiction", "Non-Fiction", "Science Fiction", "Mystery"],
  default: "Fiction",
 },
 publicationYear: {
  type: Number,
  min: 1800,
  max: new Date().getFullYear(),
 },
 price: {
  type: Number,
  required: true,
  min: 0,
 },
 createdAt: {
  type: Date,
  default: Date.now,
 },
});

const Book = mongoose.model("Book", bookSchema);

app.post("/books", async (req, res) => {
 try {
  const book = new Book(req.body);
  await book.save();
  res.status(201).send(book);
 } catch (error) {
  res.status(400).send(error);
 }
});

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});
