import React from 'react'
import { useState } from "react"
export const useForm = (initial) => {
    const [value, setValue] = useState(initial)
    const handleChange = (e) => {
        const{name,value}=e.target;
        setValue((pre)=>({
            ...pre,
            [name]:value
        }))
    }
    const reset =()=>{
        setValue(initial)
    }
    return {value,handleChange,reset}
}
