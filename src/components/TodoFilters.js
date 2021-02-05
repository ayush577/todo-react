import React, { useState } from "react";

const TodoFilter = ({
  filters,
  allTodosFilter,
  activeTodosFilter,
  completedTodosFilter,
  clearCompleted,
}) => {
  const pendingTodo = filters.length;

  const [active, setActive] = useState(0);

  const allTodos = (index) => {
    if (active !== 0) {
      setActive(0);
    }
    allTodosFilter();
  };

  const pendingTodos = () => {
    if (active !== 1) {
      setActive(1);
    }
    activeTodosFilter();
  };

  const completeTodos = () => {
    if (active !== 2) {
      setActive(2);
    }
    completedTodosFilter();
  };

  return (
    <div className="todofilter">
      <small>{pendingTodo} item left</small>
      <div className="todofilter-main">
        <div className={active === 0 ? "active" : null} onClick={allTodos}>
          All
        </div>
        <div className={active === 1 ? "active" : null} onClick={pendingTodos}>
          Active
        </div>
        <div className={active === 2 ? "active" : null} onClick={completeTodos}>
          Completed
        </div>
      </div>
      <small className="todofilter-clear" onClick={clearCompleted}>
        Clear Completed
      </small>
    </div>
  );
};

export default TodoFilter;
