import "./Input.css";

export default function Input({ text, result }) {
  return (
    <>
      <div className="input-wrapper">
        <div className="results">
          <h2>{result}</h2>
        </div>
        <div className="text">
          <h3>{text}</h3>
        </div>
      </div>
    </>
  );
}
