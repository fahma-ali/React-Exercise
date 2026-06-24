import { useState,useEffect } from "react";
const MouseMove=()=>{
const [move,setMove]=useState({y:0,x:0});
useEffect(()=>{
    const handleMouseMove=(e) => {
        setMove({y:e.clientY,x:e.clientX});
    }
    window.addEventListener("mousemove",handleMouseMove);
      console.log(`Current position: ${move.x}, ${move.y}`); // ← THIS reads move!

    console.log("mounting")
   return ()=>{
    window.removeEventListener("mousemove",handleMouseMove)
    console.log("unmounting")
   }
},[move])
return(
    <div>
    <h6>Mouse X :{move.x}</h6>
    <h6>Mouse Y :{move.y}</h6>
    </div>
)
}
export default MouseMove