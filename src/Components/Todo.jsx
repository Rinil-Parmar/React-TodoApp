import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
export default function Todo() {
  const [todos, setTodos] = useState([]);

  return (
    <div className="Todo">
      {/* <h1>Todo</h1> */}
      <Form todos={todos} setTodos={setTodos} />
      {/* {console.log(todos)} */}
      <TodoList todos={todos} />
    </div>
  );
}
