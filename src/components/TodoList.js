import React from "react";

function TodoList(props) {
  return (
    <div id="todos" className="mt-3 p-1">
      <ul className="my-3 p-0">
        {props.todosList.map((i, index) => {
          return (
            <div
              key={index}
              className="d-flex justify-content-between todoItems my-3"
            >
              <li className="px-2">{i}</li>
              <button className="delBtn" onClick={props.onClick} id={index}>
                Delete
              </button>
            </div>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
