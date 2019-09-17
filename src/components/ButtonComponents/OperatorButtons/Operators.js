import React, { useState } from "react";
import { operators } from "../../../data";
import OperatorButton from "./OperatorButton";

//import any components needed
//Import your array data to from the provided data file
// STEP 2 - add the imported data to state
/* STEP 3 - Use .map() to iterate over your array data and return a button
   component matching the name on the provided file. Pass
   it any props needed by the child component */

const Operators = props => {
  const [operatorsList, setOperators] = useState(operators);

  return (
    <div className="operators-container">
      {operatorsList.map(operator => (
        <OperatorButton key={operator.char} char={operator.char} operator={operator.value}
          handleInput={props.handleInput}
        />
      ))}
    </div>
  );
};

export default Operators;
