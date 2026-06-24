import { useState, useEffect } from "react";

const TitleChange = () => {
  const [greeting, setGreeting] = useState("hello");
  const [name, setName] = useState("");
  useEffect(() => {
    document.title = name !== "" ? `${greeting},${name}` : "Welcome";
  }, [name,greeting]);

  return (
    <div>
      <div>
        <input
          type="name"
          name=""
          id=""
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
      </div>
      <div>
        <input
          type="text"
          name="greeting"
          id="greeting"
          onChange={(e) => setGreeting(e.target.value)}
          value={greeting}
        />
      </div>
    </div>
  );
};
export default TitleChange;
