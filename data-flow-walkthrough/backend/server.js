const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// mongoose
//  .connect("mongodb://127.0.0.1:27017/mern_data_flow")
//  .then(() => console.log("Connected to MongoDB"))
//  .catch((err) => console.error(err));

mongoose
 .connect("mongodb://127.0.0.1:27017/mern_data_flow?directConnection=true")
 .then(() => console.log("Connected to MongoDB"))
 .catch((err) => console.error(err));

const studentSchema = new mongoose.Schema({
 name: String,
 course: String,
});

const Student = mongoose.model("Student", studentSchema);

app.post("/students", async (req, res) => {
 try {
  const newStudent = new Student(req.body);
  await newStudent.save();
  res.status(201).json(newStudent);
 } catch (err) {
  res.status(400).json({ error: err.message });
 }
});

app.get("/students", async (req, res) => {
 try {
  const students = await Student.find();
  res.json(students);
 } catch (err) {
  res.status(500).json({ error: err.message });
 }
});

app.listen(port, () => {
 console.log(`Server running on port ${port}`);
});
