import React from "react";
import Main from "./components/Main";
import data from "./data";

const allCategories = ["all", ...new Set(data.map((item) => item.category))];

function App() {
  const [menu, setMenu] = React.useState(data);
  const [categories, setCategories] = React.useState(allCategories);

  const dataElements = menu.map((el) => {
    return <Main key={el.id} data={el} />;
  });

  const filterItems = (category) => {
    if (category === "all") {
      setMenu(data);
      return;
    }
    const newItems = data.filter((item) => item.category === category);
    setMenu(newItems);
  };

  const catElements = categories.map((el) => {
    return (
      <button
        type="button"
        className="menu-btn"
        key={el.id}
        onClick={() => filterItems(el)}
      >
        {el}
      </button>
    );
  });

  return (
    <div className="app">
      <div className="app-title">
        <h1 className="title">Our Menu</h1>
        <div className="underline"></div>
      </div>
      <div className="sections">{catElements}</div>
      <div className="menu">{dataElements}</div>
    </div>
  );
}

export default App;
