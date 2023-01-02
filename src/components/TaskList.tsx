import styles from "./TaskList.module.css";
import { useState } from "react";
import { Task } from "./Task";
import { TaskAttr } from "../types/global";

export function TaskList() {
  const [taskTitle, setTaskTitle] = useState("");
  const [tasks, setTasks] = useState<TaskAttr[]>([]);
  const [taskEditId, setTaskEditId] = useState<number | null>(null);

  const handleSaveTask = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (taskEditId) {
      const newTasks = tasks.map((task) => (task.id === taskEditId ? { ...task, title: taskTitle } : task));

      setTasks(newTasks);
      setTaskEditId(null);
      setTaskTitle("");
      return;
    }

    const newTask = {
      id: Date.now(),
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

  const handleDeleteTask = (id: number) => {
    const tasksWithoutDeleteOne = tasks.filter((task) => task.id !== id);

    setTasks(tasksWithoutDeleteOne);
  };

  const handleEditTask = (id: number) => {
    const taskToEdit = tasks.find((task) => task.id === id);

    if (taskToEdit) {
      setTaskTitle(taskToEdit.title);
      setTaskEditId(taskToEdit.id);
    }
  };

  const isTaskTitleEmpty = taskTitle.trim() === "";

  const remainingTasks = tasks.filter((task) => !task.done).length;

  return (
    <main className={styles.container}>
      <form onSubmit={handleSaveTask} className={styles.taskForm}>
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
        <div className={styles.taskInfo}>
          <h2>Minhas tarefas:</h2>
          <span>Tarefas restantes: {remainingTasks}</span>
        </div>
        {tasks.length === 0 ? (
          <strong className={styles.emptyList}>Nenhuma tarefa cadastrada no momento!</strong>
        ) : (
          <ul>
            {tasks.map((task) => (
              <Task
                key={task.id}
                onDeleteTask={handleDeleteTask}
                onToggleDoneTask={handleToggleDoneTask}
                onEditTask={handleEditTask}
                {...task}
              />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
