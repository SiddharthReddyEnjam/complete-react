import React, { useEffect } from "react";
import Loading from "./components/Loading";
import Tours from "./components/Tours";
import Wishlist from "./components/Wishlist";

const url = "https://course-api.com/react-tours-project";

export default function App() {
  const [loading, setLoading] = React.useState(true);
  const [tours, setTours] = React.useState([]);
  const [wishList, setWishList] = React.useState([]);

  const fetchTours = async () => {
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
    fetchTours();
  }, []);

  if (loading) {
    return <Loading />;
  }

  function removeTour(event, id) {
    event.stopPropagation();
    setTours((oldTours) => oldTours.filter((tour) => tour.id !== id));
  }

  function addWishList(event, id) {
    event.stopPropagation();
    const newList = tours.filter((tour) => tour.id === id);

    setWishList((oldList) => {
      const n = oldList.length;
      let checkWish = false;
      let i = 0;
      for (i = 0; i < n; i++) {
        if (oldList[i].id === newList[0].id) {
          checkWish = true;
        }
      }

      return checkWish ? [...oldList] : [...oldList, ...newList];
    });
  }

  return (
    <div className="app">
      <div className="header">
        <h1 className="header-title">
          {tours.length !== 0 ? "Our Tours" : "No Tours Available for today"}
        </h1>
        {tours.length === 0 && (
          <button className="refresh-btn" onClick={() => fetchTours()}>
            Refresh
          </button>
        )}
      </div>
      <Tours tours={tours} removeTour={removeTour} addList={addWishList} />
      <button className="wishlist" onClick="wishlistPage">
        wishList
      </button>
      <h1>Your Wish</h1>
      <Wishlist wishList={wishList} />
    </div>
  );
}
