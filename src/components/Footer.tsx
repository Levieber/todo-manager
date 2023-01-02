import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <strong>
        Desenvolvido com <span className={styles.heart}>&hearts;</span> por Levi Eber!
      </strong>
    </footer>
  );
}
