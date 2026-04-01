import TaskItem from './TaskItem';

export default function TaskList({ tasks, setTasks }) {
  return (
    <div>
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          tasks={tasks}
          setTasks={setTasks}
        />
      ))}
    </div>
  );
}