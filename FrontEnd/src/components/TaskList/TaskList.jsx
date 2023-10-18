/* eslint-disable react/prop-types */
import Task from '../Task/Task';
const TaskList = ({ tasks, onToggle,onDelete }) => {
  return (
    <div>
      {tasks.map(task => 
      (
        <Task key={task._id} 
        task={task}      
         onToggle={() => onToggle(task._id)}
              onDelete={() => onDelete(task._id)}
        />
      ))}
    </div>
  );
};
export default TaskList;
