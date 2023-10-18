const Task = require('../models/TaskModel');
const taskController = {
  createTask: async (req, res) => {
    try {
      const { titre } = req.body;
      const task = new Task({ titre });
      await task.save();
      res.status(201).json(task);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
  getTasks: async (req, res) => {
    try {
      const tasks = await Task.find();
      res.status(200).json(tasks);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
deleteTask: async (req,res)=>{
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
          return res.status(404).json({ message: 'no task with such an id' });
        }
        res.status(200).json({ message: ' deleted successfully' });
  }
  catch(err){
    res.status(500).json({ error: err.message });
  }
},
updateTask: async (req, res) => {
    try {
      const updatedTask = await Task.findByIdAndUpdate(
        req.params.id,
        { $set: { etat: req.body.etat } }, // update just "etat"
        { new: true }
      );

      if (!updatedTask) {
        return res.status(404).json({ message: 'Task not found' });
      }

      res.status(200).json(updatedTask);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },
};

module.exports = taskController
