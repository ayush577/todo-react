import React from "react";
// import ReactDOM from "react-dom";

const CreateTodo = () => {
  return (
    <div className="createtodo__wrapper">
      <label for="todo">Create Todo</label>
      <input type="text" id="todo" name="todo" />
    </div>
  );
};

export default CreateTodo;
