import React from "react";

const SpecialButton = numbers => {
  return (
    <>
    {
    <button
    className="speacial-button"
    onClick={() => numbers.handleInput(numbers.special)}
     >
      {numbers.special}
    </button>
    }
    </>
  );
};

export default SpecialButton;