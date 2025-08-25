import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "./api";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    const { data } = await getTasks();
    setTasks(data);
  };

  const handleAdd = async (task) => {
    const { data } = await createTask(task);
    setTasks([...tasks, data]);
  };

  const handleToggle = async (id, updated) => {
    const { data } = await updateTask(id, updated);
    setTasks(tasks.map((t) => (t._id === id ? data : t)));
  };

  const handleDelete = async (id) => {
    await deleteTask(id);
    setTasks(tasks.filter((t) => t._id !== id));
  };

  return (
    <div className="app">
      <h1>✅ MERN To-Do App</h1>
      <AddTask onAdd={handleAdd} />
      <TaskList tasks={tasks} onToggle={handleToggle} onDelete={handleDelete} />
    </div>
  );
};

export default App;
