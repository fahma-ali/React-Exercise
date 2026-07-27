import React from 'react'
import ContactContext from './ContactContext'
import { useContext } from 'react'
import { ContactItem } from './ContactItem'
export const ContactList = ({setEditInfo,setContact}) => {
    const {state}=useContext(ContactContext)
  return (
    <ul>
        {state && state.map((list)=>(
                <ContactItem key={list.id} list={list} setEditInfo={setEditInfo} setContact={setContact}/>
            ))
        }
    </ul>
  )
}
