import React, { useState } from "react";
import styles from "./form.module.css";
export default function Form({ todos, setTodos }) {
  const [todo, setTodo] = useState("");
  //   const [todos, setTodos] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
    // console.log(todos);
  }

  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.todoinput}
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button className={styles.todobutton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
