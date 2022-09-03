import React from "react";
import data from "./data";

import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  const [index, setIndex] = React.useState(0);
  const [peopleData, setPeopleData] = React.useState(data);

  function previousReview() {
    setIndex((prevIndex) => {
      return (prevIndex =
        prevIndex === 0 ? peopleData.length - 1 : prevIndex - 1);
    });
  }

  function nextReview() {
    setIndex((prevIndex) => {
      return (prevIndex =
        prevIndex === peopleData.length - 1 ? 0 : prevIndex + 1);
    });
  }

  function randomReview() {
    let random = Math.floor(Math.random() * peopleData.length);
    if (random === index && random !== peopleData.length - 1) {
      random = index + 1;
    }
    if (random === index && random === peopleData.length - 1) {
      random = 0;
    }
    setIndex(random);
  }

  const dataElements = (
    <Main
      key={peopleData[index].id}
      data={peopleData[index]}
      back={previousReview}
      forward={nextReview}
      surprise={randomReview}
    />
  );

  return (
    <div className="app">
      <Header />
      {dataElements}
    </div>
  );
}

export default App;
