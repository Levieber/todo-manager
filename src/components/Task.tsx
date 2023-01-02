import styles from "./Task.module.css";
import { TrashSimple as DeleteIcon, PencilSimple as EditIcon } from "phosphor-react";
import { TaskAttr } from "../types/global";

interface TaskProps extends TaskAttr {
  onToggleDoneTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
}

export function Task({ id, title, done, onToggleDoneTask, onDeleteTask }: TaskProps) {
  return (
    <li className={styles.task}>
      <div className={styles.taskTitleAndCheck}>
        <input onChange={() => onToggleDoneTask(id)} type="checkbox" id={id.toString()} />

        <label className={done ? styles.checked : undefined} htmlFor={id.toString()}>
          {title}
        </label>
      </div>

      <div className={styles.taskEditOrDelete}>
        <button
          className={styles.editTaskBtn}
          aria-label={`Editar a tarefa ${title}`}
          type="button"
          disabled={done}
        >
          <EditIcon size={25} />
        </button>

        <button
          onClick={() => onDeleteTask(id)}
          className={styles.deleteTaskBtn}
          aria-label={`Excluir a tarefa ${title}`}
          type="button"
        >
          <DeleteIcon size={25} />
        </button>
      </div>
    </li>
  );
}
