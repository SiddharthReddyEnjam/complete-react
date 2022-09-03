import React from "react";

export default function Main(props) {
  return (
    <div className="main">
      <div className="property">
        <span className="empty-circle"></span>
        <div className="main-img">
          <img src={props.data.image} alt="profile" className="profile" />
        </div>
      </div>
      <div className="main-title">
        <p className="name">{props.data.name}</p>
        <p className="role">{props.data.job}</p>
      </div>
      <p className="description">{props.data.text}</p>
      <div className="buttons">
        <button className="btn" onClick={props.back}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </button>
        <button className="btn" onClick={props.forward}>
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </button>
      </div>
      <div className="surprise">
        <button className="surprise-btn" onClick={props.surprise}>
          Surprise Me
        </button>
      </div>
    </div>
  );
}
