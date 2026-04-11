const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
let tasks = [];
app.get("/tasks", (req, res) => {
  res.json(tasks);
});
app.post("/tasks", (req, res) => {
  tasks.push(req.body);
  req.json({ message: "Task added" });
});
app.listen(3000, () => {
  console.log("server running");
});
