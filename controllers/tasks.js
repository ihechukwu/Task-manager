const Task = require("../models/Task");

const getAllTasks = async (req, res) => {
  try {
    res.status(200).json(await Task.find({}));
  } catch (error) {}
};
const createTask = async (req, res) => {
  try {
    await Task.create(req.body);

    res.status(201).json({ msg: "successful" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const getSingleTask = async (req, res) => {
  try {
    const { id } = req.params;
    const task = await Task.findById(id);
    if (!task) {
      return res.status(404).json({ msg: `task with id ${id} does not exist` });
    }
    res.status(200).json(task);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    if (!(await Task.findById(id))) {
      return res.status(404).json({ msg: "not found" });
    }
    await Task.findByIdAndUpdate(id, req.body, { runValidators: true });
    res.status(200).json({ msg: "successful" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    if (!(await Task.findById(id))) {
      return res.status(404).json({ msg: "task does not exist" });
    }
    await Task.findByIdAndDelete(id);
    res.status(200).json({ msg: "successful" });
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};
module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
