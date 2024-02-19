import React, { useState } from "react";
import Form from "./Form";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [todos, setTodos] = useState([]);
  const completedTodos = todos.filter((todo) => todo.done).length;
  const totalTodos = todos.length;

  return (
    <div className="Todo">
      <Form todos={todos} setTodos={setTodos} />
      {/* {console.log(todos)} */}
      <TodoList todos={todos} setTodos={setTodos} />
      {/* <h1>Completed Todos: {completedTodos}</h1> */}
      <Footer completedTodos={completedTodos} totalTodos={totalTodos} />
    </div>
  );
}
