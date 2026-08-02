import React, { useContext } from "react";
import { FaTrash, FaEdit } from "react-icons/fa";
import TodoContext from "./TodoContext";

const TodoItem = ({ todo, setEditTodo, setText }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li className="flex justify-between items-center bg-gray-100 p-4 mx-8 my-3 rounded-lg">
      <div className="flex items-center gap-4 flex-1">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() =>
            dispatch({
              type: "toggle",
              payload: todo.id,
            })
          }
          className="w-4 h-4"
        />

        <span
          className={`text-xl w-52 break-words ${
            todo.completed ? "line-through text-gray-500" : ""
          }`}
        >
          {todo.text}
        </span>
      </div>

      <div className="flex gap-3">
        <button
          onClick={() =>
            dispatch({
              type: "delete",
              payload: todo.id,
            })
          }
          className="text-red-500 hover:text-red-700"
        >
          <FaTrash />
        </button>

        <button
          onClick={() => {
            setEditTodo(todo);
            setText(todo.text);
          }}
          className="text-blue-500 hover:text-blue-700"
        >
          <FaEdit />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
