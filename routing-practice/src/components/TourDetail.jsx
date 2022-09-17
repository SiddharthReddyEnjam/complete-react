import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const url = "https://course-api.com/react-tours-project";

export default function Tour() {
  let params = useParams();
  let [data, setData] = useState([]);

  const fetchURL = async () => {
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setData(tours);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchURL();
  }, []);

  function getTour(id) {
    return data.find((tour) => tour.id === id);
  }

  let tour = getTour(params.tourId);

  return <div>{tour && <img src={tour.image} alt="a tour place" />}</div>;
}
