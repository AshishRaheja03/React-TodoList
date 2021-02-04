import React from "react";

function TodoForm(props) {
  return (
    <form className="m-auto d-flex">
      <input
        id="todoInput"
        type="text"
        placeholder="Enter a task"
        onChange={props.onChange}
        value={props.inputVal}
      />
      <button id="addBtn" type="submit" onClick={props.onSubmit}>
        <i className="lni lni-circle-plus"></i>
      </button>
      <button type="submit" id="resetBtn">
        Reset
      </button>
    </form>
  );
}

export default TodoForm;
