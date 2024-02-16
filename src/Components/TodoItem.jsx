import styles from "./todoitem.module.css";
export default function TodoItem({ item, index, todos, setTodos }) {
  function handleDelete(item) {
    console.log("delete for the item: ", item);
    setTodos(todos.filter((todo) => todo !== item));
    // todos.filter((todo) => todo !== item);
  }
  return (
    <div className={styles.item}>
      <div className={styles.itemName} key={index}>
        {item}
        <span>
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            X
          </button>
        </span>
      </div>

      <hr className={styles.line} />
    </div>
  );
}
