import { useState } from "react"

const DaynamicCount=()=>{
    const[count,setCount]=useState(0);
    const handleIncrement=()=>{
        setCount((pre)=>pre+1);
    }
    const handleDecrement=()=>{
       setCount((pre)=>{
        if(pre>0){
            return pre-1;
        }
        return 0;
       })
      
    }
    return (
 <div>
            <h2>Count:{count}</h2>
            <div>
                <button disabled={count === 0}  onClick={handleDecrement}>Decrement</button>
                <button  onClick={handleIncrement}>Increment</button>
            </div>
            </div>
    )
}
export default DaynamicCount