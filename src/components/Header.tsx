import styles from "./Header.module.css";
import { CheckSquareOffset as Check } from "phosphor-react";

export function Header() {
  return (
    <header className={styles.header}>
      <Check size={35} />
      <strong>Um dos infinitos lugares para gerenciar tarefas</strong>
    </header>
  );
}
