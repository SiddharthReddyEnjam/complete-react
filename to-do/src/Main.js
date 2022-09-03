import React from "react";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";

export default function Main() {
  const [input, setInput] = React.useState(true);
  const [formData, setFormData] = React.useState({ item: "" });
  const [value, setValue] = React.useState([]);
  // console.log(formData);
  console.log(value);

  function handleKey(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      setFormData((prevData) => {
        return {
          ...prevData,
          [event.target.name]: event.target.value,
        };
      });
      setValue((prevValue) => [...prevValue, formData]);
    }
  }

  const listItems = value.map((el) => {
    return <li>{el.item}</li>;
  });

  // function valueToAdd(event) {
  //   event.preventDefault();
  //   setFormData((prev) => {
  //     return {
  //       ...prev,
  //       [event.target.name]: event.target.value,
  //     };
  //   });
  // }

  return (
    <div className="main">
      <form>
        {input ? (
          <input
            type="text"
            placeholder="Add New"
            className="input"
            // onChange={valueToAdd}
            name="item"
            onKeyDown={handleKey}
          />
        ) : (
          <input
            type="text"
            placeholder="Search"
            className="input"
            name="search"
            value=""
          />
        )}
        <ul>{listItems}</ul>
      </form>
      <div className="items-list">
        <p className="items-info">There are no items</p>
      </div>
      <div className="navigation">
        <div className="btn-search">
          <button className="buttons">
            <AiOutlinePlus className="plus" onClick={() => setInput(true)} />
            <AiOutlineSearch
              className="search"
              onClick={() => setInput(false)}
            />
          </button>
          <span className="left-items">items left</span>
        </div>
        <div className="btn-status">
          <button className="btn">All</button>
          <button className="btn">Active</button>
          <button className="btn">Completed</button>
        </div>
      </div>
    </div>
  );
}
