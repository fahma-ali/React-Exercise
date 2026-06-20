import { useState } from "react"

  const ToggleButton=()=>{
    const[isOn,setOn]=useState(true)
    const TurnOn=()=>{
        setOn(!isOn)
    }
    return (
        <>
        <h4 >the button {isOn ? "ON" : "OFF"}</h4>
        <button onClick={TurnOn}>Turn {isOn ? "OFF" : "ON"}</button>
            </>
    )
  }
  export default ToggleButton