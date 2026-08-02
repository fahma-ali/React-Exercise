import React, { useContext } from "react";
import TodoContext from "./TodoContext";
import TodoItem from "./TodoItem";

export const TodoList = ({ setEditTodo, setText }) => {
  const { state } = useContext(TodoContext);

  return (
    <ul className="list-none p-0 mt-5">
      {state.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          setEditTodo={setEditTodo}
          setText={setText}
        />
      ))}
    </ul>
  );
};
