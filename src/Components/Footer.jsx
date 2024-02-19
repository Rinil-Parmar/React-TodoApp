import styles from "./footer.module.css";
export default function Footer({ completedTodos, totalTodos }) {
  return (
    <footer className={styles.footer}>
      <span className={styles.item}>Completed Todos: {completedTodos}</span>
      <br />
      <span className={styles.item}>Total Todos: {totalTodos}</span>
    </footer>
  );
}
