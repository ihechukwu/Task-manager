const express = require("express");
const router = express();
const {
  getAllTasks,
  createTask,
  updateTask,
  deleteTask,
  getSingleTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks).post(createTask);
router.route("/:id").get(getSingleTask).put(updateTask).delete(deleteTask);

module.exports = router;
