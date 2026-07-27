import React from "react";
import { useState } from "react";
import ContactContext from "./ContactContext";
import { useContext } from "react";
export const ContactForm = ({contact,setContact,setEditInfo,editInfo}) => {
    const{ dispatch }=useContext(ContactContext);
    const onchangeHandle=(e)=>{
        setContact({
            ...contact,
            [e.target.name]:e.target.value
        })
    }
   const handleSubmit = (e) => {
    e.preventDefault();

    if (contact.name.trim()) {
      if(editInfo){
        dispatch({
          type: "edit",
          payload: contact
        });
          setEditInfo(null);

      }else
      {
            const newContact = {
            id: Date.now(),
            ...contact,
            favorite: false
        };

        dispatch({
            type: "add",
            payload: newContact
        });
      }
    

        setContact({
            name: "",
            email: "",
            phone: ""
        });
    }
};
  return (
    <form onSubmit={handleSubmit}>
        <h1>Contact Managment</h1>
      <h4>Add New Contact</h4>
      <div>
        <label htmlFor="">Name:</label>
        <input type="text" name="name" onChange={onchangeHandle} value={contact.name}/>
      </div>
      <div>
        <label htmlFor="">Email:</label>
        <input type="text"name="email" onChange={onchangeHandle} value={contact.email} />
      </div>
      <div>
        <label htmlFor="">Phone:</label>
        <input type="text" name="phone" onChange={onchangeHandle} value={contact.phone}/>
      </div>
      <div>
        <button type="submit">{editInfo? 'Update' : 'Add'}</button>
      </div>
    </form>
  );
};
