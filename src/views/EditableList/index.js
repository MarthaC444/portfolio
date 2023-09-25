// TODO improvements - replace "brute force" replacement of items array with the package use-deep-compare-effect. Would trigger the render on an actual comparison of state instead of overwriting my whole array.
// TODO create undo last item list?
// TODO get rid of the originating input button and input and replace with the first editable list item, empty, also how to always have this new item available? hit enter inside an input creates new empty item, AND have a button to create new item....
// TODO do i need any kind of field validation?
// TODO react-dom.development.js:86 Warning: findDOMNode is deprecated in StrictMode. findDOMNode was passed an instance of Transition which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node
// why would hitting enter on an update entry delete the entry? cant replicate now... try to reconstruct
// TODO make text box responsive and always show all the text
import React, { useState } from "react";
import Header from "../../components/Header";
import StickyFooter from "../../components/StickyFooter";
import { Container, Form, Button } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ShortUniqueId from "short-unique-id";

import TextareaAutosize from "react-textarea-autosize";

import "../../App/styles.css";

const uid = new ShortUniqueId();

function EditableList() {
  const [newItem, setNewItem] = useState("");
  const [items, setItems] = useState([]);

  function addItem() {
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
        style={{width: "100%"}}
        value={item.value}
        type="text"
        onChange={(e) => updateItem(item, e.target.value)}
      />
    );
  }

  return (
    <div className="h-100">
      <Header />
      <Container className="restrict-width">
        <h1 className="mx-auto text-center">An Editable List</h1>
        {/* Input and button */}
        {/* pull out as component */}
        <div className="mx-auto text-center">
          <input
            type="text"
            placeholder="Add an item"
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
          />
          <Button variant="outline-dark" onClick={() => addItem()}>
            Add
          </Button>
        </div>
        {/* Unordered list with items */}
        <TransitionGroup component="form">
          {items.map((item) => (
            <CSSTransition key={item.id} timeout={400} classNames="item">
              <Form.Check
                key={`default-checkbox`}
                className="mb-3"
                type={"checkbox"}
                id={`{item.id}`}
                label={createInput(item)}
                onChange={(e) => deleteItem(item.id)} /* change to when is checked? instead of just an onchange? seems more specific to me */
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
        <ul className="list-group">
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
      </Container>
      <StickyFooter />
    </div>
  );
}

export default EditableList;
