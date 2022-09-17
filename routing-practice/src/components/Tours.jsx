import React from "react";
import Tour from "./Tour";
import { Outlet, Link } from "react-router-dom";

export default function Tours({ tours }) {
  const tourElements = tours.map((tour) => {
    return (
      <Link to={`/tours/${tour.id}`} key={tour.id}>
        <Tour>
          <div className="div-tour-img">
            <img src={tour.image} alt="a tour" className="tour-img" />
          </div>
          <h1 className="tour-name">{tour.name}</h1>
        </Tour>
      </Link>
    );
  });

  return (
    <div>
      {tourElements}
      <Outlet />
    </div>
  );
}
