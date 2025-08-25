const TaskItem = ({ task, onToggle, onDelete }) => {
  return (
    <div className="task-item">
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task._id, { completed: !task.completed })}
      />
      <span style={{ textDecoration: task.completed ? "line-through" : "none" }}>
        {task.title}
      </span>
      <button onClick={() => onDelete(task._id)}>❌</button>
    </div>
  );
};

export default TaskItem;
