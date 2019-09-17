import React, { useState } from "react";
import "./App.css";

import Numbers from "../src/components/ButtonComponents/NumberButtons/Numbers";
import Operators from "../src/components/ButtonComponents/OperatorButtons/Operators";
import Specials from "../src/components/ButtonComponents/SpecialButtons/Specials";
import Display from "../src/components/DisplayComponents/Display";
import Logo from "./components/DisplayComponents/Logo";

function App() {
  const [numbers, updateDisplay] = useState("");

  function handleInput(input) {
    switch (input) {
      case "C":
        updateDisplay("");
        break;

      case "+/-":
        if (!numbers) {
          updateDisplay(numbers);
        } else {
          let newDisplay = "";
          numbers.slice(0, 1) !== "-"
            ? (newDisplay = `-${numbers}`)
            : (newDisplay = numbers.slice(1, numbers.length));
          updateDisplay(newDisplay);
        }
        break;

      case "%":
      case "+":
      case "-":
      case "*":
      case "/":
        updateDisplay(numbers.concat(input));
        break;

      case "=":
        updateDisplay(eval(numbers).toString());
        break;

      default:
        updateDisplay(numbers.concat(input));
    }
  }

  return (
    <div className="container">
      <Logo />
      <div className="App">
        <Display display={numbers} />
         <Specials handleInput={handleInput} />
            <Numbers handleInput={handleInput} />
          </div>
         <Operators handleInput={handleInput} />
          </div>
  
  );
}

export default App;