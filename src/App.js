import React, { useState } from "react";

function clickA() {
  const { button1, setButton1 } = useState("");
  const { button2, setButton2 } = useState("");

  function handleClick(Event) {
    event.preventDefault();
    alert('hi');
  }

  return (
    <>
    <input type="text" onSubmit={handleClick}/>
      <h1>Event handler</h1>
      <button
        id="button-a"
        value={button1}
        onChange={(event) =>setButton1{event.target.value}}>
        button-a
      </button>
      <button
        id="button-b"
        value={button2}
        onChange={(event) =>setButton2{event.target.value}}>
              button-b
      </button>
    </>
  );
}
export default clickA;
