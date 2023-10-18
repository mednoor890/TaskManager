import  { useState, useEffect } from 'react';
import TaskList from '../components/TaskList/TaskList';
import AddTaskForm from '../components/TaskForm/TaskForm';
import Layout from '../components/Layout';

const TaskManagerPage = () => {
  const [tasks, setTasks] = useState([]);
  const [completedTasksCount, setCompletedTasksCount] = useState(0);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:3000/tasks');
      const data = await response.json();
      setTasks(data);
      const completedTasksCount = data.filter(task => task.etat==true).length;
        setCompletedTasksCount(completedTasksCount)
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const handleAddTask = async newTaskTitle => {
    try {
      const response = await fetch('http://localhost:3000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ titre: newTaskTitle }),
      });

      const data = await response.json();
      setTasks(prevTasks => [...prevTasks, data]);
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  const handleTaskToggle = async taskId => {
    try {
      const updatedTask = tasks.find(task => task._id === taskId);
      updatedTask.etat = !updatedTask.etat;

      await fetch(`http://localhost:3000/tasks/${taskId}/etat`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedTask),
      });

      setTasks(prevTasks =>
        prevTasks.map(task => (task._id === taskId ? updatedTask : task))
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  const handleTaskDelete = async taskId => {
    try {
      await fetch(`http://localhost:3000/tasks/${taskId}`, {
        method: 'DELETE',
      });

      setTasks(prevTasks => prevTasks.filter(task => task._id !== taskId));
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  return (
    <Layout>
      <div>
        <h2>Task Manager</h2>
        <AddTaskForm onAddTask={handleAddTask} />
        <TaskList tasks={tasks} onToggle={handleTaskToggle} onDelete={handleTaskDelete} />
       
        <div>
          Total tasks: {tasks.length}
        </div>
        <div>
          Completed tasks: {completedTasksCount}
        </div>
      </div>
    </Layout>
  );
};

export default TaskManagerPage;
