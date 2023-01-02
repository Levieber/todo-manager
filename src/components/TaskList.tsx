import { useState } from "react";
import styles from "./TaskList.module.css";

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

  return (
    <main className={styles.container}>
      <form onSubmit={handleCreateTask} className={styles.taskForm}>
        <input
          value={taskTitle}
          onChange={(ev) => setTaskTitle(ev.target.value)}
          id="task"
          type="text"
          placeholder="Digite uma tarefa. Ex: estudar React"
        />
        <button type="submit">Salvar</button>
      </form>
    </main>
  );
}
