const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  titre: {
    type: String,
    required: true,
  },
  etat: {
    type: Boolean,
    default: false,
  }
})

const Task = mongoose.model('Task', taskSchema)
module.exports = Task;
