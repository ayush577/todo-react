import React from "react";
import { X } from "react-feather";

const ItemList = ({ items, handleRemoveTodo, updateTodoStatus }) => {
  // console.log(items, handleRemoveTodo);

  return items.map((item) => (
    <div className="list__container" key={item.id}>
      <div className="round">
        <input
          name={item.id}
          checked={item.complete}
          type="checkbox"
          id={item.id}
          onChange={() => updateTodoStatus(item.id)}
        />
        <label htmlFor={item.id}></label>
      </div>
      <p
        className="list__container-todo"
        style={
          item.complete === true
            ? { textDecoration: "line-through", opacity: "0.5" }
            : { textDecoration: "none" }
        }
      >
        {item.todo}
      </p>
      <X
        className="list__container-close"
        size={24}
        onClick={() => handleRemoveTodo(item.id)}
      />
    </div>
  ));
};

export default ItemList;
