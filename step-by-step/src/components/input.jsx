import React from 'react'
import { useState } from "react";

function Input(props){
  const [name, setName] = useState("");
  //const [email, setEmail] = useState("");

  const handleChange = (e) => {

    setName(e.target.value);
    //props.onSubmit(name);
}

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit(name)
    //onNext({ name, email });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={handleChange}
        />
      </label>
<br />
      <label>
        Email:
        <input
          type="email"
        />
      </label>
      <br />
      
      <button type="submit">Next</button>
    </form>
  );
}


export default Input
