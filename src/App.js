import Buttons from "./components/Buttons";
import Input from "./components/Input";
import { useState } from "react";

import * as math from "mathjs";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  function addToText(val) {
    setText((text) => [...text, val + ""]);
  }
  function inputReset() {
    setText("");
    setResult("");
  }
  function calculateResult() {
    try {
      const input = text.join("");

      setResult(math.evaluate(input));
    } catch (err) {
      setResult("Error");
    }
  }
  function calculateSquareRoot() {
    const num = text.join("");
    setResult(math.sqrt(num));
  }

  function cosine() {
    try {
      const baby = text.join("");

      setResult(math.cos(baby));
    } catch (err) {
      setResult("Error");
    }
  }
  function backSpace() {
    setText(text.slice(0, text.length - 1));
  }
  function addMinus() {
    try {
      setResult(eval(text.join("")));
    } catch (err) {
      setResult("Error");
    }
  }
  return (
    <>
      <div className="App">
        <div className="wrapper">
          <Input result={result} text={text} />
          <div className="rows">
            <Buttons symbol="7" handleClick={addToText} />
            <Buttons symbol="8" handleClick={addToText} />
            <Buttons symbol="9" handleClick={addToText} />
            <Buttons symbol="/" color="#fc5908" handleClick={addToText} />
          </div>
          <div className="rows">
            <Buttons symbol="4" handleClick={addToText} />
            <Buttons symbol="5" handleClick={addToText} />
            <Buttons symbol="6" handleClick={addToText} />
            <Buttons symbol="*" color="#fc5908" handleClick={addToText} />
          </div>
          <div className="rows">
            <Buttons symbol="1" handleClick={addToText} />
            <Buttons symbol="2" handleClick={addToText} />
            <Buttons symbol="3" handleClick={addToText} />
            <Buttons symbol="+" color="#fc5908" handleClick={addToText} />
          </div>
          <div className="rows">
            <Buttons symbol="0" handleClick={addToText} />
            <Buttons symbol="." handleClick={addToText} />
            <Buttons symbol="-" handleClick={addToText} />
            <Buttons symbol="+/-" color="#fc5908" handleClick={addMinus} />
          </div>
          <div className="rows">
            <Buttons symbol="%" handleClick={addToText} />
            <Buttons symbol="√" handleClick={calculateSquareRoot} />
            <Buttons symbol="cos" handleClick={cosine} />
            <Buttons symbol="C" color="#fc5908" handleClick={backSpace} />
          </div>
          <div className="rows">
            <Buttons symbol="Clear" className="clear" handleClick={inputReset} />
            <Buttons symbol="=" color="#fc5908" handleClick={calculateResult} />
          </div>
        </div>
      </div>
    </>
  );
}
