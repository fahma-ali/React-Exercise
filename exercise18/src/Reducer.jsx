import React from 'react'

export const initialState=[];
export const reducer = (state , action) => {
  switch (action.type) {
    case "add":
      return [...state,action.payload]
    case "edit":
      return state.map((contact)=>(
          contact.id == action.payload.id ? 
          {...contact,name:action.payload.name,
            email:action.payload.email,phone:action.payload.phone} :contact
      ))
    case 'delete':
      return state.filter((contact)=>(
        contact.id !== action.payload
      ))
    case 'favorite':
      return state.map((contact)=>(contact.id === action.payload ?
         {...contact,favorite:!contact.favorite} : contact))
    default:
      return state
  }
}
