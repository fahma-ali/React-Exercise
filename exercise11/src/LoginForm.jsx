import { useState } from "react";
const LoginForm = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const handleLogin = (e) => {
    e.preventDefault();
    if(userName.trim() == "" || password.trim() == "") return
    setIsLogin(true);
  };
  const logOutHandle=()=>{
    setPassword("");
    setUserName("");
    setIsLogin(false);
  }
  return (
    <div>
      {!isLogin? (
        <>
   <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div>
          <input
            type="text"
            placeholder="Enter UserName"
            onChange={(e) => setUserName(e.target.value)}
            value={userName} required
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="Password" required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      </>) : (
         <div>
        <h1>Welcome,{userName}</h1>
        <div>
          <button onClick={logOutHandle}>LogOut</button>
        </div>
      </div>
      )}
   
     
    </div>
  );
};
export default LoginForm;
