import React, { useState } from "react";
import {evaluate, sqrt, square } from 'mathjs';
import "./css/calculator.css"; // You can create a CSS file for styling

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState(0);

  // Click number button begin
  const handleClick = (value) => {
    setInput(prevInput => prevInput + value);
  };
// Click number button end

// Equal number button begin
  const handleEqualTo = () => {
    try {
        // const result = new Function('return ' + input)();
        // setResult(result.toString());

      //setResult(eval(input));
      const result = evaluate(input);
      setResult(result.toString());
    } catch (error) {
      setResult("Error"); 
    }
  };

// Equal number button end
 
  // clear button begin
  const handleClear = () => {
    setInput("");
    setResult(0);
  };
// clear button end


// delete button begin
  const handleDelete = () => {
    setInput((prevInput) => prevInput.slice(0, -1));
  };
// delete button end


// square root button begin
  const handleSquareRoot = () => {
    try {
      const result = sqrt(evaluate(input)); // Use sqrt function on the evaluated input
      setResult(result.toString());
    } catch (error) {
      setResult("Error");
    }
  };

  // square root button end

  // square  button begin
  const handleSquare = () => {
    try {
      const result = evaluate(`(${input})^2`); // Use square function on the evaluated input
      setResult(result.toString());
    } catch (error) {
      setResult("Error");
    }
  };

 // square  button end

  return (
    <div className="calculator">
      <div className="display">
        <div className="input">{input}</div>
        <div className="result">{result}</div>
      </div>
      <div className="buttons">
        <button onClick={() => handleClick("1")}>1</button>
        <button onClick={() => handleClick("2")}>2</button>
        <button onClick={() => handleClick("3")}>3</button>
        <button onClick={() => handleClick("+")}>+</button>
        <button onClick={() => handleClick("4")}>4</button>
        <button onClick={() => handleClick("5")}>5</button>
        <button onClick={() => handleClick("6")}>6</button>
        <button onClick={() => handleClick("-")}>-</button>
        <button onClick={() => handleClick("7")}>7</button>
        <button onClick={() => handleClick("8")}>8</button>
        <button onClick={() => handleClick("9")}>9</button>
        <button onClick={() => handleClick("*")}>*</button>
        <button onClick={() => handleClick("0")}>0</button>
        <button onClick={ handleSquare}>^2</button> {/* Square root button */}
        <button onClick={handleEqualTo}>=</button>
        <button onClick={() => handleClick("/")}>/</button>
        <button onClick={handleSquareRoot}>√</button> {/* Square root button */}
        <button onClick={handleClear}>C</button>
        <button onClick={handleDelete}>DELE</button>
      </div>
    </div>
  );
};

export default Calculator;
