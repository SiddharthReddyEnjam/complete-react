import React from "react";
import { useEffect } from "react";
import Loading from "./Loading";
import Tours from "../components/Tours";
import TourDetail from "../components/TourDetail";

const url = "https://course-api.com/react-tours-project";

export default function Home() {
  const [loading, setLoading] = React.useState(true);
  const [tours, setTours] = React.useState([]);

  const fetchURL = async () => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (err) {
      setLoading(false);
      console.log(err);
    }
  };

  useEffect(() => {
    fetchURL();
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <Tours tours={tours} />
    </div>
  );
}
