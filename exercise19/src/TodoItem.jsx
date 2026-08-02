import React, { useContext } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import TodoContext from "./TodoContext";
import styles from "./TodoItem.module.css";

const TodoItem = ({ todo, setEditTodo, setText }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li className={styles.item}>
      <div  className={styles.left}>
        <input
          type="checkbox"
          className={styles.checkboxToggle}
          checked={todo.completed}
          onChange={() => dispatch({ type: "toggle", payload: todo.id })}
        />

        <span
          className={`${styles.text} ${todo.completed ? styles.completed : ""}`}
        >
          {todo.text}
        </span>
      </div>
  <div className={styles.actions}>
         <button onClick={() => dispatch({ type: "delete", payload: todo.id })}>
          <FaTrash />
        </button>

        <button
          onClick={() => {
            setEditTodo(todo);
            setText(todo.text);
          }}
        >
          <FaEdit />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
