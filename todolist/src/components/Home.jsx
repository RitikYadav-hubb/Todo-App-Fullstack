import React, { useEffect } from "react";
import "./Home.css";
import Create from "./Create";
import { useState } from "react";
import axios from "axios";
import { CiTrash } from "react-icons/ci";
import { BsCircleFill } from "react-icons/bs";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Home = () => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/get")
      .then((result) => setTodos(result.data))
      .catch((error) => console.error(error));
  }, []);

  const handleClick = (id) => {
    axios
      .put(`http://localhost:3001/update/` + id)
      .then((result) => {
        location.reload();
      })
      .catch((error) => console.error(error));
  };
  const deleteTodo = (id) => {
    axios
      .delete(`http://localhost:3001/delete/` + id)
      .then((result) => location.reload())
      .catch((error) => console.error(error));
  };
  return (
    <div>
      <h1 className="header">Welcome to Todo List</h1>
      <Create />
      <br />
      <div className="todo-list">
        {todos.length === 0 ? (
          <h1 className="empty">No task</h1>
        ) : (
          todos.map((todo) => (
            <div className="task">
              <div className="check-box" onClick={() => handleClick(todo._id)}>
                {todo.Done ? (
                  <BsFillCheckCircleFill className="icon" />
                ) : (
                  <BsCircleFill className="icon" />
                )}

                <p className={todo.Done ? "line-through" : ""}>{todo.task}</p>
                <span className="icon2">
                  <CiTrash
                    className="icon"
                    onClick={() => deleteTodo(todo._id)}
                  />
                </span>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Home;
