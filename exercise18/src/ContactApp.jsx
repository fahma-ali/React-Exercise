import React from 'react'
import { useReducer,useState } from "react"
import ContactContext from './ContactContext'
import { ContactForm } from './ContactForm'
import { initialState, reducer } from './Reducer'
import { ContactList } from './ContactList'
export const ContactApp = () => {
    const[state,dispatch] = useReducer(reducer,initialState)
    const [editInfo, setEditInfo] = useState(null);
    const [contact,setContact]=useState({name:"",email:"",phone:"",})


  return (
    <ContactContext.Provider value={{state,dispatch}}> 
       <ContactForm editInfo={editInfo} setEditInfo={setEditInfo} contact={contact} setContact={setContact}/>
       <ContactList setEditInfo={setEditInfo} editInfo={editInfo} setContact={setContact} />
    </ContactContext.Provider>
  )
}
