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
    const input = text.join("");
    setResult(math.evaluate(input));
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
            <Buttons symbol="=" color="#fc5908" handleClick={calculateResult} />
          </div>
          <Buttons symbol="Clear" color="#fc5908" handleClick={inputReset} />
        </div>
      </div>
    </>
  );
}
