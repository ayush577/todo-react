import React from "react";
// import ReactDOM from "react-dom";

const CreateTodo = ({ values, handleChangeEvent, handleSubmit }) => {
  // console.log(values, handleChangeEvent, handleSubmit);
  return (
    <form onSubmit={handleSubmit}>
      <div className="createtodo">
        <div className="round">
          <input
            key="complete"
            name="complete"
            type="checkbox"
            id="checkbox"
            checked={values.complete}
            onChange={handleChangeEvent}
          />
          <label htmlFor="checkbox"></label>
        </div>
        <input
          key="todo"
          name="todo"
          type="text"
          id="addtodo"
          value={values.todo}
          onChange={handleChangeEvent}
        />
      </div>
    </form>
  );
};

export default CreateTodo;
