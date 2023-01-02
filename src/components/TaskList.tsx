import styles from "./TaskList.module.css";

export function TaskList() {
  return (
    <main className={styles.container}>
      <form className={styles.taskForm}>
        <input id="task" type="text" placeholder="Digite uma tarefa. Ex: estudar React" />
        <button type="submit">Salvar</button>
      </form>
    </main>
  );
}
