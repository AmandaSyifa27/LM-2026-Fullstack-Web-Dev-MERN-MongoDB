const express = require("express");
const router = express.Router();
const User = require("../models/user.model.js");
const Task = require("../models/task.model.js");

router.post("/users", async (req, res) => {
 try {
  const newUser = await User.create(req.body);
  res.status(201).json({ success: true, data: newUser });
 } catch (error) {
  res.status(400).json({ success: false, error: error.message });
 }
});

router.post("/tasks", async (req, res) => {
 try {
  const newTask = await Task.create(req.body);
  res.status(201).json({ success: true, data: newTask });
 } catch (error) {
  res.status(400).json({ success: false, error: error.message });
 }
});

router.get("/tasks", async (req, res) => {
 try {
  const tasks = await Task.find().populate("userId", "name email");
  res.status(200).json({ success: true, count: tasks.length, data: tasks });
 } catch (error) {
  res.status(500).json({ success: false, error: error.message });
 }
});

module.exports = router;
