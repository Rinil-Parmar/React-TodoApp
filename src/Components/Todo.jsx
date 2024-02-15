import React, { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setTodos([...todos, todo]);
    setTodo("");
    // console.log(todos);
  }

  return (
    <div className="Todo">
      <h1>Todo</h1>
      <form onSubmit={handleSubmit}>
        <input
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
          type="text"
        />
        <button type="submit">Add</button>
      </form>

      {/* {console.log(todos)} */}
      
        {todos.map((item, index) => (
          <TodoItem key={index} item={item} />
        ))}
    </div>
  );
}
