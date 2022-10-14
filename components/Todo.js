import React from "react";

export default function Todo(props) {
  function btnStyle() {
    return props.Completed
      ? { backgroundColor: "grey", cursor: "no-drop" }
      : {};
  }

  return (
    <li className="todo stack-small">
      <label className="todo-label" htmlFor="todo-0">
        {props.name}
      </label>
      <div className="btn-group">
        <button
          style={btnStyle()}
          type="button"
          className="btn"
          disabled={props.Completed}
          onClick={() => props.isCompleted(props.id)}
        >
          Complete
        </button>
        <button
          style={btnStyle()}
          type="button"
          className="btn"
          disabled={props.Completed}
          //onClick={}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn__danger"
          onClick={() => props.toDelete(props.id)}
        >
          Delete
        </button>
      </div>
    </li>
  );
}
