import { useState } from "react";
import UserList from "./UserList";
const App = () => {
  const users = [
    {
      id: crypto.randomUUID(),
      name: "fahma",
      email: "fahma@gmail.com",
    },
    {
      id: crypto.randomUUID(),
      name: "iqra",
      email: "iqra@gmail.com",
    },
       {
      id: crypto.randomUUID(),
      name: "nasra",
      email: "nasra@gmail.com",
    },
  ];
  return (
    <UserList users= {users}/>
  );
};
export default App;
