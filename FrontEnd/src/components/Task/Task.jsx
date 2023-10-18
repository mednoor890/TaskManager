/* eslint-disable react/prop-types */
import { Checkbox, TaskContainer,Label} from './Task.styles'
const Task = ({ task, onToggle, onDelete }) => {
  const handleDeleteClick = () => {
    onDelete(task.id);
  };
  return (
    <TaskContainer>
      <Checkbox
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
      />
      <Label>{task.titre}</Label>
      <button onClick={handleDeleteClick}>Delete</button>

    </TaskContainer>
  );
};

export default Task;
