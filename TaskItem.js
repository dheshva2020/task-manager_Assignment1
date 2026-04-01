export default function TaskItem({ task, index, tasks, setTasks }) {

  // Toggle complete
  const toggleTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <span style={{
        textDecoration: task.completed ? "line-through" : "none"
      }}>
        {task.text}
      </span>

      <button onClick={toggleTask}>
        {task.completed ? "Undo" : "Complete"}
      </button>
    </div>
  );
}