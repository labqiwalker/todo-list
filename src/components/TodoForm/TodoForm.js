import React from "react";
import "../TodoForm/TodoForm.css";

export const TodoForm = ({onSubmitTodo}) => {

  return (
    <div>
      <form className="todo-form" onSubmit={(e) => onSubmitTodo(e)}>
        <input
          typeof="text"
          placeholder="Add New Task ..."
          name="text"
          className="todo-input"
        />

        <button className="todo-button">+</button>
      </form>
    </div>
  );
};
