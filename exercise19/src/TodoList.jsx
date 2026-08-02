import React from 'react'
import { useContext } from "react"
import TodoContext from './TodoContext'
import TodoItem from './TodoItem'
import style from './TodoList.module.css'
export const TodoList = ({setEditTodo,setText}) => {
    const {state} =useContext(TodoContext)

  return (
    <ul className={style.todoList}>
        {state.map((todo)=>(
            <TodoItem key={todo.id} todo={todo} setEditTodo={setEditTodo} setText={setText}/>
        ))}
    </ul>
  )
}
