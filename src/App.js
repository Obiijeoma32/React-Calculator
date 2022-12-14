import Buttons from "./components/Buttons";
import Input from "./components/Input";
import { useState } from "react";

import * as math from "mathjs";
import "./App.css";

export default function App() {
  const [text, setText] = useState("");
  const [result, setResult] = useState("");
  const [calc, setCalc] = useState(false);

  function addToText(val) {
    setText((text) => [...text, val + ""].join(""));
    // console.log(val + "");
  }
  function inputReset() {
    setText("");
    setResult("");
    setCalc(false);
  }
  function calculateResult() {
    try {
      const input = text;

      setResult(math.evaluate(input));
    } catch (err) {
      setResult("Error");
    }
  }
  function calculateSquareRoot() {
    setResult(math.sqrt(math.evaluate(text)));
  }

  function cosine() {
    try {
      const baby = text;

      setResult(math.cos(math.evaluate(baby)));
    } catch (err) {
      setResult("Error");
    }
  }
  function backSpace() {
    setText(text.slice(0, text.length - 1));
    // setCalc(false);
  }
  function addMinus() {
    setCalc((val) => !val);

    // const t = text.toString().replace(/\s/g, "");
    // setText(t * -1, t * +1);
    // const removeSpaces = (text) => text.toString().replace(/\s/g, "");
    // const kj = text ? setText(text * -1) : setText(text * +1);
    // console.log(kj);
    // setResult({ ...result, text: result.text ? toLocaleString(removeSpaces(result.text)) * -1 : 0, result: result.text ? toLocaleString(removeSpaces(result.text)) * -1 : 0 });
    // setResult(math.evaluate(kj.replace(/\s/g, "")));
    // try {
    //   setResult(math.evaluate(text.join("")));
    // } catch (err) {
    //   setResult("Error");
    // }
    // const removeSpaces = (text) => text.toString().replace(/\s/g, "");
    // setCalc({
    //   ...calc,
    //   text: calc.text ? toLocaleString(removeSpaces(calc.text)) * -1 : 0,
    //   result: calc.text ? toLocaleString(removeSpaces(calc.result)) * -1 : 0,
    // });
  }

  return (
    <>
      <div className="App">
        <div className="wrapper">
          <Input result={result} text={!calc ? text : `-${text}`} />
          <div className="rows">
            <Buttons symbol={7} handleClick={addToText} />
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
            <Buttons symbol="???" handleClick={calculateSquareRoot} />
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
