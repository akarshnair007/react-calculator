import React, { useState } from "react";
import "./Calculator.css";

const Calculator = () => {
  const [display, setDisplay] = useState("");

  const handleCLick = (value) => {
    setDisplay(display + value);
  };

  const clearHandle = () => {
    setDisplay("");
  };

  const outputHandle = () => {
    try {
      const result = eval(display);
      const formattedResult = Number(result.toFixed(3)); // Limit to 3 decimal places
      setDisplay(formattedResult.toString());
    } catch (error) {
      setDisplay("Invalid Input");
    }
  };

  const deleteHandle = () => {
    // Remove the last character from the display
    setDisplay(display.slice(0, -1));
  };

  return (
    <div className="cal_body">
      <div className="output_section">{display}</div>
      <div className="type_section">
        <div className="row">
          <button className="col_number" onClick={() => handleCLick("1")}>
            1
          </button>
          <button className="col_number" onClick={() => handleCLick("2")}>
            2
          </button>
          <button className="col_number" onClick={() => handleCLick("3")}>
            3
          </button>
          <button className="col_symbol" onClick={() => handleCLick("+")}>
            +
          </button>
        </div>

        <div className="row">
          <button className="col_number" onClick={() => handleCLick("4")}>
            4
          </button>
          <button className="col_number" onClick={() => handleCLick("5")}>
            5
          </button>
          <button className="col_number" onClick={() => handleCLick("6")}>
            6
          </button>
          <button className="col_symbol" onClick={() => handleCLick("-")}>
            -
          </button>
        </div>

        <div className="row">
          <button className="col_number" onClick={() => handleCLick("7")}>
            7
          </button>
          <button className="col_number" onClick={() => handleCLick("8")}>
            8
          </button>
          <button className="col_number" onClick={() => handleCLick("9")}>
            9
          </button>
          <button className="col_symbol" onClick={() => handleCLick("*")}>
            *
          </button>
        </div>

        <div className="row">
          <button className="col_number" onClick={() => handleCLick("0")}>
            0
          </button>
          <button className="col_symbol" onClick={() => handleCLick("/")}>
            /
          </button>
          <button className="col_symbol" onClick={() => handleCLick(".")}>
            .
          </button>
          <button className="col_symbol" onClick={clearHandle}>
            AC
          </button>
        </div>

        <div className="row">
          <button className="col_del" onClick={deleteHandle}>
            Delete
          </button>
          <button className="col_equals" onClick={outputHandle}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
