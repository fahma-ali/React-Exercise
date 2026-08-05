import React, { useState } from "react";
   const initialForm = {
     username: "",
     email: "",
     password: "",
    acceptTerms: false,
     course:''
   };
const FormMultipleInput = () => {
 
    const [formData, setFormData] = useState(initialForm);
    const hadleChanges = (e) => {
        const { name, value,type, checked } = e.target;
        setFormData((preData) => ({ ...preData, [name]: type === 'checkbox' ? checked : value }))
        console.log(formData)
    }
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.acceptTerms) {
      alert("Please Accept Our Terms");
      return;
    }

    console.log("Registered successfully");
    console.log(formData);

    setFormData(initialForm);
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="">
          UserName:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={hadleChanges}
          />
        </label>
      </div>
      <div>
        <label htmlFor="">
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={hadleChanges}
          />
        </label>
      </div>
      <div>
        <label htmlFor="">
          Password:
          <input
            type="text"
            name="password"
            value={formData.password}
            onChange={hadleChanges}
          />
        </label>
      </div>
      <div>
        <select name="course" onChange={hadleChanges} value={formData.course}>
          <option value="js">javascript</option>
          <option value="php">php</option>
          <option value="react">react frameword</option>
        </select>
      </div>
      <div>
        <button type="submit">submit</button>
      </div>
      <div>
        <input
          type="checkbox"
          name="acceptTerms"
          checked={formData.acceptTerms}
          onChange={hadleChanges}
        />
        <label>Please Accept Our Terms</label>
      </div>
    </form>
  );
};

export default FormMultipleInput;
