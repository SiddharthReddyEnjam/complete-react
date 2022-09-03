import React from "react";

const Tours = (props) => {
  const [readMore, setReadMore] = React.useState(false);

  const tours = props.wishList;

  const tour = tours.map((tour) => {
    return (
      <div className="tour">
        <div className="img">
          <img className="tour-img" src={tour.image} alt="place of a tour" />
        </div>
        <div className="content">
          <div className="title-price">
            <h1 className="tour-name">{tour.name}</h1>
            <p className="tour-price">${tour.price}</p>
          </div>
          <p className="tour-info">
            {readMore ? tour.info : tour.info.substring(0, 200)}
            <span className="readmore" onClick={() => setReadMore(!readMore)}>
              {readMore ? " showless" : " read more..."}
            </span>
          </p>
        </div>
        <div className="btns">
          <button className="btn item-btn">Book now</button>
        </div>
      </div>
    );
  });

  return <div className="tours">{tour}</div>;
};

export default Tours;
