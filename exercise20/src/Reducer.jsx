import React from 'react'

export const  initialState=[];
export const reducer=(state, action) => {
    switch (action.type) {
        case "add":
            return [...state,action.payload]
       case "edit":

            return state.map(todo=>

                todo.id === action.payload.id

                ? {
                    ...todo,
                    text: action.payload.text
                }

                : todo

            )

        case "toggle":
            return state.map((todo)=>(
                todo.id === action.payload ? {...todo,completed:!todo.completed} :todo
            ))
        case "delete":
            return state.filter((todo)=> todo.id !== action.payload)
        default:
            return state
    }
}
