import React from "react";

const NumberButton = numbers => {
  return (
    <>
    {
    <button className="number-button"
    onClick={() => numbers.handleInput(numbers.number)}
    >
      {numbers.number}
    </button>
    }
    </>
  );
};
export default NumberButton;
