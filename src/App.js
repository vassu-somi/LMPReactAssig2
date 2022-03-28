import React from "react";

function clickA() {
  function handleClick(event) {
    event.preventDefault();
    // alert('hi');
    console.log(event.target.value);
    // console.log("Button id is:-button-a");
  }

  return (
    <>
      <h1>Event handler</h1>
      <button
        id="button-a"
        value="Button id is:-button-a"
        onClick={handleClick}
      >
        button-a
      </button>
      <button
        id="button-b"
        value="Button id is:-button-b"
        onClick={handleClick}
      >
        button-b
      </button>
    </>
  );
}
export default clickA;
