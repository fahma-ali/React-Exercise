import React from 'react'
import { useReducer,useState } from 'react'
import TodoContext from './TodoContext'
import { reducer,initialState } from './Reducer'
import { TodoForm } from './TodoForm'
import { TodoList } from './TodoList'
import style from "./TodoApp.module.css"
export const TodoApp = () => {
    const [state,dispatch]=useReducer(reducer,initialState)
    const [editTodo, setEditTodo] = useState(null);
      const [text, setText] = React.useState("");

  return (
    <div className={style.todoApp}>
        <TodoContext.Provider value={{state,dispatch}}> 
            <TodoForm editTodo={editTodo} setEditTodo={setEditTodo} setText={setText} text={text}/>
            <TodoList setEditTodo={setEditTodo}  setText={setText}/>
        </TodoContext.Provider>
    </div>
  )
}
