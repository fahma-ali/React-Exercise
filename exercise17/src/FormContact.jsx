import React from "react";
import { useForm } from "./useForm";
export const FormContact = () => {
    const {value,handleChange,reset}=useForm({name:'',email:'',message:'',phone:''})
    const submitHandle =(e)=>{
        e.preventDefault()
        console.log("submit seccussfull",value)
        reset();
    }
  return (
    <form onSubmit={submitHandle}>
      <label htmlFor="">
        Name:
        <input
          type="text"
          name="name"
          value={value.name}
          onChange={handleChange}
        />
      </label>
      <div>
        <label htmlFor="">
          emai:
          <input
            type="text"
            name="email"
            value={value.email}
            onChange={handleChange}
          />
        </label>
      </div>{" "}
      <div>
        <label htmlFor="">
          phone:
          <input
            type="text"
            name="phone"
            value={value.phone}
            onChange={handleChange}
          />
        </label>
      </div>
      <label>
        Message:
        <textarea
          name="message"
          value={value.message}
          onChange={handleChange}
        />
      </label>
      <div>
        <button type="submit">submit</button>
      </div>
    </form>
  );
};
