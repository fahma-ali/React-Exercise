import { useState, useReducer } from "react";
const initialState={
    step: 1,
    firstName: "",
    lastName:"",
    email: "",
    phone: "",
}
const reducer=(state,action)=>{
    switch(action.type){
        case 'update_field':
            return {
                ...state,[action.field]:action.value,
            }
        case 'next':
            return {...state,step:state.step+1};
        case 'back':
            return {...state,step:state.step-1}
        case 'reset_form':
            return initialState
        
         default:
      return state;
    }
}
const RegisterMultForm = () => {
    const[state,dispatch]=useReducer(reducer,initialState);
    const handleConfirm =()=>{
        alert("Registration Seccessfull")
        dispatch({type:"reset_form"})
    }
  return (
  <div>
    {
        state.step == 1 ? 
        ( 
             <div>
  <h1>step:{state.step} Profile</h1>
     <div>
  <label htmlFor="name">First Name:</label> 
            <input type="text" placeholder="First Name" value={state.firstName}
             onChange={(e)=>dispatch({type:'update_field',field:'firstName',value:e.target.value})}/>
         
       
     </div>
  <div>
          <label htmlFor="name">Last Name:
            <input type="text" placeholder="Last Name"  value={state.lastName}
            onChange={(e)=>dispatch({type:'update_field',field:'lastName',value:e.target.value})}/>
        </label>
      </div>
            <button onClick={()=>dispatch({type:'next'})}>Next</button>

    </div>
) :state.step ==2 ?
(<div> 
      <h1>step:{state.step} Contact</h1>

      <div>
        <label htmlFor="email">Email:</label>
        <input type="text"  placeholder="Email" value={state.email} 
        onChange={(e)=>dispatch({type:'update_field',field:'email',value:e.target.value})}/>
         </div>
         <div>
         <label htmlFor="phone">phone:</label>
        <input type="text"  placeholder="phone" value={state.phone}
         onChange={(e)=>dispatch({type:'update_field',field:'phone',value:e.target.value})}/>
         </div>

      <button onClick={()=>dispatch({type:'next'})}>Next</button>
      <button onClick={()=>dispatch({type:'back'})}>Back</button>
      </div>)
     :( <div>
        <h1>Step {state.step} Review</h1>
        <div>
        <strong>First Name:</strong>
        <span>{state.firstName}</span>
        </div>  
         <div>
        <strong>Last Name:</strong>
        <span>{state.lastName}</span>
        </div>    
        <div>
        <strong>Email:</strong>
        <span>{state.email}</span>
        </div> 
        <div>
        <strong>Phone:</strong>
        <span>{state.phone}</span>
        </div>
        <button onClick={handleConfirm}>Confirm</button>
              <button onClick={()=>dispatch({type:"back"})}>Back</button>

      </div>
      )
    }
  
   
   
  </div>
  )
};
export default RegisterMultForm
