import "./Buttons.css";

export default function Buttons({ symbol, color, handleClick }) {
  return (
    <>
      <div onClick={() => handleClick(symbol)} className="buttons-wrapper" style={{ backgroundColor: color }}>
        {symbol}
      </div>
    </>
  );
}
