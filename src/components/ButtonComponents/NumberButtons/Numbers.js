import React, {useState} from "react";

//import any components needed
import NumberButton from "./NumberButton";
//Import your array data to from the provided data file
import {numbers} from "../../../data.js";
const Numbers = prop => {
  // STEP 2 - add the imported data to state
  const[numsArray,setNumsArray] = useState(numbers);
  console.log('numbers', {numsArray})
  return (
    <div className="numbers-container">
      {numsArray.map(number => (
        <NumberButton key = {number} number={number} handleInput = {prop.handleInput}
      />
      ))}
  </div>
);
};
export default Numbers;

