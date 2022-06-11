import React, { useEffect, useMemo, useState } from "react";
import { TodoForm } from "../../components/TodoForm/TodoForm";
import TodoItem from "../../components/TodoItem/TodoItem";
import "./TodoPage.scss";

export const TodoPage = () => {
  const [todos, setTodos] = useState([]);

  useMemo(() => {
    if (typeof Storage === "undefined") return;
    if (localStorage.getItem("todos") === null) return;

    setTodos(JSON.parse(localStorage.getItem("todos")));
  }, []);

  useEffect(() => {
    if (typeof Storage !== "undefined") {
      // set item to local storage
      localStorage.setItem("todos", JSON.stringify(todos));
    }
  }, [todos]);

  const handleAddTodo = (e) => {
    e.preventDefault();

    if (e.target.elements.text.value.length === 0) return;

    const newTodo = {
      id: Date.now(),
      text: e.target.elements.text.value,
      completed: false,
    };

    setTodos([newTodo, ...todos]);

    e.target.elements.text.value = "";

    // set item in local storage
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (id) => {
    console.log(`Todo with id ${id} completed!`);
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  return (
    <div className="todo-page">
      <h2>TODO LIST</h2>
      {/* FORM */}
      <TodoForm onSubmitTodo={handleAddTodo} />
      {/* TODO LIST */}
      <div className="todo-list">
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              onRemove={handleDelete}
              onComplete={handleComplete}
            />
          );
        })}
      </div>
    </div>
  );
};
