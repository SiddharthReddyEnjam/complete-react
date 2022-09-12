import React from "react";
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";

export default function Main() {
  const [input, setInput] = React.useState(true);
  const [formData, setFormData] = React.useState({
    id: 0,
    item: "",
    isChecked: false,
  });
  const [newValues, setNewValues] = React.useState([]);

  function handleChange(event) {
    const { name, value, type, checked } = event.target;
    setFormData((prevData) => {
      return {
        ...prevData,
        id: newValues.length,
        [name]: value,
        // [name]: type === "checkbox" ? checked : value,
      };
    });
  }

  // function handleChange(event) {
  //   const { name, value, type, checked } = event.target;
  //   setFormData((prevData) => {
  //     return {
  //       ...prevData,
  //       id: newValues.length,
  //       [name]: value,
  //       [name]: type === "checkbox" ? checked : value,
  //     };
  //   });
  // }

  function handleChangeCheck(event, id) {
    event.preventDefault();
    newValues[id].isChecked = newValues[id].isChecked ? false : true;
    console.log(newValues[id].isChecked);
  }

  function handleKey(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      setNewValues((prevValues) => [...prevValues, formData]);
      event.target.value = "";
    }
  }

  const listItems = newValues.map((el) => {
    return (
      <div className="todo-items" key={el.id}>
        <input
          type="checkbox"
          id="isChecked"
          checked={el.isChecked}
          // onChange={handleChange}
          onChange={(event) => handleChangeCheck(event, el.id)}
          name="isChecked"
          value="on"
        />
        {/* <div
          onClick={(event) => handleChangeCheck(event, el.id)}
          className="check"
        >
          <button className={el.isChecked ? "" : "check-icon"}></button>
        </div> */}
        <li
          className={el.isChecked ? "strike" : ""}
          onClick={(event) => handleChangeCheck(event, el.id)}
        >
          {el.item}
        </li>
      </div>
    );
  });

  return (
    <div className="main">
      <form className="form">
        {input ? (
          <input
            type="text"
            placeholder="Add New"
            className="input"
            name="item"
            onChange={handleChange}
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
        {newValues.length === 0 ? (
          <div className="items-list">
            <p className="items-info">There are no items</p>
          </div>
        ) : (
          <ul className="todo-list">{listItems}</ul>
        )}
      </form>
      <div className="navigation">
        <div className="btn-search">
          <button className="buttons">
            <AiOutlinePlus className="plus" onClick={() => setInput(true)} />
            <AiOutlineSearch
              className="search"
              onClick={() => setInput(false)}
            />
          </button>
          <span className="left-items">{newValues.length} items left</span>
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
