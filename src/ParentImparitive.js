import React, { useRef } from "react";
import ChildImparitive from "./ChildImparitive";

const ParentImparitive = () => {
  let buttonRef = useRef("hi");
  let inputref = useRef("hello");

  function focusValue() {
    buttonRef.current.focus();
  }
  function forwordValue() {
    inputref.current.value = "This is Forword Reference";
  }

  return (
    <>
      <ChildImparitive ref={inputref} />
      <h1>Hello This is a ParentImparitive</h1>
      <input
        name="name"
        ref={buttonRef}
        // value={buttonRef.current}
        // onChange={(e) => {
        //   setValue(e.target.value);
        // }}
      />
      <button onClick={focusValue}>focus on Input Field</button>
      <button onClick={forwordValue}>ForwordValue</button>
      {/* <button
        onChange={(e) => {
          setValue(e.target.value);
        }}
      >
        Change The Value
      </button> */}
    </>
  );
};

export default ParentImparitive;
