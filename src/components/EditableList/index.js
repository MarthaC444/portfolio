import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import TextareaAutosize from "react-textarea-autosize";
import ShortUniqueId from "short-unique-id";

import "../../App/styles.css";

const uid = new ShortUniqueId();

const initialItem = {
  id: uid.rnd(),
  value: "",
};

function EditableList() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([initialItem]);

  function addItem(e) {
    e.preventDefault();
    const item = {
      id: uid.rnd(),
      value: newItem,
    };
    setItems((oldList) => [...oldList, item]); //TODO what is this code called? how does it add new item to the array?
    setNewItem("");
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
        onKeyDown={(e) => e.key === "Enter" && addItem(e)}
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
              onChange={(e) =>
                deleteItem(item.id)
              } /* change to when is checked? instead of just an onchange? seems more specific to me */
            />
          </CSSTransition>
        ))}
        <div className="  ">
          <Button
            name="add an item"
            variant="light"
            className="btn btn-lg d-flex flex-row border-0 bg-transparent"
            onClick={() => addItem()}
          >
            <i class="bi bi-plus-circle"></i>
            <span className="px-3 text-nowrap">Add an item</span>
          </Button>
          <Button
            name="add an item"
            variant="outline-dark"
            className="btn btn-lg d-flex flex-row "
            onClick={() => addItem()}
          >
            <i class="bi bi-plus-circle"></i>
            <span className="px-3 text-nowrap">Add an item</span>
          </Button>
        </div>
      </TransitionGroup>
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
