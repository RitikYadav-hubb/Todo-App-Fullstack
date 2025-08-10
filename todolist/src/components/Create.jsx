import React, { useState } from "react";
import axios from "axios";
import "./Create.css";

const Create = () => {
  const [task, setTask] = useState("");

  const handleAdd = () => {
    axios
      .post("http://localhost:3001/add", { task: task })
      .then((result) => location.reload())
      .catch((error) => console.log(error));
  };

  return (
    <div className="InputContainer">
      <div className="InputField">
        <input
          type="text"
          className="Input"
          placeholder="Enter a task"
          onChange={(e) => {
            setTask(e.target.value);
          }}
        />
        <button type="button" className="Button" onClick={handleAdd}>
          +
        </button>
      </div>
    </div>
  );
};

export default Create;
