const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const tasksRouter = require("./routes/tasks");

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb://127.0.0.1:27017/mern-task-manager";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });

const connection = mongoose.connection;
connection.once("open", () => {
 console.log("MongoDB database connection established successfully");
});

app.use("/tasks", tasksRouter);

app.listen(port, () => {
 console.log(`Server is running on port: ${port}`);
});
