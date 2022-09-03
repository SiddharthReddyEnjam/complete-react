import React from "react";

export default function App() {
  const [countTemp, setCountTemp] = React.useState(10);
  const [countTempColor, setCountTempColor] = React.useState("#035aa6");

  function addCount() {
    if (countTemp > 17) {
      setCountTempColor("#ff5200");
    }
    if (countTemp < 30) {
      setCountTemp((count) => count + 1);
    }
  }
  function subtractCount() {
    if (countTemp < 17) {
      setCountTempColor("#035aa6");
    }
    if (countTemp > 0) {
      setCountTemp((count) => count - 1);
    }
  }

  return (
    <div className="container">
      <p
        className="temperature"
        style={{ backgroundColor: countTempColor, color: "white" }}
      >
        {countTemp}&#176;C
      </p>
      <div className="buttons">
        <button className="btn" onClick={addCount}>
          +
        </button>
        <button className="btn" onClick={subtractCount}>
          -
        </button>
      </div>
    </div>
  );
}
