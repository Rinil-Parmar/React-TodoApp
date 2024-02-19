import styles from "./todoitem.module.css";

export default function TodoItem({ item, index, todos, setTodos }) {
  function handleDelete(item) {
    console.log("delete for the item: ", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleClick(name) {
    console.log("clicked", name);

    //if-else logic to toggle the done property of the todo
    // const newTodos = todos.map((todo) => {
    //   if (todo.name === name) {
    //     return {
    //       ...todo,
    //       done: !todo.done,
    //     };
    //   }
    //   return todo;
    // }
    // );

    const newTodos = todos.map((todo) =>
      todo.name === name ? { ...todo, done: !todo.done } : todo
    );

    setTodos(newTodos);
    console.log(todos);
  }

  const className = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName} key={index}>
        <span className={className} onClick={() => handleClick(item.name)}>
          {item.name}
        </span>

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
