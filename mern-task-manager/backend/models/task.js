const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const taskSchema = new Schema(
 {
  description: {
   type: String,
   required: true,
   trim: true,
   minlength: 3,
  },
  completed: {
   type: Boolean,
   default: false,
  },
 },
 {
  timestamps: true,
 },
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;
