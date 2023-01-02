import styles from "./TaskList.module.css";
import { useState } from "react";
import { Task } from "./Task";

export function TaskList() {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState<{ id: number; title: string; done: boolean }[]>([]);

  const handleCreateTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const newTask = {
      id: new Date().getTime(),
      title: taskTitle,
      done: false,
    };
    setTasks([...tasks, newTask]);
    setTaskTitle("");
  };

  const handleTaskTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.target.setCustomValidity("");
    setTaskTitle(event.target.value);
  };

  const handleInvalidTitle = (event: React.InvalidEvent<HTMLInputElement>) =>
    event.target.setCustomValidity("O título da tarefa não pode estar vazio!");

  const handleToggleDoneTask = (id: number) => {
    const newTasks = tasks.map((task) => (task.id === id ? { ...task, done: !task.done } : task));

    setTasks(newTasks);
  };

  const isTaskTitleEmpty = taskTitle.trim() === "";

  return (
    <main className={styles.container}>
      <form onSubmit={handleCreateTask} className={styles.taskForm}>
        <input
          value={taskTitle}
          onChange={handleTaskTitleChange}
          onInvalid={handleInvalidTitle}
          required
          id="task"
          type="text"
          placeholder="Digite uma tarefa. Ex: estudar React"
        />
        <button disabled={isTaskTitleEmpty} type="submit">
          Salvar
        </button>
      </form>
      <section className={styles.taskContainer}>
        <h2>Minhas tarefas:</h2>
        <ul>
          {tasks.map((task) => (
            <Task key={task.id} onToggleDoneTask={handleToggleDoneTask} {...task} />
          ))}
        </ul>
      </section>
    </main>
  );
}
