import React from "react";

const Main = (props) => {
  return (
    <div className="main">
      <div className="main-img">
        <img src={props.data.img} alt="food-item" className="food-img" />
      </div>
      <div className="food-data">
        <div className="title-price">
          <h1 className="food-title">{props.data.title}</h1>
          <p className="food-price">$ {props.data.price}</p>
        </div>
        <p className="food-desc">{props.data.desc}</p>
      </div>
    </div>
  );
};

export default Main;
