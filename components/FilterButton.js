import React from "react";

function FilterButton(props) {
  function clickTab() {
    props.isClicked(props.name);
  }

  // function styleInput() {
  //   const tabStatus = props.state.filter(({ completed }) => {
  //     return completed;
  //   });

  //   if (props.name === "Completed") {
  //     return tabStatus.length === 0
  //       ? { backgroundColor: "grey", cursor: "no-drop" }
  //       : {};
  //   }
  // }

  return (
    <button
      //style={styleInput()}
      type="button"
      className="btn toggle-btn"
      aria-pressed="true"
      onClick={clickTab}
    >
      <span>{props.name}</span>
    </button>
  );
}

export default FilterButton;
