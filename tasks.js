import { useState } from 'react';
import Navbar from '../components/Navbar';
import TaskList from '../components/TaskList';

export default function Tasks() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState("");

  // Add new task
  const addTask = () => {
    if (input.trim() !== "") {
      setTasks([...tasks, { text: input, completed: false }]);
      setInput("");
    }
  };

  return (
    <div>
      <Navbar />
      <h2>Task Manager</h2>

      {/* Input + Event Handling */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter task"
      />

      <button onClick={addTask}>Add Task</button>

      {/* Pass props */}
      <TaskList tasks={tasks} setTasks={setTasks} />

      {/* Conditional Rendering */}
      {tasks.length === 0 && <p>No tasks available</p>}
    </div>
  );
}