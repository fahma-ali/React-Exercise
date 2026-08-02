import React, { useContext } from "react";
import TodoContext from "./TodoContext";

export const TodoForm = ({ editTodo, setEditTodo, text, setText }) => {
  const { dispatch } = useContext(TodoContext);

  const handleAdd = () => {
    if (!text.trim()) return;

    if (editTodo) {
      dispatch({
        type: "edit",
        payload: {
          id: editTodo.id,
          text,
        },
      });

      setEditTodo(null);
    } else {
      dispatch({
        type: "add",
        payload: {
          id: Date.now(),
          text,
          completed: false,
        },
      });
    }

    setText("");
  };

  return (
    <div className="text-center pt-6">
      <h1 className="text-3xl font-bold text-gray-800">My Todo List</h1>

      <div className="mt-6">
        <input
          type="text"
          placeholder="Enter Todo List"
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-3/5 border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-violet-500"
        />

        <button
          onClick={handleAdd}
          className="ml-3 bg-violet-600 hover:bg-violet-700 text-white px-6 py-2 rounded-lg"
        >
          {editTodo ? "Update" : "Add"}
        </button>
      </div>
    </div>
  );
};
