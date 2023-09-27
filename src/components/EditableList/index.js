import React, { useState } from "react";
import { Container, Button, Form } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TextareaAutosize from "react-textarea-autosize";
import { v4 as uuidv4 } from 'uuid';

import "../../App/styles.css";

const initialItem = { // Can create one of these that can be used to initialize the array and for addItem?
  id: uuidv4(),
  value: "",
};

function EditableList() {
  const [items, setItems] = useState([initialItem]);

  function addItem(sourceItem, e) {
    console.log('e', e);
    console.log('sourceItem', sourceItem.id);
    // button add comes in with undefined sourceItem
    if (sourceItem === undefined) { sourceItem = items[items.length - 1];}
    console.log('sourceItem 2', sourceItem.id);

    e === undefined ? (e = "") : e.preventDefault();

    // e.preventDefault();
    const item = {
      id: uuidv4(),
      value: "",
    };
    const matchedId = (element) => element.id === sourceItem.id;
    console.log("index of matchedId", items.findIndex(matchedId))
    const nextIndex = items.findIndex(matchedId) + 1;
    console.log('nextIndex', nextIndex);
    console.log('items array', items)
    items.splice(nextIndex, 0, item);
    console.log('new items array', items);

    setItems([...items]);
    // setItems((oldList) => [...oldList, item]);
 
  }

  function deleteItem(id) {
    const newArray = items.filter((item) => item.id !== id);
    setItems(newArray);
  }

  function updateItem(item, newValue) {
    items[items.findIndex((x) => x.id === item.id)].value = newValue;
    setItems([...items]);
  }

  function createInput(item) {
    return (
      <TextareaAutosize
        className="editable-textarea"
        style={{ width: "100%" }}
        value={item.value}
        type="text"
        onChange={(e) => updateItem(item, e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && addItem(item, e)}
        autoFocus
      />
    );
  }

  return (
    <Container className="restrict-width">
      <h1 className="mx-auto text-center">An Editable List</h1>
      {/* Unordered list with items */}
      <TransitionGroup component="form" className="pb-5">
        {items.map((item) => (
          <CSSTransition key={item.id} timeout={400} classNames="item">
            <Form.Check
              key={`default-checkbox`}
              className="mb-3 w-100"
              type={"checkbox"}
              id={`{item.id}`}
              label={createInput(item)}
              onClick={(e) => deleteItem(item.id)}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <Button
        name="add an item"
        variant="outline-dark"
        className="btn btn-lg d-flex flex-row "
        onClick={(e) => addItem(e)}
      >
        <i className="bi bi-plus-circle"></i>
        <span className="px-3 text-nowrap">Add an item</span>
      </Button>
      <div className="bg-secondary py-2">
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
    </Container>
  );
}

export default EditableList;
