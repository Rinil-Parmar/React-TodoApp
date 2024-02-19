import React, { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  //handling submit event and setting the new todo to the todos object
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.todoinput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          required
        />

        <button className={styles.todobutton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
