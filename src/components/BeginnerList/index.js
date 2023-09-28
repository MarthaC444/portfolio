import React, { useState } from "react";
import "../../App/styles.css";

function BeginnerList() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
    const item = {
      id: Math.floor(Math.random() * 1000),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]);
    setNewItem("");
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  return (
    <div className="mx-auto" style={{ maxWidth: "400px" }}>
      <h1 className="text-center">Beginner List</h1>
      <div className="d-flex justify-content-center">
        <input
          type="text"
          placeholder="add an item"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button onClick={() => addItem()}>Add</button>
      </div>
      <div className="py-2">
        <ul className="list-group py-5">
          {items.map((item) => {
            return (
              <li className="list-group-item" key={item.id}>
                <button className="" onClick={() => deleteItem(item.id)}>
                  X
                </button>
                {item.value}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default BeginnerList;
