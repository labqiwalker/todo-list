import React from "react";
import { RiCloseCircleLine } from "react-icons/ri";
import { FiCheck } from "react-icons/fi";
import "./TodoItem.css";

function TodoItem({ todo, onRemove, onComplete }) {
  return (
    <div className="todo">
      <span className={`todo-item ${todo.completed ? "completed" : ""}`}>
        {todo.text}
      </span>

      <button onClick={() => onComplete(todo.id)} className="complete-btn">
        <FiCheck className="fas fa-check" />
      </button>

      <button onClick={() => onRemove(todo.id)} className="trash-btn">
        <RiCloseCircleLine className="fas fa-trash" />
      </button>
    </div>
  );
}

export default TodoItem;
