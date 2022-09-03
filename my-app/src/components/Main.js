import React from "react";

export default function Main(props) {
  const duties = props.data.duties.map((duty) => {
    return <li>{duty}</li>;
  });
  return (
    <div className="main">
      <div className="main-content">
        <h1 className="main-title">{props.data.title}</h1>
        <p className="main-company">{props.data.company}</p>
        <p className="main-date">{props.data.dates}</p>
        <ul className="main-duties">{duties}</ul>
        <button className="more">More Info</button>
      </div>
    </div>
  );
}
