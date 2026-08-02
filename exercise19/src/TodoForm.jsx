import React, { useContext, useEffect } from "react";
import { useState } from "react";
import TodoContext from "./TodoContext";
import style from './TodoForm.module.css'
export const TodoForm = ({ editTodo, setEditTodo ,text,setText}) => {
  const { dispatch } = useContext(TodoContext);

  const handleAdd = () => {
    console.log("editTodo:", editTodo);
    console.log("text:", text);
    if (text.trim()) {
      if (editTodo) {
        dispatch({
          type: "edit",
          payload: {
            id: editTodo.id,
            text: text,
          },
        });
        setEditTodo(null);
      } else {
        const newTodo = {
          id: Date.now(),
          text: text,
          completed: false,
        };
        dispatch({ type: "add", payload: newTodo });
      }
      setText('')
    }
   
  };
  return (
    <div className={style.todoList}>
      <h1 >My Todo List</h1>
      <input className={style.todoInput}
        type="text"
        placeholder="Enter Todo List"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={handleAdd} className={style.addButton}>{editTodo ? "Update" : "Add"}</button>
    </div>
  );
};
