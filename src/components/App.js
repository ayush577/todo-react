import React, { useState, useEffect } from "react";
// import ReactDOM from 'react-dom';
import "../assets/style/Global.css";
import moon from "../assets/images/icon-moon.svg";
import sun from "../assets/images/icon-sun.svg";
import CreateTodo from "./CreateTodo";
import ItemList from "./ItemList";
import TodoFilter from "./TodoFilters";

const App = () => {
  let initialTodo = [
    {
      id: 1,
      complete: true,
      todo: "working from home",
    },
    {
      id: 2,
      complete: false,
      todo: "Watch one piece episode",
    },
    {
      id: 3,
      complete: true,
      todo: "Come on let's go",
    },
  ];

  const [theme, setTheme] = useState(true);
  const [values, setValues] = useState({ complete: false, todo: "" });
  const [todos, setTodos] = useState(initialTodo);

  const themeIcon = theme ? moon : sun;

  useEffect(() => {
    let storeTodos = [
      {
        id: 1,
        complete: true,
        todo: "working from home",
      },
      {
        id: 2,
        complete: false,
        todo: "Watch one piece episode",
      },
      {
        id: 3,
        complete: true,
        todo: "Come on let's go",
      },
    ];

    const getTodos = JSON.parse(localStorage.getItem("todos"));

    if (getTodos) {
      setTodos(getTodos);
    }

    if (!getTodos) {
      localStorage.setItem("todos", JSON.stringify(storeTodos));
    }
  }, []);

  const handleChangeEvent = (event) => {
    const { name, value, type, checked } = event.target;
    setValues((prevValues) => ({
      ...prevValues,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    let currentTodo = [...todos];
    let addTodo = { ...values };
    addTodo.id = Math.floor(100000000 + Math.random() * 900000000);

    currentTodo = [...currentTodo, addTodo];

    let getTodos = JSON.parse(localStorage.getItem("todos"));

    getTodos.push(addTodo);

    localStorage.setItem("todos", JSON.stringify(getTodos));

    setTodos(currentTodo);

    setValues({ complete: false, todo: "" });
  };

  const handleRemoveTodo = (id) => {
    console.log("working", id);
    let deleteTodo = [...todos];
    deleteTodo = deleteTodo.filter((el) => el.id !== id);
    // console.log(deleteTodo);
    localStorage.setItem("todos", JSON.stringify(deleteTodo));
    setTodos(deleteTodo);
  };

  const updateTodoStatus = (id) => {
    const updateTodo = [...todos];
    updateTodo.forEach((el) => {
      if (el.id === id) {
        el.complete = el.complete ? false : true;
      }
    });
    // console.log(updateTodo);
    localStorage.setItem("todos", JSON.stringify(updateTodo));
    setTodos(updateTodo);
  };

  //* Filter Todo

  const alltodos = JSON.parse(localStorage.getItem("todos")) || initialTodo;
  const pendingTodo = alltodos.filter((item) => !item.complete);
  const completeTodo = alltodos.filter((item) => item.complete);

  const allTodosFilter = () => {
    console.log(alltodos);
    setTodos(alltodos);
  };

  const activeTodosFilter = () => {
    console.log(pendingTodo);
    setTodos(pendingTodo);
  };

  const completedTodosFilter = () => {
    console.log(completeTodo);
    setTodos(completeTodo);
  };

  const clearCompleted = () => {
    localStorage.setItem("todos", JSON.stringify(pendingTodo));
    setTodos(pendingTodo);
  };

  return (
    <div className={`App ${theme ? "light-theme" : "dark-theme"}`}>
      <div className="container">
        <div className="heading">
          <span>TODO</span>
          <img
            src={themeIcon}
            alt="themeicon"
            onClick={() => setTheme((prevTheme) => !prevTheme)}
          />
        </div>
        <CreateTodo
          values={values}
          handleChangeEvent={handleChangeEvent}
          handleSubmit={handleSubmit}
        />
        <div className="todolist">
          <ItemList
            items={todos}
            handleRemoveTodo={handleRemoveTodo}
            updateTodoStatus={updateTodoStatus}
          />
          <TodoFilter
            filters={pendingTodo}
            allTodosFilter={allTodosFilter}
            activeTodosFilter={activeTodosFilter}
            completedTodosFilter={completedTodosFilter}
            clearCompleted={clearCompleted}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
