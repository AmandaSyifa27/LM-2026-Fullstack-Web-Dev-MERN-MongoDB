const express = require("express");
const router = express.Router();
const User = require("../models/user.model");
const Task = require("../models/task.model");

router.post("/users", async (req, res) => {
 try {
  const user = new User(req.body);
  await user.save();
  res.status(201).json(user);
 } catch (error) {
  res.status(400).json({ error: error.message });
 }
});

router.get("/users", async (req, res) => {
 try {
  const users = await User.find();
  res.json(users);
 } catch (error) {
  res.status(500).json({ error: error.message });
 }
});

router.put("/users/:id", async (req, res) => {
 try {
  const user = await User.findByIdAndUpdate(req.params.id, req.body, {
   new: true,
   runValidators: true,
  });
  res.json(user);
 } catch (error) {
  res.status(400).json({ error: error.message });
 }
});

router.delete("/users/:id", async (req, res) => {
 try {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: "User deleted" });
 } catch (error) {
  res.status(500).json({ error: error.message });
 }
});

router.post("/tasks", async (req, res) => {
 try {
  const task = new Task(req.body);
  await task.save();
  res.status(201).json(task);
 } catch (error) {
  res.status(400).json({ error: error.message });
 }
});

router.get("/tasks", async (req, res) => {
 try {
  const tasks = await Task.find().populate("userId");
  res.json(tasks);
 } catch (error) {
  res.status(500).json({ error: error.message });
 }
});

router.put("/tasks/:id", async (req, res) => {
 try {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
   new: true,
   runValidators: true,
  });
  res.json(task);
 } catch (error) {
  res.status(400).json({ error: error.message });
 }
});

router.delete("/tasks/:id", async (req, res) => {
 try {
  await Task.findByIdAndDelete(req.params.id);
  res.json({ message: "Task deleted" });
 } catch (error) {
  res.status(500).json({ error: error.message });
 }
});

module.exports = router;
