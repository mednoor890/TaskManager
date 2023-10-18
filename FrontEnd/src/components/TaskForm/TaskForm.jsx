/* eslint-disable react/prop-types */
import  { useState } from 'react';
import {Input,Form,Button } from './TaskForm.styles'
const TaskForm = ({ onAddTask }) => {
 

  const [newTask, setNewTask] = useState('');

  const handleAddTask = e => {
    e.preventDefault();
    onAddTask(newTask);
    setNewTask('');
  };
  
  
  return (
    <Form onSubmit={handleAddTask}>
      <Input
        type="text"
        placeholder="Add a new task"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <Button type="submit">Add Task</Button>
    </Form>
  );
};

export default TaskForm;
