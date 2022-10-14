import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (name.length > 0) {
          props.addTask(name);
          setName("");
        }
      }}
    >
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        required
        value={name}
        onChange={(e) => {
          setName((prev) => (prev = e.target.value));
        }}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
}

export default Form;
