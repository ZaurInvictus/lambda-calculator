import React from "react";

const OperatorButton = numbers => {
  return (
    <>
      {
        /* Display a button element rendering the data being passed down from the parent container on props */
        <button
          className="operator-button"
          onClick={() => numbers.handleInput(numbers.operator)}
        >
          {numbers.char}
        </button>
      }
    </>
  );
};

export default OperatorButton;
